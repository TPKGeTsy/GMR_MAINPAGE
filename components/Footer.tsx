import Image from "next/image";
import Link from "next/link";
import { categories, contact } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-36 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.5fr_1fr] text-sm font-light">
        <div className="space-y-6">
          <Image src="/images/logo-gmr-white.png" alt="Group Maker Robotic" width={326} height={91} className="h-12 w-auto" />
          <p className="leading-relaxed">
            {contact.company}
            <br />
            {contact.address[0]}
            <br />
            {contact.address[1]}
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-5">Product</h3>
          <ul className="space-y-3">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="hover:text-brand transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-5">Contact Us</h3>
          <ul className="space-y-3">
            <li>Thailand-Bangkok | {contact.phone}</li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-brand transition-colors">
                {contact.email}
              </a>
            </li>
            <li>
              {contact.address[0]}
              <br />
              {contact.address[1]}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-5">Social</h3>
          <p>Facebook : {contact.facebook}</p>
        </div>
      </div>
    </footer>
  );
}
