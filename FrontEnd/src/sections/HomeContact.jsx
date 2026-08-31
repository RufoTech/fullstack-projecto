import { Mail, MessageCircleMore, Phone, Send } from "lucide-react";
import data from "@/data/data";

const { contact } = data;
const icons = [Phone, MessageCircleMore, Mail, Send];

export default function HomeContact() {
  return (
    <section aria-labelledby="home-contact-title">
      <h2
        id="home-contact-title"
        className="m-0 text-[#20172A] font-bold text-[20px] leading-[28px] lg:text-[36px] lg:leading-[48px]"
      >
        {contact.title}
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {contact.cards.map((item, index) => {
          const Icon = icons[index];
          const isExternal = item.href.startsWith("http");

          return (
            <a
              key={item.label}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex min-h-[120px] items-start gap-3 rounded-[20px] bg-white p-5 text-inherit no-underline transition-colors duration-300 hover:bg-[#E3E9EF]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#F1F6F9] text-[#6537A6] transition-colors duration-300 group-hover:bg-[#6537A6] group-hover:text-white">
                <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
              </span>
              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-[14px] leading-[20px] font-medium text-[#5E6875]">{item.label}</span>
                <span className="break-words text-[16px] leading-[24px] font-semibold text-[#20172A]">{item.value}</span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
