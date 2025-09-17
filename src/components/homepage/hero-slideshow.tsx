import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const heroSlides = [
  {
    id: "hero1",
    title: "The Art of Maheshwar",
    subtitle: "Timeless Elegance, Woven by Hand",
    buttonText: "Explore Collection",
    buttonLink: "/shop",
  },
  {
    id: "hero2",
    title: "Legacy in Every Thread",
    subtitle: "Supporting Generations of Master Artisans",
    buttonText: "Our Story",
    buttonLink: "/about",
  },
  {
    id: "hero3",
    title: "Pure Silk & Golden Zari",
    subtitle: "Experience Unmatched Grace and Luxury",
    buttonText: "Shop Silk Sarees",
    buttonLink: "/shop?category=silk",
  },
];

export function HeroSlideshow() {
  const images = PlaceHolderImages;

  return (
    <section className="w-full">
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        data-testid="hero-carousel"
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => {
            const image = images.find((img) => img.id === slide.id);
            return (
              <CarouselItem key={slide.id}>
                <div className="relative h-[60vh] md:h-[80vh] w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-8 md:p-12">
                    <div className="max-w-3xl space-y-4 animate-fade-in">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-shadow">
                        {slide.subtitle}
                      </p>
                      <Link href={slide.buttonLink}>
                        <Button
                          size="lg"
                          className={cn(
                            "bg-accent text-accent-foreground hover:bg-accent/90",
                            "font-bold text-lg py-6 px-8 rounded-full transition-transform duration-300 hover:scale-105"
                          )}
                        >
                          {slide.buttonText}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 border-white/50 hover:bg-black/50" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 border-white/50 hover:bg-black/50" />
      </Carousel>
    </section>
  );
}
