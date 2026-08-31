import {
  ChartNoAxesCombined,
  Compass,
  Handshake,
  Headphones,
  PlugZap,
  Route,
  UsersRound,
  Workflow,
} from "lucide-react";

const advantages = [
  {
    title: "Məqsədyönlü strategiya",
    icon: Compass,
  },
  {
    title: "Peşəkar komanda",
    icon: UsersRound,
  },
  {
    title: "Şəffaf proses",
    icon: Route,
  },
  {
    title: "Çevik həllər",
    icon: Workflow,
  },
  {
    title: "Performans və nəticə",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Texniki dəstək",
    icon: Headphones,
  },
  {
    title: "API inteqrasiyası",
    icon: PlugZap,
  },
  {
    title: "Uzunmüddətli tərəfdaşlıq",
    icon: Handshake,
  },
];

export default function MaestroAdvantages() {
  return (
    <section aria-labelledby="maestro-advantages-title">
      <h2
        id="maestro-advantages-title"
        className="m-0 text-[#20172A] font-semibold text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px]"
      >
        Üstünlüklərimiz
      </h2>

      <div className="mx-4 mt-3 grid grid-cols-1 gap-3 md:mx-[31px] md:mt-6 md:grid-cols-2 lg:mx-0 lg:grid-cols-4">
        {advantages.map(({ title, icon: Icon }) => (
          <article
            key={title}
            className="relative flex h-full flex-col items-center overflow-hidden rounded-[12px] p-6"
          >
            <div className="flex h-[96px] w-[38%] items-center justify-center text-[#6537A6] lg:h-[135px] lg:w-[41%]">
              <Icon aria-hidden="true" size={64} strokeWidth={1.45} />
            </div>
            <p className="m-0 mt-6 w-[95%] text-center text-[20px] leading-[30px] font-medium text-[#20172A]">
              {title}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
