import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "silk-sarees",
    name: "Silk Sarees",
    href: "/shop?category=silk",
  },
  {
    id: "cotton-sarees",
    name: "Cotton Sarees",
    href: "/shop?category=cotton",
  },
  {
    id: "festive-collection",
    name: "Festive Collection",
    href: "/shop?category=festive",
  },
  {
    id: "bridal-elegance",
    name: "Bridal Elegance",
    href: "/shop?category=bridal",
  },
];

export function CategorySections() {
  const images = PlaceHolderImages;

  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Our Collections
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground md:text-lg">
            Explore our curated selections of handcrafted Maheshwari sarees.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => {
            const image = images.find((img) => img.id === category.id);
            return (
              <Link key={category.id} href={category.href} className="group">
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-none bg-transparent shadow-lg">
                  <CardContent className="p-0 relative">
                    <div className="aspect-w-3 aspect-h-4">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-headline font-semibold text-white">
                        {category.name}
                      </h3>
                      <div className="flex items-center text-sm font-semibold text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
