import { motion } from "framer-motion";
import { Sparkles, Wrench } from "lucide-react";

interface OrbitalHeaterHeroProps {
  imageSrc: string;
}

export const brandList = [
  "Rinnai",
  "Rheem",
  "Komeco",
  "Lorenzetti",
  "Rowa",
  "Aquakent",
  "Inova",
];

export function OrbitalHeaterHero({ imageSrc }: OrbitalHeaterHeroProps) {
  return (
    <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center py-4 perspective-1000">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-amber-500/10 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* 3D Preserved Container */}
      <div className="relative w-full aspect-square max-w-[520px] flex items-center justify-center preserve-3d">
        
        {/* Subtle Outer Glowing Orbital Track for Brands */}
        <motion.div
          className="absolute inset-0 sm:-inset-4 rounded-full border border-primary/20 pointer-events-none"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(70deg) rotateY(-10deg)" }}
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {/* Delicate particle accents along ring */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/70 shadow-sm shadow-primary opacity-70" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400/70 shadow-sm" />
        </motion.div>

        {/* Secondary Inner Subtle Dashed Ring */}
        <motion.div
          className="absolute inset-10 sm:inset-6 rounded-full border border-dashed border-primary/15 pointer-events-none"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(64deg) rotateY(14deg)" }}
          animate={{ rotateZ: [360, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Core Subtle Aura */}
        <motion.div
          className="absolute inset-16 sm:inset-12 rounded-full border border-primary/25 pointer-events-none opacity-50"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(75deg) rotateY(-4deg)" }}
          animate={{ rotateZ: [0, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* 🌟 Subtle Orbiting Brand Badges (Minimalist & Elegant) */}
        <div className="absolute inset-0 pointer-events-none z-30">
          {brandList.map((brand, i) => {
            const angle = (i * 360) / brandList.length;
            const radius = 175; // Subtle radius

            return (
              <motion.div
                key={brand}
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 34,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div
                  className="pointer-events-auto transition-transform hover:scale-110 opacity-85 hover:opacity-100"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-1.5 rounded-full border border-primary/25 bg-background/50 px-3 py-1 text-[11px] font-medium text-foreground/90 shadow-sm backdrop-blur-md transition-colors hover:border-primary/50 hover:bg-card/70"
                  >
                    {/* Subtle Red Dot Indicator */}
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/90 shadow-sm" />
                    <span className="tracking-tight">{brand}</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Central Water Heater Floating Product Image */}
        <motion.div
          className="relative z-20 w-full max-w-[400px] flex justify-center items-center"
          animate={{
            y: [-8, 8, -8],
            rotateZ: [-0.5, 0.5, -0.5],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Main heater graphic */}
          <img
            src={imageSrc}
            alt="Aquecedores a gás das melhores marcas em Curitiba"
            width={800}
            height={800}
            className="w-full object-contain filter drop-shadow-[0_15px_25px_rgba(225,29,72,0.28)] select-none"
          />

          {/* Core Energy Sparkle Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Sparkles className="h-8 w-8 text-primary opacity-40 animate-ping" />
          </div>
        </motion.div>

        {/* Floating Glassmorphic Info Badge - Refined & Subtle */}
        <motion.div
          className="absolute -bottom-1 right-2 sm:right-6 z-40 max-w-[185px] rounded-lg border border-primary/20 bg-background/60 p-2.5 shadow-lg backdrop-blur-md"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-foreground">
            <Wrench className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>Marcas Autorizadas</span>
          </div>
          <p className="mt-1 text-[10px] leading-snug text-muted-foreground/90">
            Peças originais, instalação certificada e manutenção em Curitiba.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
