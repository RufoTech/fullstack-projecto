export type PageIcon = "spark" | "layers" | "pen" | "code" | "chart" | "shield" | "users" | "rocket";

export type WorkflowStep = {
  number: string;
  title: string;
  text: string;
  icon?: string;
};

export type ServiceWorkflow = {
  title: string;
  steps: WorkflowStep[];
};

export type SitePage = {
  slug: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  intro: string;
  outcomes: string[];
  deliverables: { title: string; text: string; icon: PageIcon }[];
  process: WorkflowStep[];
  workflow?: ServiceWorkflow;
  metrics: { value: string; label: string }[];
  related: { title: string; text: string; href: string; icon: PageIcon }[];
};

const METRICS = [
  { value: "7+", label: "illik rəqəmsal məhsul təcrübəsi" },
  { value: "120+", label: "həyata keçirilən veb layihə" },
  { value: "94%", label: "uzunmüddətli əməkdaşlıq nisbəti" },
];

const SERVICE_WORKFLOWS: Partial<Record<string, ServiceWorkflow>> = {
  "mehsul-strategiyasi": {
    title: "Strategiyanı bu mərhələlərlə qururuq",
    steps: [
      { number: "01", title: "Kəşf workshop-u", text: "Komandanın hədəflərini, risklərini və qərar çərçivəsini bir masa arxasında dəqiqləşdiririk." },
      { number: "02", title: "Problem və auditoriya xəritəsi", text: "Əsas istifadəçi ehtiyaclarını, alternativləri və dəyər yaradan imkanları ayırırıq." },
      { number: "03", title: "MVP prioritetləri", text: "İlk versiyada həll edilməli olan işi mərhələləndirir, artıq funksiyaları kənarda saxlayırıq." },
      { number: "04", title: "Yol xəritəsi və meyarlar", text: "İcra ardıcıllığını, məsuliyyətləri və nəticəni ölçəcək göstəriciləri paylaşırıq." },
    ],
  },
  "ui-ux-dizayn": {
    title: "İnterfeysi bu mərhələlərlə formalaşdırırıq",
    steps: [
      { number: "01", title: "İstifadəçi ssenariləri", text: "İstifadəçinin məqsədə çatdığı əsas addımları və qərar nöqtələrini xəritələndiririk." },
      { number: "02", title: "İnformasiya arxitekturası", text: "Məzmunu, naviqasiyanı və ekranlar arasındakı əlaqəni aydın strukturda qururuq." },
      { number: "03", title: "Vizual sistem", text: "Komponent, tipoqrafiya və rəng qaydaları ilə ardıcıl interfeys dili yaradırıq." },
      { number: "04", title: "Prototip və test", text: "Əsas axınları kliklənən prototipdə yoxlayır, inkişaf üçün dəqiq təhvil hazırlayırıq." },
    ],
  },
  "e-commerce-dizayni": {
    title: "Alış təcrübəsini bu addımlarla optimallaşdırırıq",
    steps: [
      { number: "01", title: "Kataloq və axtarış", text: "Kateqoriyaları, filtrləri və axtarışı məhsulu tez tapmağa uyğunlaşdırırıq." },
      { number: "02", title: "Məhsul qərar nöqtələri", text: "Məhsul səhifəsində qiymət, variant, çatdırılma və etibar məlumatlarını düzgün ardıcıllıqla təqdim edirik." },
      { number: "03", title: "Səbət və ödəniş", text: "Alış yolundakı əlavə addımları azaldır, ödənişə qədərki prosesi aydınlaşdırırıq." },
      { number: "04", title: "Mobil yoxlama", text: "Əsas alış ssenarilərini mobil cihazlarda test edib konversiya maneələrini aradan qaldırırıq." },
    ],
  },
  "landing-sehifeler": {
    title: "Landing səhifəsini kampaniya məqsədinə uyğun qururuq",
    steps: [
      { number: "01", title: "Təklif və auditoriya", text: "Kampaniyanın kimə nə təklif etdiyini və hansı etirazı aradan qaldırdığını dəqiqləşdiririk." },
      { number: "02", title: "Mesaj iyerarxiyası", text: "Başlıq, dəyər arqumentləri, sosial sübut və CTA-ları oxuma ardıcıllığına görə yerləşdiririk." },
      { number: "03", title: "Konversiya dizaynı", text: "Formu, müraciət nöqtələrini və etibar elementlərini hərəkətə keçməyi asanlaşdıracaq şəkildə hazırlayırıq." },
      { number: "04", title: "Ölçmə üçün hazırlıq", text: "Reklam və analitika ilə izlənəcək əsas çevrilmələri yayımdan əvvəl müəyyənləşdiririk." },
    ],
  },
  "seo-ve-performans": {
    title: "Görünürlük və sürəti bu ardıcıllıqla yaxşılaşdırırıq",
    steps: [
      { number: "01", title: "Texniki audit", text: "Sürət, indekslənmə, render və Core Web Vitals problemlərini ölçüb prioritetləşdiririk." },
      { number: "02", title: "Axtarış niyyəti", text: "Hədəf sorğuların niyyətinə uyğun səhifə və məzmun strukturunu planlayırıq." },
      { number: "03", title: "On-page optimizasiya", text: "Başlıqlar, meta məlumatlar, daxili keçidlər və media yüklənməsini tətbiq edirik." },
      { number: "04", title: "İzləmə və iterasiya", text: "Axtarış görünürlüğünü, sürəti və konversiyanı izləyib növbəti texniki addımları seçirik." },
    ],
  },
  "api-inteqrasiyalari": {
    title: "Sistemləri təhlükəsiz inteqrasiya edirik",
    steps: [
      { number: "01", title: "Sistem xəritəsi", text: "Məlumatın haradan gəldiyini, hara getdiyini və sahiblik nöqtələrini müəyyənləşdiririk." },
      { number: "02", title: "Müqavilə və səlahiyyətlər", text: "API müqaviləsini, autentifikasiya qaydalarını və həssas məlumat məhdudiyyətlərini razılaşdırırıq." },
      { number: "03", title: "Bağlantı və xəta ssenariləri", text: "Sorğuları, retry məntiqini və uğursuzluq zamanı istifadəçi davranışını etibarlı qururuq." },
      { number: "04", title: "Sınaq və monitorinq", text: "Test mühiti, real məlumat yoxlaması və inteqrasiyanın izlənməsi ilə yayımı tamamlayırıq." },
    ],
  },
  "texniki-destek": {
    title: "Texniki dəstəyi davamlı iş ritmi ilə aparırıq",
    steps: [
      { number: "01", title: "Sistemin ilkin yoxlanması", text: "Mövcud kod bazasını, hosting-i, asılılıqları və kritik riskləri ilkin olaraq qiymətləndiririk." },
      { number: "02", title: "Prioritet və SLA", text: "Xətaları, dəyişiklik istəklərini və cavab müddətlərini biznes təsirinə görə sıralayırıq." },
      { number: "03", title: "Təhlükəsiz dəyişiklik", text: "Yeniləmələri versiya nəzarəti, ehtiyat nüsxə və yoxlama ilə nəzarətli şəkildə yayımlayırıq." },
      { number: "04", title: "Monitorinq və hesabat", text: "Performans, xəta və görülən işləri müntəzəm izləyib növbəti inkişafları planlayırıq." },
    ],
  },
  "mehsul-analitikasi": {
    title: "Məhsul analitikasını qərarlara bağlayırıq",
    steps: [
      { number: "01", title: "Ölçmə çərçivəsi", text: "Biznes məqsədlərini əsas metriklər, funnel-lər və cavablandırılacaq suallarla əlaqələndiririk." },
      { number: "02", title: "Hadisə planı", text: "İzlənəcək istifadəçi addımlarını, event adlarını və atributları ardıcıl sxemdə hazırlayırıq." },
      { number: "03", title: "Məlumatın yoxlanması", text: "Tracking-in düzgün işlədiyini test edir, təkrarlanan və ya çatışmayan məlumatları düzəldirik." },
      { number: "04", title: "İnsayt və prioritet", text: "Dashboard və analiz vasitəsilə davranış siqnallarını real məhsul qərarlarına çeviririk." },
    ],
  },
  "biznes-analizi": {
    title: "Biznes analizini qərar üçün istifadə edirik",
    steps: [
      { number: "01", title: "Maraqlı tərəflərlə kəşf", text: "Komandanın məqsədlərini, mövcud çətinliklərini və uğur meyarlarını toplayırıq." },
      { number: "02", title: "Cari proses xəritəsi", text: "İş axınındakı təkrarları, gecikmələri və məlumat qırılmalarını görünən edirik." },
      { number: "03", title: "Tələblərin prioriteti", text: "Həllin funksional və qeyri-funksional tələblərini biznes dəyərinə görə sıralayırıq." },
      { number: "04", title: "Tövsiyə və növbəti addım", text: "Riskləri, imkanları və icraya keçid üçün dəqiq qərar çərçivəsini təqdim edirik." },
    ],
  },
  "frontend-development": {
    title: "Frontend development-də bu mərhələlər üzərində işləyirik",
    steps: [
      { number: "01", title: "React komponent arxitekturası", text: "Təkrarlanan interfeys hissələrini yenidən istifadə oluna bilən komponentlərə bölür, state və istifadəçi qarşılıqlı əlaqəsini aydın saxlayırıq.", icon: "/qrafik-dizayn/tech-react.svg" },
      { number: "02", title: "Next.js render və marşrutlar", text: "App Router, server/client komponentləri və uyğun render strategiyası ilə sürətli, indekslənə bilən ekranlar qururuq.", icon: "/qrafik-dizayn/tech-nextjs.svg" },
      { number: "03", title: "TypeScript və API müqaviləsi", text: "Məlumat modellərini, forma yoxlamalarını və API cavablarını tipləyərək inteqrasiya xətalarını erkən mərhələdə azaldırıq.", icon: "/qrafik-dizayn/tech-typescript.svg" },
      { number: "04", title: "Responsive UI və performans", text: "Tailwind CSS ilə cihazlara uyğun interfeys qurur, yüklənmə vəziyyətləri və əsas istifadəçi ssenarilərini yoxlayırıq.", icon: "/qrafik-dizayn/tech-tailwind.svg" },
    ],
  },
  "backend-development": {
    title: "Backend development-də bu mərhələlər üzərində işləyirik",
    steps: [
      { number: "01", title: "Node.js servis qatları", text: "REST API-ləri, autentifikasiya və biznes qaydalarını modul servis quruluşunda ayıraraq genişlənən server məntiqi hazırlayırıq.", icon: "/qrafik-dizayn/tech-nodejs.svg" },
      { number: "02", title: "Python avtomatlaşdırmaları", text: "FastAPI və ya uyğun Python alətləri ilə məlumat emalı, inteqrasiya və planlı arxa plan proseslərini etibarlı şəkildə qururuq.", icon: "/qrafik-dizayn/tech-python.svg" },
      { number: "03", title: "PostgreSQL məlumat modeli", text: "Cədvəl əlaqələrini, migrasiyaları, indeksləri və sorğuları real istifadə həcminə uyğun dizayn edirik.", icon: "/qrafik-dizayn/tech-postgresql.svg" },
      { number: "04", title: "Docker ilə yayım və monitorinq", text: "Mühitləri konteynerləşdirir, konfiqurasiyanı ayırır və loglar vasitəsilə servisin sağlamlığını izləməyə hazır vəziyyətə gətiririk.", icon: "/qrafik-dizayn/tech-docker.svg" },
    ],
  },
};

const createPage = (page: Omit<SitePage, "process" | "workflow" | "metrics">): SitePage => {
  const workflow = SERVICE_WORKFLOWS[page.slug];

  return {
    ...page,
    workflow,
    process: workflow?.steps ?? [],
    metrics: METRICS,
  };
};

export const SITE_PAGES: Record<string, SitePage> = {
  "startaplar-ucun": createPage({
    slug: "startaplar-ucun",
    eyebrow: "Startaplar üçün",
    title: "İdeyanızı bazara hazır",
    highlight: "rəqəmsal məhsula",
    description: "Webora ilkin konseptdən ilk istifadəçiyə qədər startap komandalarına aydın məhsul yolu qurur.",
    image: "/qrafik-dizayn/AI-for-everyone-scaled_png.webp",
    intro: "Sürət vacibdir, amma istiqamət daha vacibdir. Fikrinizi istifadəçi ehtiyacı, aydın təklif və işlək ilk versiya ilə birləşdiririk.",
    outcomes: ["MVP üçün prioritetləşdirilmiş yol xəritəsi", "İnvestora və istifadəçiyə aydın məhsul hekayəsi", "Böyüməyə hazır çevik texniki baza"],
    deliverables: [
      { title: "MVP strategiyası", text: "Ən vacib problemi həll edən, fokuslu ilk versiya.", icon: "rocket" },
      { title: "Məhsul dizaynı", text: "İstifadəçini ilk addımdan irəli aparan ekranlar.", icon: "pen" },
      { title: "Sürətli development", text: "Böyüməyə uyğun, təmiz və etibarlı tətbiq infrastrukturu.", icon: "code" },
    ],
    related: [
      { title: "Məhsul strategiyası", text: "İdeyanın doğru istiqamətini tapaq.", href: "/mehsul-strategiyasi", icon: "spark" },
      { title: "Veb tətbiqlər", text: "İlk versiyanı real məhsula çevirək.", href: "/veb-tetbiqleri", icon: "code" },
      { title: "UI/UX dizayn", text: "İstifadəçi təcrübəsini sadələşdirək.", href: "/ui-ux-dizayn", icon: "pen" },
    ],
  }),
  "biznes-helleri": createPage({
    slug: "biznes-helleri",
    eyebrow: "Biznes həlləri",
    title: "Biznesinizi daha çevik,",
    highlight: "rəqəmsal və ölçülə bilən edin.",
    description: "Mürəkkəb prosesləri aydın rəqəmsal təcrübələrə və nəticə verən sistemlərə çeviririk.",
    image: "/qrafik-dizayn/it-business_png.webp",
    intro: "Rəqəmsal həll yalnız gözəl görünüş deyil. O, komandanızın işini yüngülləşdirməli, müştəriyə rahatlıq verməli və böyümə üçün data yaratmalıdır.",
    outcomes: ["Proseslərə uyğun xüsusi rəqəmsal həll", "Müştərilər üçün sürətli və aydın təcrübə", "Qərarlar üçün görünən performans məlumatı"],
    deliverables: [
      { title: "Biznes analizi", text: "Mövcud prosesi və ən böyük imkanları xəritələndiririk.", icon: "chart" },
      { title: "Sistem inteqrasiyası", text: "CRM, ödəniş və daxili alətləri vahid axına qoşuruq.", icon: "layers" },
      { title: "Davamlı inkişaf", text: "Məhsulunuzla birgə böyüyən texniki tərəfdaşlıq.", icon: "shield" },
    ],
    related: [
      { title: "Biznes analizi", text: "Doğru problemi birlikdə müəyyənləşdirək.", href: "/biznes-analizi", icon: "chart" },
      { title: "API inteqrasiyaları", text: "Alətlərinizi bir-birinə bağlayın.", href: "/api-inteqrasiyalari", icon: "layers" },
      { title: "Texniki dəstək", text: "Saytınızı stabil inkişaf etdirin.", href: "/texniki-destek", icon: "shield" },
    ],
  }),
  studiyamiz: createPage({
    slug: "studiyamiz",
    eyebrow: "Studiyamız",
    title: "Düşünən komandalar üçün",
    highlight: "aydın rəqəmsal təcrübələr.",
    description: "Webora strategiya, dizayn və development-i eyni masada birləşdirən rəqəmsal studiyadır.",
    image: "/qrafik-dizayn/GelecekBurada_png.webp",
    intro: "Yaxşı məhsul diqqətlə verilən suallardan başlayır. Biz hər layihədə biznes məqsədini, istifadəçi ehtiyacını və texniki reallığı bir araya gətiririk.",
    outcomes: ["Bir komandada strategiya, dizayn və development", "Şəffaf mərhələlər və aydın kommunikasiya", "Uzunmüddətli məhsul tərəfdaşlığı"],
    deliverables: [
      { title: "Birgə düşüncə", text: "Layihəyə təkcə icraçı kimi yox, məhsul tərəfdaşı kimi yanaşırıq.", icon: "users" },
      { title: "Sistemli yanaşma", text: "Hər qərar məqsəd, istifadəçi və nəticə ilə əsaslandırılır.", icon: "layers" },
      { title: "Qayğılı icra", text: "Detalları önəmsəyən təmiz dizayn və etibarlı kod.", icon: "spark" },
    ],
    related: [
      { title: "Bizim yanaşma", text: "Necə düşündüyümüzü daha yaxından tanıyın.", href: "/bizim-yanasma", icon: "spark" },
      { title: "Komandamız", text: "Məhsulların arxasındakı insanlarla tanış olun.", href: "/komandamiz", icon: "users" },
      { title: "İş prosesimiz", text: "Layihəni necə irəlilətdiyimizə baxın.", href: "/is-prosesimiz", icon: "layers" },
    ],
  }),
  "bizim-yanasma": createPage({
    slug: "bizim-yanasma",
    eyebrow: "Bizim yanaşma",
    title: "Gözəl görünüşdən əvvəl",
    highlight: "doğru sualları veririk.",
    description: "Məhsulunuzu məqsədiniz, insanları və real biznes konteksti ilə birlikdə düşünürük.",
    image: "/qrafik-dizayn/Frame-803-1_png.webp",
    intro: "Hər ekranın və hər funksiyanın arxasında bir səbəb olmalıdır. Bu səbəbi kəşf mərhələsində tapır, sonra onu aydın təcrübəyə çeviririk.",
    outcomes: ["Məqsədyönlü məhsul qərarları", "İstifadəçi davranışına uyğun interfeys", "Texniki və biznes baxımından davamlı həll"],
    deliverables: [
      { title: "Kəşf sessiyası", text: "Suallar, prioritetlər və uğur meyarları ilə eyni istiqamət qururuq.", icon: "spark" },
      { title: "Aydın yol xəritəsi", text: "Gözləntiləri, mərhələləri və qərar nöqtələrini görünən edirik.", icon: "layers" },
      { title: "Davamlı optimizasiya", text: "Yayım sonrası datadan öyrənib növbəti addımları seçirik.", icon: "chart" },
    ],
    related: [
      { title: "Məhsul strategiyası", text: "İdeyanız üçün fokuslu istiqamət.", href: "/mehsul-strategiyasi", icon: "rocket" },
      { title: "Məhsul analitikası", text: "Davranışı qərarlara çevirin.", href: "/mehsul-analitikasi", icon: "chart" },
      { title: "Layihəni müzakirə et", text: "Növbəti məhsulu birlikdə planlayaq.", href: "/muraciet", icon: "spark" },
    ],
  }),
  komandamiz: createPage({
    slug: "komandamiz",
    eyebrow: "Komandamız",
    title: "Fərqli ekspertizalar,",
    highlight: "eyni məhsul baxışı.",
    description: "Strateqlər, dizaynerlər və developer-lər məhsulunuzun hər detalı üçün eyni məqsədlə çalışır.",
    image: "/qrafik-dizayn/Vakansiyaa_png.webp",
    intro: "İntizamlı əməkdaşlıq daha yaxşı nəticə verir. Biz doğru insanları doğru anda bir araya gətirir, sürətli və diqqətli qərarlar veririk.",
    outcomes: ["Çarpaz funksional ekspertiza", "Birbaşa və operativ kommunikasiya", "Layihənin məqsədinə fokuslanmış komanda ritmi"],
    deliverables: [
      { title: "Məhsul komandası", text: "Strategiya, UX/UI və development eyni məhsul hədəfi ətrafında işləyir.", icon: "users" },
      { title: "Şəffaf əməkdaşlıq", text: "Qərarlar, progress və risklər hər zaman görünən qalır.", icon: "layers" },
      { title: "Praktik təcrübə", text: "Mürəkkəb işi sadələşdirən peşəkar yanaşma.", icon: "rocket" },
    ],
    related: [
      { title: "Studiyamız", text: "Webora-nın iş prinsipini kəşf edin.", href: "/studiyamiz", icon: "spark" },
      { title: "İş prosesimiz", text: "İdeyadan yayıma qədər yolumuz.", href: "/is-prosesimiz", icon: "layers" },
      { title: "Layihələr", text: "Birlikdə hazırladığımız işlərə baxın.", href: "/layiheler", icon: "rocket" },
    ],
  }),
  "is-prosesimiz": createPage({
    slug: "is-prosesimiz",
    eyebrow: "İş prosesimiz",
    title: "Qeyri-müəyyənlikdən",
    highlight: "işlək məhsula qədər.",
    description: "Hər mərhələdə nəyin, niyə və nə vaxt baş verdiyi görünən sadə bir iş sistemi qururuq.",
    image: "/qrafik-dizayn/forfuture_png.webp",
    intro: "Sürətli iş üçün qarışıqlıq lazım deyil. Dəqiq çərçivə yaradıb, komandanızı qərarların içində saxlayır və layihəni mərhələ-mərhələ irəlilədirik.",
    outcomes: ["Aydın timeline və məsuliyyət bölgüsü", "Hər mərhələdə yoxlanan nəticələr", "Yayım sonrası davam planı"],
    deliverables: [
      { title: "İlkin brif", text: "Konteksti, gözləntiləri və məhsulun uğur meyarlarını toplayırıq.", icon: "spark" },
      { title: "Həftəlik ritm", text: "Qısa sinxronlaşma və dəqiq prioritetlərlə irəliləyirik.", icon: "layers" },
      { title: "Keyfiyyət nəzarəti", text: "Dizayn, kod və performansı yayımdan əvvəl yoxlayırıq.", icon: "shield" },
    ],
    related: [
      { title: "Məhsul strategiyası", text: "Doğru başlanğıc üçün kəşf mərhələsi.", href: "/mehsul-strategiyasi", icon: "spark" },
      { title: "Texniki dəstək", text: "Yayımdan sonra da yanınızdayıq.", href: "/texniki-destek", icon: "shield" },
      { title: "Layihə sorğusu", text: "Layihəniz üçün ilkin görüş təyin edin.", href: "/muraciet", icon: "rocket" },
    ],
  }),
  layiheler: createPage({
    slug: "layiheler",
    eyebrow: "Seçilmiş layihələr",
    title: "Nəticə verən məhsullar",
    highlight: "birlikdə qurulur.",
    description: "Fərqli sahələrdəki bizneslər üçün aydın təcrübə, güclü performans və böyüməyə hazır sistemlər hazırlayırıq.",
    image: "/qrafik-dizayn/Digital-Memarliq_png.webp",
    intro: "Hər layihə konkret məqsədlə başlayır: daha etibarlı təqdimat, daha sadə alış, daha sürətli xidmət və ya daha aydın qərar. Dizaynı və texnologiyanı həmin məqsədə bağlayırıq.",
    outcomes: ["E-commerce, korporativ və SaaS təcrübələri", "Konversiya və performans fokuslu interfeyslər", "Brendə uyğun, uzunömürlü sistemlər"],
    deliverables: [
      { title: "NexaShop", text: "Kataloq, alış və ödəniş axınını sadələşdirən e-commerce təcrübəsi.", icon: "layers" },
      { title: "StudioGo", text: "Xidmət seçimini aydınlaşdıran mobil-prioritet məhsul interfeysi.", icon: "pen" },
      { title: "PrimeDesk", text: "Müştəri müraciətlərini vahid idarəetmə mərkəzində birləşdirən sistem.", icon: "chart" },
    ],
    related: [
      { title: "E-commerce dizaynı", text: "Satış yolunu sadələşdirin.", href: "/e-commerce-dizayni", icon: "layers" },
      { title: "Landing səhifələr", text: "Kampaniyanı nəticəyə çevirin.", href: "/landing-sehifeler", icon: "rocket" },
      { title: "Veb tətbiqlər", text: "Biznes prosesiniz üçün xüsusi həll.", href: "/veb-tetbiqleri", icon: "code" },
    ],
  }),
  insaytlar: createPage({
    slug: "insaytlar",
    eyebrow: "İnsaytlar",
    title: "Daha yaxşı rəqəmsal",
    highlight: "qərarlar üçün fikirlər.",
    description: "Məhsul, dizayn, development və böyümə haqqında praktik müşahidələri aydın dildə paylaşırıq.",
    image: "/qrafik-dizayn/Media-blog_png.webp",
    intro: "Texnologiya çox sürətlə dəyişir, amma yaxşı məhsulun əsasları eyni qalır: insanı anlamaq, problemi sadələşdirmək və nəticəni ölçmək.",
    outcomes: ["Məhsul qərarları üçün praktik çərçivələr", "Dizayn və development komandaları üçün ideyalar", "Biznesinizi irəli aparan ölçmə sualları"],
    deliverables: [
      { title: "Məhsul düşüncəsi", text: "Doğru problemi tapmaq və prioritetləşdirmək üçün çərçivələr.", icon: "spark" },
      { title: "Təcrübə dizaynı", text: "İstifadəçi üçün daha aydın və rahat interfeys prinsipləri.", icon: "pen" },
      { title: "Böyümə sistemi", text: "Performansı görmək və davamlı təkmilləşdirmək üçün fikirlər.", icon: "chart" },
    ],
    related: [
      { title: "SEO və performans", text: "Sürət və görünürlük üçün sistemli yanaşma.", href: "/seo-ve-performans", icon: "rocket" },
      { title: "Məhsul analitikası", text: "Datadan daha düzgün nəticə çıxarın.", href: "/mehsul-analitikasi", icon: "chart" },
      { title: "Bizim yanaşma", text: "İşimizin arxasındakı prinsiplər.", href: "/bizim-yanasma", icon: "spark" },
    ],
  }),
  xidmetler: createPage({
    slug: "xidmetler",
    eyebrow: "Xidmətlər",
    title: "Rəqəmsal məhsulun hər mərhələsi üçün",
    highlight: "birgə düşünülmüş həll.",
    description: "İlk ideyadan yayımdan sonrakı inkişafa qədər ehtiyacınıza uyğun çevik xidmətlər təqdim edirik.",
    image: "/qrafik-dizayn/Graphic-Design-1_png.webp",
    intro: "Ehtiyacınız tək bir landing səhifə və ya tam məhsul sistemi ola bilər. Komandamız bütün yolu, ya da ən çox ehtiyac duyduğunuz hissəni götürə bilər.",
    outcomes: ["Strategiya, dizayn və development vahid axında", "Layihənin həcminə uyğun çevik əməkdaşlıq", "Performans, SEO və dəstək ilə davamlı nəticə"],
    deliverables: [
      { title: "Strategiya", text: "Məqsəd, auditoriya və prioritetləri dəqiqləşdirən məhsul çərçivəsi.", icon: "spark" },
      { title: "Dizayn", text: "Brendinizə və istifadəçinizə uyğun aydın digital təcrübə.", icon: "pen" },
      { title: "Development", text: "Sürətli, responsive və genişlənən veb həllər.", icon: "code" },
    ],
    related: [
      { title: "Veb strategiya", text: "Nədən başlayacağınızı müəyyənləşdirin.", href: "/mehsul-strategiyasi", icon: "spark" },
      { title: "UI/UX dizayn", text: "İdeyanı intuitiv interfeysə çevirin.", href: "/ui-ux-dizayn", icon: "pen" },
      { title: "İnteqrasiya", text: "Sistemlərinizi bir təcrübədə birləşdirin.", href: "/api-inteqrasiyalari", icon: "layers" },
    ],
  }),
  "mehsul-strategiyasi": createPage({
    slug: "mehsul-strategiyasi",
    eyebrow: "Veb strategiya",
    title: "Düzgün məhsul üçün",
    highlight: "aydın başlanğıc.",
    description: "İdeyanızı, biznes hədəflərinizi və istifadəçi ehtiyaclarını real məhsul yol xəritəsinə çeviririk.",
    image: "/qrafik-dizayn/AI-for-everyone-scaled_png.webp",
    intro: "İnkişaf etməzdən əvvəl doğru suallara cavab tapmaq vacibdir. Birlikdə nəyin dəyər yaratdığını, nəyin gözləyə biləcəyini müəyyənləşdiririk.",
    outcomes: ["Auditoriya və problem xəritəsi", "Məhsul prioritetləri və MVP çərçivəsi", "Ölçülə bilən uğur meyarları"],
    deliverables: [
      { title: "Kəşf workshop-u", text: "Komandanızla hədəfləri, riskləri və imkanları topladığımız fokuslu sessiya.", icon: "users" },
      { title: "Məhsul yol xəritəsi", text: "Prioritetləri və mərhələləri aydınlaşdıran real inkişaf planı.", icon: "layers" },
      { title: "Təklifin dəqiqləşdirilməsi", text: "İstifadəçiyə verdiyiniz dəyəri sadə və fərqlənən formada qururuq.", icon: "spark" },
    ],
    related: [
      { title: "Biznes analizi", text: "Proseslərinizi və imkanları birlikdə araşdıraq.", href: "/biznes-analizi", icon: "chart" },
      { title: "Veb tətbiqlər", text: "Planı işlək məhsula çevirin.", href: "/veb-tetbiqleri", icon: "code" },
      { title: "Startaplar üçün", text: "MVP-dən bazara qədər dəstək.", href: "/startaplar-ucun", icon: "rocket" },
    ],
  }),
  "veb-tetbiqleri": createPage({
    slug: "veb-tetbiqleri",
    eyebrow: "Development",
    title: "Biznesinizə uyğun",
    highlight: "sürətli və çevik veb tətbiqlər.",
    description: "Mürəkkəb iş axınlarını sadələşdirən, genişlənməyə hazır və etibarlı məhsullar hazırlayırıq.",
    image: "/qrafik-dizayn/Back-End_png.webp",
    intro: "Texnologiya məqsəd deyil, işinizi daha rahat görmək üçün vasitədir. Məhsulun arxitekturasını indiki ehtiyacınıza və sabahkı böyümənizə uyğun qururuq.",
    outcomes: ["Responsive və istifadəsi rahat interfeys", "Aydın, genişlənən kod arxitekturası", "Əsas biznes alətlərinizlə etibarlı inteqrasiya"],
    deliverables: [
      { title: "Frontend development", text: "Sürətli, əlçatan və bütün cihazlarda işləyən məhsul təcrübəsi.", icon: "code" },
      { title: "Backend sistemləri", text: "Məlumat, istifadəçi və proseslər üçün dayanıqlı məntiq qatı.", icon: "layers" },
      { title: "Keyfiyyət təminatı", text: "Real ssenarilər, performans və təhlükəsizlik yoxlamaları.", icon: "shield" },
    ],
    related: [
      { title: "API inteqrasiyaları", text: "Alət və sistemlərinizi birləşdirin.", href: "/api-inteqrasiyalari", icon: "layers" },
      { title: "Texniki dəstək", text: "Məhsulunuzu davamlı inkişaf etdirin.", href: "/texniki-destek", icon: "shield" },
      { title: "Biznes həlləri", text: "Əməliyyatları rəqəmsallaşdırın.", href: "/biznes-helleri", icon: "chart" },
    ],
  }),
  "frontend-development": createPage({
    slug: "frontend-development",
    eyebrow: "Frontend Development",
    title: "İstifadəçiyə yaxın,",
    highlight: "sürətli və rahat veb təcrübələri.",
    description: "React və Next.js ilə sürətli yüklənən, əlçatan və bütün ekranlarda ardıcıl işləyən frontend tətbiqləri hazırlayırıq.",
    image: "/qrafik-dizayn/Graphic-Design-1_png.webp",
    intro: "Frontend yalnız görünüş deyil. İstifadəçinin gördüyü hər addımı, məlumatın vəziyyətini və məhsulun sürət hissini birləşdirən tətbiq qatıdır.",
    outcomes: ["Bütün cihazlarda ardıcıl və əlçatan istifadəçi təcrübəsi", "SEO və sürət üçün düzgün render strategiyası", "Backend komandası ilə tiplənmiş və aydın inteqrasiya"],
    deliverables: [
      { title: "Komponent sistemi", text: "Məhsul böyüdükcə də ardıcıl qalan təkrarlana bilən UI komponentləri.", icon: "code" },
      { title: "Next.js tətbiqi", text: "Marşrutlar, render, yüklənmə vəziyyətləri və performans üçün müasir tətbiq skeleti.", icon: "rocket" },
      { title: "Frontend keyfiyyəti", text: "Responsivlik, əlçatanlıq və əsas istifadəçi ssenariləri üzrə sistemli yoxlama.", icon: "shield" },
    ],
    related: [
      { title: "UI/UX dizayn", text: "Dizayn sistemini işlək interfeysə çevirin.", href: "/ui-ux-dizayn", icon: "pen" },
      { title: "Backend development", text: "Etibarlı server məntiqi və məlumat qatını qurun.", href: "/backend-development", icon: "layers" },
      { title: "API inteqrasiyaları", text: "Frontend-i biznes alətlərinizlə birləşdirin.", href: "/api-inteqrasiyalari", icon: "code" },
    ],
  }),
  "backend-development": createPage({
    slug: "backend-development",
    eyebrow: "Backend Development",
    title: "Məhsulun arxasında duran,",
    highlight: "etibarlı və genişlənən sistemlər.",
    description: "Node.js, Python və düzgün məlumat arxitekturası ilə tətbiqinizin məntiqini, təhlükəsizliyini və davamlılığını qururuq.",
    image: "/qrafik-dizayn/Back-End_png.webp",
    intro: "Backend istifadəçinin görmədiyi, lakin məhsulun etibarlılığını müəyyən edən qatı təşkil edir: məlumat, səlahiyyətlər, inteqrasiyalar və biznes qaydaları burada idarə olunur.",
    outcomes: ["Dəqiq biznes qaydaları və təhlükəsiz API-lər", "Məlumat həcmi artdıqca dayanıqlı qalan arxitektura", "Yayım və müşahidə üçün idarəolunan server mühiti"],
    deliverables: [
      { title: "API və servis məntiqi", text: "Məhsul qaydalarını və məlumat axınını aydın endpoint-lər və modullar ilə qururuq.", icon: "code" },
      { title: "Məlumat bazası", text: "Etibarlı məlumat modeli, optimallaşdırılmış sorğular və idarə olunan migrasiyalar.", icon: "layers" },
      { title: "Təhlükəsiz yayım", text: "Mühit dəyişənləri, giriş nəzarəti, loglama və stabil release prosesi.", icon: "shield" },
    ],
    related: [
      { title: "Frontend development", text: "İstifadəçi təcrübəsini sürətli tətbiq qatında qurun.", href: "/frontend-development", icon: "code" },
      { title: "API inteqrasiyaları", text: "Xarici sistemləri etibarlı şəkildə qoşun.", href: "/api-inteqrasiyalari", icon: "layers" },
      { title: "Texniki dəstək", text: "Yayımdan sonra sistemi nəzarətdə saxlayın.", href: "/texniki-destek", icon: "shield" },
    ],
  }),
  "ui-ux-dizayn": createPage({
    slug: "ui-ux-dizayn",
    eyebrow: "UI/UX dizayn",
    title: "İstifadəçinin anladığı",
    highlight: "təcrübələr hazırlayırıq.",
    description: "Estetikanı, brendi və istifadə rahatlığını birləşdirərək məhsulunuzun hər ekranını məqsədyönlü qururuq.",
    image: "/qrafik-dizayn/Graphic-Design-1_png.webp",
    intro: "Yaxşı interfeys izah istəmir. İstifadəçinin növbəti addımını təbii hiss etdirməli, eyni zamanda brendinizin xarakterini qorumalıdır.",
    outcomes: ["İstifadəçi ssenarilərinə əsaslanan informasiya arxitekturası", "Brendə uyğun, ardıcıl vizual sistem", "Developer üçün dəqiq və tətbiq edilə bilən dizayn faylları"],
    deliverables: [
      { title: "UX araşdırması", text: "İstifadəçi ehtiyaclarını və qərar nöqtələrini nəzərə alan ekran məntiqi.", icon: "users" },
      { title: "UI sistem", text: "Rəng, tipoqrafiya və komponentlərlə ardıcıl brend təcrübəsi.", icon: "pen" },
      { title: "Prototip və test", text: "İnkişafdan əvvəl əsas ssenariləri yoxlayan interaktiv model.", icon: "spark" },
    ],
    related: [
      { title: "E-commerce dizaynı", text: "Alış yolunu daha sadə edin.", href: "/e-commerce-dizayni", icon: "layers" },
      { title: "Landing səhifələr", text: "Mesajı konversiyaya çevirin.", href: "/landing-sehifeler", icon: "rocket" },
      { title: "Veb tətbiqlər", text: "Dizaynı sürətli məhsula çevirin.", href: "/veb-tetbiqleri", icon: "code" },
    ],
  }),
  "e-commerce-dizayni": createPage({
    slug: "e-commerce-dizayni",
    eyebrow: "E-commerce dizaynı",
    title: "Daha rahat alış üçün",
    highlight: "hər addımı düşünülmüş mağazalar.",
    description: "Məhsul kəşfindən ödənişə qədər etibarlı, sürətli və konversiya fokuslu onlayn alış təcrübələri qururuq.",
    image: "/qrafik-dizayn/Digital-Memarliq_png.webp",
    intro: "Onlayn mağazada hər artıq addım itirilmiş fürsət ola bilər. İstifadəçinin qərarını, etibar hissini və alış ritmini diqqətlə dizayn edirik.",
    outcomes: ["Aydın məhsul kateqoriyaları və axtarış", "Mobil üçün optimallaşdırılmış alış axını", "Ödənişə qədər etibar yaradan mikrodetallar"],
    deliverables: [
      { title: "Kataloq təcrübəsi", text: "Məhsulu tapmağı, müqayisə etməyi və seçməyi asanlaşdıran struktur.", icon: "layers" },
      { title: "Alış axını", text: "Səbətdən ödənişə qədər sürtünməni azaldan sadə addımlar.", icon: "rocket" },
      { title: "Dizayn sistemi", text: "Bütün ekranlarda etibarlı və ardıcıl mağaza təcrübəsi.", icon: "pen" },
    ],
    related: [
      { title: "UI/UX dizayn", text: "İstifadəçiyə fokuslanan interfeys qurun.", href: "/ui-ux-dizayn", icon: "pen" },
      { title: "SEO və performans", text: "Daha sürətli və görünən mağaza.", href: "/seo-ve-performans", icon: "rocket" },
      { title: "API inteqrasiyaları", text: "Ödəniş və CRM sistemlərini qoşun.", href: "/api-inteqrasiyalari", icon: "layers" },
    ],
  }),
  "landing-sehifeler": createPage({
    slug: "landing-sehifeler",
    eyebrow: "Landing səhifələr",
    title: "Kampaniya mesajını",
    highlight: "real hərəkətə çevirin.",
    description: "Diqqəti toplamaq, dəyəri izah etmək və istifadəçini növbəti addıma aparmaq üçün fokuslu landing səhifələr hazırlayırıq.",
    image: "/qrafik-dizayn/2D-Motion_png.webp",
    intro: "Güclü landing səhifə qısa müddətdə inandırır. Mətn, vizual iyerarxiya və CTA-ları eyni məqsəd ətrafında qururuq.",
    outcomes: ["Aydın təklif və fərqləndirici mesaj", "Konversiyaya fokuslu vizual iyerarxiya", "Reklam və analitika ilə işləyən texniki baza"],
    deliverables: [
      { title: "Mesaj arxitekturası", text: "Dəyər təklifinizi ilk ekranda başa düşülən formaya salırıq.", icon: "spark" },
      { title: "Konversiya dizaynı", text: "CTA, sosial sübut və qərar nöqtələrini doğru yerdə yerləşdiririk.", icon: "pen" },
      { title: "Sürətli yayıma hazırlıq", text: "Kampaniya üçün performanslı və bütün ekranlara uyğun icra.", icon: "rocket" },
    ],
    related: [
      { title: "SEO və performans", text: "Kampaniya trafiğini sürətli qarşılayın.", href: "/seo-ve-performans", icon: "rocket" },
      { title: "Məhsul analitikası", text: "Konversiya nöqtələrini ölçün.", href: "/mehsul-analitikasi", icon: "chart" },
      { title: "UI/UX dizayn", text: "Məhsul təcrübəsini bütün ekranlara daşıyın.", href: "/ui-ux-dizayn", icon: "pen" },
    ],
  }),
  "seo-ve-performans": createPage({
    slug: "seo-ve-performans",
    eyebrow: "SEO və performans",
    title: "Daha sürətli sayt,",
    highlight: "daha aydın nəticə.",
    description: "Texniki performansı, axtarış görünürlüğünü və istifadəçi təcrübəsini eyni planla təkmilləşdiririk.",
    image: "/qrafik-dizayn/Digital-Marketing_png.webp",
    intro: "Sürət sadəcə texniki göstərici deyil; etibara, axtarış görünürlüğünə və konversiyaya birbaşa təsir edir. Ən vacib imkanları ölçüb prioritetləşdiririk.",
    outcomes: ["Sürət və Core Web Vitals üçün texniki yol xəritəsi", "Axtarış niyyətinə uyğun məzmun strukturu", "Davamlı izlənən performans göstəriciləri"],
    deliverables: [
      { title: "Texniki audit", text: "Performans, indekslənmə və istifadə təcrübəsindəki maneələri aşkar edirik.", icon: "shield" },
      { title: "SEO arxitekturası", text: "Səhifə və məzmun strukturunu axtarış niyyətinə uyğun qururuq.", icon: "layers" },
      { title: "Ölçmə planı", text: "Əsas davranış və nəticələri izləmək üçün analitika sistemi.", icon: "chart" },
    ],
    related: [
      { title: "Məhsul analitikası", text: "Performans data-sını qərarlara çevirin.", href: "/mehsul-analitikasi", icon: "chart" },
      { title: "Texniki dəstək", text: "Saytınızı davamlı optimallaşdırın.", href: "/texniki-destek", icon: "shield" },
      { title: "Landing səhifələr", text: "Sürətli kampaniya təcrübəsi qurun.", href: "/landing-sehifeler", icon: "rocket" },
    ],
  }),
  "api-inteqrasiyalari": createPage({
    slug: "api-inteqrasiyalari",
    eyebrow: "API inteqrasiyaları",
    title: "Alətləriniz birlikdə",
    highlight: "daha yaxşı işləsin.",
    description: "CRM, ödəniş, analitika və daxili sistemlərinizi təhlükəsiz, idarəolunan axında birləşdiririk.",
    image: "/qrafik-dizayn/Cyber-Sec_png.webp",
    intro: "Ayrı sistemlər komandanın ritmini yavaşlada bilər. Vacib məlumatların doğru anda, doğru yerdə görünməsi üçün məhsulunuzun əlaqələrini dizayn edirik.",
    outcomes: ["Əməliyyat üçün vahid məlumat axını", "Etibarlı üçüncü tərəf servis bağlantıları", "Genişlənməyə açıq inteqrasiya arxitekturası"],
    deliverables: [
      { title: "İnteqrasiya xəritəsi", text: "Sistemlər, məlumatlar və avtomatlaşdırıla bilən nöqtələrin aydın görünüşü.", icon: "layers" },
      { title: "Təhlükəsiz bağlantı", text: "Səlahiyyətlər və məlumat ötürülməsi üçün dayanıqlı texniki yanaşma.", icon: "shield" },
      { title: "İstifadəçi təcrübəsi", text: "Arxa plandakı mürəkkəbliyi istifadəçi üçün sadə ekranlarda saxlayırıq.", icon: "pen" },
    ],
    related: [
      { title: "Veb tətbiqlər", text: "İnteqrasiyaları məhsulunuzun bir hissəsinə çevirin.", href: "/veb-tetbiqleri", icon: "code" },
      { title: "Biznes analizi", text: "Ən vacib avtomatlaşdırma fürsətlərini tapın.", href: "/biznes-analizi", icon: "chart" },
      { title: "Texniki dəstək", text: "Mövcud bağlantıları gücləndirin.", href: "/texniki-destek", icon: "shield" },
    ],
  }),
  "texniki-destek": createPage({
    slug: "texniki-destek",
    eyebrow: "Texniki dəstək",
    title: "Saytınız yayımdan sonra da",
    highlight: "etibarlı qalsın.",
    description: "Mövcud məhsulunuzu izləyir, təkmilləşdirir və biznesinizlə paralel inkişaf etdiririk.",
    image: "/qrafik-dizayn/Cyber-Sec_png.webp",
    intro: "Yayım bir son deyil. Təhlükəsizlik yeniləmələri, performans, məzmun ehtiyacları və yeni funksiyalar üçün etibarlı inkişaf ritmi yaradırıq.",
    outcomes: ["Stabil və izlənən rəqəmsal məhsul", "Planlı yeniləmələr və risklərin erkən aşkarlanması", "Yeni ehtiyaclara çevik cavab verən texniki tərəfdaşlıq"],
    deliverables: [
      { title: "Monitorinq", text: "Performans və kritik texniki siqnalları davamlı izləyirik.", icon: "chart" },
      { title: "Təhlükəsizlik", text: "Yeniləmələr, ehtiyat planlar və düzgün giriş idarəetməsi.", icon: "shield" },
      { title: "Məhsul inkişafı", text: "Yeni imkanları prioritetləşdirib davamlı şəkildə yayımlayırıq.", icon: "rocket" },
    ],
    related: [
      { title: "SEO və performans", text: "Sürət və görünürlük üçün optimallaşdırma.", href: "/seo-ve-performans", icon: "rocket" },
      { title: "API inteqrasiyaları", text: "Sistemlərinizi etibarlı bağlayın.", href: "/api-inteqrasiyalari", icon: "layers" },
      { title: "Biznes həlləri", text: "Məhsulunuz üçün növbəti addımı planlayın.", href: "/biznes-helleri", icon: "chart" },
    ],
  }),
  "mehsul-analitikasi": createPage({
    slug: "mehsul-analitikasi",
    eyebrow: "Məhsul analitikası",
    title: "Davranış məlumatını",
    highlight: "daha düzgün qərarlara çevirin.",
    description: "İstifadəçinin məhsulunuzla necə qarşılıqlı əlaqə qurduğunu görün, anlayın və inkişaf qərarlarını faktlara əsaslandırın.",
    image: "/qrafik-dizayn/Data-Analitika_png.webp",
    intro: "Bütün metriklər eyni dəyəri vermir. Biz biznes hədəfinizlə əlaqəli davranış siqnallarını müəyyənləşdirir, onları anlaşılan dashboard və qərarlara çeviririk.",
    outcomes: ["Biznes hədəfinə bağlı ölçmə çərçivəsi", "Funnel və istifadəçi ssenarilərinin aydın görünüşü", "İnkişaf prioritetləri üçün sağlam əsas"],
    deliverables: [
      { title: "Ölçmə strategiyası", text: "Nəyin və niyə ölçüləcəyini məhsul hədəfi ətrafında dəqiqləşdiririk.", icon: "chart" },
      { title: "Hadisə xəritəsi", text: "Vacib istifadəçi addımlarını düzgün və ardıcıl izləmə planı.", icon: "layers" },
      { title: "İnsayt və optimizasiya", text: "Rəqəmləri əməli inkişaf qərarlarına çevirən periodik analiz.", icon: "spark" },
    ],
    related: [
      { title: "Biznes analizi", text: "Məlumatı proses və hədəflərlə birləşdirin.", href: "/biznes-analizi", icon: "chart" },
      { title: "SEO və performans", text: "Texniki nəticələri görünən edin.", href: "/seo-ve-performans", icon: "rocket" },
      { title: "Landing səhifələr", text: "Kampaniya performansını dəqiq ölçün.", href: "/landing-sehifeler", icon: "pen" },
    ],
  }),
  "biznes-analizi": createPage({
    slug: "biznes-analizi",
    eyebrow: "Biznes analizi",
    title: "Doğru həll üçün əvvəlcə",
    highlight: "doğru problemi anlayırıq.",
    description: "Məqsədlərinizi, iş axınlarınızı və istifadəçi ehtiyaclarını araşdıraraq investisiyanızın ən dəyərli yerini müəyyənləşdiririk.",
    image: "/qrafik-dizayn/it-business_png.webp",
    intro: "Rəqəmsal məhsul qərarı təkcə funksiyalar siyahısı deyil. Mövcud prosesi, komandanın ehtiyacını və istifadəçinin yolunu anlamaqla düzgün investisiya nöqtəsini tapırıq.",
    outcomes: ["Mövcud proses və ağrı nöqtələrinin xəritəsi", "Rəqəmsallaşdırma üçün real prioritetlər", "Biznes nəticəsinə bağlanan məhsul tələbləri"],
    deliverables: [
      { title: "Proses analizi", text: "Əməliyyat axınlarındakı vaxt itkisini və təkrarlanan işi müəyyənləşdiririk.", icon: "chart" },
      { title: "Tələblərin formalaşdırılması", text: "Komandanın ehtiyacını aydın, icra edilə bilən məhsul çərçivəsinə salırıq.", icon: "layers" },
      { title: "İmkan xəritəsi", text: "Sürətli nəticə verəcək inkişaf sahələrini prioritetləşdiririk.", icon: "rocket" },
    ],
    related: [
      { title: "Məhsul strategiyası", text: "İmkanları fokuslu yol xəritəsinə çevirin.", href: "/mehsul-strategiyasi", icon: "spark" },
      { title: "API inteqrasiyaları", text: "Əməliyyatları bir-birinə bağlayın.", href: "/api-inteqrasiyalari", icon: "layers" },
      { title: "Veb tətbiqlər", text: "Analizi real sistemə çevirin.", href: "/veb-tetbiqleri", icon: "code" },
    ],
  }),
};

export const SITE_PAGE_SLUGS = Object.keys(SITE_PAGES);
