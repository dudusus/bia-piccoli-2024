import { useCallback, useEffect, useRef, useState } from "react";
import { CANDIDATE } from "@/lib/campaign";
import { Reveal } from "./Reveal";

type Step = "start" | "camera" | "editor" | "ready";

type Transform = { scale: number; x: number; y: number; rotation: number };

const INITIAL: Transform = { scale: 1, x: 0, y: 0, rotation: 0 };

/** Desenha a peça oficial de apoio (quadrada) no contexto informado. */
function drawComposition(
  ctx: CanvasRenderingContext2D,
  size: number,
  img: HTMLImageElement | null,
  t: Transform,
) {
  const u = size / 1080; // unidade de escala relativa ao master 1080x1080
  ctx.clearRect(0, 0, size, size);

  // Fundo azul-marinho com brilho superior
  ctx.fillStyle = "#071b4b";
  ctx.fillRect(0, 0, size, size);
  const glow = ctx.createRadialGradient(size * 0.5, size * 0.32, 0, size * 0.5, size * 0.32, size * 0.75);
  glow.addColorStop(0, "rgba(23,105,245,0.45)");
  glow.addColorStop(1, "rgba(7,27,75,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, size, size);

  // Moldura circular com a foto
  const cx = size / 2;
  const cy = 430 * u;
  const r = 300 * u;

  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.fillStyle = "#0b2a6b";
  ctx.fill();

  if (img && img.width && img.height) {
    const cover = Math.max((r * 2) / img.width, (r * 2) / img.height);
    ctx.translate(cx + t.x * size, cy + t.y * size);
    ctx.rotate((t.rotation * Math.PI) / 180);
    const s = cover * t.scale;
    ctx.drawImage(img, (-img.width * s) / 2, (-img.height * s) / 2, img.width * s, img.height * s);
  }
  ctx.restore();

  // Anel da moldura
  ctx.beginPath();
  ctx.arc(cx, cy, r + 9 * u, 0, Math.PI * 2);
  ctx.lineWidth = 14 * u;
  ctx.strokeStyle = "#2f80ff";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, r + 26 * u, 0, Math.PI * 2);
  ctx.lineWidth = 3 * u;
  ctx.strokeStyle = "rgba(255,255,255,0.35)";
  ctx.stroke();

  ctx.textAlign = "center";

  // Selo "EU APOIO!"
  const badgeW = 380 * u;
  const badgeH = 92 * u;
  const badgeX = cx - badgeW / 2;
  const badgeY = 62 * u;
  ctx.fillStyle = "#1769f5";
  const rad = badgeH / 2;
  ctx.beginPath();
  ctx.moveTo(badgeX + rad, badgeY);
  ctx.lineTo(badgeX + badgeW - rad, badgeY);
  ctx.arc(badgeX + badgeW - rad, badgeY + rad, rad, -Math.PI / 2, Math.PI / 2);
  ctx.lineTo(badgeX + rad, badgeY + badgeH);
  ctx.arc(badgeX + rad, badgeY + rad, rad, Math.PI / 2, -Math.PI / 2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.font = `${70 * u}px "Bebas Neue", Impact, sans-serif`;
  ctx.fillText("EU APOIO!", cx, badgeY + 68 * u);

  // Assinatura oficial
  ctx.fillStyle = "#ffffff";
  ctx.font = `${104 * u}px "Bebas Neue", Impact, sans-serif`;
  ctx.fillText(CANDIDATE.name, cx, 830 * u);

  ctx.fillStyle = "#2f80ff";
  ctx.font = `${168 * u}px "Bebas Neue", Impact, sans-serif`;
  ctx.fillText(CANDIDATE.number, cx, 972 * u);

  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.font = `700 ${26 * u}px Montserrat, sans-serif`;
  ctx.fillText(CANDIDATE.role, cx, 1012 * u);

  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.font = `700 ${22 * u}px Montserrat, sans-serif`;
  ctx.fillText("PP — PARTIDO PROGRESSISTA", cx, 1048 * u);

  // Traços laterais
  ctx.fillStyle = "#1769f5";
  ctx.fillRect(90 * u, 862 * u, 150 * u, 6 * u);
  ctx.fillRect(size - 240 * u, 862 * u, 150 * u, 6 * u);
}

export function SupportPhoto() {
  const [step, setStep] = useState<Step>("start");
  const [transform, setTransform] = useState<Transform>(INITIAL);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const previewRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const dragRef = useRef<{ x: number; y: number } | null>(null);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => () => stopCamera(), [stopCamera]);

  // Redesenha o preview sempre que a foto ou os ajustes mudam
  useEffect(() => {
    if (step !== "editor") return;
    const canvas = previewRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let cancelled = false;
    const paint = () => {
      if (!cancelled) drawComposition(ctx, canvas.width, image, transform);
    };
    paint();
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(paint).catch(() => undefined);
    }
    return () => {
      cancelled = true;
    };
  }, [step, image, transform]);

  const loadImageFromSrc = (src: string) => {
    const img = new Image();
    img.onload = () => {
      setImage(img);
      setTransform(INITIAL);
      setStep("editor");
    };
    img.onerror = () => setError("Não consegui abrir essa imagem. Tente outra.");
    img.src = src;
  };

  const openCamera = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1080 }, height: { ideal: 1080 } },
        audio: false,
      });
      streamRef.current = stream;
      setStep("camera");
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          void videoRef.current.play();
        }
      });
    } catch {
      setError(
        "Não foi possível acessar a câmera. Autorize o uso da câmera ou escolha uma foto da galeria.",
      );
    }
  };

  const takePhoto = () => {
    const video = videoRef.current;
    if (!video) return;
    const side = Math.min(video.videoWidth, video.videoHeight) || 720;
    const tmp = document.createElement("canvas");
    tmp.width = side;
    tmp.height = side;
    const ctx = tmp.getContext("2d");
    if (!ctx) return;
    ctx.translate(side, 0);
    ctx.scale(-1, 1); // espelha como o usuário se vê
    ctx.drawImage(
      video,
      (video.videoWidth - side) / 2,
      (video.videoHeight - side) / 2,
      side,
      side,
      0,
      0,
      side,
      side,
    );
    stopCamera();
    loadImageFromSrc(tmp.toDataURL("image/png"));
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    const reader = new FileReader();
    reader.onload = () => loadImageFromSrc(String(reader.result));
    reader.onerror = () => setError("Não consegui ler o arquivo.");
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const generate = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawComposition(ctx, 1080, image, transform);
    setResultUrl(canvas.toDataURL("image/png"));
    setStep("ready");
  };

  const dataUrlToFile = async () => {
    if (!resultUrl) return null;
    const blob = await (await fetch(resultUrl)).blob();
    return new File([blob], "eu-apoio-bia-piccoli-11311.png", { type: "image/png" });
  };

  const download = () => {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = "eu-apoio-bia-piccoli-11311.png";
    a.click();
  };

  const shareNative = async () => {
    const file = await dataUrlToFile();
    const text = `Eu apoio ${CANDIDATE.name} — ${CANDIDATE.role} ${CANDIDATE.number}. 💙`;
    if (file && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], text, title: `${CANDIDATE.name} ${CANDIDATE.number}` });
        return;
      } catch {
        /* cancelado */
      }
    }
    download();
    setError("Salve sua foto e publique nas suas redes sociais. 💙");
  };

  const restart = () => {
    stopCamera();
    setImage(null);
    setResultUrl(null);
    setTransform(INITIAL);
    setError(null);
    setStep("start");
  };

  // Arrastar a foto dentro da moldura
  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!dragRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - dragRef.current.x) / rect.width;
    const dy = (e.clientY - dragRef.current.y) / rect.height;
    dragRef.current = { x: e.clientX, y: e.clientY };
    setTransform((t) => ({ ...t, x: t.x + dx, y: t.y + dy }));
  };
  const onPointerUp = () => {
    dragRef.current = null;
  };

  return (
    <section id="foto-de-apoio" className="bg-white" aria-labelledby="foto-title">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <Reveal className="text-center">
          <h2 id="foto-title" className="font-display text-5xl leading-none text-navy sm:text-6xl">
            📸 FAÇA SUA FOTO DE APOIO
          </h2>
          <p className="mt-4 font-display text-3xl text-blue">Mostre seu apoio! 💙</p>
          <p className="mx-auto mt-2 max-w-lg font-soft text-sm leading-relaxed text-muted-foreground">
            Faça sua foto de apoio e compartilhe nas suas redes sociais. A imagem é criada no seu
            próprio celular — nada é enviado ou armazenado.
          </p>
        </Reveal>

        <div className="mt-10 rounded-3xl border border-border bg-cloud p-5 sm:p-8">
          {error && (
            <p
              role="status"
              className="mb-5 rounded-xl bg-navy px-4 py-3 text-center font-soft text-sm text-white"
            >
              {error}
            </p>
          )}

          {step === "start" && (
            <div className="grid gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={openCamera}
                className="rounded-2xl bg-navy px-6 py-8 text-lg font-extrabold tracking-wide text-white transition-transform hover:scale-[1.02]"
              >
                📷 USAR CÂMERA
              </button>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="rounded-2xl bg-blue-vivid px-6 py-8 text-lg font-extrabold tracking-wide text-white transition-transform hover:scale-[1.02]"
              >
                🖼️ ESCOLHER DA GALERIA
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                className="sr-only"
                onChange={onFile}
                aria-label="Escolher foto da galeria"
              />
            </div>
          )}

          {step === "camera" && (
            <div className="flex flex-col items-center gap-5">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-navy">
                <video
                  ref={videoRef}
                  playsInline
                  muted
                  className="h-full w-full scale-x-[-1] object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-6 rounded-full border-2 border-dashed border-white/70"
                  aria-hidden="true"
                />
              </div>
              <p className="font-soft text-sm text-muted-foreground">Centralize seu rosto 👤</p>
              <div className="flex w-full max-w-sm flex-col gap-3">
                <button
                  type="button"
                  onClick={takePhoto}
                  className="rounded-full bg-blue-vivid px-6 py-4 text-base font-extrabold tracking-wide text-white"
                >
                  📸 TIRAR FOTO
                </button>
                <button
                  type="button"
                  onClick={restart}
                  className="rounded-full border border-navy/20 px-6 py-3 text-sm font-bold text-navy"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          {step === "editor" && (
            <div className="flex flex-col items-center gap-5">
              <canvas
                ref={previewRef}
                width={540}
                height={540}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                className="aspect-square w-full max-w-sm cursor-move touch-none rounded-2xl shadow-xl shadow-navy/20"
                aria-label="Pré-visualização da sua foto de apoio. Arraste para posicionar."
              />
              <div className="w-full max-w-sm space-y-4">
                <label className="block text-xs font-bold tracking-widest text-navy">
                  🔍 ZOOM
                  <input
                    type="range"
                    min={0.6}
                    max={3}
                    step={0.01}
                    value={transform.scale}
                    onChange={(e) =>
                      setTransform((t) => ({ ...t, scale: Number(e.target.value) }))
                    }
                    className="mt-2 w-full accent-[var(--blue-vivid)]"
                  />
                </label>
                <label className="block text-xs font-bold tracking-widest text-navy">
                  🔄 GIRAR
                  <input
                    type="range"
                    min={-180}
                    max={180}
                    step={1}
                    value={transform.rotation}
                    onChange={(e) =>
                      setTransform((t) => ({ ...t, rotation: Number(e.target.value) }))
                    }
                    className="mt-2 w-full accent-[var(--blue-vivid)]"
                  />
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="text-xs font-bold tracking-widest text-navy">
                    ↔️ HORIZONTAL
                    <input
                      type="range"
                      min={-0.4}
                      max={0.4}
                      step={0.005}
                      value={transform.x}
                      onChange={(e) => setTransform((t) => ({ ...t, x: Number(e.target.value) }))}
                      className="mt-2 w-full accent-[var(--blue-vivid)]"
                    />
                  </label>
                  <label className="text-xs font-bold tracking-widest text-navy">
                    ↕️ VERTICAL
                    <input
                      type="range"
                      min={-0.4}
                      max={0.4}
                      step={0.005}
                      value={transform.y}
                      onChange={(e) => setTransform((t) => ({ ...t, y: Number(e.target.value) }))}
                      className="mt-2 w-full accent-[var(--blue-vivid)]"
                    />
                  </label>
                </div>
                <button
                  type="button"
                  onClick={generate}
                  className="w-full rounded-full bg-blue-vivid px-6 py-4 text-base font-extrabold tracking-wide text-white"
                >
                  💙 GERAR MINHA FOTO
                </button>
                <button
                  type="button"
                  onClick={restart}
                  className="w-full rounded-full border border-navy/20 px-6 py-3 text-sm font-bold text-navy"
                >
                  Escolher outra foto
                </button>
              </div>
            </div>
          )}

          {step === "ready" && resultUrl && (
            <div className="flex flex-col items-center gap-5">
              <p className="font-display text-4xl text-navy">💙 SUA FOTO ESTÁ PRONTA!</p>
              <img
                src={resultUrl}
                alt="Sua foto de apoio a Bia Piccoli, 1080 por 1080 pixels"
                className="w-full max-w-sm rounded-2xl shadow-xl shadow-navy/20"
              />
              <div className="grid w-full max-w-sm gap-3">
                <button
                  type="button"
                  onClick={shareNative}
                  className="rounded-full bg-blue-vivid px-6 py-4 text-base font-extrabold tracking-wide text-white"
                >
                  📲 COMPARTILHAR
                </button>
                <button
                  type="button"
                  onClick={download}
                  className="rounded-full bg-navy px-6 py-4 text-base font-extrabold tracking-wide text-white"
                >
                  📥 SALVAR IMAGEM
                </button>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={shareNative}
                    className="rounded-xl border border-navy/20 px-3 py-3 text-xs font-bold text-navy"
                  >
                    💬 WHATSAPP
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      download();
                      window.open("https://www.instagram.com/", "_blank", "noopener");
                    }}
                    className="rounded-xl border border-navy/20 px-3 py-3 text-xs font-bold text-navy"
                  >
                    📸 INSTAGRAM
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      download();
                      window.open("https://www.facebook.com/", "_blank", "noopener");
                    }}
                    className="rounded-xl border border-navy/20 px-3 py-3 text-xs font-bold text-navy"
                  >
                    🔵 FACEBOOK
                  </button>
                </div>
                <p className="text-center font-soft text-xs text-muted-foreground">
                  Salve sua foto e publique nas suas redes sociais. 💙
                </p>
                <button
                  type="button"
                  onClick={restart}
                  className="rounded-full border border-navy/20 px-6 py-3 text-sm font-bold text-navy"
                >
                  Fazer outra foto
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
