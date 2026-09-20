import DottedBackground from "@/components/originkit/ui/dotmatrix-variant-5";
import InteractiveBlobatar from "@/components/web/InteractiveBlobatar";
import HeroHeading from "@/components/web/HeroHeading";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      {/* 1. Dotted Matrix WebGL Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-7">
        <DottedBackground
          frequency={2}
          speed={1.2}
          colors={["#EFCDB9", "#EFCDB9", "#EFCDB9"]}
          cellSize={16}
          gamma={12}
          paletteBias={6}
          useGlyphAtlas={true}
          characters="10010101<>/{}"
        />
      </div>

      {/* Hero Content  */}
      <div className="absolute inset-0 z-50 w-full h-full">
        <div className="w-full h-full mx-auto max-w-350 flex flex-col justify-end px-10 py-20">
          <div className="mb-4">
            <InteractiveBlobatar
              name="devs"
              hue={35}
              size={100}
              color="#F94500"
            />
          </div>
          <HeroHeading />
          <p className="text-foreground">Developer focused on web applications, SaaS, AI-assisted development, and backend engineering.</p>
        </div>
      </div>
    </section>
  );
}
