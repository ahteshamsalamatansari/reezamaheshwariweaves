import Image from "next/image";
import { WeaveIcon } from "@/components/icons";

export default function AboutPage() {
  const artisans = [
    {
      id: 1,
      name: "Radha Bai",
      role: "Master Weaver",
      imageUrl: "https://picsum.photos/seed/artisan1/400/500",
      imageHint: "artisan portrait",
    },
    {
      id: 2,
      name: "Shankar Lal",
      role: "Dyeing Expert",
      imageUrl: "https://picsum.photos/seed/artisan2/400/500",
      imageHint: "artisan portrait",
    },
    {
      id: 3,
      name: "Meena Devi",
      role: "Zari Specialist",
      imageUrl: "https://picsum.photos/seed/artisan3/400/500",
      imageHint: "artisan portrait",
    },
  ];

  return (
    <main className="flex-1">
      <section className="py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">
            The Legacy of Maheshwari Weaves
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl">
            A tradition of royal elegance, handcrafted for the modern woman.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold text-primary">
              A Heritage Patronized by Royalty
            </h2>
            <p className="text-muted-foreground">
              Maheshwar, a historic town in Madhya Pradesh, is home to a
              centuries-old handloom tradition famously patronized by the great
              Maratha queen, Ahilyabai Holkar. She invited weaver communities
              from across India to settle in Maheshwar and design exclusive
              sarees for the royal household.
            </p>
            <p className="text-muted-foreground">
              Today, Maheshwari sarees are renowned for their distinctive
              features: a lightweight body, a glossy finish, and unique 'zari'
              borders. The motifs are often inspired by the intricate carvings
              on the town's temples and the gentle flow of the Narmada river,
              creating a fabric that is both sacred and stylish.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/maheshwar/800/600"
              alt="Maheshwar weavers at work"
              data-ai-hint="weavers working"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-24 bg-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-primary">
              Meet Our Artisans
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Our craft supports generations of artisans, preserving culture while adapting to modern elegance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <div key={artisan.id} className="text-center">
                <div className="relative aspect-[4/5] w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg mb-4">
                  <Image
                    src={artisan.imageUrl}
                    alt={`Portrait of ${artisan.name}`}
                    data-ai-hint={artisan.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-headline text-xl font-semibold">{artisan.name}</h3>
                <p className="text-muted-foreground">{artisan.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
