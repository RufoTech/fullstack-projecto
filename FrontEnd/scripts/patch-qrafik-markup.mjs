import fs from "node:fs";

const file = new URL("../app/(site)/(main)/qrafik-dizayn/markup.ts", import.meta.url);
let s = fs.readFileSync(file, "utf8");

const replacements = [
  // Banner
  ["330 saat tədris", "UI/UX fokuslu"],
  ["Campus", "Remote və ofis"],
  ["Karyerasına yeni başlayanlar üçün", "Məhsul və brend üçün"],
  [
    "Dizayn istənilən mesajı vizuallar vasitəsilə ötürməkdir. UI/UX dizayn tədris proqramının sonunda yaradıcılığın daha da inkişaf edəcək, vizuallarla danışmaq sənə asan gələcək.",
    "İstifadəçi təcrübəsinə fokuslanan interfeyslər hazırlayırıq. Hər ekran aydın, rahat və biznesinizin növbəti addımını sadələşdirən olsun deyə dizaynı məqsəd üzərindən qururuq.",
  ],

  // Side / mobile menu
  ["Üstünlüklər səni çağırır!", "Niyə bizimlə?"],
  ["Təhsil nazirliyi", "Keyfiyyət və proses"],
  ["Tədris proqramı", "Dizayn prosesi"],
  ["Dərs saatları", "Layihə mərhələləri"],
  ["İnstruktorlarımız", "Dizayn istiqamətləri"],
  ["Tələbələrin işləri", "Seçilmiş işlər"],
  ["Növbəti qrup: 22 Avqust 2026", "Növbəti addım: layihə brifi"],
  [
    "Elə indi növbəti qrupda yer almaq üçün qeydiyyatdan keç",
    "Elə indi ehtiyacınızı müzakirə edin və ilkin yol xəritəsini alın",
  ],
  ["Broşürü yüklə", "Portfolioya bax"],

  // Advantages
  ["Praktiki tədris", "Praktiki yanaşma"],
  [
    "Dərs saatlarından əlavə təşkil edilən Lab günlərində instruktor və mentorla birlikdə keçirilən mövzuları praktika edəcəksən.",
    "Hər mərhələdə sizinlə birlikdə işləyirik: brif, prototip, iterasiya və yayımdan sonra dəstək eyni komanda ilə gedir.",
  ],
  ["Buraxılış işi", "Yekun məhsul"],
  [
    "Buraxılış işi Webora-dəki təhsilin yekun layihəsidir və gələcək həyatında çox önəmli rol oynayacaq.",
    "Layihənin sonunda istifadəyə hazır, ölçülə bilən və brendinizə uyğun rəqəmsal məhsul təhvil veririk.",
  ],
  ["Akademik transkript", "Aydın hesabat"],
  [
    "Tapşırıq və layihələr instruktor tərəfindən yoxlanılır, qiymətləndirmə əsasında sənin bilik və bacarıqların müəyyənləşir.",
    "Hər sprintin sonunda nəyin hazır olduğunu, nəyin növbəti olduğunu və nəticəni birlikdə yoxlayırıq.",
  ],
  ["Mentor sistemi", "Birbaşa əməkdaşlıq"],
  [
    "Akademiyada öyrəndiyin bilik və bacarıqları mentor sistemi ilə daha da möhkəmlənəcək.",
    "Dizayner və product mütəxəssisi ilə birbaşa işləyirsiniz. Suallar növbəti dərsə qalmır, eyni gündə cavablanır.",
  ],
  ["Beynəlxalq sertifikat", "Ölçülə bilən nəticə"],
  [
    "Tədris proqramlarını uğurla başa vurduqda Webora diplomu və beynəlxalq sertifikat əldə etmək haqqı qazanacaqsan.",
    "Dizayn yalnız gözəl görünüş deyil. Sürət, konversiya və istifadə rahatlığı layihənin ilk günündən nəzərə alınır.",
  ],

  // Ministry / quality block
  ["Təhsil lisenziyası", "Peşəkar proses"],
  [
    "Elm və Təhsil Nazirliyi tərəfindən akkreditasiya olunmuş ilk əlavə təhsil müəssisəsiyik.",
    "Hər layihə kəşf, dizayn sistemi, prototip və yayımdan ibarət şəffaf mərhələlərlə irəliləyir.",
  ],

  // Process body
  ["330 saat", "Addım-addım"],
  [
    "Webora-də qrafik dizayna yalnız proqramlardan istifadə bacarığı kimi yanaşmırıq. Bizim üçün dizayn ideyanı araşdırmaq, ona estetik istiqamət vermək və onu insanlarda təsir yaradan vizual həllə çevirməkdir. Tədris modelimiz qlobal kreativ sənayenin ritmi, bazarın yenilənən ehtiyacları və AI-ın açdığı yeni imkanlar əsasında daim yenilənir. Məqsədimiz sadəcə alətlərə bələd olan deyil, günün vizual dilini anlayan, zövqü formalaşmış, yaradıcı baxışı və öz mövqeyi olan dizaynerlər yetişdirməkdir. Tədrisin mərkəzində praktika dayanır. Tələbə hər mövzuda araşdırır, ideya qurur, moodboard hazırlayır, kompozisiya və tipoqrafika ilə işləyir, fərqli dizayn üslublarını sınaqdan keçirir və onları real layihələrə tətbiq edir. Beləliklə, tələbə dizaynı düşünür, əsaslandırır və istiqamətləndirir. Burada bədii vizual estetika və dizayn üslubları texniki biliklə birgə inkişaf edir. Süni intellekt isə dizaynerin yerinə qərar verən vasitə deyil; araşdırmanı, vizuallaşdırmanı və iş axınını sürətləndirən yaradıcı köməkçidir. Suni intellektin dəstəyi ilə qazandığımız zamanı daha dərin düşüncəyə, daha cəsarətli ideyalara və daha güclü vizual nəticələrə yönəldirik.",
    "Webora-də UI/UX dizayna yalnız vizual bəzək kimi yanaşmırıq. Bizim üçün dizayn ideyanı araşdırmaq, ona aydın istiqamət vermək və onu istifadəçidə nəticə yaradan interfeysə çevirməkdir. Prosesimiz biznesinizin ehtiyacları, auditoriya davranışı və AI-ın açdığı yeni imkanlar əsasında qurulur. Məqsədimiz sadəcə gözəl ekranlar deyil, günün rəqəmsal dilini anlayan, ölçülə bilən və inkişaf etməyə hazır məhsullar verməkdir. İşin mərkəzində praktika dayanır. Hər mərhələdə araşdırır, ideya qurur, moodboard və prototip hazırlayır, kompozisiya və tipoqrafika ilə işləyir, fərqli dizayn üslublarını sınaqdan keçirir və onları real layihəyə tətbiq edirik. Beləliklə, dizayn düşünülür, əsaslandırılır və istiqamətləndirilir. Süni intellekt dizaynerin yerinə qərar verən vasitə deyil; araşdırmanı, vizuallaşdırmanı və iş axınını sürətləndirən yaradıcı köməkçidir.",
  ],
  ["Bu alətlərlə yaradacaqsan", "Bu alətlərlə işləyirik"],

  // Modules: student voice -> studio voice
  [
    "Mətn, şəkil və boşluq münasibətlərini düzgün quraraq tipoqrafikanın, şəbəkə sistemlərinin və fərqli dizayn üslublarının köməyi ilə oxunaqlı, balanslı və diqqətçəkən kompozisiyalar yaradacaqsınız.",
    "Mətn, şəkil və boşluq münasibətlərini düzgün quraraq tipoqrafika, şəbəkə sistemləri və fərqli dizayn üslubları ilə oxunaqlı, balanslı və diqqətçəkən kompozisiyalar hazırlayırıq.",
  ],
  [
    "Bu modulda etiket, qablaşdırma, satış stendi və POS materialları dizayn etməyi öyrənirsiniz. Məqsəd məhsulun dəyərini və hekayəsini satış məkanında aydın, diqqətçəkən və fərqləndirici şəkildə təqdim etməkdir.",
    "Etiket, qablaşdırma, satış stendi və POS materiallarını dizayn edirik. Məqsəd məhsulun dəyərini və hekayəsini satış məkanında aydın, diqqətçəkən və fərqləndirici şəkildə təqdim etməkdir.",
  ],

  // Kickoff / next group
  ["Növbəti qruplarımız", "Layihəyə necə başlanır"],
  ["1\\nyeni qrup", "1\\naçıq slot"],
  ["1 yeni qrup", "1 açıq slot"],
  [
    "Aşağıdakı bölmədən tezliklə başlayacaq qruplarımızla tanış ol və tədris başlamadan yerini tut.",
    "Aşağıdakı bölmədən növbəti kəşf görüşünün vaxtını görün və layihəniz üçün yerinizi tutun.",
  ],
  ["Dərs günləri", "Görüş formatı"],
  ["Həftəsonu", "Onlayn / ofis"],
  ["15:20-20:15", "Razılaşdırılmış saat"],
  [">campus<", ">hybrid<"],

  // Meeting
  [
    "Bizimlə görüş təyin et, dərslərimiz, müəllimlərimiz və tədris prosesimizlə şəxsən tanış ol.",
    "Bizimlə görüş təyin et, prosesimizi, komandamızı və UI/UX yanaşmamızı şəxsən tanış ol.",
  ],

  // Team
  ["Tədrisi dizayn edənlər #MeetCodeEducator", "Nə üzərində işləyirik"],

  // Certificate
  ["#sertifikatburada (Webora)", "#dizaynburada"],
  [
    "Tədris proqramını bitirdiyini təsdiq edəcək diplom və gələcək karyeranı qurmaqda sənə dəstək olacaq beynəlxalq sertifikat imtahanlarına giriş imkanı yaradırıq.",
    "Layihənin sonunda istifadəyə hazır interfeys, dizayn sistemi və növbəti inkişaf üçün aydın təhvil paketi veririk.",
  ],

  // Works
  [
    "Uğurlu tələbələrimizin işləri ilə tanış ola bilərsiniz.",
    "Komandamızın hazırladığı vizual həllər və brend işləri ilə tanış ola bilərsiniz.",
  ],

  // FAQ tabs (visible labels only; ids stay)
  [">Akademiya<", ">Studiya<"],
  [">Qəbul<", ">Layihə<"],

  // FAQ copy
  [
    "2015-ci ildə fəaliyyətə başlayan Webora yüksək texnologiyalar sahəsində təcrübəli mütəxəssislər hazırlayan tədris müəssisəsidir. Webora-nin məqsədi Azərbaycanda bu sahədə karyera qurmaq istəyənlərin potensialını dəyərləndirmək, fərdi və peşəkar inkişafı üçün onları lazımi məlumatlarla və praktiki vərdişlərlə təmin etməkdir.",
    "Webora bizneslər üçün korporativ sayt, landing səhifə, e-commerce və veb tətbiq hazırlayan rəqəmsal studiyadır. UI/UX xidmətimiz məhsulunuzu aydın, rahat və nəticə verən interfeysə çevirmək üçündür.",
  ],
  [
    "Webora şəhərin mərkəzində, gediş-gəliş üçün ictimai nəqliyyat imkanlarının əlverişli olduğu bir məkanda, Nizami küçəsi 203B, AF Business House-un 2-ci mərtəbəsində yerləşir.",
    "Studiyamız Bakıda yerləşir. Görüş və layihə müzakirəsi üçün əvvəlcədən əlaqə saxlamağınız kifayətdir.",
  ],
  ["Hansı tədris proqramları mövcuddur?", "Hansı dizayn xidmətləri mövcuddur?"],
  [
    "Webora 10 tədris proqramı mövcuddur. Full stack back-end,  Full stack front-end, UI/UX dizayn, UX/UI Dizayn, Digital Memarlıq və 3D, 2D Motion Dizayn, Digital Marketing, Kiber Təhlükəsizlik, Data Analitika və AI Powered Game Design. ",
    "UI/UX dizayn, landing səhifələr, e-commerce dizaynı, brend kimliyi, dizayn sistemi və yayımdan sonra vizual dəstək təqdim edirik. Ehtiyaca uyğun paket görüş zamanı dəqiqləşir.",
  ],
  ["Online tədrislər olur?", "Uzaqdan işləyirsiniz?"],
  [
    "Bəli, Webora daxilində Digital Marketing, Full stack back-end,  Full stack front-end və Digital Memarlıq və 3D tədris proqramları üzrə online tədris keçirilir. Tələbələr başlayacaq qruplara online formada sinifdaxili tələbələr ilə birlikdə dərsdə canlı şəkildə iştirak edirlər. Online qoşulan tələbələr tədris proqramının tərkib hissəsi olan ev tapşırıqları, quiz və test, kiçik və buraxılış layihələrini təhvil verib Webora-dən məzun ola bilərlər.",
    "Bəli. Layihələrin böyük hissəsini onlayn əməkdaşlıqla idarə edirik. Ehtiyac olarsa, ofisdə görüş də təşkil edirik.",
  ],
  ["Dərs zamanı öz kompüterim olmalıdır?", "Mövcud saytı yeniləmək mümkündür?"],
  [
    "Tədris zamanı mövzuların praktiki tətbiqinin dərhal həyata keçirilməsi üçün hər bir tələbə sinifdaxili kompüterlərlə təmin olunur.",
    "Bəli. Mövcud saytın dizaynını, istifadəçi axınını və interfeysini addım-addım təkmilləşdiririk.",
  ],
  ["Rus dilində dərslər var?", "Hansı dildə işləyirsiniz?"],
  [
    "Akademiyada dərslər Azərbaycan dilində keçirilir.",
    "Əsasən Azərbaycan dilində işləyirik. Layihə ehtiyacına görə rus və ingilis dilli interfeyslər də hazırlanır.",
  ],
  ["Qeydiyyat neçə yaşdan aparılır?", "Layihəyə necə başlanır?"],
  [
    "Akademiyamızda qeydiyyat 15 yaşdan etibarən aparılır. Qeyd edək ki, yaş ortalaması tədris proqramlarından asılı olaraq dəyişir.",
    "Qısa sorğu və ya zənglə başlayırıq. Ehtiyacı, auditoriyanı və prioritetləri dəqiqləşdirib ilkin yol xəritəsi təqdim edirik.",
  ],
  ["Qeydiyyat üçün nə zaman yaxınlaşa bilərəm?", "Görüş üçün nə zaman yaxınlaşa bilərəm?"],
  [
    "Dərslərin başlama tarixi isə akademiya tərəfindən müəyyən edilir. Proqram məsləhətçiləri ilə danışdıqdan sonra, sizin üçün uyğun olan qrupa qeydiyyat aparılır. ",
    "İş günləri ərzində uyğun vaxtı birlikdə seçirik. Onlayn və ya ofis görüşü mümkündür.",
  ],
  ["Ali təhsilə ehtiyac var?", "Hazır brend materialları lazımdır?"],
  [
    "Webora-də təhsil almaq üçün ali təhsil vacib deyil. Tədris proqramına qatılan tələbələrin gələcəkdə mütəxəssis olmaq üçün istəkli olmaları kifayətdir.",
    "Loqo və brend rəngləri varsa, proses sürətlənir. Yoxdursa, UI/UX mərhələsində vizual istiqaməti birlikdə qururuq.",
  ],
  [
    "Digital Marketinq və Kiber Təhlükəsizlik tədris proqramları üçün ingilis dili biliyi vacibdir. Akademiya daxilində yalnız qeydiyyatdan keçən tələbələrimiz üçün yaradılan ingilis dili tədrisi ilə baza bilik çatışmazlığı təhsilin ilk aylarında aradan qaldırılır.",
    "Xeyr. Çoxdilli sayt lazımdırsa, məzmun və interfeysi buna uyğun hazırlayırıq.",
  ],
  ["Tədris ödənişlidir?", "Xidmətlər ödənişlidirmi?"],
  [
    "Webora ödənişli xidmət göstərən bir tədris mərkəzidir. Tədris proqramının qiyməti tələbənin seçəcəyi ödəmə üsuluna, ödəmə şəklinə, seans seçiminə əsasən müəyyənləşdiyi üçün bu məlumatı proqram məsləhətçilərimiz görüş zamanı təqdim edir. ",
    "Bəli. Qiymət layihənin həcminə, ekran sayına və funksionallığa görə müəyyənləşir. Dəqiq rəqəmi qısa kəşf mərhələsindən sonra təqdim edirik.",
  ],
  [
    "Qiymət cədvəli ilə tanış olmaq üçün akademiyaya yaxınlaşaraq proqram məsləhətçiləri ilə görüşmək mümkündür. Görüş zamanı akademiyada dərslərin keçirilmə şəraiti, instruktorlar, təhsil modeli, kurrikulum, akademiyanın maddi texniki bazası və ümumi atmosferi ilə tanış ola biləcəksən. Yalnız bundan sonra namizəd bizimlə davam etmək istəyərsə qiyməti elan edirik və ona uyğun müvafiq ödəniş planını seçərək qeydiyyatdan keçir.",
    "Hər layihə fərqlidir. Ehtiyacı, səhifə sayını və inteqrasiyaları anladıqdan sonra real və şəffaf təklif veririk.",
  ],
  [
    "Webora-nin Zəmanətli Təhsil Modeli ilə hər bir tələbəyə təhsilini təkrarlama imkanı verilir. 90% dərslərdə iştirak etməsinə baxmayaraq, tədrisi yetərincə mənimsəmədiyini düşünən məzunların təkrar təhsil alma hüququ var. İlk dəfə Webora-də tətbiq olunan bu sistem özünə tam inanan və sektorun tələblərinə hazır peşəkarlar yetişdirir.",
    "Yayımdan sonra texniki dəstək, yeniləmə və dizayn inkişafı paketləridə təqdim olunur. Razılaşdırılmış nəticəyə çatana qədər yanınızdayıq.",
  ],
  [
    "Ödənişi hissəli və ya birbaşa şəkildə etmək mümkündür. Hissəli ödəniş 6-18 aylıq ödəmə şəklindədir. Qiymət seçdiyiniz ödəniş formasına görə müəyyənləşir. ",
    "Layihəni mərhələli və ya razılaşdırılmış qrafiklə ödəmək mümkündür. Detallar müqavilə zamanı dəqiqləşir.",
  ],

  // Salary / investment
  [
    "Tədris proqramını tamamladıqdan sonra iş həyatına başlamağa tam hazır olursan. Sahə üzrə əməkhaqqı səviyyəsi belədir:",
    "UI/UX investisiyasının bazardakı dəyərini belə görmək olar. Komandamız eyni səviyyədə nəticə üçün işləyir:",
  ],
  ["Junior qrafik dizayner", "Başlanğıc UI/UX paketi"],
  ["Senior qrafik dizayner", "Genişlənən məhsul dizaynı"],
  ["Art Direktor", "Tam məhsul və brend sistemi"],
  ["Təcrübə: 2 ilə qədər", "Kiçik və orta həcm"],
  ["Təcrübə: 3 ilə qədər", "Çoxsəhifəli məhsul"],
  ["Təcrübə: 5 ildən çox", "Kompleks sistem"],

  // Demo / CTA
  ["Qərar verə bilmirsən? Demo dərsdə iştirak et", "Qərar verə bilmirsən? Qısa kəşf görüşünə qoşul"],
  [
    "Onlayn və ya əvvəlcədən görüş təyin edərək kampusda demo dərsə qatıla bilərsən. Əminik ki, gələcəyin üçün ən yaxşı qərarı verəcəksən.",
    "Onlayn və ya ofisdə qısa kəşf görüşü keçirək. Ehtiyacı, hədəfi və ilk addımları 30 dəqiqəyə birlikdə dəqiqləşdirək.",
  ],
  ["İştirak et", "Görüş təyin et"],

  // Popup
  [
    "\\\" tədris sahəsi üzrə müraciət edirsiniz. Qeyd etdiyiniz məlumatların düzgünlüyünü təsdiqləyirsinizmi?",
    "\\\" xidməti üzrə müraciət edirsiniz. Qeyd etdiyiniz məlumatların düzgünlüyünü təsdiqləyirsinizmi?",
  ],

  // Remaining CA links
  [
    "https://code.edu.az/tedris-saheleri/dizayn/qrafik-dizayn-v%C9%99-vizual-kommunikasiyalar/#tools",
    "/qrafik-dizayn#tools",
  ],
  [
    "https://code.edu.az/tedris-saheleri/dizayn/qrafik-dizayn-v%C9%99-vizual-kommunikasiyalar/#contact",
    "/qrafik-dizayn#muraciet_form",
  ],
  [
    "https://code.edu.az/tedris-saheleri/dizayn/qrafik-dizayn-v%C9%99-vizual-kommunikasiyalar/#advantages",
    "/qrafik-dizayn#advantages",
  ],
  [
    "https://code.edu.az/tedris-saheleri/dizayn/qrafik-dizayn-v%C9%99-vizual-kommunikasiyalar/#ministry",
    "/qrafik-dizayn#ministry",
  ],
  [
    "https://code.edu.az/tedris-saheleri/dizayn/qrafik-dizayn-v%C9%99-vizual-kommunikasiyalar/#education-program",
    "/qrafik-dizayn#education-program",
  ],
  [
    "https://code.edu.az/tedris-saheleri/dizayn/qrafik-dizayn-v%C9%99-vizual-kommunikasiyalar/#ders-saatlari",
    "/qrafik-dizayn#next-groups",
  ],
  [
    "https://code.edu.az/tedris-saheleri/dizayn/qrafik-dizayn-v%C9%99-vizual-kommunikasiyalar/#arrange-meeting",
    "/qrafik-dizayn#muraciet_form",
  ],
  [
    "https://code.edu.az/downloads/db0be7b78c74/CA_GRAPHIC-DESIGN_BROCHURE_2026.pdf",
    "/mezunlarimiz",
  ],
];

let missing = [];
for (const [from, to] of replacements) {
  if (!s.includes(from)) {
    missing.push(from.slice(0, 80));
    continue;
  }
  s = s.split(from).join(to);
}

fs.writeFileSync(file, s);
console.log("missing", missing.length);
missing.forEach((m) => console.log("-", m));
console.log("remaining code.edu.az", (s.match(/code\.edu\.az/g) || []).length);
console.log("remaining tədris", (s.match(/tədris/gi) || []).length);
console.log("remaining tələbə", (s.match(/tələbə/gi) || []).length);
console.log("remaining Akademiya", (s.match(/Akademiya/g) || []).length);
