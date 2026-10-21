import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/site";

export default function ContactPage() {
  const items = [
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Address", value: contact.address.join(", "), href: "" },
  ];
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
      <h1 className="font-bold text-4xl lg:text-6xl text-center">
        Contact <span className="text-brand-alt">Us</span>
      </h1>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {items.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="bg-ink-3 rounded-[10px] p-6">
            <Icon className="w-6 h-6 text-brand" />
            <p className="mt-3 text-sm text-white/60">{label}</p>
            {href ? (
              <a href={href} className="font-medium break-words hover:text-brand">
                {value}
              </a>
            ) : (
              <p className="font-medium">{value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
