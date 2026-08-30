import type { SitePage } from "./sitePages";

export const CONTACT_REFERENCE_PAGE: SitePage = {
  slug: "elaqe",
  eyebrow: "Əlaqə",
  title: "Layihənizi",
  highlight: "birlikdə müzakirə edək.",
  description: "Ehtiyacınızı paylaşın, komanda sizə uyğun ən doğru rəqəmsal həllin ilk addımlarını qısa görüşdə aydınlaşdırsın.",
  image: "/qrafik-dizayn/Media-blog_png.webp",
  intro: "Əlaqə ilk növbədə doğru suallarla başlayır. Məqsədi, mövcud vəziyyəti və prioritetləri dinləyir, sizə uyğun iş çərçivəsini və növbəti addımı birlikdə müəyyənləşdiririk.",
  outcomes: ["Qısa ehtiyac analizi", "Aydın növbəti addım", "Komandadan operativ geri dönüş"],
  deliverables: [
    { title: "Kəşf görüşü", text: "Layihənin məqsədini və əsas ehtiyaclarını birlikdə dəqiqləşdiririk.", icon: "spark" },
    { title: "Uyğun həll", text: "Ehtiyacınıza uyğun xidmət və iş formatını formalaşdırırıq.", icon: "layers" },
    { title: "İlkin plan", text: "Mərhələlər, prioritetlər və növbəti addımları paylaşırıq.", icon: "rocket" },
  ],
  process: [
    { number: "01", title: "Ehtiyacınızı dinləyirik", text: "Layihənin kontekstini, məqsədini və prioritetlərini qısa görüşdə toplayırıq." },
    { number: "02", title: "İlkin istiqaməti qururuq", text: "Ən uyğun həlli, mümkün mərhələləri və komanda ehtiyacını müəyyənləşdiririk." },
    { number: "03", title: "Növbəti addımı planlayırıq", text: "Aydın iş çərçivəsi və davam etmək üçün praktik yol xəritəsi təqdim edirik." },
    { number: "04", title: "Birlikdə başlayırıq", text: "Razılaşdırılmış prioritetlərlə layihəni sistemli şəkildə irəlilədirik." },
  ],
  metrics: [
    { value: "30 dəq.", label: "ilkin görüş" },
    { value: "1 gün", label: "geri dönüş hədəfi" },
    { value: "7+ il", label: "rəqəmsal təcrübə" },
  ],
  related: [
    { title: "Xidmətlər", text: "Ehtiyacınıza uyğun xidmətləri kəşf edin.", href: "/xidmetler", icon: "layers" },
    { title: "İş prosesimiz", text: "Layihəni necə irəlilətdiyimizə baxın.", href: "/is-prosesimiz", icon: "spark" },
    { title: "Layihələr", text: "Hazırladığımız işlərə nəzər salın.", href: "/layiheler", icon: "rocket" },
  ],
};
