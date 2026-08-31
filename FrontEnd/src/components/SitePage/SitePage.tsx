import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileCheck2,
  Lightbulb,
  MapPin,
  MessageCircleMore,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Code2,
  BarChart3,
} from "lucide-react";
import type { PageIcon, SitePage as SitePageData } from "@/data/sitePages";

const iconMap = {
  spark: Lightbulb,
  layers: Blocks,
  pen: Palette,
  code: Code2,
  chart: BarChart3,
  shield: ShieldCheck,
  users: UsersRound,
  rocket: Rocket,
} satisfies Record<PageIcon, typeof Lightbulb>;

const sectionLinks = [
  { href: "#umumi-baxis", label: "Ümumi baxış" },
  { href: "#ustunlukler", label: "Üstünlüklər" },
  { href: "#is-proqrami", label: "İş proqramı" },
  { href: "#next-step", label: "Növbəti addım" },
];

const benefits = [
  { title: "Praktik yanaşma", text: "Hər qərarı real istifadəçi ssenarisi və biznes məqsədi ilə yoxlayırıq.", icon: Blocks },
  { title: "Şəffaf proses", text: "Mərhələlər, prioritetlər və nəticələr hər zaman görünən qalır.", icon: FileCheck2 },
  { title: "Birgə komanda", text: "Strateq, dizayner və developer eyni məqsəd ətrafında işləyir.", icon: UsersRound },
  { title: "Ölçülə bilən nəticə", text: "Təcrübəni performans, konversiya və istifadəçi davranışı ilə dəyərləndiririk.", icon: BarChart3 },
  { title: "Keyfiyyət nəzarəti", text: "Yayımdan öncə əsas ssenariləri, sürəti və əlçatanlığı yoxlayırıq.", icon: ShieldCheck },
  { title: "Davamlı inkişaf", text: "Yayım son nöqtə deyil: məhsulu nəticələrə əsasən təkmilləşdiririk.", icon: Rocket },
];

function IconTile({ icon }: { icon: PageIcon }) {
  const Icon = iconMap[icon];

  return (
    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#F4F6FA] text-[#13171A]">
      <Icon size={20} strokeWidth={1.7} />
    </span>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-[760px]">
      <p className="m-0 text-sm font-semibold leading-5 text-[#13171A]">{eyebrow}</p>
      <h2 className="mb-0 mt-3 text-[30px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#13171A] sm:text-[40px]">{title}</h2>
      {text && <p className="mb-0 mt-4 text-[16px] leading-7 text-[#62717C]">{text}</p>}
    </div>
  );
}

export default function SitePage({ page }: { page: SitePageData }) {
  const program = [
    ...page.process,
    { number: "05", title: "Yoxlama və optimizasiya", text: "Əsas istifadəçi ssenarilərini, keyfiyyət meyarlarını və ilk nəticələri birlikdə qiymətləndiririk." },
    { number: "06", title: "Yayım və inkişaf", text: "Məhsulu təhlükəsiz şəkildə yayımlayır, nəticələrə əsaslanan növbəti addımları planlaşdırırıq." },
  ];
  const toolkit = ["Kəşf sessiyası", "İstifadəçi ssenarisi", "UI/UX sistem", "Prototip", "Analitika", "Keyfiyyət yoxlaması"];

  return (
    <main className="pb-2 pt-2 font-['Visby_CF',var(--font-geist-sans),sans-serif] lg:pt-3">
      <section className="overflow-hidden rounded-[20px] bg-white px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-11">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(360px,.94fr)] lg:gap-12">
          <div className="max-w-[680px]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#F4F6FA] px-3 py-1.5 text-xs font-semibold leading-4 text-[#13171A]">{page.eyebrow}</span>
              <span className="rounded-full bg-[#F4F6FA] px-3 py-1.5 text-xs font-medium leading-4 text-[#62717C]">Webora ilə</span>
            </div>
            <h1 className="mb-0 mt-6 text-[42px] font-semibold leading-[.98] tracking-[-0.055em] text-[#13171A] sm:text-[56px] lg:text-[68px]">
              {page.title} <span className="text-[#62717C]">{page.highlight}</span>
            </h1>
            <p className="mb-0 mt-6 max-w-[610px] text-[16px] leading-7 text-[#62717C] sm:text-[17px]">{page.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/muraciet" className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-[#13171A] px-5 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#313842]">
                Müraciət et <ArrowRight size={18} />
              </Link>
              <a href="#is-proqrami" className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-[#F4F6FA] px-5 text-sm font-semibold text-[#13171A] no-underline transition-colors hover:bg-[#DFE4EB]">
                Ətraflı bax <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:justify-self-end">
            <div className="relative aspect-[1.08] overflow-hidden rounded-[20px] bg-[#F4F6FA]">
              <Image src={page.image} alt="" fill priority sizes="(max-width: 1024px) 92vw, 500px" className="object-cover p-5 sm:p-7" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 divide-x divide-[#E5EAF0] rounded-[16px] bg-white/95 px-2 py-3 shadow-[0_12px_28px_rgba(19,23,26,0.1)] backdrop-blur sm:bottom-5 sm:left-5 sm:right-5">
              {page.metrics.map((metric) => (
                <div key={metric.label} className="min-w-0 px-2 text-center">
                  <p className="m-0 text-xl font-semibold leading-6 tracking-[-0.04em] text-[#13171A] sm:text-2xl">{metric.value}</p>
                  <p className="mb-0 mt-1 text-[10px] font-medium leading-3 text-[#62717C] sm:text-[11px] sm:leading-4">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-6 grid gap-7 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
        <aside className="hidden lg:block">
          <nav aria-label="Səhifə bölmələri" className="sticky top-6 rounded-[20px] bg-white p-2">
            <ul className="m-0 list-none space-y-1 p-0">
              {sectionLinks.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} className={`block rounded-[14px] px-4 py-3 text-sm leading-5 no-underline transition-colors ${index === 0 ? "bg-[#F4F6FA] font-semibold text-[#13171A]" : "font-medium text-[#62717C] hover:bg-[#F4F6FA] hover:text-[#13171A]"}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 rounded-[16px] bg-[#F4F6FA] p-4">
              <p className="m-0 text-sm font-semibold leading-5 text-[#13171A]">Layihənizi birlikdə planlayaq.</p>
              <p className="mb-0 mt-2 text-xs leading-5 text-[#62717C]">İlkin ehtiyaclarınızı dinləyib ən doğru başlanğıcı müəyyənləşdirək.</p>
              <Link href="/muraciet" className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-[11px] bg-[#13171A] px-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#313842]">
                Müraciət et <ArrowRight size={16} />
              </Link>
            </div>
          </nav>
        </aside>

        <div className="min-w-0 space-y-16 sm:space-y-20 lg:space-y-24">
          <section id="umumi-baxis" className="scroll-mt-8">
            <div className="rounded-[20px] bg-white p-5 sm:p-7 lg:p-8">
              <SectionHeading eyebrow="Webora yanaşması" title="Doğru həll, aydın prosesdən başlayır." text={page.intro} />
              <ul className="mt-8 grid list-none gap-2 p-0 sm:grid-cols-3">
                {page.outcomes.map((outcome) => (
                  <li key={outcome} className="rounded-[14px] bg-[#F4F6FA] px-4 py-4 text-sm font-medium leading-6 text-[#3E4854]">
                    <Check className="mr-2 inline-block h-4 w-4 text-[#13171A] align-[-3px]" strokeWidth={2.4} />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="ustunlukler" className="scroll-mt-8">
            <SectionHeading eyebrow="Üstünlüklər" title="Rəqəmsal məhsulu yalnız hazırlamır, onun işləməsi üçün sistemi də qururuq." />
            <div className="mt-8 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article key={benefit.title} className="rounded-[20px] bg-white p-5 transition-colors hover:bg-[#EBEEF2]">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#F4F6FA] text-[#13171A]"><Icon size={20} strokeWidth={1.7} /></span>
                    <h3 className="mb-0 mt-6 text-[18px] font-semibold leading-6 text-[#13171A]">{benefit.title}</h3>
                    <p className="mb-0 mt-2 text-sm leading-6 text-[#62717C]">{benefit.text}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="is-proqrami" className="scroll-mt-8">
            <div className="grid gap-8 rounded-[20px] bg-white p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12 lg:p-8">
              <div>
                <SectionHeading eyebrow="İş proqramı" title={`${page.eyebrow} üçün işin mərhələləri`} text="Ehtiyacdan nəticəyə qədər bütün addımları bir-birini tamamlayan praktik iş planında birləşdiririk." />
                <div className="mt-7 flex flex-wrap gap-2">
                  {toolkit.map((item) => <span key={item} className="rounded-full bg-[#F4F6FA] px-3 py-2 text-xs font-semibold leading-4 text-[#3E4854]">{item}</span>)}
                </div>
              </div>
              <div className="rounded-[16px] bg-[#F4F6FA] p-5">
                <p className="m-0 text-sm font-semibold leading-5 text-[#13171A]">Hər mərhələdə</p>
                <ul className="mb-0 mt-5 list-none space-y-4 p-0">
                  {["Məqsəd və prioritetlər aydın olur.", "Nəticə yoxlanıla bilən meyarlarla ölçülür.", "Komanda eyni məlumatla hərəkət edir."].map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-[#62717C]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#13171A]" strokeWidth={2.4} />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-3 divide-y divide-[#E5EAF0] overflow-hidden rounded-[20px] bg-white">
              {program.map((step) => (
                <details key={step.number} className="group px-5 py-5 sm:px-7" open={step.number === "01"}>
                  <summary className="flex cursor-pointer list-none items-start gap-4 text-[#13171A] [&::-webkit-details-marker]:hidden">
                    <span className="mt-0.5 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[#F4F6FA] px-1 text-xs font-semibold text-[#3E4854]">{step.number}</span>
                    <span className="flex-1 text-[17px] font-semibold leading-6 sm:text-lg">{step.title}</span>
                    <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-[#62717C] transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="mb-0 ml-11 mt-3 max-w-[720px] text-sm leading-6 text-[#62717C]">{step.text}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="next-step" className="scroll-mt-8">
            <SectionHeading eyebrow="Növbəti addım" title="Layihəni qısa görüşlə dəqiqləşdirək." text="İlk görüşdə məqsədi, mövcud vəziyyəti və ən vacib addımları aydınlaşdırırıq." />
            <div className="mt-8 grid gap-2 md:grid-cols-3">
              <article className="rounded-[20px] bg-white p-5"><Clock3 className="h-5 w-5 text-[#13171A]" strokeWidth={1.8} /><p className="mb-0 mt-6 text-sm font-semibold leading-5 text-[#13171A]">İlkin görüş</p><p className="mb-0 mt-2 text-sm leading-6 text-[#62717C]">30 dəqiqəlik kəşf sessiyası</p></article>
              <article className="rounded-[20px] bg-white p-5"><MapPin className="h-5 w-5 text-[#13171A]" strokeWidth={1.8} /><p className="mb-0 mt-6 text-sm font-semibold leading-5 text-[#13171A]">Format</p><p className="mb-0 mt-2 text-sm leading-6 text-[#62717C]">Onlayn və ya ofisdə görüş</p></article>
              <article className="rounded-[20px] bg-white p-5"><FileCheck2 className="h-5 w-5 text-[#13171A]" strokeWidth={1.8} /><p className="mb-0 mt-6 text-sm font-semibold leading-5 text-[#13171A]">İlk nəticə</p><p className="mb-0 mt-2 text-sm leading-6 text-[#62717C]">Prioritetlər və ilkin yol xəritəsi</p></article>
            </div>
            <div className="mt-3 flex flex-col gap-5 rounded-[20px] bg-[#13171A] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="max-w-[640px]">
                <p className="m-0 text-sm font-semibold leading-5 text-white">Sualınız var?</p>
                <h3 className="mb-0 mt-2 text-[24px] font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-[30px]">Gəlin, ehtiyacınızı və uyğun həlli birlikdə müəyyənləşdirək.</h3>
                <p className="mb-0 mt-3 text-sm leading-6 text-[#DFE4EB]">Müraciət formasını doldurun, komanda sizə qısa zamanda geri dönüş etsin.</p>
              </div>
              <Link href="/muraciet" className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[12px] bg-white px-5 text-sm font-semibold text-[#13171A] no-underline transition-colors hover:bg-[#DFE4EB]">Müraciət et <ArrowRight size={18} /></Link>
            </div>
          </section>

          <section className="grid gap-3 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,.9fr)]">
            <div className="rounded-[20px] bg-white p-5 sm:p-7">
              <p className="m-0 text-sm font-semibold leading-5 text-[#13171A]">Webora komandası</p>
              <h2 className="mb-0 mt-3 text-[30px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#13171A] sm:text-[38px]">#BirlikdəQuraq</h2>
              <p className="mb-0 mt-4 max-w-[560px] text-[16px] leading-7 text-[#62717C]">Layihənin hər mərhələsində strategiya, dizayn və development təcrübəsini bir masada birləşdirən komanda ilə işləyirsiniz.</p>
              <div className="mt-7 grid gap-2 sm:grid-cols-3">
                {page.deliverables.map((item) => (
                  <article key={item.title} className="rounded-[16px] bg-[#F4F6FA] p-4"><IconTile icon={item.icon} /><h3 className="mb-0 mt-5 text-base font-semibold leading-6 text-[#13171A]">{item.title}</h3><p className="mb-0 mt-2 text-sm leading-6 text-[#62717C]">{item.text}</p></article>
                ))}
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-[20px] bg-[#F4F6FA]">
              <Image src={page.image} alt="" fill sizes="(max-width: 1024px) 92vw, 430px" className="object-cover p-7" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[16px] bg-white/95 p-4 backdrop-blur"><div className="flex items-center gap-3"><span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#F4F6FA] text-[#13171A]"><Sparkles size={18} /></span><p className="m-0 text-sm font-semibold leading-5 text-[#13171A]">Məqsədə uyğun, davamlı rəqəmsal məhsul sistemi.</p></div></div>
            </div>
          </section>

          <section className="rounded-[20px] bg-white p-5 sm:p-7 lg:p-8">
            <SectionHeading eyebrow="Bizdən soruşurlar" title="Layihəyə başlamazdan əvvəl aydınlıq yaradaq." />
            <div className="mt-7 flex flex-wrap gap-2">{["Ümumi", "Xidmətlər", "Proses", "Qiymətləndirmə"].map((item, index) => <span key={item} className={`rounded-full px-3 py-2 text-xs font-semibold leading-4 ${index === 0 ? "bg-[#13171A] text-white" : "bg-[#F4F6FA] text-[#62717C]"}`}>{item}</span>)}</div>
            <div className="mt-4 divide-y divide-[#E5EAF0]">
              {[
                ["Layihəyə necə başlayırıq?", "Qısa kəşf görüşündə ehtiyacınızı, hədəf auditoriyanı və prioritetləri dəqiqləşdirir, ilkin iş çərçivəsini paylaşırıq."],
                ["Nə qədər müddətə nəticə əldə edə bilərik?", "Müddət həllin həcmi və mürəkkəbliyindən asılıdır. Görüşdən sonra mərhələləri və real timeline-ı təqdim edirik."],
                ["Mövcud məhsul üzərində də işləyirsiniz?", "Bəli. Mövcud saytı və ya tətbiqi audit edir, ən çox dəyər yaradacaq təkmilləşdirmələri prioritetləşdiririk."],
                ["Yayımdan sonra dəstək varmı?", "Yayım sonrası texniki dəstək, performans izlənməsi və davamlı inkişaf planı ilə yanınızda qalırıq."],
              ].map(([question, answer], index) => (
                <details key={question} className="group py-5" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-start gap-4 text-[#13171A] [&::-webkit-details-marker]:hidden"><CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-[#62717C]" /><span className="flex-1 text-[16px] font-semibold leading-6">{question}</span><ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-[#62717C] transition-transform duration-200 group-open:rotate-180" /></summary>
                  <p className="mb-0 ml-9 mt-3 max-w-[760px] text-sm leading-6 text-[#62717C]">{answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-3 rounded-[16px] bg-[#F4F6FA] p-4 sm:flex-row sm:items-center sm:justify-between"><p className="m-0 flex items-center gap-2 text-sm font-medium leading-6 text-[#3E4854]"><MessageCircleMore size={18} className="text-[#13171A]" />Sualınız qalırsa, bizə yazın.</p><Link href="/elaqe" className="inline-flex items-center gap-2 text-sm font-semibold text-[#13171A] no-underline hover:text-[#62717C]">Əlaqə saxla <ArrowRight size={17} /></Link></div>
          </section>
        </div>
      </div>
    </main>
  );
}
