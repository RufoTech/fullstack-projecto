import {
  BriefcaseBusiness,
  Compass,
  Code2,
  Globe,
  Handshake,
  Headphones,
  LayoutDashboard,
  Monitor,
  Palette,
  PenTool,
  Rocket,
  ShoppingBag,
  ShoppingCart,
  Zap,
} from "lucide-react";

const IMG = {
  gelecek: "/qrafik-dizayn/GelecekBurada_png.webp",
  vakansiyaa: "/qrafik-dizayn/Vakansiyaa_png.webp",
  vakansiya: "/qrafik-dizayn/Vakansiya_png.webp",
  media: "/qrafik-dizayn/Media-blog_png.webp",
  ai: "/qrafik-dizayn/AI-for-everyone-scaled_png.webp",
  backend: "/qrafik-dizayn/Back-End_png.webp",
  graphic: "/qrafik-dizayn/Graphic-Design-1_png.webp",
  memarliq: "/qrafik-dizayn/Digital-Memarliq_png.webp",
  motion: "/qrafik-dizayn/2D-Motion_png.webp",
  marketing: "/qrafik-dizayn/Digital-Marketing_png.webp",
  cyber: "/qrafik-dizayn/Cyber-Sec_png.webp",
  data: "https://code.edu.az/wp-content/uploads/2024/07/Data-Analitika_png.webp",
  it: "/qrafik-dizayn/it-business_png.webp",
  forfuture: "/qrafik-dizayn/forfuture_png.webp",
  ixtisas: "https://code.edu.az/wp-content/uploads/2024/03/ixtisas_png.webp",
  banner: "https://code.edu.az/wp-content/uploads/2024/01/banner-img_png.webp",
  navbarType: "/assets/images/navbar/type=programming.png",
};

const SERVICE_CARDS = [
  {
    id: 1,
    title: "Korporativ veb sayt",
    desc: "Brendinizi etibarlı rəqəmsal məkanda təqdim edin.",
    img: IMG.ai,
    href: "/biznes-helleri",
    level: "starter",
  },
  {
    id: 2,
    title: "Veb tətbiqlər",
    desc: "Biznes prosesinizə uyğun çevik sistemlər.",
    img: IMG.backend,
    href: "/veb-tetbiqleri",
    level: "starter",
  },
  {
    id: 3,
    title: "UI/UX dizayn",
    desc: "İstifadəçi üçün aydın və rahat interfeyslər.",
    img: IMG.graphic,
    href: "/qrafik-dizayn",
    level: "starter",
  },
  {
    id: 4,
    title: "Texniki dəstək",
    desc: "Saytınızın stabil və təhlükəsiz işləməsi.",
    img: IMG.cyber,
    href: "/texniki-destek",
    level: "starter",
  },
  {
    id: 5,
    title: "Landing səhifələr",
    desc: "Kampaniyalar üçün fokuslu satış səhifələri.",
    img: IMG.motion,
    href: "/landing-sehifeler",
    level: "upgrader",
  },
  {
    id: 6,
    title: "E-commerce",
    desc: "Onlayn satış üçün tam funksional mağazalar.",
    img: IMG.memarliq,
    href: "/e-commerce-dizayni",
    level: "starter",
  },
  {
    id: 7,
    title: "SEO optimizasiya",
    desc: "Axtarışda görünən, sürətli və ölçülə bilən nəticələr.",
    img: IMG.marketing,
    href: "/seo-ve-performans",
    level: "both",
  },
  {
    id: 8,
    title: "Analitika inteqrasiyası",
    desc: "Rəqəmləri faydalı biznes qərarlarına çevirin.",
    img: IMG.data,
    href: "/mehsul-analitikasi",
    level: "starter",
  },
  {
    id: 9,
    title: "API inteqrasiyaları",
    desc: "Ödəniş, CRM və daxili alətlərin vahid bağlantısı.",
    img: IMG.cyber,
    href: "/api-inteqrasiyalari",
    level: "universal",
  },
  {
    id: 10,
    title: "Məhsul strategiyası",
    desc: "İdeyanızı düzgün rəqəmsal məhsula çevirin.",
    img: IMG.it,
    href: "/mehsul-strategiyasi",
    level: "upgrader",
  },
];

const data = {
  brand: {
    name: "Webora",
    prefix: "Webora",
    accent: "",
    suffix: "",
    ariaLabel: "Webora",
  },

  header: {
    topLeft: [
      { label: "Startaplar üçün", active: true, href: "/startaplar-ucun" },
      { label: "Biznes həlləri", active: false, href: "/biznes-helleri" },
    ],
    topRight: [
      { label: "İş prosesimiz", href: "/is-prosesimiz" },
      { label: "Layihələr", href: "/layiheler" },
      { label: "Əlaqə", href: "/elaqe" },
    ],
    bottomMenus: [
      { id: "academy", label: "Studiyamız", href: "/studiyamiz" },
      { id: "education", label: "Xidmətlər", href: "/xidmetler" },
      { id: "model", label: "İş prosesimiz", href: "/is-prosesimiz" },
      { id: "scholar", label: "Layihələr", href: "/layiheler" },
    ],
    studioItems: [
      {
        title: "Bizim yanaşma",
        img: IMG.gelecek,
        href: "/bizim-yanasma",
      },
      {
        title: "Komandamız",
        img: IMG.vakansiyaa,
        href: "/komandamiz",
      },
      {
        title: "İş prosesimiz",
        img: IMG.vakansiya,
        href: "/is-prosesimiz",
      },
      {
        title: "İnsaytlar",
        img: IMG.media,
        href: "/insaytlar",
      },
    ],
    serviceCategories: [
      {
        id: "ai",
        h: "Veb strategiya",
        p: "İdeyanıza aydın rəqəmsal istiqamət verin.",
        color: "#62717C",
        items: [
          {
            title: "Rəqəmsal məhsul strategiyası",
            p: "Məqsədlərə uyğun planlama və prioritetlər.",
            img: IMG.ai,
            tag: "Başlanğıc mərhələ",
            href: "/mehsul-strategiyasi",
          },
        ],
      },
      {
        id: "prog",
        h: "Development",
        p: "Sürətli və genişlənən məhsullar hazırlayırıq.",
        color: "#62717C",
        items: [
          {
            title: "Veb tətbiqlərin hazırlanması",
            p: "Biznesiniz üçün xüsusi funksional sistemlər.",
            img: IMG.backend,
            tag: "Başlanğıc mərhələ",
            href: "/veb-tetbiqleri",
          },
          {
            title: "Frontend development",
            p: "React və Next.js ilə sürətli, responsive interfeyslər.",
            img: IMG.graphic,
            tag: "İstifadəçi təcrübəsi",
            href: "/frontend-development",
          },
          {
            title: "Backend development",
            p: "Node.js və Python ilə etibarlı server və məlumat qatları.",
            img: IMG.backend,
            tag: "Sistem arxitekturası",
            href: "/backend-development",
          },
        ],
      },
      {
        id: "design",
        h: "Dizayn",
        p: "İstifadəçini düşünən rəqəmsal təcrübələr.",
        color: "#62717C",
        items: [
          {
            title: "UI/UX dizayn",
            p: "Məhsulunuzu intuitiv interfeysə çevirin.",
            img: IMG.graphic,
            tag: "Başlanğıc mərhələ",
            href: "/qrafik-dizayn",
          },
          {
            title: "E-commerce dizaynı",
            p: "Satış yolunu sadələşdirən mağaza təcrübəsi.",
            img: IMG.memarliq,
            tag: "Başlanğıc mərhələ",
            href: "/e-commerce-dizayni",
          },
          {
            title: "Landing səhifələr",
            p: "Kampaniyalar üçün təsirli ilk təəssürat.",
            img: IMG.motion,
            tag: "Konversiya fokuslu",
            href: "/landing-sehifeler",
          },
        ],
      },
      {
        id: "marketing",
        h: "Böyümə",
        p: "Saytınızı ölçülə bilən nəticələrə yönəldin.",
        color: "#62717C",
        items: [
          {
            title: "SEO və performans",
            p: "Axtarışda görünən, sürətli səhifələr.",
            img: IMG.marketing,
            tag: "Başlanğıc mərhələ",
            href: "/seo-ve-performans",
          },
        ],
      },
      {
        id: "cyber",
        h: "İnteqrasiya",
        p: "Sistemlərinizi vahid rəqəmsal təcrübədə birləşdirin.",
        color: "#62717C",
        items: [
          {
            title: "API inteqrasiyaları",
            p: "CRM, ödəniş və digər alətlər arasında bağlantı.",
            img: IMG.cyber,
            tag: "Başlanğıc mərhələ",
            href: "/api-inteqrasiyalari",
          },
          {
            title: "Texniki dəstək",
            p: "Yayımdan sonra stabil inkişaf və texniki qayğı.",
            img: IMG.cyber,
            tag: "Başlanğıc mərhələ",
            href: "/texniki-destek",
          },
        ],
      },
      {
        id: "analytics",
        h: "Analitika",
        p: "Datanı qərarlara və böyüməyə çevirin.",
        color: "#62717C",
        items: [
          {
            title: "Məhsul analitikası",
            p: "İstifadəçi davranışını görün və anlayın.",
            img: IMG.data,
            tag: "Başlanğıc mərhələ",
            href: "/mehsul-analitikasi",
          },
          {
            title: "Biznes analizi",
            p: "Doğru həll üçün proseslərinizi birlikdə araşdıraq.",
            img: IMG.it,
            tag: "Biznes fokuslu",
            href: "/biznes-analizi",
          },
        ],
      },
    ],
    processItems: [
      {
        title: "İş prosesimizin mərhələləri",
        img: IMG.forfuture,
        href: "/is-prosesimiz",
      },
    ],
    projectItems: [
      {
        title: "Seçilmiş rəqəmsal məhsullarımız",
        img: IMG.forfuture,
        href: "/layiheler",
      },
    ],
    cta: {
      href: "/muraciet",
      label: "Layihəni müzakirə et",
      icon: "/mezunlar/send-01.svg",
    },
    icons: {
      chevronLeft: "/mezunlar/chevron-left.svg",
      chevronRight: "/mezunlar/chevron-right.svg",
      menu: "/mezunlar/menu-02.svg",
      close: "/mezunlar/x.svg",
      send: "/mezunlar/send-01.svg",
      ribbon: IMG.navbarType,
    },
    mobile: {
      backLabel: "Geri",
      audienceLeft: "Hər kəs üçün",
      audienceRight: "Korporativ həllər",
      processLabel: "İş prosesimiz",
      projectsLabel: "Layihələrimiz",
      contactLabel: "Əlaqə",
      contactHref: "/elaqe",
    },
    megaServiceItems: [
      {
        title: "Veb sayt hazırlanması",
        desc: "Müasir, sürətli və mobil uyğun (responsive) veb saytların hazırlanması.",
        icon: Monitor,
      },
      {
        title: "Landing səhifələr",
        desc: "Satış yönümlü və yüksək konversiyalı landing səhifələrin dizaynı və hazırlanması.",
        icon: Globe,
      },
      {
        title: "E-commerce sistemlər",
        desc: "Onlayn mağazalar, məhsul kataloqları və ödəniş inteqrasiyası.",
        icon: ShoppingCart,
      },
      {
        title: "UI/UX dizayn",
        desc: "İstifadəçi təcrübəsinə fokuslanan müasir interfeys dizaynları.",
        icon: PenTool,
      },
      {
        title: "Sayt optimizasiya",
        desc: "Sürət, SEO və performans optimizasiyası ilə saytların gücləndirilməsi.",
        icon: Zap,
      },
    ],
    megaPortfolioItems: [
      { title: "Letsi", icon: LayoutDashboard },
      { title: "NexaShop", icon: ShoppingBag },
      { title: "StudioGo", icon: Palette },
      { title: "PrimeDesk", icon: BriefcaseBusiness },
      { title: "Orbitia", icon: Globe },
    ],
  },

  hero: {
    image: "/hero/banner.jpeg",
    imageAlt: "Saytların hazırlanması xidmətləri",
    mobileImage: "/hero/mobil-banner.png",
    mobileAlt: "Peşəkar və sürətli sayt hazırlanması",
  },

  services: {
    title: "Xidmətlərimiz",
    moreLabel: "Daha çox",
    moreIcon: "/qrafik-dizayn/plus-circle.svg",
    tabs: [
      { id: "all", label: "Hamısı", for: "all" },
      { id: "starter", label: "Yeni layihələr", for: "starter" },
      { id: "upgrader", label: "Biznesin inkişafı", for: "upgrader" },
    ],
    items: SERVICE_CARDS,
  },

  statistics: {
    title: "Rəqəmlərlə işimiz",
    items: [
      { value: "7+", text: "Rəqəmsal məhsul təcrübəmizin illəri" },
      { value: "120+", text: "Həyata keçirdiyimiz veb layihələr" },
      { value: "94%", text: "Uzunmüddətli əməkdaşlıq nisbəti" },
      { value: "18", text: "Dizayn və development mütəxəssisi" },
    ],
  },

  advantages: {
    title: "Niyə Webora",
    items: [
      {
        icon: Compass,
        title: "Strategiya və planlama",
        desc: "Layihəni məqsədləriniz, auditoriyanız və prioritetləriniz əsasında qururuq.",
      },
      {
        icon: Palette,
        title: "Məqsədyönlü dizayn",
        desc: "Hər ekran istifadəçinin növbəti addımını sadələşdirmək üçün hazırlanır.",
      },
      {
        icon: Code2,
        title: "Müasir development",
        desc: "Sürətli, responsive və genişlənməyə hazır texnologiya stack-i.",
      },
      {
        icon: Handshake,
        title: "Şəffaf əməkdaşlıq",
        desc: "Hər mərhələdə aydın kommunikasiya və ölçülə bilən nəticələr.",
      },
      {
        icon: Rocket,
        title: "Performans fokuslu",
        desc: "Sürət, SEO və konversiya layihənin ilk günündən nəzərə alınır.",
      },
      {
        icon: Headphones,
        title: "Davamlı dəstək",
        desc: "Yayımdan sonra da yeniləmə və inkişaf ehtiyaclarınızda yanınızdayıq.",
      },
    ],
  },

  selectedWorks: {
    title: "Seçilmiş işlərimiz",
    moreLabel: "Daha çox",
    moreHref: "/mezunlarimiz",
    moreIcon: "/contact/right-circle-black.svg",
    tabs: [
      { id: "digital-marketinq", label: "E-commerce" },
      { id: "dizayn", label: "Dizayn" },
      { id: "it-ve-kiber-tehlukesizlik", label: "Texniki xidmət" },
      { id: "proqramlasdirma", label: "Veb development" },
    ],
    items: [
      {
        name: "NexaShop",
        field: "E-commerce",
        company: "Onlayn satış platforması",
        img: IMG.memarliq,
        href: "/mezunlarimiz",
        cat: "digital-marketinq",
      },
      {
        name: "Orbitia",
        field: "E-commerce",
        company: "Məhsul kataloqu və ödəniş",
        img: IMG.marketing,
        href: "/mezunlarimiz",
        cat: "digital-marketinq",
      },
      {
        name: "StudioGo",
        field: "UI/UX",
        company: "Məhsul interfeysi",
        img: IMG.graphic,
        href: "/qrafik-dizayn",
        cat: "dizayn",
      },
      {
        name: "Letsi",
        field: "Landing",
        company: "Kampaniya səhifəsi",
        img: IMG.motion,
        href: "/mezunlarimiz",
        cat: "dizayn",
      },
      {
        name: "PrimeDesk",
        field: "Dəstək",
        company: "Texniki xidmət və inteqrasiya",
        img: IMG.cyber,
        href: "/mezunlarimiz",
        cat: "it-ve-kiber-tehlukesizlik",
      },
      {
        name: "DataFlow",
        field: "Analitika",
        company: "Ölçmə və hesabat sistemi",
        img: IMG.data,
        href: "/mezunlarimiz",
        cat: "it-ve-kiber-tehlukesizlik",
      },
      {
        name: "CorpSite",
        field: "Korporativ sayt",
        company: "Brendin rəqəmsal evi",
        img: IMG.ai,
        href: "/mezunlarimiz",
        cat: "proqramlasdirma",
      },
      {
        name: "AppCore",
        field: "Veb tətbiq",
        company: "Biznes proses sistemi",
        img: IMG.backend,
        href: "/mezunlarimiz",
        cat: "proqramlasdirma",
      },
    ],
  },

  findSolution: {
    image: IMG.ixtisas,
    imageAlt: "Layihənizə uyğun həll",
    badgeIcon: "https://code.edu.az/wp-content/themes/codev2024/assets/icons/help.svg",
    badge: "2 dəqiqə",
    title: "Layihənizə uyğun həlli tapaq",
    text: "Qısa sorğunu cavablayın, ehtiyacınıza uyğun veb həll və ilkin yol xəritəsini birlikdə müəyyənləşdirək.",
    ctaLabel: "Sorğunu başla",
    ctaHref: "/muraciet",
  },

  apply: {
    title: "Layihənizi birlikdə planlayaq",
    step1Hint: "(3 addımdan 1-ci addım)",
    step2Title: "Əlaqə məlumatlarınız",
    step2Hint: "(3 addımdan 2-ci addım)",
    submitLabel: "Sorğu göndər",
    continueLabel: "Davam et",
    completeLabel: "Sorğunu tamamla",
    otpLabel: "Təsdiq üçün 4 rəqəmli kodu daxil edin",
    otpSubmit: "Sorğunu göndər",
    sendingTitle: "Göndərilir",
    successText: "Sorğunuz göndərildi! Komandamız tezliklə sizinlə əlaqə saxlayacaq.",
    popupPrefix: "Diqqət:",
    popupTextBefore: "Siz \"",
    popupTextAfter: "\" xidməti üzrə sorğu göndərirsiniz. Qeyd etdiyiniz məlumatların düzgünlüyünü təsdiqləyirsinizmi?",
    editLabel: "Düzəliş et",
    confirmLabel: "Təsdiq et",
    fields: {
      name: "Ad",
      surname: "Soyad",
      phone: "Telefon nömrəsi",
      email: "Elektron mail",
    },
    errors: {
      name: "Zəhmət olmasa, adınızı qeyd edin",
      surname: "Zəhmət olmasa, soyadınızı qeyd edin",
      phone: "Telefon nömrəsin düzgün daxil edin",
      email: "Zəhmət olmasa, doğru email ünvanınızı qeyd edin",
      otp: "Zəhmət olmasa, nömrənizə gələn 4 rəqəmli OTP kodu daxil edin",
    },
    options: [
      { id: "Korporativ sayt", title: "Korporativ sayt", desc: "Brendinizi gücləndirən təqdimat platforması" },
      { id: "E-commerce", title: "E-commerce", desc: "Onlayn satış və məhsul kataloqu həlli" },
      { id: "Landing səhifə", title: "Landing səhifə", desc: "Kampaniya və konversiya fokuslu səhifə" },
      { id: "Veb tətbiq", title: "Veb tətbiq", desc: "Biznes prosesiniz üçün xüsusi sistem" },
      { id: "UI/UX dizayn", title: "UI/UX dizayn", desc: "İstifadəçiyə fokuslanan rəqəmsal təcrübə" },
      { id: "Texniki dəstək", title: "Texniki dəstək", desc: "Mövcud saytın inkişafı və optimizasiyası" },
    ],
  },

  banner: {
    href: "/muraciet",
    heading: "Rəqəmsal məhsulunuz böyüməyə hazırdır",
    tag: "#BirlikdəQuraq",
    text: "Aydın strategiya, düşünülmüş dizayn və düzgün texnologiya ilə biznesiniz üçün nəticə verən rəqəmsal təcrübələr yaradırıq.",
    image: IMG.banner,
    imageAlt: "footer banner",
  },

  blogMedia: {
    title: "Bloq & Media",
    moreLabel: "Daha çox",
    moreHref: "#",
    audience: "studio",
    blogsData: [
      {
        id: 32,
        title: "Yeni sayt layihəsinə necə başlamaq lazımdır?",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
        alt_text: "Yeni veb layihəyə başlamaq",
        slug: "yeni-sayt-layihesine-nece-baslamaq-lazimdir",
        type: "blog",
      },
      {
        id: 34,
        title: "UI/UX: gözəl görünüşdən daha çoxu",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
        alt_text: "UI/UX dizayn insaytı",
        slug: "ui-ux-gozel-gorunusden-daha-coxu",
        type: "blog",
      },
    ],
    mediaData: [
      {
        id: 13,
        title: "Veb sayt performansı niyə vacibdir?",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        alt_text: "Sayt performansı",
        link: "#",
        type: "media",
      },
      {
        id: 6,
        title: "Landing səhifə ilə konversiyanı necə artırmaq olar",
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
        alt_text: "Landing səhifə",
        link: "#",
        type: "media",
      },
    ],
  },

  blog: {
    titleLead: "Rəqəmsal",
    titleRest: "insaytlar",
    moreLabel: "Daha çox",
    moreHref: "#",
    posts: [
      {
        href: "#",
        img: "https://code.edu.az/wp-content/uploads/2026/08/CA_WEB_COVER_NOVRUZ_HASANOV_png.webp",
        time: "7-8 dəq. oxuma vaxtı",
        date: "2026-08-17",
        title: "Yeni sayt layihəsinə necə başlamaq lazımdır?",
        desc: "Uğurlu sayt ilk olaraq aydın məqsəddən başlayır. Auditoriya, biznes hədəfləri və əsas istifadəçi ssenarilərini müəyyənləşdirmək düzgün həll seçməyə kömək edir.",
      },
      {
        href: "#",
        img: "https://code.edu.az/wp-content/uploads/2026/07/AI-for-Everyone-Umid-Salay_jpg.webp",
        time: "5-6 dəq. oxuma vaxtı",
        date: "2026-07-10",
        title: "UI/UX: gözəl görünüşdən daha çoxu",
        desc: "İstifadəçi təcrübəsi vizual estetikadan ibarət deyil. Aydın informasiya arxitekturası və rahat istifadə məhsulun nəticəsinə birbaşa təsir edir.",
      },
      {
        href: "#",
        img: "https://code.edu.az/wp-content/uploads/2026/06/Blog-cover_jpg.webp",
        time: "7-8 dəq. oxuma vaxtı",
        date: "2026-06-12",
        title: "Veb sayt performansı niyə vacibdir?",
        desc: "Sürətli səhifələr daha rahat istifadə olunur, axtarış nəticələrində daha yaxşı görünür və ziyarətçini müştəriyə çevirmək üçün daha çox şans yaradır.",
      },
    ],
  },

  footer: {
    menus: [
      {
        title: "Studiyamız",
        links: [
          { label: "Haqqımızda", href: "#" },
          { label: "Komandamız", href: "#" },
          { label: "İş prosesimiz", href: "/karyera-merkezi" },
          { label: "Tərəfdaşlar", href: "/mezunlarimiz" },
        ],
      },
      {
        title: "Xidmətlər",
        links: [
          { label: "Korporativ saytlar", href: "#" },
          { label: "UI/UX dizayn", href: "/qrafik-dizayn" },
          { label: "E-commerce", href: "#" },
          { label: "SEO və performans", href: "#" },
          { label: "Texniki dəstək", href: "#" },
        ],
      },
      {
        title: "Korporativ",
        links: [
          { label: "Biznes həlləri", href: "#" },
          { label: "Startaplar üçün", href: "#" },
          { label: "İnsaytlar", href: "#" },
          { label: "Layihə sorğusu", href: "/muraciet" },
        ],
      },
      {
        title: "Digər",
        links: [
          { label: "Portfolio", href: "/mezunlarimiz" },
          { label: "Müştəri rəyləri", href: "/mezunlarimiz" },
          { label: "Tez-tez verilən suallar", href: "/elaqe" },
          { label: "Əlaqə", href: "/elaqe" },
        ],
      },
    ],
    programMenus: [
      {
        title: "Development",
        links: [{ label: "Veb tətbiqlər", href: "#" }],
      },
      {
        title: "Dizayn və e-commerce",
        links: [
          { label: "UI/UX dizayn", href: "/qrafik-dizayn" },
          { label: "Onlayn mağazalar", href: "#" },
          { label: "Landing səhifələr", href: "#" },
        ],
      },
      {
        title: "Böyümə",
        links: [{ label: "SEO və performans", href: "#" }],
      },
      {
        title: "Dəstək",
        links: [
          { label: "Texniki dəstək", href: "#" },
          { label: "API inteqrasiyaları", href: "#" },
        ],
      },
    ],
    contact: [
      {
        href: "tel:+994500000000",
        img: "/qrafik-dizayn/telephone.svg",
        label: "Əlaqə telefon",
        value: "+994 50 000 00 00",
      },
      {
        href: "https://api.whatsapp.com/send?phone=994500000000",
        img: "/qrafik-dizayn/mobile.svg",
        label: "Mobil/Whatsapp",
        value: "+994 50 000 00 00",
        external: true,
      },
      {
        href: "/elaqe",
        img: "/qrafik-dizayn/location.svg",
        label: "Ünvan",
        value: "Bakı, Azərbaycan",
      },
    ],
    socials: [
      { id: "facebook", href: "#" },
      { id: "instagram", href: "#" },
      { id: "linkedin", href: "#" },
      { id: "tiktok", href: "#" },
      { id: "youtube", href: "#" },
    ],
  },

  muraciet: {
    logo: "/10il-Logo-300x75_png.webp",
    logoAlt: "Webora",
    title: "Müraciət et",
    heading: "Sualın var? gəl görüşək!",
    step1Hint: "(3 addımdan 1-cisi)",
    step2Hint: "(3 addımdan 2-cisi)",
    continueLabel: "Davam et",
    selectedPrefix: "Seçilmiş xidmət:",
    applyLabel: "Müraciət et",
    sendingTitle: "Göndərilir...",
    successText: "Müraciətiniz qəbul olundu! Tezliklə sizinlə əlaqə saxlanılacaq.",
    popupText: "Siz hal-hazırda Webora-nun \"{selected}\" xidməti üzrə müraciət edirsiniz. Qeyd etdiyiniz məlumatların düzgünlüyünü təsdiqləyirsinizmi?",
    editLabel: "Düzəliş et",
    confirmLabel: "Təsdiq et",
    otpLabel: "Nömrənizə gələn 4 rəqəmli kodu daxil edin",
    fields: {
      name: "Ad",
      surname: "Soyad",
      phone: "Telefon nömrəsi",
      email: "Elektron mail",
    },
    errors: {
      name: "Zəhmət olmasa, adınızı qeyd edin",
      surname: "Zəhmət olmasa, soyadınızı qeyd edin",
      phone: "Telefon nömrəsin düzgün daxil edin",
      email: "Zəhmət olmasa, doğru email ünvanınızı qeyd edin",
      otp: "Zəhmət olmasa, nömrənizə gələn 4 rəqəmli OTP kodu daxil edin",
    },
    options: [
      { id: "Korporativ sayt", title: "Korporativ sayt", desc: "Brendinizi gücləndirən təqdimat platforması" },
      { id: "E-commerce", title: "E-commerce", desc: "Onlayn satış və məhsul kataloqu həlli" },
      { id: "Landing səhifə", title: "Landing səhifə", desc: "Kampaniya və konversiya fokuslu səhifə" },
      { id: "Veb tətbiq", title: "Veb tətbiq", desc: "Biznes prosesiniz üçün xüsusi sistem" },
      { id: "UI/UX dizayn", title: "UI/UX dizayn", desc: "İstifadəçiyə fokuslanan rəqəmsal təcrübə" },
      { id: "Texniki dəstək", title: "Texniki dəstək", desc: "Mövcud saytın inkişafı və optimizasiyası" },
    ],
  },

  contact: {
    title: "Bizimlə əlaqə",
    faqTitle: "Bizdən tez-tez soruşurlar",
    addressLine1: "Bakı, Azərbaycan",
    addressLine2: "Rəqəmsal studiyamız",
    maps: {
      google: "https://www.google.com/maps/place/Baku",
      yandex: "https://yandex.com/maps/?ll=49.8671%2C40.4093&z=12",
      image: "/contact/elage-2_png.webp",
    },
    directions: [
      {
        title: "Maşınla gəldikdə",
        text: "Şəhər mərkəzindən studiyamıza avtomobillə rahat çata bilərsiniz. Görüş üçün əvvəlcədən yazın.",
      },
      {
        title: "Metro ilə gəldikdə",
        text: "Ən yaxın metro çıxışından qısa piyada məsafədə yerləşirik.",
      },
      {
        title: "Piyada gəldikdə",
        text: "Mərkəzi küçələrdən bir neçə dəqiqəlik piyada yol.",
      },
    ],
    cards: [
      { href: "tel:+994500000000", label: "Əlaqə telefon", value: "+994 50 000 00 00" },
      {
        href: "https://api.whatsapp.com/send?phone=994500000000",
        label: "Mobil/Whatsapp",
        value: "+994 50 000 00 00",
      },
      { href: "mailto:info@devstudio.az", label: "Elektron poçt", value: "info@devstudio.az" },
      {
        href: "mailto:corporate@devstudio.az",
        label: "Korporativ elektron poçt",
        value: "corporate@devstudio.az",
      },
    ],
    faqTabs: [
      {
        id: "umumi",
        label: "Ümumi",
        items: [
          {
            q: "Webora nə ilə məşğuldur?",
            a: "Webora bizneslər üçün korporativ sayt, landing səhifə, e-commerce və veb tətbiq hazırlayan rəqəmsal studiyadır. Məqsədimiz aydın strategiya, düşünülmüş dizayn və düzgün texnologiya ilə ölçülə bilən nəticə verməkdir.",
          },
          {
            q: "Harada yerləşir?",
            a: "Studiyamız Bakıda yerləşir. Görüş və layihə müzakirəsi üçün əvvəlcədən əlaqə saxlamağınız kifayətdir.",
          },
        ],
      },
      {
        id: "akademiya",
        label: "Studiya",
        items: [
          {
            q: "Hansı xidmətlər mövcuddur?",
            a: "Korporativ veb sayt, landing səhifə, e-commerce, UI/UX dizayn, SEO və performans, API inteqrasiyaları və texniki dəstək xidmətləri təqdim edirik.",
          },
          {
            q: "Uzaqdan işləyirsiniz?",
            a: "Bəli. Layihələrin böyük hissəsini onlayn əməkdaşlıqla idarə edirik. Ehtiyac olarsa, ofisdə görüş də təşkil edirik.",
          },
          {
            q: "Mövcud saytı yeniləmək mümkündür?",
            a: "Bəli. Mövcud saytın dizaynını, sürətini, SEO-sunu və funksionallığını addım-addım təkmilləşdiririk.",
          },
          {
            q: "Hansı dildə işləyirsiniz?",
            a: "Əsasən Azərbaycan dilində işləyirik. Layihə ehtiyacına görə rus və ingilis dilli interfeyslər də hazırlanır.",
          },
        ],
      },
      {
        id: "qebul",
        label: "Layihə",
        items: [
          {
            q: "Layihəyə necə başlanır?",
            a: "Qısa sorğu və ya zənglə başlayırıq. Ehtiyacı, auditoriyanı və prioritetləri dəqiqləşdirib ilkin yol xəritəsi təqdim edirik.",
          },
          {
            q: "Görüş üçün nə zaman yaxınlaşa bilərəm?",
            a: "İş günləri ərzində uyğun vaxtı birlikdə seçirik. Onlayn və ya ofis görüşü mümkündür.",
          },
          {
            q: "Hazır brend materialları lazımdır?",
            a: "Loqo və brend rəngləri varsa, proses sürətlənir. Yoxdursa, UI/UX mərhələsində vizual istiqaməti birlikdə qururuq.",
          },
          {
            q: "İngilis dili vacibdir?",
            a: "Xeyr. Çoxdilli sayt lazımdırsa, məzmun və interfeysi buna uyğun hazırlayırıq.",
          },
        ],
      },
      {
        id: "qiymet-ve-odenis",
        label: "Qiymət və ödəniş",
        items: [
          {
            q: "Xidmətlər ödənişlidirmi?",
            a: "Bəli. Qiymət layihənin həcminə, funksionallığa və müddətə görə müəyyənləşir. Dəqiq rəqəmi qısa kəşf mərhələsindən sonra təqdim edirik.",
          },
          {
            q: "Niyə qiymət görüş zamanı deyilir?",
            a: "Hər layihə fərqlidir. Ehtiyacı, səhifə sayını və inteqrasiyaları anladıqdan sonra real və şəffaf təklif veririk.",
          },
          {
            q: "Dəstək verilir?",
            a: "Yayımdan sonra texniki dəstək, yeniləmə və inkişaf paketləridə təqdim olunur.",
          },
          {
            q: "Hansı ödəniş formaları mövcuddur?",
            a: "Layihəni mərhələli və ya razılaşdırılmış qrafiklə ödəmək mümkündür. Detallar müqavilə zamanı dəqiqləşir.",
          },
        ],
      },
    ],
  },
};

export default data;
