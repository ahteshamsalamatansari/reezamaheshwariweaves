import { ArtisanStory } from '@/components/homepage/artisan-story';
import { CategorySections } from '@/components/homepage/category-sections';
import { HeroSlideshow } from '@/components/homepage/hero-slideshow';
import { InstagramFeed } from '@/components/homepage/instagram-feed';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSlideshow />
      <CategorySections />
      <ArtisanStory />
      <InstagramFeed />
    </main>
  );
}
