"use client";
import React, { useState } from "react";
import data from "@/data/data";

const { brand, footer } = data;
const footerMenus = footer.menus;
const programMenus = footer.programMenus;

function AccordionItem({ title, links, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-none bg-transparent">
      <h2>
        <button
          className="border-none shadow-none bg-transparent text-[#20172A] font-semibold text-[16px] leading-[24px] p-0 w-full flex justify-between items-center cursor-pointer"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <h4 className="m-0 font-semibold text-[16px] leading-[24px]">{title}</h4>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5E6875"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </h2>
      {open && (
        <div className="p-0">
          <ul className="flex flex-col gap-3 mt-[10px] list-none p-0 m-0">
            {links.map((l, i) => (
              <li key={i}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] text-[#5E6875] leading-[24px] no-underline hover:text-[#20172A] hover:underline transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="pt-2 px-0 pb-0 mt-[120px]">
      <div className="bg-white rounded-[20px]">
        {/* Section 1: Logo and Social Links */}
        <div className="p-8 border-b border-[#F1F6F9]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a href="#" className="no-underline">
              <span
                className="text-[#20172A] font-[family-name:var(--font-geist-mono)] text-[20px] font-bold tracking-[-1.5px]"
                aria-label={brand.ariaLabel}
              >
                {brand.prefix}<span className="text-[#6537A6]">{brand.accent}</span>{brand.suffix}
              </span>
            </a>
            <ul className="flex gap-3 list-none p-0 m-0">
              <li>
                <a
                  className="flex items-center justify-center p-[10px] bg-[#F1F6F9] rounded-full transition-all duration-300 no-underline hover:bg-[#6537A6] group"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={footer.socials[0].href}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M18.3333 9.99984C18.3333 5.39984 14.6 1.6665 10 1.6665C5.40001 1.6665 1.66667 5.39984 1.66667 9.99984C1.66667 14.0332 4.53334 17.3915 8.33334 18.1665V12.4998H6.66667V9.99984H8.33334V7.9165C8.33334 6.30817 9.64167 4.99984 11.25 4.99984H13.3333V7.49984H11.6667C11.2083 7.49984 10.8333 7.87484 10.8333 8.33317V9.99984H13.3333V12.4998H10.8333V18.2915C15.0417 17.8748 18.3333 14.3248 18.3333 9.99984Z"
                      fill="#5E6875"
                      className="group-hover:fill-white transition-colors duration-300"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center p-[10px] bg-[#F1F6F9] rounded-full transition-all duration-300 no-underline hover:bg-[#6537A6] group"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={footer.socials[1].href}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6.49999 1.6665H13.5C16.1667 1.6665 18.3333 3.83317 18.3333 6.49984V13.4998C18.3333 14.7817 17.8241 16.0111 16.9177 16.9175C16.0112 17.8239 14.7819 18.3332 13.5 18.3332H6.49999C3.83332 18.3332 1.66666 16.1665 1.66666 13.4998V6.49984C1.66666 5.21796 2.17588 3.98858 3.08231 3.08215C3.98873 2.17573 5.21811 1.6665 6.49999 1.6665ZM6.33332 3.33317C5.53767 3.33317 4.77461 3.64924 4.212 4.21185C3.64939 4.77446 3.33332 5.53752 3.33332 6.33317V13.6665C3.33332 15.3248 4.67499 16.6665 6.33332 16.6665H13.6667C14.4623 16.6665 15.2254 16.3504 15.788 15.7878C16.3506 15.2252 16.6667 14.4622 16.6667 13.6665V6.33317C16.6667 4.67484 15.325 3.33317 13.6667 3.33317H6.33332ZM14.375 4.58317C14.6513 4.58317 14.9162 4.69292 15.1116 4.88827C15.3069 5.08362 15.4167 5.34857 15.4167 5.62484C15.4167 5.9011 15.3069 6.16606 15.1116 6.36141C14.9162 6.55676 14.6513 6.6665 14.375 6.6665C14.0987 6.6665 13.8338 6.55676 13.6384 6.36141C13.4431 6.16606 13.3333 5.9011 13.3333 5.62484C13.3333 5.34857 13.4431 5.08362 13.6384 4.88827C13.8338 4.69292 14.0987 4.58317 14.375 4.58317ZM9.99999 5.83317C11.1051 5.83317 12.1649 6.27216 12.9463 7.05356C13.7277 7.83496 14.1667 8.89477 14.1667 9.99984C14.1667 11.1049 13.7277 12.1647 12.9463 12.9461C12.1649 13.7275 11.1051 14.1665 9.99999 14.1665C8.89492 14.1665 7.83511 13.7275 7.05371 12.9461C6.27231 12.1647 5.83332 11.1049 5.83332 9.99984C5.83332 8.89477 6.27231 7.83496 7.05371 7.05356C7.83511 6.27216 8.89492 5.83317 9.99999 5.83317ZM9.99999 7.49984C9.33695 7.49984 8.70106 7.76323 8.23222 8.23207C7.76338 8.70091 7.49999 9.3368 7.49999 9.99984C7.49999 10.6629 7.76338 11.2988 8.23222 11.7676C8.70106 12.2364 9.33695 12.4998 9.99999 12.4998C10.663 12.4998 11.2989 12.2364 11.7678 11.7676C12.2366 11.2988 12.5 10.6629 12.5 9.99984C12.5 9.3368 12.2366 8.70091 11.7678 8.23207C11.2989 7.76323 10.663 7.49984 9.99999 7.49984Z"
                      fill="#5E6875"
                      className="group-hover:fill-white transition-colors duration-300"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center p-[10px] bg-[#F1F6F9] rounded-full transition-all duration-300 no-underline hover:bg-[#6537A6] group"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={footer.socials[2].href}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M15.8333 2.5C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333ZM15.4167 15.4167V11C15.4167 10.2795 15.1304 9.5885 14.621 9.07903C14.1115 8.56955 13.4205 8.28333 12.7 8.28333C11.9917 8.28333 11.1667 8.71667 10.7667 9.36667V8.44167H8.44167V15.4167H10.7667V11.3083C10.7667 10.6667 11.2833 10.1417 11.925 10.1417C12.2344 10.1417 12.5312 10.2646 12.75 10.4834C12.9688 10.7022 13.0917 10.9989 13.0917 11.3083V15.4167H15.4167ZM5.73333 7.13333C6.10464 7.13333 6.46073 6.98583 6.72328 6.72328C6.98583 6.46073 7.13333 6.10464 7.13333 5.73333C7.13333 4.95833 6.50833 4.325 5.73333 4.325C5.35982 4.325 5.0016 4.47338 4.73749 4.73749C4.47338 5.0016 4.325 5.35982 4.325 5.73333C4.325 6.50833 4.95833 7.13333 5.73333 7.13333ZM6.89167 15.4167V8.44167H4.58333V15.4167H6.89167Z"
                      fill="#5E6875"
                      className="group-hover:fill-white transition-colors duration-300"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center p-[10px] bg-[#F1F6F9] rounded-full transition-all duration-300 no-underline hover:bg-[#6537A6] group"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={footer.socials[3].href}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M13.8333 4.85C13.2637 4.19969 12.9498 3.36453 12.95 2.5H10.375V12.8333C10.3551 13.3925 10.1191 13.9222 9.71648 14.3108C9.31389 14.6994 8.77621 14.9166 8.21667 14.9167C7.03334 14.9167 6.05001 13.95 6.05001 12.75C6.05001 11.3167 7.43334 10.2417 8.85834 10.6833V8.05C5.98334 7.66667 3.46667 9.9 3.46667 12.75C3.46667 15.525 5.76668 17.5 8.20834 17.5C10.825 17.5 12.95 15.375 12.95 12.75V7.50833C13.9942 8.25821 15.2478 8.66054 16.5333 8.65833V6.08333C16.5333 6.08333 14.9667 6.15833 13.8333 4.85Z"
                      fill="#5E6875"
                      className="group-hover:fill-white transition-colors duration-300"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center p-[10px] bg-[#F1F6F9] rounded-full transition-all duration-300 no-underline hover:bg-[#6537A6] group"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={footer.socials[4].href}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M8.33332 12.4998L12.6583 9.99984L8.33332 7.49984V12.4998ZM17.9667 5.97484C18.075 6.3665 18.15 6.8915 18.2 7.55817C18.2583 8.22484 18.2833 8.79984 18.2833 9.29984L18.3333 9.99984C18.3333 11.8248 18.2 13.1665 17.9667 14.0248C17.7583 14.7748 17.275 15.2582 16.525 15.4665C16.1333 15.5748 15.4167 15.6498 14.3167 15.6998C13.2333 15.7582 12.2417 15.7832 11.325 15.7832L9.99999 15.8332C6.50832 15.8332 4.33332 15.6998 3.47499 15.4665C2.72499 15.2582 2.24166 14.7748 2.03332 14.0248C1.92499 13.6332 1.84999 13.1082 1.79999 12.4415C1.74166 11.7748 1.71666 11.1998 1.71666 10.6998L1.66666 9.99984C1.66666 8.17484 1.79999 6.83317 2.03332 5.97484C2.24166 5.22484 2.72499 4.7415 3.47499 4.53317C3.86666 4.42484 4.58332 4.34984 5.68332 4.29984C6.76666 4.2415 7.75832 4.2165 8.67499 4.2165L9.99999 4.1665C13.4917 4.1665 15.6667 4.29984 16.525 4.53317C17.275 4.7415 17.7583 5.22484 17.9667 5.97484Z"
                      fill="#5E6875"
                      className="group-hover:fill-white transition-colors duration-300"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Contact Communication */}
        <div className="p-8 border-b border-[#F1F6F9] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr] gap-4">
          {footer.contact.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="p-5 bg-[#F1F6F9] hover:bg-[#E3E9EF] rounded-[20px] gap-3 transition-all duration-300 cursor-pointer flex items-center no-underline md:last:col-span-2 lg:last:col-span-1"
            >
              <img
                src={item.img}
                alt=""
                loading="lazy"
                className="p-2 w-10 h-10 shrink-0"
              />
              <div className="flex min-w-0 flex-col gap-1">
                <h6 className="text-[16px] text-[#5E6875] leading-[24px] m-0 font-medium">{item.label}</h6>
                <p className="text-[16px] lg:text-[18px] text-[#20172A] leading-[24px] lg:leading-[28px] m-0 font-normal">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Section 3: Desktop Menus 1 */}
        <div className="p-8 border-b border-[#F1F6F9] hidden lg:grid grid-cols-4 gap-4">
          {footerMenus.map((menu, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h4 className="text-[#20172A] font-semibold text-[16px] leading-[24px] m-0 mb-3">
                {menu.title}
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {menu.links.map((l, j) => (
                  <li key={j}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] text-[#5E6875] leading-[24px] no-underline transition-all duration-300 hover:underline hover:text-[#20172A]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Section 4: Desktop Menus 2 */}
        <div className="p-8 hidden lg:grid grid-cols-4 gap-4">
          {programMenus.map((menu, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h4 className="text-[#20172A] font-semibold text-[16px] leading-[24px] m-0 mb-3">
                {menu.title}
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {menu.links.map((l, j) => (
                  <li key={j}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] text-[#5E6875] leading-[24px] no-underline transition-all duration-300 hover:underline hover:text-[#20172A]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Accordions */}
        <div className="block lg:hidden">
          <div className="p-8 flex flex-col gap-6 border-b border-[#F1F6F9]">
            {footerMenus.map((m, i) => (
              <AccordionItem key={i} title={m.title} links={m.links} defaultOpen={i === 0} />
            ))}
          </div>
          <div className="p-8 flex flex-col gap-6">
            {programMenus.map((m, i) => (
              <AccordionItem key={i} title={m.title} links={m.links} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
