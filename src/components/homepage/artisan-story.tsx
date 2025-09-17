import { generateHomepageHeritageNote } from '@/ai/flows/homepage-heritage-note';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';

const articleSnippets = [
  'Maheshwar, a town in Madhya Pradesh, is home to centuries-old handloom traditions patronized by Queen Ahilyabai Holkar. Its sarees are known for their lightweight fabric, unique zari borders, and motifs inspired by temples and rivers.',
  'The craft of Maheshwari weaving supports generations of artisans, preserving a rich cultural heritage while adapting to modern elegance. Each saree tells a story of dedication and artistry.',
  "Reeza Maheshwari Weaves is committed to sustaining this ancient art form, ensuring that every purchase empowers the local artisan community and keeps the looms humming with life.",
  "From the delicate dance of the shuttle to the intricate patterns of the border, a Maheshwari saree is more than just clothing—it's a piece of history, woven with love and precision.",
];

async function GeneratedArtisanStory() {
  try {
    const { heritageNote } = await generateHomepageHeritageNote({
      articleSnippets,
    });
    return (
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed italic">
        &ldquo;{heritageNote}&rdquo;
      </p>
    );
  } catch (error) {
    console.error('Error generating heritage note:', error);
    // Fallback to a default snippet if the AI fails
    return (
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed italic">
        &ldquo;{articleSnippets[1]}&rdquo;
      </p>
    );
  }
}

function ArtisanStoryFallback() {
  return (
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed italic">
        &ldquo;{articleSnippets[1]}&rdquo;
      </p>
  )
}

export function ArtisanStory() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">
              Crafted in Maheshwar
            </h2>
            <Suspense fallback={<ArtisanStoryFallback />}>
              <GeneratedArtisanStory />
            </Suspense>
          </div>
          <Link href="/about">
            <Button
              className={cn(
                'bg-accent text-accent-foreground hover:bg-accent/90',
                'font-bold py-5 px-6 rounded-full transition-transform duration-300 hover:scale-105'
              )}
            >
              Our Heritage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
