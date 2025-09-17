import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { WeaveIcon } from "@/components/icons";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t">
      <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <WeaveIcon className="h-8 w-8 text-primary" />
            <span className="font-bold font-headline text-xl text-primary">
              Reeza Weaves
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Elegance, heritage, and artistry, woven into every thread.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold font-headline">Shop</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/shop?category=silk" className="text-sm text-muted-foreground hover:text-primary">
                Silk Sarees
              </Link>
            </li>
            <li>
              <Link href="/shop?category=cotton" className="text-sm text-muted-foreground hover:text-primary">
                Cotton Sarees
              </Link>
            </li>
            <li>
              <Link href="/shop?category=festive" className="text-sm text-muted-foreground hover:text-primary">
                Festive Collection
              </Link>
            </li>
            <li>
              <Link href="/shop?category=bridal" className="text-sm text-muted-foreground hover:text-primary">
                Bridal Elegance
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold font-headline">Our Company</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-2 space-y-2">
          <h4 className="font-semibold font-headline">Join Our Newsletter</h4>
          <p className="text-sm text-muted-foreground">
            Receive updates on new arrivals and special offers.
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" className="bg-background" />
            <Button type="submit" variant="secondary" className="shrink-0">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex items-center justify-between py-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Reeza Maheshwari Weaves. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
