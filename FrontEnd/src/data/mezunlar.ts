export const WP = "https://code.edu.az/wp-content";

export const HERO_IMAGES = [
  {
    "person": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "company": "https://code.edu.az/wp-content/uploads/2024/02/PASHA-logo-2_png.webp"
  },
  {
    "person": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "company": "https://code.edu.az/wp-content/uploads/2024/02/Gooogle-Logo-3_png.webp"
  },
  {
    "person": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "company": "https://code.edu.az/wp-content/uploads/2024/02/Kontakt-logo-2_png.webp"
  },
  {
    "person": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "company": "https://code.edu.az/wp-content/uploads/2024/02/Bolt-Logo-3_png.webp"
  },
  {
    "person": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "company": "https://code.edu.az/wp-content/uploads/2024/03/Kapital-Bank_png.webp"
  },
  {
    "person": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "company": "https://code.edu.az/wp-content/uploads/2024/02/evido-1_png.webp"
  },
  {
    "person": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "company": "https://code.edu.az/wp-content/uploads/2024/03/Azercell-1_png.webp"
  },
  {
    "person": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "company": "https://code.edu.az/wp-content/uploads/2024/03/unit-99999_png.webp"
  }
] as const;

export const STATS = [
  {
    value: "7+",
    text: "Rəqəmsal məhsul təcrübəmizin illəri",
  },
  {
    value: "120+",
    text: "Həyata keçirdiyimiz veb layihələr",
  },
  {
    value: "94%",
    text: "Uzunmüddətli əməkdaşlıq nisbəti",
  },
  {
    value: "18",
    text: "Dizayn və development mütəxəssisi",
  },
] as const;

export const PARTNER_SLIDE = {
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&h=900&q=80",
  logo: `${WP}/uploads/2024/02/academy_png.webp`,
  title: "Studio Day at Webora",
  text: "Komandamız və tərəfdaşlarımızla açıq studio günündə yeni layihələri, dizayn prosesini və nəticələri birlikdə nəzərdən keçirdik.",
  count: "1/8",
} as const;

export const BLOG_TABS = [
  { id: "dizayn", label: "Dizayn" },
  { id: "digital-marketinq", label: "E-commerce" },
  { id: "it-ve-kibertehlukesizlik", label: "Texniki xidmət" },
  { id: "it-ve-kiber-tehlukesizlik", label: "Veb development" },
] as const;

export type BlogCard = {
  id: string;
  name: string;
  role: string;
  quote: string;
  img: string;
};

export const BLOG_CARDS: Record<string, BlogCard[]> = {
  "dizayn": [
    {
      "id": "4261",
      "name": "Gülsüm Məmmədova",
      "role": "PAŞA Bank",
      "quote": "\"İlk dəfə Webora-ə gəldiyimdə, mühiti, əməkdaşları, müəllimlərini gördüm və qərara gəldim ki, burda oxumaq istəyirəm.\"...",
      "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "4006",
      "name": "Bahaddin Məmmədli",
      "role": "Havas Azerbaijan",
      "quote": "\"Burada həm təhsilin keyfiyyəti, həm də şərait insanı öyrənməyə vadar edir. Qısaca desəm, şəffaf, dolğun dərs planı, xoş münasibət və gözəl insanlar :) \"...",
      "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_fatime-elizade",
      "name": "Fatimə Əlizadə",
      "role": "Məhsul Dizayneri / ABB",
      "quote": "\"Webora karyera yolumda verdiyim ən doğru qərarlardan biridir. Peşəkar müəllimimdən əldə etdiyim bilik və təcrübələr bu yolda sürətli irəliləməyə və özümü daha da inkişaf etdirməyimə təkan verdi. Əlavə olaraq demək istərdim ki, səmimi mühit və xoş kollektiv sevdiyim nüanslardan idi.\"...",
      "img": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_sekine-ismayilova",
      "name": "Səkinə İsmayılova",
      "role": "UX/UI Dizayner / PAŞA Bank",
      "quote": "\"Webora keyfiyyətli təhsili, stimulativ mühiti ilə yanaşı tələbələrinə geniş bağlantılar və inkişaf imkanları təqdim edir. Bu sayədə məzunlar karyerada uğura daha çox yaxınlaşır.\" ...",
      "img": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_lamiye-huseynova-rustemli",
      "name": "Lamiyə Hüseynova-Rüstəmli",
      "role": "Junior UX specialist / ABB",
      "quote": "\"İş sahəmi UX/UI dizayna dəyişmək qərarına gələndə tərəddüd etmədən Webora-ni seçdim və qərarımda yanılmadığımı elə ilk gündən hiss elədim. Tədris gözləntilərimi üstələdi, instruktorların yanaşması, motivasiyası isə qiymətsiz idi. Onlar dizaynı həqiqətən də sevdirə bildilər!\" ...",
      "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_behruz-axundov",
      "name": "Bəhruz Axundov",
      "role": "UI/UX designer / Guavapay Limited",
      "quote": "\"Webora-nin dizayn tədrisi möhtəşəm bir təcrübə idi və mənim yaradıcılığım üçün çoxsaylı dəyərli bacarıqlar əldə etməyimə və yeni dostlar tapmağa imkan yaratdı. Dizaynı öyrənmək istəyən hər kəsə məsləhət görürəm.\"...",
      "img": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_kamran-nadirov",
      "name": "Kamran Nadirov",
      "role": "UX/UI Dizayner / ABB",
      "quote": "\"Webora-də tədris mənim karyeramda dəyişiklik yaratdı. Müəllimlərin mükəmməl təcrübəsi və praktiki yanaşması sayəsində dizayn prinsipləri ilə tanış oldum. İndi bu bilikləri real iş mühitində tətbiq edirəm. İnkişafımda yaratdığı töhvələrə görə, Webora-ə təşəkkür edirəm!\"...",
      "img": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_elmar-soltanov",
      "name": "Elmar Soltanov",
      "role": "UX/UI Specialist/ Azerconnect Group",
      "quote": "\"Webora mənə UX/UI Dizayn üzrə təhsil verərək dizayn həvəsimi reallaşdırmaqda kömək etdi. Müəllimlərimin əvəz olunmaz dəstəyi və öz inadkarlığım sayəsində uğurlu UX/UI Dizayn mütəxəssisi oldum. Dəyişiklikdən çəkinməyin və yeni fürsətləri dəyərləndirin—bu, potensialınızı ortaya çıxarmağın ...",
      "img": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_sabina-ibrahimova",
      "name": "Sabina İbrahimova",
      "role": "Qrafik Dizayner /Sea Breeze “Dream Group İnternational”",
      "quote": "\"Webora mənə qrafik dizayn sahəsində hədəflərimə inamla irəliləməyə kömək etdi. Qazandığım bilik və praktiki təcrübə inkişafımda böyük rol oynadığını deyə bilərəm. İnanıram ki, insan məsuliyyətli və intizamlı yanaşarsa, istədiyi nəticələri əldə edə bilər. Bu təcrübə mənim üçün dəyərli bir...",
      "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_murad-zeynalov",
      "name": "Murad Zeynalov",
      "role": "Qrafik Dizayner / Vibe&Wave Reklam agentliyi",
      "quote": "\"Code Azcademy-də Qrafik dizayn təhsilimi, \"Yüksək Şərəf Məzunu\" dərəcəsi ilə müvəffəqiyyətlə bitirmişəm. Təhsilimi bitirdikdən sadəcə 1 ay sonra işə başlamışam. Dizayn mənim üçün bir iş deyil. Bu bir həyat tərzidir. Webora bir muzeydir, biz yaradıcı insanlar da bu muzeydə olan ...",
      "img": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_nermin-elizade",
      "name": "Nərmin Əlizadə",
      "role": "Middle Qrafik Dizayner / Olivia Beauty&Care",
      "quote": "\"Sevdiyin işi öyrənmək həmişə maraqlı və həyəcanverici olsa da, onu daha maraqlı edən bu yolda sənə yoldaş olan şəxslər və içində olduğun mühitdir. Bu məkan məhz Webora-dir.\"...",
      "img": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_samxal-bayramov",
      "name": "Şamxal Bayramov",
      "role": "Qrafik Dizayner / Trenders Reklam agentliyi",
      "quote": "\"Sevdiyin işi öyrənmək həmişə maraqlı və həyəcanverici olsa da, onu daha maraqlı edən bu yolda sənə yoldaş olan şəxslər və içində olduğun mühitdir. Bu məkan məhz Webora-dir. \"...",
      "img": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_leman-hesenli",
      "name": "Ləman Həsənli",
      "role": "Qrafik Dizayner / Qaraj Studio",
      "quote": "\"Webora yaradıcılığı inkişaf etdirən və fərqli düşüncələrə açıq bir mühitdir. Burada yeni ideyalar yaratmaq və onları sərbəst ifadə etmək üçün sərhəd yoxdur. Hər addım insanı özünü daha da inkişaf etdirməyə və fərqli düşünməyə sövq edir.\"...",
      "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_resad-qasimli",
      "name": "Rəşad Qasımlı",
      "role": "Təsisçi, memar / Bakı Memalıq Layihələri",
      "quote": "\"Akademiyada təhsil mühiti ilə yanaşı isti ailə ortamı da mövcuddur. Barcode isə mənə ən doğma məkanlardan biridir. Çünki ilk interyer layihəm elə odur.\" ...",
      "img": "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_selale-mirzeyeva",
      "name": "Şəlalə Mirzəyeva",
      "role": "İnteryer dizayner / Freelance",
      "quote": "\"İşimi çox sevirəm və mənə bu sevgini aşılayan isə məhz insturktorlarım və daha sonra akademiyadır. Mənim üçün yaxşı təcrübə və ixtisasımın uğurlu başlanğıcı oldu.\" ...",
      "img": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_nicat-esgerov",
      "name": "Nicat Əsgərov",
      "role": "Mebel dizayner / Mutfakçı",
      "quote": "\"Webora istər təhsil, istərsə də dünya görüşü baxımından həqiqətən bir məktəbdir. Həm iş, həm də şəxsi həyatımda müsbət mənada qatqıları çox oldu. Bunun üçün bütün akademiya ailəsinə və xüsusilə Pərvin İsmayılova dərin minnətdarlığımı bildirirəm.\" ...",
      "img": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_gulnare-rustemova",
      "name": "Gülnarə Rüstəmova",
      "role": "Eksteryer dizayner / Macar Construction",
      "quote": "\"Webora sayəsində mən daha çox ilhamlandım və öyrəndim ki, hətta əsas ixtisasımdan kənarda da özümü uğurla inkişaf etdirə bilirəm. Şübhəsiz ki, akademiya mənim yeni cəhdlərim üçün düzgün qərar idi.\" ...",
      "img": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_cavadxan-eliyev",
      "name": "Cavadxan Əliyev",
      "role": "Motion Dizayner / Animoore Studio",
      "quote": "\"İlk olaraq motion dizayn tədrisini bizə təmin etdiyinə görə Webora-ə və dəyərli biliklərini bizimlə paylaşdığı üçün Ceyhun müəllimə təşəkkür edirəm. Çünki Akademiya sayəsində hazırda Animoore Studiyasında Motion dizayner olaraq çalışıram.\"...",
      "img": "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_zenfira-sultanova",
      "name": "Zenfira Sultanova",
      "role": "Motion Dizayner / Content Agency ASC",
      "quote": "\"Mənim fikrimcə Webora-nin fərqli bir aurası var. Ora düşdüyüm an özümü daha həvəsli və məqsədyönlü hiss edirəm. Bu isə məni yeni işlər görməyə daha da ilhamlandırır.\" ...",
      "img": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_ferhad-atakisiyev",
      "name": "Fərhad Atakişiyev",
      "role": "Qrafik Motion Dizayner / Evimiz",
      "quote": "\"İnstruktorların Akademiya təhsilini bitirdikdən sonra belə bizə daima dəstəyi, pozitif mühitin olması məni ən çox cəlb edən məqamlardan biridir. Webora həyatıma və karyerama rəng qatdı.\"...",
      "img": "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_aftandil-eliyev",
      "name": "Aftandil Əliyev",
      "role": "Motion Dizayner / İnci Group LLC",
      "quote": "\"Webora mənim Motion Dizayn sahəsi üzrə ixtisaslaşmağımda böyük rol oynadı. Mən məqsədlərimdən birinə akademiya ilə çatdım. Sıra növbəti məqsədlərdədi.\"...",
      "img": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_eziz-heziyev",
      "name": "Əziz Həziyev",
      "role": "Motion designer / Artmood agency",
      "quote": "\"Webora-də Motion Dizayn məzunu olduğum üçün çox məmnunam. Bura mənim üçün bir tədris müəssisəsindən daha artığıdır. Karyera və şəxsi həyatımdakı bir çox yeniliyi Akademiyaya borcluyam. Yaxşı ki, yolum buradan keçib.\"...",
      "img": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_rima-elizade",
      "name": "Rima Əlizadə",
      "role": "Qrafik Dizayner / McCan",
      "quote": "\"Məqsədiniz varsa, arxasınca getmək lazımdır. Çünki zaman keçdikdən sonra başa düşürük ki, artıq başqa bir fürsətimiz yoxdur. Həqiqətən, çalışqan birisinizsə, bu yolu getməyə dəyər.\" ...",
      "img": "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_turqay-qasimli",
      "name": "Turqay Qasımlı",
      "role": "Lead Product Manager / Yelo Bank",
      "quote": "\"Xoşbəxt insan sevdiyi işlə məşğul olandır. Sevdiyin işlə məşğulsansa, uğur qaçınılmazdır.\" ...",
      "img": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_ruqiye-babayeva",
      "name": "Ruqiyə Babayeva",
      "role": "Qrafik Dizayner / Webora",
      "quote": "\"Əsl uğur işə həvəslə yanaşmaq və həyatın hər anına yaradıcılıq gətirməklə mümkündür. Webora məqsədimə çatmağımda mənə lazımi bilik və bacarıqlar verərək, bu uğura nail olmağımda mühüm rol oynadı.\"...",
      "img": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    }
  ],
  "digital-marketinq": [
    {
      "id": "ty_huru-ismayilova",
      "name": "Hürü İsmayılova",
      "role": "Digital Marketer / Google",
      "quote": "\"Webora-də aldığım biliklər iş prosesini mənim üçün asanlaşdırdı və digital marketing sahəsində istifadə oluna biləcək alətlər haqqında yeni məlumatlar verdi.\"...",
      "img": "https://images.unsplash.com/photo-1594744806689-b65be6516867?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_konul-hesenova",
      "name": "Könül Həsənova",
      "role": "Performance Marketing Specialist / Bolt, Tallin",
      "quote": "\"Webora vasitəsilə digital marketing sahəsi ilə tanış olmağım “hansı sahə üzrə karyera qurmaq istəyirəm?” sualına dəqiq cavab tapmağıma səbəb oldu.\"...",
      "img": "https://images.unsplash.com/photo-1580894732447-12e82d269e26?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_sehla-orucova",
      "name": "Şəhla Orucova",
      "role": "Senior Digital Marketing Specialist / ABB",
      "quote": "\"Webora-də təhsil almaq qərarını verdiyimdə mənim üçün bu qədər vacib bir yer olacağını düşünməmişdim. Çünki zamanla akademiya, sadəcə, gəlib tədris alıb getdiyiniz bir yerdən bütün gününüzü keçirdiyiniz doğma bir məkana çevrilir. Bu da öz növbəsində yeni dostluqlar, əlaqələr yaradır....",
      "img": "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_lale-babasova",
      "name": "Lalə Babaşova",
      "role": "Digital Marketing Specialist / Kazunion Turoperator Azerbaijan by Rustar",
      "quote": "\"Digital marketinqin sərhədsiz dünyasını kəşf etmək, bazarda olan böyük markaların hədəflərinin reallaşmasının bir parçası olmaq, hər gün yenidən yaşadığım həyəcanlı təcrübədir. Bu bənzərsiz təcrübədə ən böyük və ilk yol yoldaşım Webora olduğu üçün şanslıyam.\"...",
      "img": "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_tomris-bedelova",
      "name": "Tomris Bədəlova",
      "role": "Digital Marketing Expert / Kapital Bank",
      "quote": "\"Webora-də aldığım təhsil nəinki mənə yeni biliklər, həmçinin, yeni iş, yeni insanlar qazandırdı və böyük imkanlar yaratdı! Bir sözlə, bir tədrisdən daha çoxu!\"...",
      "img": "https://images.unsplash.com/photo-1529626456364-403cf4acb0ca?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_yusif-ceferzade",
      "name": "Yusif Cəfərzadə",
      "role": "Digital Marketing Specialist / HAVAS",
      "quote": "\"Həmişə yaşadığım dünyanın sərhədləri mənə maraqlı gəlib. Amma biraz təmbələm. Oturduğum yerdən öz dünyamı necə tanıya bilərəm?-deyə düşünəndə özümü Code-da tapdım. Oradakı təhsilim sayəsində indi dünya mənim əlimin altındadır. Sərhədləri özüm təyin edirəm.\"...",
      "img": "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    }
  ],
  "it-ve-kibertehlukesizlik": [
    {
      "id": "ty_vidadi-kerimov",
      "name": "Vidadi Kərimov",
      "role": "Penetration Tester / PAŞA Bank",
      "quote": "\"Peşəkar instruktor heyətinin tətbiq etdiyi effektiv tədris metodu sayəsində qazandığım təcrübə və bilik hal-hazırki iş həyatımda müxtəlif kompleks problemlərin həll olunmasında mənə böyük dəstək olur.\"...",
      "img": "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_ferrux-memmedov",
      "name": "Fərrux Məmmədov",
      "role": "Lead AppSec Penetration Tester / Mərkəzi Bank",
      "quote": "\"Fəxrlə bildirmək istərdim ki, mən də Akademiyamın Technest proqramı çərçivəsində açılmış ilk Advanced Cyber Security qrupunun məzunlarındanam. Tədris zamanı yarış tipli hücum strategiyaları planlayan komandanın tərkibində yer alaraq, bilik və bacarıqlarımı inkişaf etdirdim və bu gün ölkənin ən...",
      "img": "https://images.unsplash.com/photo-1545167622-3a6ac456efa8?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_nahid-aslanov",
      "name": "Nahid Aslanov",
      "role": "Cybersecurity Engineer/ Azercell",
      "quote": "\"Webora-də aldığım təhsilin karyerama müsbət təsirini ilk dəfə müsahibələr zamanı texniki suallara çox rahat doğru cavab verə bildiyim anda başa düşdüm. Sonrasında başladığım təcrübə proqramında öyrəndiyim bilikləri bir başa tətbiq etməyə başladığımı görəndə doğru yolda olduğuma əmin oldu...",
      "img": "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_nicat-dadasov",
      "name": "Nicat Dadaşov",
      "role": "Lead Cyber Security Analyst, Financial CERT Analyst / Mərkəzi Bank",
      "quote": "Uzun müddət kareyramı bu sahə üzrə qurmağa çalışdım və artıq gecdir dediyim anda Webora-dən Kiber Təhlükəsizlik tədrisində təqaüdlə iştirak haqqı qazandım. Akademiyanın mənə öyrətdiyi ən böyük dərs \"xəyallarına çatmaq istəyirsənsə, doğru zamanda doğru yerdə olmalısan\" oldu....",
      "img": "https://images.unsplash.com/photo-1531891437562-339e94fb48d3?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_nesibe-sahverdiyeva",
      "name": "Nəsibə Şahverdiyeva",
      "role": "Information Security Management Specialist / Digital Medical Solutions LLC under TABIB",
      "quote": "\"Bu sertifikat peşəkar inkişafımda dönüm nöqtəsi oldu. İşimdə inamım artdı və yeni imkanlar açıldı. Webora-yə dəstəyə görə minnətdaram.\"...",
      "img": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_nihad-huseynov",
      "name": "Nihad Hüseynov",
      "role": "Linux Administrator / Azerconnect Group",
      "quote": "“Webora sayəsində RHCSA beynəlxalq sertifikatını əldə etdim. İşdə üzərimə daha böyük məsuliyyət götürürəm və peşəkar inkişafımı hər gün daha aydın görürəm.\"...",
      "img": "https://images.unsplash.com/photo-1564563426770-45994ea04b23?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_yaqub-haciyev",
      "name": "Yaqub Hacıyev",
      "role": "Cybersecurity Engineer / GuardianLab",
      "quote": "\"Webora sayəsində Red Hat beynəlxalq imtahanına həm hazır oldum, həm də rahatlıqla əldə etdim. Bu sertifikat karyeramda sürətli irəliləyişə yol açdı.\"...",
      "img": "https://images.unsplash.com/photo-1557862921-37829c790f32?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_nesiraga-besirov",
      "name": "Nəsirağa Bəşirov",
      "role": "Information Security GRC Analyst / BirBank",
      "quote": "\"RHCSA məni sistem tərəfinə daha yaxınlaşdırdı. Webora-nin tədris proqramı və beynəlxalq sertifikat isə işimdə etibarı artırdı.\"...",
      "img": "https://images.unsplash.com/photo-1615109398623-883730ca57f6?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_nezrin-memmedova",
      "name": "Nəzrin Məmmədova",
      "role": "Köməkçi təlimçi/ Webora",
      "quote": "\"Webora-nin dəstəyi ilə Red Hat sertifikatını qazandım. Dərslərimə əlavə peşəkarlıq gətirdi və karyera planımda ciddi addım oldu.\"...",
      "img": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    }
  ],
  "it-ve-kiber-tehlukesizlik": [
    {
      "id": "4029",
      "name": "Qurban Şahinoğlu",
      "role": "Cyberpoint SOC",
      "quote": "\"Tədris mərkəninə yaxınlaşdıqda həddindən çox tələbənin olduğunu gördüm və düşündüm ki, bu qədər insan bir yerdə səbəbsiz ola bilməz. İlk olaraq tələbələrin ingilis dili biliklərinin hansı səviyyədə olduğunu ölçmək üçün testə cəlb olunduğunu görəndə artıq anladım ki, doğru yerdəyəm.\"...",
      "img": "https://images.unsplash.com/photo-1528892957994-2d4c9b77a18a?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "4021",
      "name": "Ramil Əyyubov",
      "role": "Guavapay",
      "quote": "\"Lotoreya idi. Sistem Administratorluğu ilə bağlı hər hansı bir anlayışım yox idi. Bəxtimi sınadım, həm bəxtimi, həm də akademiyanı :))\"...",
      "img": "https://images.unsplash.com/photo-1499996818299-57acbce5d009?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_vidadi-kerimov",
      "name": "Vidadi Kərimov",
      "role": "Cyber Security Specialist / eManat",
      "quote": "\"Peşəkar instruktor heyətinin tətbiq etdiyi effektiv tədris metodu sayəsində qazandığım təcrübə və bilik hal-hazırki iş həyatımda müxtəlif kompleks problemlərin həll olunmasında mənə böyük dəstək olur.\"...",
      "img": "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_isa-seyfullayev",
      "name": "İsa Seyfullayev",
      "role": "Cyber Security Analyst / Caspian Innovation Center",
      "quote": "\"Technest təqaüd proqramı çərçivəsində Webora-nin elan etdiyi ilk Advanced Cyber Security qrupunun iştirakçısı və məzunlarından biri olduğum üçün çox şadam. Buradan qazandığım gözəl dostluqlar və karyeramda istifadə edə biləcəyim bilik və təcrübələr üçün minnətdaram.\"...",
      "img": "https://images.unsplash.com/photo-1480457947956-aeef9dd0e489?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_ferrux-memmedov",
      "name": "Fərrux Məmmədov",
      "role": "Penetration Tester / PAŞA Bank",
      "quote": "\"Fəxrlə bildirmək istərdim ki, mən də Akademiyamın Technest proqramı çərçivəsində açılmış ilk Advanced Cyber Security qrupunun məzunlarındanam. Tədris zamanı yarış tipli hücum strategiyaları planlayan komandanın tərkibində yer alaraq, bilik və bacarıqlarımı inkişaf etdirdim və bu gün ölkənin ən...",
      "img": "https://images.unsplash.com/photo-1545167622-3a6ac456efa8?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_mirmehdi-ibrahimzade",
      "name": "Mirmehdi İbrahimzadə",
      "role": "Incident Responder / Paşa Bank",
      "quote": "\"Sevinirəm ki, mən də 14 nəfərlə tədrisə başlayıb, yüksək nəticə ilə bitirən və ən qısa zamanda işə düzələn 13 nəfərdən biri oldum. Technest təqaüd proqramı çərçivəsində açılmış ilk Advanced Cyber Security qrupunun tələbəsi olaraq, kiber hücumlara qarşı müdafiə sistemlərinin təkmilləşdirilməsi,...",
      "img": "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=800&h=800&q=80&crop=faces"
    },
    {
      "id": "ty_nahid-aslanov",
      "name": "Nahid Aslanov",
      "role": "Cyber Security Analyst / Azercell",
      "quote": "\"Webora-də aldığım təhsilin karyerama müsbət təsirini ilk dəfə müsahibələr zamanı texniki suallara çox rahat doğru cavab verə bildiyim anda başa düşdüm. Sonrasında başladığım təcrübə proqramında öyrəndiyim bilikləri bir başa tətbiq etməyə başladığımı görəndə doğru yolda olduğuma əmin oldu...",
      "img": "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_togrul-huseynli",
      "name": "Toğrul Hüseynli",
      "role": "Cyber Security Engineer / SmartIT",
      "quote": "\"Webora-də ilk olaraq Şəbəkə Administratorluğu, daha sonra isə Advanced Cyber Security üzrə aldığım tədrislər karyerama uğurlu başlanğıc etməyimdə birbaşa köməklik göstərdi. Bunun nəticəsi olaraq Kiber təhlükəsizlik sahəsində iştirak etdiyim ilk iş müsahibəsindən müsbət cavab aldım. dediy...",
      "img": "https://images.unsplash.com/photo-1513956589380-bad156dc6ffc?auto=format&fit=crop&w=840&h=840&q=80&crop=faces"
    },
    {
      "id": "ty_ferid-hemzeyev",
      "name": "Fərid Həmzəyev",
      "role": "SOC Analyst / ABB",
      "quote": "\"İllər öncə kibertəhlükəsizliyə qarşı olan sevgim Webora-də reallaşdı. Burada, bir ailə mühitində karyera hədəflərimə doğru necə daha düzgün addımlar atmağı öyrəndim. İlk aylardan tələbələrin inkişafı üçün olan maraq və təşəbbüs dərin bir şəkildə hiss edilir. Çox sevinirəm ki, bu yolun ba...",
      "img": "https://images.unsplash.com/photo-1542909168-318d0d4ba0dc?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    },
    {
      "id": "ty_nicat-dadasov",
      "name": "Nicat Dadaşov",
      "role": "SOC Analyst / Kapital Bank",
      "quote": "\"Uzun müddət karyeramı bu sahə üzrə qurmağa çalışdım və artıq gecdir dediyim anda Webora-dən Kiber Təhlükəsizlik tədrisində təqaüdlə iştirak haqqı qazandım. Akademiyanın mənə öyrətdiyi ən böyük dərs \"xəyallarına çatmaq istəyirsənsə, doğru zamanda doğru yerdə olmalısan\" oldu. if ...",
      "img": "https://images.unsplash.com/photo-1531891437562-339e94fb48d3?auto=format&fit=crop&w=880&h=880&q=80&crop=faces"
    }
  ]
};

export type LessonItem = { href: string; img: string; title: string };

export type StudentModal = {
  name: string;
  caveatRole: string;
  job: string;
  says: string;
  quote: string;
  img: string;
  lessons: LessonItem[];
};

export const STUDENT_MODALS: Record<string, StudentModal> = {
  "4006": {
    "name": "Bahaddin Məmmədli",
    "caveatRole": "Havas Azerbaijan",
    "job": "Qrafik Dizayner",
    "says": "Bahaddin deyir ki...",
    "quote": "\"Burada həm təhsilin keyfiyyəti, həm də şərait insanı öyrənməyə vadar edir. Qısaca desəm, şəffaf, dolğun dərs planı, xoş münasibət və gözəl insanlar :) \"...",
    "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": []
  },
  "4021": {
    "name": "Ramil Əyyubov",
    "caveatRole": "Guavapay",
    "job": "DevOps Engineer",
    "says": "Ramil deyir ki...",
    "quote": "\"Lotoreya idi. Sistem Administratorluğu ilə bağlı hər hansı bir anlayışım yox idi. Bəxtimi sınadım, həm bəxtimi, həm də akademiyanı :))\"...",
    "img": "https://images.unsplash.com/photo-1499996818299-57acbce5d009?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": []
  },
  "4029": {
    "name": "Qurban Şahinoğlu",
    "caveatRole": "Cyberpoint SOC",
    "job": "Operations Team Lead",
    "says": "Qurban deyir ki...",
    "quote": "\"Tədris mərkəninə yaxınlaşdıqda həddindən çox tələbənin olduğunu gördüm və düşündüm ki, bu qədər insan bir yerdə səbəbsiz ola bilməz. İlk olaraq tələbələrin ingilis dili biliklərinin hansı səviyyədə olduğunu ölçmək üçün testə cəlb olunduğunu görəndə artıq anladım ki, doğru yerdəyəm.\"...",
    "img": "https://images.unsplash.com/photo-1528892957994-2d4c9b77a18a?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": []
  },
  "4261": {
    "name": "Gülsüm Məmmədova",
    "caveatRole": "PAŞA Bank",
    "job": "Junior UX/UI dizayner",
    "says": "Gülsüm deyir ki...",
    "quote": "\"İlk dəfə Webora-ə gəldiyimdə, mühiti, əməkdaşları, müəllimlərini gördüm və qərara gəldim ki, burda oxumaq istəyirəm.\"...",
    "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": []
  },
  "ty_fatime-elizade": {
    "name": "Fatimə Əlizadə",
    "caveatRole": "Məhsul Dizayneri / ABB",
    "job": "",
    "says": "Fatimə deyir ki...",
    "quote": "\"Webora karyera yolumda verdiyim ən doğru qərarlardan biridir. Peşəkar müəllimimdən əldə etdiyim bilik və təcrübələr bu yolda sürətli irəliləməyə və özümü daha da inkişaf etdirməyimə təkan verdi. Əlavə olaraq demək istərdim ki, səmimi mühit və xoş kollektiv sevdiyim nüanslardan idi.\"",
    "img": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_sekine-ismayilova": {
    "name": "Səkinə İsmayılova",
    "caveatRole": "UX/UI Dizayner / PAŞA Bank",
    "job": "",
    "says": "Səkinə deyir ki...",
    "quote": "\"Webora keyfiyyətli təhsili, stimulativ mühiti ilə yanaşı tələbələrinə geniş bağlantılar və inkişaf imkanları təqdim edir. Bu sayədə məzunlar karyerada uğura daha çox yaxınlaşır.\"",
    "img": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_lamiye-huseynova-rustemli": {
    "name": "Lamiyə Hüseynova-Rüstəmli",
    "caveatRole": "Junior UX specialist / ABB",
    "job": "",
    "says": "Lamiyə deyir ki...",
    "quote": "\"İş sahəmi UX/UI dizayna dəyişmək qərarına gələndə tərəddüd etmədən Webora-ni seçdim və qərarımda yanılmadığımı elə ilk gündən hiss elədim. Tədris gözləntilərimi üstələdi, instruktorların yanaşması, motivasiyası isə qiymətsiz idi. Onlar dizaynı həqiqətən də sevdirə bildilər!\"",
    "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_behruz-axundov": {
    "name": "Bəhruz Axundov",
    "caveatRole": "UI/UX designer / Guavapay Limited",
    "job": "",
    "says": "Bəhruz deyir ki...",
    "quote": "\"Webora-nin dizayn tədrisi möhtəşəm bir təcrübə idi və mənim yaradıcılığım üçün çoxsaylı dəyərli bacarıqlar əldə etməyimə və yeni dostlar tapmağa imkan yaratdı. Dizaynı öyrənmək istəyən hər kəsə məsləhət görürəm.\"",
    "img": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_kamran-nadirov": {
    "name": "Kamran Nadirov",
    "caveatRole": "UX/UI Dizayner / ABB",
    "job": "",
    "says": "Kamran deyir ki...",
    "quote": "\"Webora-də tədris mənim karyeramda dəyişiklik yaratdı. Müəllimlərin mükəmməl təcrübəsi və praktiki yanaşması sayəsində dizayn prinsipləri ilə tanış oldum. İndi bu bilikləri real iş mühitində tətbiq edirəm. İnkişafımda yaratdığı töhvələrə görə, Webora-ə təşəkkür edirəm!\"",
    "img": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_elmar-soltanov": {
    "name": "Elmar Soltanov",
    "caveatRole": "UX/UI Specialist/ Azerconnect Group",
    "job": "",
    "says": "Elmar deyir ki...",
    "quote": "\"Webora mənə UX/UI Dizayn üzrə təhsil verərək dizayn həvəsimi reallaşdırmaqda kömək etdi. Müəllimlərimin əvəz olunmaz dəstəyi və öz inadkarlığım sayəsində uğurlu UX/UI Dizayn mütəxəssisi oldum. Dəyişiklikdən çəkinməyin və yeni fürsətləri dəyərləndirin—bu, potensialınızı ortaya çıxarmağın yoludur.\"",
    "img": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_sabina-ibrahimova": {
    "name": "Sabina İbrahimova",
    "caveatRole": "Qrafik Dizayner /Sea Breeze “Dream Group İnternational”",
    "job": "",
    "says": "Sabina deyir ki...",
    "quote": "\"Webora mənə qrafik dizayn sahəsində hədəflərimə inamla irəliləməyə kömək etdi. Qazandığım bilik və praktiki təcrübə inkişafımda böyük rol oynadığını deyə bilərəm. İnanıram ki, insan məsuliyyətli və intizamlı yanaşarsa, istədiyi nəticələri əldə edə bilər. Bu təcrübə mənim üçün dəyərli bir başlanğıc oldu.\"",
    "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_murad-zeynalov": {
    "name": "Murad Zeynalov",
    "caveatRole": "Qrafik Dizayner / Vibe&Wave Reklam agentliyi",
    "job": "",
    "says": "Murad deyir ki...",
    "quote": "\"Code Azcademy-də Qrafik dizayn təhsilimi, \"Yüksək Şərəf Məzunu\" dərəcəsi ilə müvəffəqiyyətlə bitirmişəm. Təhsilimi bitirdikdən sadəcə 1 ay sonra işə başlamışam. Dizayn mənim üçün bir iş deyil. Bu bir həyat tərzidir. Webora bir muzeydir, biz yaradıcı insanlar da bu muzeydə olan şahəsərlər. Layiq olduğumuz yer və doğru sənətkarlar olan zaman, heç bir sənət əsəri öz dəyərini itirməz.\"",
    "img": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_nermin-elizade": {
    "name": "Nərmin Əlizadə",
    "caveatRole": "Middle Qrafik Dizayner / Olivia Beauty&Care",
    "job": "",
    "says": "Nərmin deyir ki...",
    "quote": "\"Sevdiyin işi öyrənmək həmişə maraqlı və həyəcanverici olsa da, onu daha maraqlı edən bu yolda sənə yoldaş olan şəxslər və içində olduğun mühitdir. Bu məkan məhz Webora-dir.\"",
    "img": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_samxal-bayramov": {
    "name": "Şamxal Bayramov",
    "caveatRole": "Qrafik Dizayner / Trenders Reklam agentliyi",
    "job": "",
    "says": "Şamxal deyir ki...",
    "quote": "\"Sevdiyin işi öyrənmək həmişə maraqlı və həyəcanverici olsa da, onu daha maraqlı edən bu yolda sənə yoldaş olan şəxslər və içində olduğun mühitdir. Bu məkan məhz Webora-dir. \"",
    "img": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_leman-hesenli": {
    "name": "Ləman Həsənli",
    "caveatRole": "Qrafik Dizayner / Qaraj Studio",
    "job": "",
    "says": "Ləman deyir ki...",
    "quote": "\"Webora yaradıcılığı inkişaf etdirən və fərqli düşüncələrə açıq bir mühitdir. Burada yeni ideyalar yaratmaq və onları sərbəst ifadə etmək üçün sərhəd yoxdur. Hər addım insanı özünü daha da inkişaf etdirməyə və fərqli düşünməyə sövq edir.\"",
    "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_resad-qasimli": {
    "name": "Rəşad Qasımlı",
    "caveatRole": "Təsisçi, memar / Bakı Memalıq Layihələri",
    "job": "",
    "says": "Rəşad deyir ki...",
    "quote": "\"Akademiyada təhsil mühiti ilə yanaşı isti ailə ortamı da mövcuddur. Barcode isə mənə ən doğma məkanlardan biridir. Çünki ilk interyer layihəm elə odur.\"",
    "img": "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_selale-mirzeyeva": {
    "name": "Şəlalə Mirzəyeva",
    "caveatRole": "İnteryer dizayner / Freelance",
    "job": "",
    "says": "Şəlalə deyir ki...",
    "quote": "\"İşimi çox sevirəm və mənə bu sevgini aşılayan isə məhz insturktorlarım və daha sonra akademiyadır. Mənim üçün yaxşı təcrübə və ixtisasımın uğurlu başlanğıcı oldu.\"",
    "img": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_nicat-esgerov": {
    "name": "Nicat Əsgərov",
    "caveatRole": "Mebel dizayner / Mutfakçı",
    "job": "",
    "says": "Nicat deyir ki...",
    "quote": "\"Webora istər təhsil, istərsə də dünya görüşü baxımından həqiqətən bir məktəbdir. Həm iş, həm də şəxsi həyatımda müsbət mənada qatqıları çox oldu. Bunun üçün bütün akademiya ailəsinə və xüsusilə Pərvin İsmayılova dərin minnətdarlığımı bildirirəm.\"",
    "img": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_gulnare-rustemova": {
    "name": "Gülnarə Rüstəmova",
    "caveatRole": "Eksteryer dizayner / Macar Construction",
    "job": "",
    "says": "Gülnarə deyir ki...",
    "quote": "\"Webora sayəsində mən daha çox ilhamlandım və öyrəndim ki, hətta əsas ixtisasımdan kənarda da özümü uğurla inkişaf etdirə bilirəm. Şübhəsiz ki, akademiya mənim yeni cəhdlərim üçün düzgün qərar idi.\"",
    "img": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_cavadxan-eliyev": {
    "name": "Cavadxan Əliyev",
    "caveatRole": "Motion Dizayner / Animoore Studio",
    "job": "",
    "says": "Cavadxan deyir ki...",
    "quote": "\"İlk olaraq motion dizayn tədrisini bizə təmin etdiyinə görə Webora-ə və dəyərli biliklərini bizimlə paylaşdığı üçün Ceyhun müəllimə təşəkkür edirəm. Çünki Akademiya sayəsində hazırda Animoore Studiyasında Motion dizayner olaraq çalışıram.\"",
    "img": "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_zenfira-sultanova": {
    "name": "Zenfira Sultanova",
    "caveatRole": "Motion Dizayner / Content Agency ASC",
    "job": "",
    "says": "Zenfira deyir ki...",
    "quote": "\"Mənim fikrimcə Webora-nin fərqli bir aurası var. Ora düşdüyüm an özümü daha həvəsli və məqsədyönlü hiss edirəm. Bu isə məni yeni işlər görməyə daha da ilhamlandırır.\"",
    "img": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_ferhad-atakisiyev": {
    "name": "Fərhad Atakişiyev",
    "caveatRole": "Qrafik Motion Dizayner / Evimiz",
    "job": "",
    "says": "Fərhad deyir ki...",
    "quote": "\"İnstruktorların Akademiya təhsilini bitirdikdən sonra belə bizə daima dəstəyi, pozitif mühitin olması məni ən çox cəlb edən məqamlardan biridir. Webora həyatıma və karyerama rəng qatdı.\"",
    "img": "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_aftandil-eliyev": {
    "name": "Aftandil Əliyev",
    "caveatRole": "Motion Dizayner / İnci Group LLC",
    "job": "",
    "says": "Aftandil deyir ki...",
    "quote": "\"Webora mənim Motion Dizayn sahəsi üzrə ixtisaslaşmağımda böyük rol oynadı. Mən məqsədlərimdən birinə akademiya ilə çatdım. Sıra növbəti məqsədlərdədi.\"",
    "img": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_eziz-heziyev": {
    "name": "Əziz Həziyev",
    "caveatRole": "Motion designer / Artmood agency",
    "job": "",
    "says": "Əziz deyir ki...",
    "quote": "\"Webora-də Motion Dizayn məzunu olduğum üçün çox məmnunam. Bura mənim üçün bir tədris müəssisəsindən daha artığıdır. Karyera və şəxsi həyatımdakı bir çox yeniliyi Akademiyaya borcluyam. Yaxşı ki, yolum buradan keçib.\"",
    "img": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_rima-elizade": {
    "name": "Rima Əlizadə",
    "caveatRole": "Qrafik Dizayner / McCan",
    "job": "",
    "says": "Rima deyir ki...",
    "quote": "\"Məqsədiniz varsa, arxasınca getmək lazımdır. Çünki zaman keçdikdən sonra başa düşürük ki, artıq başqa bir fürsətimiz yoxdur. Həqiqətən, çalışqan birisinizsə, bu yolu getməyə dəyər.\"",
    "img": "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_turqay-qasimli": {
    "name": "Turqay Qasımlı",
    "caveatRole": "Lead Product Manager / Yelo Bank",
    "job": "",
    "says": "Turqay deyir ki...",
    "quote": "\"Xoşbəxt insan sevdiyi işlə məşğul olandır. Sevdiyin işlə məşğulsansa, uğur qaçınılmazdır.\"",
    "img": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_ruqiye-babayeva": {
    "name": "Ruqiyə Babayeva",
    "caveatRole": "Qrafik Dizayner / Webora",
    "job": "",
    "says": "Ruqiyə deyir ki...",
    "quote": "\"Əsl uğur işə həvəslə yanaşmaq və həyatın hər anına yaradıcılıq gətirməklə mümkündür. Webora məqsədimə çatmağımda mənə lazımi bilik və bacarıqlar verərək, bu uğura nail olmağımda mühüm rol oynadı.\"",
    "img": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_huru-ismayilova": {
    "name": "Hürü İsmayılova",
    "caveatRole": "Digital Marketer / Google",
    "job": "",
    "says": "Hürü deyir ki...",
    "quote": "\"Webora-də aldığım biliklər iş prosesini mənim üçün asanlaşdırdı və digital marketing sahəsində istifadə oluna biləcək alətlər haqqında yeni məlumatlar verdi.\"",
    "img": "https://images.unsplash.com/photo-1594744806689-b65be6516867?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_konul-hesenova": {
    "name": "Könül Həsənova",
    "caveatRole": "Performance Marketing Specialist / Bolt, Tallin",
    "job": "",
    "says": "Könül deyir ki...",
    "quote": "\"Webora vasitəsilə digital marketing sahəsi ilə tanış olmağım “hansı sahə üzrə karyera qurmaq istəyirəm?” sualına dəqiq cavab tapmağıma səbəb oldu.\"",
    "img": "https://images.unsplash.com/photo-1580894732447-12e82d269e26?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_sehla-orucova": {
    "name": "Şəhla Orucova",
    "caveatRole": "Senior Digital Marketing Specialist / ABB",
    "job": "",
    "says": "Şəhla deyir ki...",
    "quote": "\"Webora-də təhsil almaq qərarını verdiyimdə mənim üçün bu qədər vacib bir yer olacağını düşünməmişdim. Çünki zamanla akademiya, sadəcə, gəlib tədris alıb getdiyiniz bir yerdən bütün gününüzü keçirdiyiniz doğma bir məkana çevrilir. Bu da öz növbəsində yeni dostluqlar, əlaqələr yaradır.\"",
    "img": "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_lale-babasova": {
    "name": "Lalə Babaşova",
    "caveatRole": "Digital Marketing Specialist / Kazunion Turoperator Azerbaijan by Rustar",
    "job": "",
    "says": "Lalə deyir ki...",
    "quote": "\"Digital marketinqin sərhədsiz dünyasını kəşf etmək, bazarda olan böyük markaların hədəflərinin reallaşmasının bir parçası olmaq, hər gün yenidən yaşadığım həyəcanlı təcrübədir. Bu bənzərsiz təcrübədə ən böyük və ilk yol yoldaşım Webora olduğu üçün şanslıyam.\"",
    "img": "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_tomris-bedelova": {
    "name": "Tomris Bədəlova",
    "caveatRole": "Digital Marketing Expert / Kapital Bank",
    "job": "",
    "says": "Tomris deyir ki...",
    "quote": "\"Webora-də aldığım təhsil nəinki mənə yeni biliklər, həmçinin, yeni iş, yeni insanlar qazandırdı və böyük imkanlar yaratdı! Bir sözlə, bir tədrisdən daha çoxu!\"",
    "img": "https://images.unsplash.com/photo-1529626456364-403cf4acb0ca?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_yusif-ceferzade": {
    "name": "Yusif Cəfərzadə",
    "caveatRole": "Digital Marketing Specialist / HAVAS",
    "job": "",
    "says": "Yusif deyir ki...",
    "quote": "\"Həmişə yaşadığım dünyanın sərhədləri mənə maraqlı gəlib. Amma biraz təmbələm. Oturduğum yerdən öz dünyamı necə tanıya bilərəm?-deyə düşünəndə özümü Code-da tapdım. Oradakı təhsilim sayəsində indi dünya mənim əlimin altındadır. Sərhədləri özüm təyin edirəm.\"",
    "img": "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_vidadi-kerimov": {
    "name": "Vidadi Kərimov",
    "caveatRole": "Cyber Security Specialist / eManat",
    "job": "",
    "says": "Vidadi deyir ki...",
    "quote": "\"Peşəkar instruktor heyətinin tətbiq etdiyi effektiv tədris metodu sayəsində qazandığım təcrübə və bilik hal-hazırki iş həyatımda müxtəlif kompleks problemlərin həll olunmasında mənə böyük dəstək olur.\"",
    "img": "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_ferrux-memmedov": {
    "name": "Fərrux Məmmədov",
    "caveatRole": "Penetration Tester / PAŞA Bank",
    "job": "",
    "says": "Fərrux deyir ki...",
    "quote": "\"Fəxrlə bildirmək istərdim ki, mən də Akademiyamın Technest proqramı çərçivəsində açılmış ilk Advanced Cyber Security qrupunun məzunlarındanam. Tədris zamanı yarış tipli hücum strategiyaları planlayan komandanın tərkibində yer alaraq, bilik və bacarıqlarımı inkişaf etdirdim və bu gün ölkənin ən böyük banklarından biri olan Paşa Bankın kiber təhlükəsizlik komandasının bir üzvü olaraq, hücum simulyasiyaları yaradır və şirkətin qorunma mexanizmlərini sınaqdan keçirirəm.\"",
    "img": "https://images.unsplash.com/photo-1545167622-3a6ac456efa8?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_nahid-aslanov": {
    "name": "Nahid Aslanov",
    "caveatRole": "Cyber Security Analyst / Azercell",
    "job": "",
    "says": "Nahid deyir ki...",
    "quote": "\"Webora-də aldığım təhsilin karyerama müsbət təsirini ilk dəfə müsahibələr zamanı texniki suallara çox rahat doğru cavab verə bildiyim anda başa düşdüm. Sonrasında başladığım təcrübə proqramında öyrəndiyim bilikləri bir başa tətbiq etməyə başladığımı görəndə doğru yolda olduğuma əmin oldum.\"",
    "img": "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_nicat-dadasov": {
    "name": "Nicat Dadaşov",
    "caveatRole": "SOC Analyst / Kapital Bank",
    "job": "",
    "says": "Nicat deyir ki...",
    "quote": "\"Uzun müddət karyeramı bu sahə üzrə qurmağa çalışdım və artıq gecdir dediyim anda Webora-dən Kiber Təhlükəsizlik tədrisində təqaüdlə iştirak haqqı qazandım. Akademiyanın mənə öyrətdiyi ən böyük dərs \"xəyallarına çatmaq istəyirsənsə, doğru zamanda doğru yerdə olmalısan\" oldu. if [[ \"pwd\" == /codeacademy ]] \"",
    "img": "https://images.unsplash.com/photo-1531891437562-339e94fb48d3?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_nesibe-sahverdiyeva": {
    "name": "Nəsibə Şahverdiyeva",
    "caveatRole": "Information Security Management Specialist / Digital Medical Solutions LLC under TABIB",
    "job": "",
    "says": "Nəsibə deyir ki...",
    "quote": "\"Bu sertifikat peşəkar inkişafımda dönüm nöqtəsi oldu. İşimdə inamım artdı və yeni imkanlar açıldı. Webora-yə dəstəyə görə minnətdaram.\"",
    "img": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_nihad-huseynov": {
    "name": "Nihad Hüseynov",
    "caveatRole": "Linux Administrator / Azerconnect Group",
    "job": "",
    "says": "Nihad deyir ki...",
    "quote": "“Webora sayəsində RHCSA beynəlxalq sertifikatını əldə etdim. İşdə üzərimə daha böyük məsuliyyət götürürəm və peşəkar inkişafımı hər gün daha aydın görürəm.\"",
    "img": "https://images.unsplash.com/photo-1564563426770-45994ea04b23?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_yaqub-haciyev": {
    "name": "Yaqub Hacıyev",
    "caveatRole": "Cybersecurity Engineer / GuardianLab",
    "job": "",
    "says": "Yaqub deyir ki...",
    "quote": "\"Webora sayəsində Red Hat beynəlxalq imtahanına həm hazır oldum, həm də rahatlıqla əldə etdim. Bu sertifikat karyeramda sürətli irəliləyişə yol açdı.\"",
    "img": "https://images.unsplash.com/photo-1557862921-37829c790f32?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_nesiraga-besirov": {
    "name": "Nəsirağa Bəşirov",
    "caveatRole": "Information Security GRC Analyst / BirBank",
    "job": "",
    "says": "Nəsirağa deyir ki...",
    "quote": "\"RHCSA məni sistem tərəfinə daha yaxınlaşdırdı. Webora-nin tədris proqramı və beynəlxalq sertifikat isə işimdə etibarı artırdı.\"",
    "img": "https://images.unsplash.com/photo-1615109398623-883730ca57f6?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_nezrin-memmedova": {
    "name": "Nəzrin Məmmədova",
    "caveatRole": "Köməkçi təlimçi/ Webora",
    "job": "",
    "says": "Nəzrin deyir ki...",
    "quote": "\"Webora-nin dəstəyi ilə Red Hat sertifikatını qazandım. Dərslərimə əlavə peşəkarlıq gətirdi və karyera planımda ciddi addım oldu.\"",
    "img": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_isa-seyfullayev": {
    "name": "İsa Seyfullayev",
    "caveatRole": "Cyber Security Analyst / Caspian Innovation Center",
    "job": "",
    "says": "İsa deyir ki...",
    "quote": "\"Technest təqaüd proqramı çərçivəsində Webora-nin elan etdiyi ilk Advanced Cyber Security qrupunun iştirakçısı və məzunlarından biri olduğum üçün çox şadam. Buradan qazandığım gözəl dostluqlar və karyeramda istifadə edə biləcəyim bilik və təcrübələr üçün minnətdaram.\"",
    "img": "https://images.unsplash.com/photo-1480457947956-aeef9dd0e489?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_mirmehdi-ibrahimzade": {
    "name": "Mirmehdi İbrahimzadə",
    "caveatRole": "Incident Responder / Paşa Bank",
    "job": "",
    "says": "Mirmehdi deyir ki...",
    "quote": "\"Sevinirəm ki, mən də 14 nəfərlə tədrisə başlayıb, yüksək nəticə ilə bitirən və ən qısa zamanda işə düzələn 13 nəfərdən biri oldum. Technest təqaüd proqramı çərçivəsində açılmış ilk Advanced Cyber Security qrupunun tələbəsi olaraq, kiber hücumlara qarşı müdafiə sistemlərinin təkmilləşdirilməsi, yeni sistemlərin tətbiqini öyrəndik. Tələbəlik müddətində hal-hazırda etdiklərimizi xəyal edirdiksə, hazırda bu Webora sayəsində gerçəkləşib. Buna görə də tam əminliklə deyə bilərik ki - Webora - xəyalların gerçəkləşdiyi məkandır. \"",
    "img": "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_togrul-huseynli": {
    "name": "Toğrul Hüseynli",
    "caveatRole": "Cyber Security Engineer / SmartIT",
    "job": "",
    "says": "Toğrul deyir ki...",
    "quote": "\"Webora-də ilk olaraq Şəbəkə Administratorluğu, daha sonra isə Advanced Cyber Security üzrə aldığım tədrislər karyerama uğurlu başlanğıc etməyimdə birbaşa köməklik göstərdi. Bunun nəticəsi olaraq Kiber təhlükəsizlik sahəsində iştirak etdiyim ilk iş müsahibəsindən müsbət cavab aldım. dediyim anda Webora-dən Kiber Təhlükəsizlik tədrisində təqaüdlə iştirak haqqı qazandım. Akademiyanın mənə öyrətdiyi ən böyük dərs \"xəyallarına çatmaq istəyirsənsə, doğru zamanda doğru yerdə olmalısan\" oldu.\"",
    "img": "https://images.unsplash.com/photo-1513956589380-bad156dc6ffc?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  },
  "ty_ferid-hemzeyev": {
    "name": "Fərid Həmzəyev",
    "caveatRole": "SOC Analyst / ABB",
    "job": "",
    "says": "Fərid deyir ki...",
    "quote": "\"İllər öncə kibertəhlükəsizliyə qarşı olan sevgim Webora-də reallaşdı. Burada, bir ailə mühitində karyera hədəflərimə doğru necə daha düzgün addımlar atmağı öyrəndim. İlk aylardan tələbələrin inkişafı üçün olan maraq və təşəbbüs dərin bir şəkildə hiss edilir. Çox sevinirəm ki, bu yolun başlanğıcında Webora-ni seçdim.\"",
    "img": "https://images.unsplash.com/photo-1542909168-318d0d4ba0dc?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "lessons": [
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyone-eng/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone - eng"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/ai-for-everyonee/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "AI for Everyone"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/redhat-sistem-administratorlugu/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Red Hat üzrə Sistem Administratorluğu"
      },
      {
        "href": "https://code.edu.az/tedris-saheleri/proqramlasdirma/suni-intellekt-destekli-programlashdirma/",
        "img": "https://code.edu.az/wp-content/themes/codev2024/assets/images/education/education-detail-lesson1.png",
        "title": "Süni intellekt dəstəkli Proqramlaşdırma"
      }
    ]
  }
};

export const VIDEOS = [
  {
    "video": "https://www.youtube.com/embed/d0ruhy4TH2w",
    "img": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "name": "Natiq Zeynalzadə"
  },
  {
    "video": "https://www.youtube.com/embed/MQerR83sFVI",
    "img": "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "name": "Rima Əlizadə"
  },
  {
    "video": "https://www.youtube.com/embed/3LHhaR7auOw",
    "img": "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "name": "Teymur Süleymanov"
  },
  {
    "video": "https://www.youtube.com/embed/l5sJTKZEe60",
    "img": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "name": "Mehriban Məmmədova"
  },
  {
    "video": "https://youtube.com/embed/-OTz5AMX8ds",
    "img": "https://images.unsplash.com/photo-1557862921-37829c790f32?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "name": "Yaqub Hacıyev"
  },
  {
    "video": "https://youtube.com/embed/g1vT_Y0FQ4M",
    "img": "https://images.unsplash.com/photo-1540569014015-37f6bab2cf90?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "name": "Hikmət Mirzəyev"
  },
  {
    "video": "https://www.youtube.com/embed/Xl8KOTv1rl0",
    "img": "https://images.unsplash.com/photo-1577880213220-8f2085c6a2da?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "name": "Rəsul Ağarzayev"
  },
  {
    "video": "https://www.youtube.com/embed/7fg27ts3wok",
    "img": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "name": "İradə Feyzullayeva"
  },
  {
    "video": "https://www.youtube.com/embed/oPPTG2BQZhc",
    "img": "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "name": "Rəşad Qasımlı"
  },
  {
    "video": "https://www.youtube.com/embed/bD5flDsaXr8",
    "img": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "name": "Qumral Əsgərzadə"
  },
  {
    "video": "https://www.youtube.com/embed/mt0Y7rtnH9A",
    "img": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "name": "Turqay Qasımlı"
  },
  {
    "video": "https://www.youtube.com/embed/waoIySBe0uU",
    "img": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "name": "Nərmin Əlizadə"
  },
  {
    "video": "https://www.youtube.com/embed/68fQ_wM-b04",
    "img": "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "name": "Nurlan Hüseynov"
  },
  {
    "video": "https://www.youtube.com/embed/mCX7fsj3bag",
    "img": "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=840&h=840&q=80&crop=faces",
    "name": "Jalə Həsənzadə"
  },
  {
    "video": "https://www.youtube.com/embed/mFm1PWHnPsI",
    "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=880&h=880&q=80&crop=faces",
    "name": "Bayram Camallı"
  },
  {
    "video": "https://www.youtube.com/embed/watch?v=iJPAJjrCGrQ",
    "img": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&h=800&q=80&crop=faces",
    "name": "Elmar Soltanov"
  }
] as const;

export const COMPANIES = [
  "https://code.edu.az/wp-content/uploads/2024/02/Google-1_png.webp",
  "https://code.edu.az/wp-content/uploads/2024/03/amazon-1_png.webp",
  "https://code.edu.az/wp-content/uploads/2024/02/Pasha-bank_png.webp",
  "https://code.edu.az/wp-content/uploads/2024/02/Kontakt_png.webp",
  "https://code.edu.az/wp-content/uploads/2024/03/egov_png.webp",
  "https://code.edu.az/wp-content/uploads/2024/02/Kapital_png.webp",
  "https://code.edu.az/wp-content/uploads/2024/02/Azercelll_png.webp",
  "https://code.edu.az/wp-content/uploads/2024/02/Havas-l_png.webp",
  "https://code.edu.az/wp-content/uploads/2024/02/Bolt-erestun-3_png.webp",
  "https://code.edu.az/wp-content/uploads/2024/02/ASAN-Logo_png.webp",
  "https://code.edu.az/wp-content/uploads/2024/03/mccann-logo-vector-2_png.webp",
  "https://code.edu.az/wp-content/uploads/2024/03/Azintelecom_png.webp"
] as const;
