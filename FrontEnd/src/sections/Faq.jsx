"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const questions = [
  {
    question: "Layihəyə necə başlayırıq?",
    answer:
      "Qısa sorğu və ya görüşlə başlayırıq. Ehtiyaclarınızı, hədəf auditoriyanızı və prioritetlərinizi dəqiqləşdirərək sizə uyğun ilkin yol xəritəsi hazırlayırıq.",
  },
  {
    question: "Hansı növ rəqəmsal həllər hazırlayırsınız?",
    answer:
      "Korporativ veb saytlar, landing səhifələr, e-commerce platformaları, veb tətbiqlər, UI/UX dizayn, inteqrasiya və texniki dəstək xidmətləri təqdim edirik.",
  },
  {
    question: "Mövcud saytımı yeniləyə və ya inkişaf etdirə bilərsiniz?",
    answer:
      "Bəli. Mövcud saytın dizaynını, sürətini, SEO göstəricilərini və funksionallığını mərhələli şəkildə təkmilləşdirə, ehtiyac olduqda isə tam yenidən qura bilərik.",
  },
  {
    question: "Layihə müddəti necə müəyyənləşir?",
    answer:
      "Müddət layihənin həcmi, funksionallığı və inteqrasiyalarından asılıdır. Kəşf mərhələsindən sonra aydın iş planı və mərhələləri sizinlə paylaşırıq.",
  },
  {
    question: "Yayımdan sonra texniki dəstək göstərirsiniz?",
    answer:
      "Bəli. Sayt yayımlandıqdan sonra da yeniləmə, performans, təhlükəsizlik və yeni funksionallıq ehtiyaclarınız üçün dəstək veririk.",
  },
  {
    question: "Layihə zamanı bizimlə necə əlaqə saxlayacaqsınız?",
    answer:
      "Layihənin əvvəlində əsas əlaqə şəxslərini və görüş ritmini müəyyənləşdiririk. Hər mərhələdə görülən işləri, növbəti addımları və qərar nöqtələrini sizinlə şəffaf şəkildə paylaşırıq.",
  },
  {
    question: "Sayt mobil cihazlara uyğun hazırlanır?",
    answer:
      "Bəli. Bütün interfeysləri telefon, planşet və masaüstü ekranlarda rahat işləyəcək şəkildə responsive hazırlayırıq.",
  },
  {
    question: "Mövcud sistemlərimlə inteqrasiya mümkündür?",
    answer:
      "CRM, ödəniş, analitika və digər biznes alətlərinin API inteqrasiyalarını layihənin ehtiyaclarına uyğun planlayıb həyata keçiririk.",
  },
];

function ChevronIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 transform transition-transform duration-1000 ${open ? "rotate-[-180deg]" : ""}`}
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
      />
    </svg>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [showAll, setShowAll] = useState(false);
  const [isMoreIconAnimating, setIsMoreIconAnimating] = useState(false);
  const moreIconControls = useAnimation();
  const visibleQuestions = showAll ? questions : questions.slice(0, 5);

  const animateMoreIcon = async () => {
    if (isMoreIconAnimating) return;

    setIsMoreIconAnimating(true);
    await moreIconControls.start({
      y: [0, -50, 0],
      transition: { duration: 0.7, times: [0, 0.5, 1] },
    });
    setIsMoreIconAnimating(false);
  };

  return (
    <section aria-labelledby="faq-title" className="text-[#20172A]">
      <h2
        id="faq-title"
        className="m-0 font-bold text-[20px] leading-[28px] lg:text-[36px] lg:leading-[48px]"
      >
        Ən çox verilən suallar
      </h2>

      <div className="my-3 flex flex-col justify-between gap-6 md:my-6 md:flex-row">
        <div className="flex flex-col gap-3">
          {visibleQuestions.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-answer-${index}`;

            return (
              <div
                key={item.question}
                className={`flex flex-col rounded-[12px] p-6 pb-0 transition-colors duration-1000 ${
                  isOpen ? "bg-[#F1F6F9]" : "bg-white"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-start gap-4 text-left lg:justify-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6537A6]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#20172A] text-white">
                    <ChevronIcon open={isOpen} />
                  </span>
                  <span className="w-[85%] font-medium text-[16px] leading-[24px] lg:text-[20px] lg:leading-[28px]">
                    {item.question}
                  </span>
                </button>
                <div className="flex w-full items-center pl-[56px] lg:justify-start">
                  <p
                    id={panelId}
                    aria-hidden={!isOpen}
                    className={`m-0 flex w-[85%] overflow-hidden text-[#5E6875] font-medium text-[14px] leading-[20px] transition-[max-height] lg:text-[16px] lg:leading-[24px] ${
                      isOpen ? "max-h-[500px] py-6 ease-in duration-500" : "max-h-0 pt-6 ease-out duration-300"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}

          {!showAll && questions.length > 5 ? (
            <div className="flex justify-center">
              <div className="relative mt-3 flex justify-center overflow-hidden md:mt-6">
                <button
                  type="button"
                  className="flex h-[44px] w-[132px] items-center justify-center gap-[10px] rounded-[12px] bg-[#20172A] text-white transition-colors duration-500 hover:bg-[#3A294F]"
                  onClick={() => setShowAll(true)}
                  onMouseEnter={animateMoreIcon}
                  onMouseLeave={() => setIsMoreIconAnimating(false)}
                >
                  <span className="font-semibold">Daha çox</span>
                  <motion.div animate={moreIconControls} initial={{ x: 0, y: 0 }} className="relative">
                    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 512 512">
                      <path
                        fill="currentColor"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c0 13.3 10.7 24 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                      />
                    </svg>
                  </motion.div>
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <div />
      </div>
    </section>
  );
}
