"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  YoutubeIcon,
} from "./Icons";

const MENU_A = [
  {
    title: "Akademiya",
    links: [
      { label: "Təqaüd proqramları", href: "https://code.edu.az/t%c9%99qaud-proqramlari/" },
      { label: "Karyera Mərkəzi", href: "/karyera-merkezi" },
      { label: "Təhsil modeli", href: "https://code.edu.az/t%c9%99hsil-modeli/" },
      { label: "Akademik partnyorlar", href: "https://code.edu.az/akademiya/akademik-partnyorlar/" },
    ],
  },
  {
    title: "Tədris sahələri",
    links: [
      { label: "Proqramlaşdırma", href: "https://code.edu.az/tedris-saheleri/proqramlasdirma/" },
      { label: "Dizayn", href: "https://code.edu.az/tedris-saheleri/dizayn/" },
      { label: "Kibertəhlükəsizlik", href: "https://code.edu.az/tedris-saheleri/kiber-tehlukesizlik/" },
      { label: "Digital Marketing", href: "https://code.edu.az/tedris-saheleri/marketing/" },
      { label: "Analitika", href: "#" },
    ],
  },
  {
    title: "Korporativ",
    links: [
      { label: "Tədbirlər", href: "https://code.edu.az/tedbirler/" },
      { label: "Təqaüd proqramları", href: "https://code.edu.az/t%c9%99qaud-proqramlari/" },
      { label: "Bloq", href: "https://code.edu.az/blog/" },
      { label: "Korporativ – Tədris sahələri", href: "https://code.edu.az/korporativ/korporativ-t%c9%99dris-sah%c9%99l%c9%99ri/" },
    ],
  },
  {
    title: "Digər",
    links: [
      { label: "Akademiya", href: "https://code.edu.az/blog/" },
      { label: "Məzunlarımız", href: "/mezunlarimiz" },
      { label: "Akademik partnyorlar", href: "https://code.edu.az/akademiya/akademik-partnyorlar/" },
      { label: "Əlaqə", href: "/elaqe" },
    ],
  },
];

const MENU_B = [
  {
    title: "Proqramlaşdırma",
    links: [
      { label: "Süni intellekt dəstəkli Proqramlaşdırma", href: "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/" },
    ],
  },
  {
    title: "Dizayn",
    links: [
      { label: "Qrafik Dizayn və Vizual Kommunikasiyalar", href: "https://code.edu.az/tedris-saheleri/dizayn/qrafik-dizayn-v%c9%99-vizual-kommunikasiyalar/" },
      { label: "Digital Memarlıq və 3D", href: "https://code.edu.az/tedris-saheleri/dizayn/digital-memarliq-ve-3d/" },
      { label: "2D Motion Dizayn", href: "https://code.edu.az/tedris-saheleri/dizayn/2d-motion-dizayn/" },
    ],
  },
  {
    title: "Digital Marketing",
    links: [
      { label: "Digital Marketing Professional – DMI Pro", href: "https://code.edu.az/tedris-saheleri/marketing/digital-marketing-professional-dmi/" },
    ],
  },
  {
    title: "IT və Kibertəhlükəsizlik",
    links: [
      { label: "Kibertəhlükəsizlik", href: "https://code.edu.az/tedris-saheleri/kiber-tehlukesizlik/" },
      { label: "Red Hat üzrə Sistem Administratorluğu", href: "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/" },
    ],
  },
];

function MenuLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("/")) {
    return <Link href={href}>{label}</Link>;
  }
  return <a href={href}>{label}</a>;
}

export default function MezunlarFooter() {
  const [open, setOpen] = useState<string | null>(null);
  const accordion = [...MENU_A, ...MENU_B];

  return (
    <footer>
      <div className="code-footer">
        <div className="code-footer-section">
          <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row gap-4">
            <a href="/">
              <img
                src="/10il-Logo-300x75_png.webp"
                style={{ height: 36, width: "auto" }}
                alt="code logo"
              />
            </a>
            <ul className="d-flex">
              <li>
                <a
                  className="d-flex rounded-circle code-footer-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/code.edu.az/"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  className="d-flex rounded-circle code-footer-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/code.edu.az/?hl=en"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  className="d-flex rounded-circle code-footer-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/school/code.edu.az/"
                >
                  <LinkedinIcon />
                </a>
              </li>
              <li>
                <a
                  className="d-flex rounded-circle code-footer-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/@code.edu.az?lang=en"
                >
                  <TiktokIcon />
                </a>
              </li>
              <li>
                <a
                  className="d-flex rounded-circle code-footer-icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UCOdPpOk5HsQcve5PHYSP5IQ"
                >
                  <YoutubeIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="code-footer-section code-footer-communication d-grid">
          <a
            href="tel:+994123100113"
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center code-footer-communication-info"
          >
            <img
              style={{ width: 40 }}
              src="https://code.edu.az/wp-content/uploads/2024/03/telephone.svg"
              alt="contact image"
            />
            <div className="d-flex flex-column">
              <h6>Əlaqə telefon</h6>
              <p>+994 12 310 0113</p>
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=994504442633"
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center code-footer-communication-info"
          >
            <img
              style={{ width: 40 }}
              src="https://code.edu.az/wp-content/uploads/2024/03/mobile.svg"
              alt="contact image"
            />
            <div className="d-flex flex-column">
              <h6>Mobil/Whatsapp</h6>
              <p>+994 50 444 2633</p>
            </div>
          </a>
          <a
            href="https://www.google.com/maps/place/Code+Academy/@40.377191,49.853945,15z"
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center code-footer-communication-info"
          >
            <img
              style={{ width: 40 }}
              src="https://code.edu.az/wp-content/uploads/2024/03/location.svg"
              alt="contact image"
            />
            <div className="d-flex flex-column">
              <h6>Ünvan</h6>
              <p>Nizami k. 203B, AF Business House, 2-ci mərtəbə</p>
            </div>
          </a>
        </div>

        <div className="code-footer-section code-footer-menu d-lg-grid d-none">
          {MENU_A.map((col) => (
            <div className="d-flex flex-column code-footer-menu-list" key={col.title}>
              <h4>{col.title}</h4>
              <ul className="d-flex flex-column">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <MenuLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="code-footer-section code-footer-menu d-lg-grid d-none">
          {MENU_B.map((col) => (
            <div className="d-flex flex-column code-footer-menu-list" key={col.title}>
              <h4>{col.title}</h4>
              <ul className="d-flex flex-column">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <MenuLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="accordion d-lg-none d-block" id="accordionExample">
          <div className="first-section-accordion">
            {accordion.map((col) => {
              const isOpen = open === col.title;
              return (
                <div className="accordion-item" key={col.title}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button${isOpen ? " is-open" : ""}`}
                      type="button"
                      onClick={() => setOpen(isOpen ? null : col.title)}
                    >
                      <h4 className="code-visby-h2-demibold">{col.title}</h4>
                    </button>
                  </h2>
                  {isOpen ? (
                    <div className="accordion-collapse">
                      <div className="accordion-body">
                        <ul className="d-flex flex-column">
                          {col.links.map((link) => (
                            <li key={link.label}>
                              <MenuLink href={link.href} label={link.label} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
