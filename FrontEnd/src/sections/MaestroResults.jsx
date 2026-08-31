import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Code2, Layers3, Rocket, UsersRound } from "lucide-react";

const results = [
  {
    value: "120+",
    label: "Həyata keçirdiyimiz veb layihələr",
    icon: Layers3,
    className: "",
  },
  {
    value: "94%",
    label: "Uzunmüddətli əməkdaşlıq nisbəti",
    icon: UsersRound,
    className: "md:w-[70%]",
  },
  {
    value: "18",
    label: "Dizayn və development mütəxəssisi",
    icon: Code2,
    className: "md:w-[70%]",
  },
  {
    value: "7+",
    label: "Rəqəmsal məhsul təcrübəmizin illəri",
    icon: BarChart3,
    className: "",
  },
];

function ResultCard({ value, label, icon: Icon, className }) {
  return (
    <article className={`relative flex h-[340px] w-full flex-col items-center justify-between rounded-[12px] bg-white p-8 lg:w-1/2 ${className}`}>
      <p className="relative z-10 m-0 text-[48px] leading-[56px] font-bold text-[#20172A]">{value}</p>
      <div className="absolute inset-0 flex items-center justify-center text-[#6537A6]/20">
        <Icon aria-hidden="true" size={112} strokeWidth={1.1} />
      </div>
      <div className="flex w-full justify-start lg:justify-center">
        <p className="relative z-10 m-0 w-[85%] text-[20px] leading-[28px] text-[#5E6875]">{label}</p>
      </div>
    </article>
  );
}

function ArrowIcon() {
  return <ArrowRight aria-hidden="true" size={20} strokeWidth={1.8} />;
}

export default function MaestroResults() {
  return (
    <section aria-labelledby="maestro-results-title">
      <h2
        id="maestro-results-title"
        className="m-0 text-[#20172A] font-semibold text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px]"
      >
        Nəticələrimiz
      </h2>

      <div className="mt-3 flex flex-col items-center gap-3 md:mt-6">
        <div className="flex w-full flex-col items-center gap-3 lg:flex-row">
          <Link
            href="/mezunlarimiz"
            className="group relative flex h-[340px] w-full max-w-full flex-col items-end justify-between overflow-hidden rounded-[12px] border border-[#D9E2EA] p-3 pt-6 no-underline lg:w-[608px] lg:min-w-[608px] lg:max-w-[608px]"
          >
            <Image
              src="/karyera/activity-dev.jpg"
              alt="Webora-nın həyata keçirdiyi rəqəmsal layihə"
              fill
              sizes="(max-width: 1023px) 100vw, 608px"
              className="object-cover"
            />
            <span className="relative z-10 mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#48345D] transition-transform duration-300 group-hover:rotate-[-45deg]">
              <ArrowIcon />
            </span>
            <div className="relative z-10 w-full font-medium">
              <p className="m-0 w-[78px] rounded-t-[12px] bg-[#6537A6] py-1 text-center text-[14px] text-white">Layihə</p>
              <p className="m-0 w-full rounded-[12px] rounded-tl-none bg-white/90 p-[10px] text-[16px] leading-[24px] text-[#20172A]">
                Biznes məqsədlərini aydın rəqəmsal təcrübələrə çeviririk
              </p>
            </div>
          </Link>

          <div className="flex w-full flex-col gap-3 md:flex-row">
            {results.slice(0, 2).map((result) => (
              <ResultCard key={result.value} {...result} />
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 lg:flex-row">
          <div className="flex w-full flex-col items-center gap-3 md:flex-row">
            {results.slice(2).map((result) => (
              <ResultCard key={result.value} {...result} />
            ))}
          </div>

          <div className="flex w-full flex-col items-center gap-3 md:flex-row">
            <Link
              href="/mezunlarimiz"
              className="group relative h-[340px] w-full overflow-hidden rounded-[12px] no-underline lg:w-2/3"
            >
              <Image
                src="/karyera/activity-ux.jpg"
                alt="Webora komandası ilə rəqəmsal məhsul üzərində iş"
                fill
                sizes="(max-width: 1023px) 100vw, 66vw"
                className="object-cover"
              />
              <span className="absolute right-0 top-0 z-10 mr-3 mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#F1F6F9] text-[#48345D] transition-transform duration-300 group-hover:rotate-[-45deg]">
                <ArrowIcon />
              </span>
              <div className="absolute bottom-0 z-10 mx-3 mb-3 font-medium">
              <p className="m-0 w-[78px] rounded-t-[12px] bg-[#6537A6] py-1 text-center text-[14px] text-white">İnsayt</p>
                <p className="m-0 w-full rounded-[12px] rounded-tl-none bg-white/90 p-[10px] text-[16px] leading-[24px] text-[#20172A]">
                  Məqsədə uyğun, ölçülə bilən məhsullar yaradırıq
                </p>
              </div>
            </Link>

            <div className="flex h-[340px] w-full flex-col items-center justify-between rounded-[12px] bg-white py-8 md:w-[70%] lg:w-1/2">
              <p className="m-0 w-[70%] text-[24px] leading-[32px] font-semibold text-[#5E6875]">
                Növbəti layihəniz üçün ilk addımı atın.
              </p>
              <Rocket aria-hidden="true" size={64} strokeWidth={1.35} className="text-[#6537A6]" />
              <Link
                href="/muraciet"
                className="inline-flex h-10 w-[148px] items-center justify-center gap-2 rounded-[12px] bg-[#6537A6] text-[16px] font-medium text-white no-underline transition-colors duration-500 hover:bg-[#493365]"
              >
                Müraciət et
                <Rocket aria-hidden="true" size={20} strokeWidth={1.7} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
