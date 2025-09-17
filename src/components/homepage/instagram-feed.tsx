import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const instaPosts = [
  { id: "insta1" },
  { id: "insta2" },
  { id: "insta3" },
  { id: "insta4" },
  { id: "insta5" },
  { id: "insta6" },
];

export function InstagramFeed() {
  const images = PlaceHolderImages;

  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Find Your Inspiration
          </h2>
          <Link href="#" className="mt-2 text-muted-foreground md:text-lg hover:text-accent">
            Follow us @reezaweaves
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {instaPosts.map((post) => {
            const image = images.find((img) => img.id === post.id);
            return (
              <Link key={post.id} href="#" className="group relative block">
                <div className="aspect-square overflow-hidden">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Button variant="outline" asChild>
                <Link href="#">
                    View More on Instagram <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
