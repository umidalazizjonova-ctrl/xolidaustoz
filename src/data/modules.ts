import { LessonModule } from '../types';

export const MODULES: LessonModule[] = [
  {
    id: 1,
    slug: 'sintaksis-nima',
    titleUz: '1. Sintaksis nima? So‘z birikmasi, gap, matn',
    titleRu: '1. Что такое синтаксис? Словосочетание, предложение, текст',
    shortDescUz: 'Tilning qurilish g‘ishtlari: so‘z, so‘z birikmasi, gap va yaxlit matn farqlari.',
    shortDescRu: 'Строительные кирпичики языка: отличие слова, словосочетания, предложения и текста.',
    targetUz: 'So‘z, so‘z birikmasi va gapning asosiy farqlarini anglash hamda rus tili bilan solishtirish.',
    targetRu: 'Понять различия между словом, словосочетанием и предложением в узбекском и русском языках.',
    durationMinutes: 15,
    levelGrade: '5–6-sinf',
    culturalImageKey: 'registan',
    lectureUz: `Sintaksis — grammatikaning nutq tuzilishini o‘rganuvchi bo‘limidir. U yunoncha «syntaxis» — tuzish, biriktirish degan ma’noni bildiradi.

Tilimizdagi eng kichik sintaktik birlik — **so‘z birikmasi** (kamida ikkita mustaqil so‘zning ma’no va grammatik jihatdan bog‘lanishi). Undan kattaroq va tugallangan fikrni ifodalovchi birlik — **gap**. Bir necha gaplarning mazmuniy zanjiri esa **matn**ni hosil qiladi.

Rus tilida ham xuddi shunday: слово → словосочетание → предложение → текст. Biroq o‘zbek tilida so‘zlarning o‘zaro bog‘lanish usullari va so‘z tartibi o‘ziga xos xususiyatlarga ega.`,
    lectureRu: `Синтаксис — раздел грамматики, изучающий законы построения связной речи (от греческого «syntaxis» — составление, порядок).

Синтаксическая лестница в обоих языках одинакова:
1. **Слово (So‘z)** — называет предмет или действие (*kitob*, *o‘qimoq*).
2. **Словосочетание (So‘z birikmasi)** — более точно называет предмет, состоит минимум из двух самостоятельных слов (*qiziqarli kitob*). Не выражает законченной мысли!
3. **Предложение (Gap)** — выражает законченную мысль и имеет интонацию сообщения, вопроса или побуждения (*Men qiziqarli kitob o‘qidim*).
4. **Текст (Matn)** — смысловое единство нескольких предложений.`,
    comparisonTable: [
      {
        featureUz: 'Mustaqil fikr ifodalashi',
        featureRu: 'Выражение законченной мысли',
        uzbekRule: 'So‘z birikmasi tugallangan fikr bildirmaydi, gap esa tugallangan fikr bildiradi.',
        uzbekExample: 'yangi maktab (birikma) vs Maktab yangi ochildi. (gap)',
        russianRule: 'Аналогично: словосочетание лишь называет, предложение сообщает.',
        russianExample: 'новая школа (словосоч.) vs Школа новая. (предл.)',
      },
      {
        featureUz: 'Bog‘lanish vositasi',
        featureRu: 'Средства связи',
        uzbekRule: 'Agglyutinativ qo‘shimchalar (affikslar) va ohang orqali.',
        uzbekExample: 'kitob + lar + imiz + dan (uchta aniq qo‘shimcha)',
        russianRule: 'Окончания (флексии) и предлоги.',
        russianExample: 'из наших книг (предлог + окончания)',
      },
    ],
    keyExamples: [
      {
        uz: 'kitoblarimizdan',
        ru: 'из наших книг',
        breakdownUz: 'kitob (asos) + lar (ko‘plik) + imiz (egalik) + dan (chiqish kelishigi)',
        breakdownRu: 'В русском 3 слова (предлог + мест. + сущ.), в узбекском — 1 слово с 3 суффиксами подряд!',
        ruleHighlight: 'O‘zbek tili agglyutinativ (yopishqoq) til bo‘lib, ma’nolar qo‘shimchalar qatori orqali yasaladi.',
      },
    ],
    didYouKnow: {
      factUz: 'O‘zbek tilida predlog (old qo‘shimcha) umuman yo‘q! Barcha sintaktik vazifalarni so‘z oxiriga qo‘shiladigan affikslar va ko‘makchilar (orqasida keluvchi so‘zlar) bajaradi.',
      factRu: 'В узбекском языке абсолютно нет предлогов! Все значения русских предлогов (в, на, из, к, с) передаются падежными окончаниями и послелогами.',
      source: 'A. G‘ulomov, M. Asqarova «Hozirgi o‘zbek adabiy tili: Sintaksis»',
    },
    summaryUz: [
      'So‘z birikmasi narsa yoki harakatni aniqroq nomlaydi, lekin tugallangan fikr bermaydi.',
      'Gap intonatsion tugallikka va kesimga ega bo‘ladi.',
      'O‘zbek tilida so‘zlar qo‘shimchalar orqali qat’iy tartibda zanjirdek ulanadi.',
    ],
    summaryRu: [
      'Словосочетание уточняет название предмета, но не выражает законченной мысли.',
      'Предложение обладает интонационной законченностью и имеет грамматическую основу.',
      'В узбекском языке нет предлогов — грамматические связи создаются суффиксами и послелогами.',
    ],
  },
  {
    id: 2,
    slug: 'soz-birikmasi-hokim-va-tobe',
    titleUz: '2. So‘z birikmasi: hokim va tobe so‘z',
    titleRu: '2. Словосочетание: главное и зависимое слово',
    shortDescUz: 'Hokim so‘z qayerda turadi? Rusiyzabonlarning eng katta kashfiyoti.',
    shortDescRu: 'Где стоит главное слово? Главное открытие для русскоязычного ученика.',
    targetUz: 'So‘z birikmasida hokim va tobe so‘zni to‘g‘ri aniqlash va o‘zbek tilidagi qat’iy o‘rin qoidasini o‘rganish.',
    targetRu: 'Научиться безошибочно находить главное и зависимое слово, освоить закон расположения слов в узбекском.',
    durationMinutes: 18,
    levelGrade: '5–6-sinf',
    culturalImageKey: 'non',
    lectureUz: `Har qanday so‘z birikmasi ikki qismdan iborat bo‘ladi:
1. **Hokim so‘z** (главное слово) — ma’nosi tobelanuvchi, savol beruvchi asosiy so‘z.
2. **Tobe so‘z** (зависимое слово) — hokim so‘zga ergashuvchi, uni izohlovchi so‘z.

**OLTIN QOIDA**: O‘zbek tilida tobe so‘z DEYARLI DOIM HOKIM SO‘ZDAN OLDIN KELADI!
Rus tilida esa tobe so‘z asosiy so‘zdan oldin ham, keyin ham kelishi mumkin:
- *читать книгу* (главное: читать → что? книгу — зависимое сзади!)
- O‘zbekchasida: *kitobni o‘qimoq* (tobe so‘z: kitobni — oldinda!).`,
    lectureRu: `В любом словосочетании есть:
1. **Главное слово (Hokim so‘z)** — от него мы задаём вопрос.
2. **Зависимое слово (Tobe so‘z)** — к нему ставится вопрос.

**ЗОЛОТОЕ ПРАВИЛО УЗБЕКСКОГО ЯЗЫКА**:
Зависимое слово почти ВСЕГДА стоит **ПЕРЕД** главным словом!
В русском языке глагол командует вперед: *читать книгу* (читать → что? книгу).
В узбекском языке зависимое слово выходит вперед: **kitobni o‘qimoq** (kitobni ← o‘qimoq).`,
    comparisonTable: [
      {
        featureUz: 'Otli birikmalar (sifat + ot)',
        featureRu: 'Именные сочетания (прил. + сущ.)',
        uzbekRule: 'Tobe so‘z oldinda, hokim so‘z orqada: yangi kitob.',
        uzbekExample: 'yangi kitob (yangi ← kitob)',
        russianRule: 'Tobe so‘z oldinda: новая книга.',
        russianExample: 'новая книга (новая ← книга)',
        notesUz: 'Bu yerda ikkala til tartibi mos keladi.',
        notesRu: 'Порядок совпадает.',
      },
      {
        featureUz: 'Fe’lli birikmalar (ot + fe’l)',
        featureRu: 'Глагольные сочетания (сущ. + глагол)',
        uzbekRule: 'Tobe so‘z OLDIN keladi: kitobni o‘qimoq.',
        uzbekExample: 'kitobni o‘qimoq (kitobni ← o‘qimoq)',
        russianRule: 'Tobe so‘z KEYIN keladi: читать книгу.',
        russianExample: 'читать книгу (читать → книгу)',
        notesUz: 'Diqqat! Ruscha tartibni ko‘chirib "o‘qimoq kitobni" deyish qo‘pol xatodir!',
        notesRu: 'Типичная ошибка: сказать по-русски *o‘qimoq kitobni*. Это грубейшая ошибка!',
      },
    ],
    keyExamples: [
      {
        uz: 'kitobni o‘qimoq',
        ru: 'читать книгу',
        breakdownUz: 'kitobni (tobe) + o‘qimoq (hokim)',
        breakdownRu: 'читать (главное) + книгу (зависимое)',
        ruleHighlight: 'O‘zbek fe’lli birikmasida fe’l (hokim so‘z) oxirida turadi.',
      },
      {
        uz: 'maktabga bormoq',
        ru: 'идти в школу',
        breakdownUz: 'maktabga (tobe, qayerga?) + bormoq (hokim)',
        breakdownRu: 'идти (главное) + в школу (зависимое)',
        ruleHighlight: 'O‘rin-payt va jo‘nalish bildiruvchi tobe so‘z ham fe’ldan oldinda keladi.',
      },
      {
        uz: 'do‘stim bilan gaplashmoq',
        ru: 'разговаривать с другом',
        breakdownUz: 'do‘stim bilan (tobe, kim bilan?) + gaplashmoq (hokim)',
        breakdownRu: 'разговаривать (главное) + с другом (зависимое)',
        ruleHighlight: 'Ko‘makchili tobe qism hamisha fe’ldan oldinda turadi.',
      },
    ],
    didYouKnow: {
      factUz: 'O‘zbek tilida sifatlar otlar bilan jinsda (rod) ham, sonda ham moslashmaydi. "yangi kitob" ham, "yangi kitoblar" ham bir xil: yangi o‘zgarmaydi!',
      factRu: 'В узбекском языке прилагательное никогда не меняется по родам и числам! Сравните: новая книга / новые книги — по-узбекски всегда yangi kitob / yangi kitoblar.',
      source: 'Sh. Rahmatullayev «Hozirgi o‘zbek adabiy tili»',
    },
    summaryUz: [
      'Birikmada savol beruvchi so‘z — hokim, javob beruvchi so‘z — tobe so‘zdir.',
      'O‘zbek tilida tobe so‘z doimo hokim so‘zdan oldin turadi.',
      'Fe’l har doim birikmaning oxirida keladi: maktabga bormoq, suv ichmoq.',
    ],
    summaryRu: [
      'Главное слово задаёт вопрос, зависимое — отвечает на него.',
      'В узбекском языке зависимое слово ВСЕГДА стоит перед главным.',
      'Глагол всегда замыкает узбекское глагольное словосочетание.',
    ],
  },
  {
    id: 3,
    slug: 'tobelanish-usullari-va-kelishiklar',
    titleUz: '3. Tobelanish usullari: moslashuv, boshqaruv, bitishuv. Kelishiklar',
    titleRu: '3. Способы подчинительной связи: согласование, управление, примыкание. Падежи',
    shortDescUz: 'So‘zlar bir-biriga qanday ulanadi? 6 ta kelishik va ularning ruscha sirlari.',
    shortDescRu: 'Как связываются слова? 6 узбекских падежей и их соответствия в русском.',
    targetUz: 'Moslashuv, boshqaruv va bitishuvni farqlash, 6 ta kelishik qo‘shimchasini to‘g‘ri ishlatish.',
    targetRu: 'Различать согласование, управление и примыкание, уверенно применять 6 падежей узбекского языка.',
    durationMinutes: 20,
    levelGrade: '6–7-sinf',
    culturalImageKey: 'atlas',
    lectureUz: `So‘z birikmasidagi so‘zlar uch xil usul bilan bog‘lanadi:
1. **Moslashuv (согласование)** — tobe so‘z bilan hokim so‘z shaxs va sonda moslashadi (odatda egalik qo‘shimchalari orqali: *mening kitobim*).
2. **Boshqaruv (управление)** — hokim so‘z tobe so‘zdan ma’lum bir kelishik yoki ko‘makchini talab qiladi (*kitobni o‘qimoq*).
3. **Bitishuv (примыкание)** — tobe so‘z hokim so‘zga hech qanday qo‘shimchasiz, faqat ma’no va o‘rin orqali bog‘lanadi (*yaxshi o‘quvchi*, *tez yugurmoq*).

O‘zbek tilida 6 ta kelishik bor:
- Bosh kelishik: qo‘shimchasi yo‘q (kim? nima?)
- Qaratqich: **-ning** (kimning? nimaning?)
- Tushum: **-ni** (kimni? nimani?)
- Jo‘nalish: **-ga / -ka / -qa** (kimga? nimaga? qayerga?)
- O‘rin-payt: **-da** (kimda? nimada? qayerda? qachon?)
- Chiqish: **-dan** (kimdan? nimadan? qayerdan?)`,
    lectureRu: `Слова в словосочетании связываются тремя способами:
1. **Moslashuv (Согласование)**: главное слово принимает суффикс лица/принадлежности (*mening kitobim*, *bizning sinfimiz*). Важно: по роду согласования НЕТ!
2. **Boshqaruv (Управление)**: главное слово требует определённого падежа (*uyga bormoq*, *do‘stimga yordam bermoq*).
3. **Bitishuv (Примыкание)**: связь только по смыслу и порядку слов, без окончаний (*shirin choy*, *chiroyli yozmoq*).

6 падежей узбекского языка:
- **Bosh kelishik** (Именительный): нет окончания (*kitob*).
- **Qaratqich** (Родительный принадлежности): **-ning** (*maktabning*).
- **Tushum** (Винительный прямого объекта): **-ni** (*kitobni*).
- **Jo‘nalish** (Дательно-направительный): **-ga / -ka / -qa** (*uyga*, *maktabga*).
- **O‘rin-payt** (Местно-временной): **-da** (*sinfda*, *soat beshda*).
- **Chiqish** (Исходный): **-dan** (*Toshkentdan*, *do‘stimdan*).`,
    comparisonTable: [
      {
        featureUz: 'Qaratqich kelishigi (-ning)',
        featureRu: 'Родительный падеж (-ning)',
        uzbekRule: 'Faqat qarashlilik / tegishlilik bildiradi: kitobning varag‘i.',
        uzbekExample: 'maktabning bog‘i (кого? чего?)',
        russianRule: 'Родительный падеж без предлога: сад школы.',
        russianExample: 'сад школы / страницы книги',
      },
      {
        featureUz: 'Jo‘nalish kelishigi (-ga)',
        featureRu: 'Дательный падеж (-ga)',
        uzbekRule: 'Harakat yo‘naltirilgan shaxs yoki joyni bildiradi.',
        uzbekExample: 'maktabga bormoq (куда? в школу)',
        russianRule: 'В русском: предлог "в/на" + винительный падеж направления.',
        russianExample: 'идти в школу / ехать на вокзал',
      },
      {
        featureUz: 'O‘rin-payt kelishigi (-da)',
        featureRu: 'Предложный / Местный падеж (-da)',
        uzbekRule: 'Harakat sodir bo‘layotgan o‘rin yoki vaqtni bildiradi.',
        uzbekExample: 'shaharda yashamoq, bahorda kelmoq',
        russianRule: 'В русском: предлоги "в", "на" + предложный падеж.',
        russianExample: 'жить в городе, на стадионе',
      },
    ],
    keyExamples: [
      {
        uz: 'yangi kitob / yangi kitoblar',
        ru: 'новая книга / новые книги',
        breakdownUz: 'Bitishuv usuli: yangi so‘zi ko‘plikda ham, boshqa kelishikda ham o‘zgarmaydi.',
        breakdownRu: 'В русском: согласуется в числе и роде. В узбекском — примыкание, слово "yangi" неизменно!',
        ruleHighlight: 'O‘zbek tilida sifat o‘zgarmaydi: qizil olma, qizil olmalar (hech qachon *qizillar olmalar deyilmaydi!).',
      },
    ],
    didYouKnow: {
      factUz: 'Rus tilida 6 ta падеж bor, o‘zbek tilida ham 6 ta kelishik bor. Lekin ularning vazifalari to‘liq bir xil emas: masalan, rus tilidagi Творительный падеж (кем? чем?) vazifasini o‘zbek tilida ko‘pincha «bilan» ko‘makchisi bajaradi (qalam bilan yozmoq = писать карандашом).',
      factRu: 'Хотя в обоих языках по 6 падежей, творительный падеж (кем? чем?) в узбекском выражается послелогом «bilan» (qalam bilan = карандашом).',
      source: 'N. Mahmudov, A. Nurmonov «O‘zbek tilining nazariy grammatikasi»',
    },
    summaryUz: [
      'Moslashuvda egalik qo‘shimchasi muhim o‘rin tutadi.',
      'Boshqaruvda kelishiklar tobe so‘zni hokim so‘zga bog‘laydi.',
      'Bitishuvda hech qanday qo‘shimcha talab qilinmaydi.',
    ],
    summaryRu: [
      'При согласовании (moslashuv) используются аффиксы принадлежности.',
      'При управлении (boshqaruv) связь оформляется падежными окончаниями.',
      'При примыкании (bitishuv) слова соединяются только по смыслу без изменений формы.',
    ],
  },
  {
    id: 4,
    slug: 'izofa-qaratqich-va-qaralmish',
    titleUz: '4. Izofa: qaratqich va qaralmish birikmalari',
    titleRu: '4. Изафет: определительные и притяжательные сочетания',
    shortDescUz: '«Maktabning bog‘i» va «Toshkent shahri» siri: ikki qavatli egalik zanjiri.',
    shortDescRu: 'Секрет «maktabning bog‘i» и «Toshkent shahri»: двухэтажная цепочка принадлежности.',
    targetUz: 'To‘liq va noaniq izofet birikmalarini (qaratqich va qaralmish) to‘g‘ri tuzish.',
    targetRu: 'Освоить образование полного и относительного изафета в узбекском языке.',
    durationMinutes: 16,
    levelGrade: '6–7-sinf',
    culturalImageKey: 'buxoro',
    lectureUz: `Ikki otning birikishidan hosil bo‘lgan va qarashlilik yoki turning nomini bildiruvchi birikma **izofa** (izofat) deyiladi.

Bu yerda ikki asosiy tur bor:
1. **To‘liq izofa (qaratqich-qaralmish)**:
   Birinchi so‘z **-ning** qo‘shimchasini oladi, ikkinchi so‘z esa **-i / -si** egalik qo‘shimchasini oladi!
   Misol: *maktabning bog‘i*, *Alisherning kitobi*.
2. **Qisqargan (noaniq) izofa**:
   Birinchi so‘zda **-ning** tushib qoladi, lekin ikkinchi so‘zda egalik **-i / -si** ALBATTA saqlanadi!
   Misol: *maktab bog‘i*, *Toshkent shahri*, *o‘zbek tili*, *tarix fani*.

Rusiyzabon o‘quvchilar ko‘pincha ikkinchi so‘zdagi **-i / -si** ni unutib qoldirishadi (*Toshkent shahar deb xato qilishadi). Bunga yo‘l qo‘ymang!`,
    lectureRu: `Изафет — это сочетание двух существительных, выражающее принадлежность или определение через другое существительное.

Две главные модели:
1. **Полный изафет (точное владение конкретным лицом/предметом)**:
   Первое слово получает **-ning**, второе слово ОБЯЗАТЕЛЬНО получает аффикс принадлежности **-i / -si**:
   *maktabning bog‘i* (сад этой школы), *do‘stimning ukasi* (брат моего друга).
2. **Относительный (неполный) изафет (название типа, должности, города, учреждения)**:
   Первое слово без окончания, но второе слово ВСЁ РАВНО ОБЯЗАТЕЛЬНО имеет **-i / -si**:
   *Toshkent shahri* (город Ташкент), *o‘zbek tili* (узбекский язык), *maktab direktori* (директор школы).

Грубейшая типичная ошибка русских учеников: опускать аффикс на втором слове (*Toshkent shahar, *o‘zbek til). Запомните: без **-i / -si** это звучит совершенно не по-узбекски!`,
    comparisonTable: [
      {
        featureUz: 'To‘liq qaratqich birikmasi',
        featureRu: 'Полное притяжательное сочетание',
        uzbekRule: 'Qaratqich (-ning) + Qaralmish (-i / -si): maktabning bog‘i.',
        uzbekExample: 'maktabning bog‘i',
        russianRule: 'Существительное + родительный падеж: сад школы.',
        russianExample: 'сад школы',
        notesUz: 'O‘zbek tilida so‘z tartibi teskari: maktab oldinda!',
        notesRu: 'Порядок обратный: сад школы → maktabning bog‘i.',
      },
      {
        featureUz: 'Shahar, til va fan nomlari',
        featureRu: 'Названия городов, языков, предметов',
        uzbekRule: 'Ikkinchi so‘zga egalik qo‘shiladi: Toshkent shahri.',
        uzbekExample: 'Toshkent shahri, fizika fani',
        russianRule: 'В русском: город Ташкент (нет окончания принадлежности).',
        russianExample: 'город Ташкент, предмет физика',
        notesUz: 'Shahri so‘zidagi -i tushirib qoldirilmaydi.',
        notesRu: 'Ни в коем случае не теряйте -i в конце!',
      },
    ],
    keyExamples: [
      {
        uz: 'maktabning bog‘i',
        ru: 'сад школы',
        breakdownUz: 'maktab + ning (qaratqich) va bog‘ + i (qaralmish)',
        breakdownRu: 'Сравните: в русском "сад" идет первым, в узбекском "maktab" всегда впереди!',
        ruleHighlight: 'Qaratqich-qaralmish munosabatida egalik belgisi har doim ikkinchi so‘zda bo‘ladi.',
      },
      {
        uz: 'Toshkent shahri',
        ru: 'город Ташкент',
        breakdownUz: 'Toshkent + shahar + i (tovush o‘zgarishi: shahar → shahri)',
        breakdownRu: 'Слово shahar при добавлении -i выпадает гласный "a": shahar + i = shahri.',
        ruleHighlight: 'Toshkent shahri, Samarqand shahri, Farg‘ona viloyati.',
      },
    ],
    didYouKnow: {
      factUz: '«Shahar», «burun», «og‘iz», «bag‘ir» kabi so‘zlarga egalik qo‘shimchasi qo‘shilganda o‘rtadagi unli tovush tushib qoladi: shahar + i = shahri, burun + im = burnim.',
      factRu: 'В узбекских словах вроде shahar, burun, og‘iz при присоединении аффикса принадлежности выпадает гласный звук второго слога: shahar → shahri, burun → burnim.',
      source: '«O‘zbek orfografiyasi va orfoepiyasi qoidalari»',
    },
    summaryUz: [
      'To‘liq izofada: birinchi so‘zda -ning, ikkinchi so‘zda -i / -si bo‘ladi.',
      'Noaniq izofada: birinchi so‘zda -ning yo‘q, lekin ikkinchisida -i / -si saqlanadi.',
      'Shaharlar, fanlar va tillar nomi noaniq izofa qoidasi asosida yasaladi.',
    ],
    summaryRu: [
      'В полном изафете: первое слово с -ning, второе с -i / -si.',
      'В неполном изафете: первое слово в начальной форме, второе ОБЯЗАТЕЛЬНО с -i / -si.',
      'Географические названия и предметы формируются по правилу изафета (Toshkent shahri).',
    ],
  },
  {
    id: 5,
    slug: 'gap-tushuncha-va-maqsadga-kora-turlari',
    titleUz: '5. Gap: tushuncha va maqsadga ko‘ra turlari. -mi yuklamasi',
    titleRu: '5. Предложение: виды по цели высказывания. Вопросительная частица -mi',
    shortDescUz: 'Darak, so‘roq, buyruq va his-hayajon gaplar. O‘zbekcha so‘roq berish mahorati.',
    shortDescRu: 'Повествовательные, вопросительные, побудительные и восклицательные предложения.',
    targetUz: 'Gap turlarini aniqlash, so‘roq gaplarda -mi yuklamasini to‘g‘ri o‘rinda qo‘llash.',
    targetRu: 'Освоить виды предложений по цели высказывания и правильное употребление вопросительной частицы -mi.',
    durationMinutes: 16,
    levelGrade: '5–6-sinf',
    culturalImageKey: 'xiva',
    lectureUz: `Gap ifodalayotgan maqsadiga ko‘ra to‘rt turga bo‘linadi:
1. **Darak gap (повествовательное)** — biror voqea-hodisa haqida xabar beradi (*Biz darsga keldik*).
2. **So‘roq gap (вопросительное)** — so‘roq mazmunini bildiradi. O‘zbek tilida so‘roq uch xil usul bilan yasaladi:
   - So‘roq olmoshlari orqali: *Kim keldi? Qayerga boryapsan?*
   - So‘roq yuklamalari orqali: **-mi**, **-chi**, **-a / -ya** (*Dars boshlandimi? Sen-chi?*).
   - Faqat intonatsiya orqali (*Ertaga ketasiz?*).
3. **Buyruq gap (побудительное)** — buyruq, iltimos, maslahat bildiradi (*Kitobni oching!*).
4. **His-hayajon gap (восклицательное)** — kuchli his-tuyg‘u bilan aytiladi (*Qanday go‘zal tabiat!*).

**MUHIM**: **-mi** so‘roq yuklamasi so‘zga chiziqchasiz, qo‘shib yoziladi! (*Keldingmi?*, *Umidami?*).`,
    lectureRu: `По цели высказывания узбекские предложения делятся на 4 типа:
1. **Darak gap (Повествовательное)**: сообщает факт (*Bugun havo issiq*).
2. **So‘roq gap (Вопросительное)**: задаёт вопрос.
   Главная особенность: если в русском языке для общего вопроса достаточно изменить интонацию (*Ты пришёл?*), то в узбекском ОБЯЗАТЕЛЬНО используется вопросительная частица **-mi**:
   *Sen keldingmi?*, *Bu sizning kitobingizmi?*.
   Частица **-mi** пишется СЛИТНО с тем словом, к которому относится вопрос!
3. **Buyruq gap (Побудительное)**: приказ, просьба, совет (*Kitobni o‘qing*, *Tezroq yur*).
4. **His-hayajon gap (Восклицательное)**: радость, удивление (*Qanday ajoyib shahar!*).`,
    comparisonTable: [
      {
        featureUz: 'Umumiy so‘roq gap tuzish',
        featureRu: 'Образование общего вопроса',
        uzbekRule: 'Fe’l yoki so‘roq qaratilgan so‘zga -mi yuklamasi qo‘shiladi.',
        uzbekExample: 'Sen kinosini ko‘rdingmi?',
        russianRule: 'Обычно создаётся только восходящей интонацией без частиц.',
        russianExample: 'Ты посмотрел кино?',
        notesUz: '-mi yuklamasi qo‘shib yoziladi.',
        notesRu: 'Частица -mi пишется слитно!',
      },
      {
        featureUz: 'Inkor shakli',
        featureRu: 'Отрицание',
        uzbekRule: 'Fe’llarda -ma qo‘shimchasi yoki «emas» so‘zi orqali.',
        uzbekExample: 'Men bormayman. U talaba emas.',
        russianRule: 'Частица "не" пишется раздельно: Я не пойду.',
        russianExample: 'Я не пойду. Он не студент.',
        notesUz: '-ma qo‘shimchasi fe’l asosiga ulanadi.',
        notesRu: '-ma в узбекском слитно присоединяется к корню глагола.',
      },
    ],
    keyExamples: [
      {
        uz: 'Sen keldingmi?',
        ru: 'Ты пришёл?',
        breakdownUz: 'Sen (ega) + kelding (kesim) + mi (so‘roq yuklamasi)',
        breakdownRu: 'В узбекском частица -mi обязательна для естественного живого вопроса.',
        ruleHighlight: '-mi so‘roq yuklamasi so‘zga qo‘shib yoziladi (ruscha «ли» dan farqli ravishda).',
      },
      {
        uz: 'Men bormayman.',
        ru: 'Я не пойду.',
        breakdownUz: 'bor (asos) + may (inkor) + man (shaxs qo‘shimchasi)',
        breakdownRu: 'Отрицание -ma встроено прямо внутрь глагольного слова!',
        ruleHighlight: 'O‘zbek tilida inkor fe’lning ichki qismiga aylanadi.',
      },
    ],
    didYouKnow: {
      factUz: 'Rus tilidagi «разве», «неужели» ma’nolarini o‘zbek tilida «nahotki», «axir» so‘zlari yoki ohang ifodalaydi: Nahotki u bilmasa? = Неужели он не знает?',
      factRu: 'Русские частицы «неужели», «разве» в узбекском переводятся словами «nahotki», «axir»: Nahotki sen buni bilmaysan? (Неужели ты этого не знаешь?).',
      source: 'M. Asqarova «O‘zbek tili amaliy sintaksisi»',
    },
    summaryUz: [
      'Maqsadga ko‘ra 4 ta gap turi mavjud: darak, so‘roq, buyruq, his-hayajon.',
      '-mi so‘roq yuklamasi so‘roq qaratilgan so‘zga qo‘shib yoziladi.',
      'Inkor ma’nosi fe’llarda -ma affiksi, ot kesimlarda «emas» vositasida yasaladi.',
    ],
    summaryRu: [
      '4 вида предложений по цели: darak, so‘roq, buyruq, his-hayajon.',
      'Вопросительная частица -mi пишется слитно с глаголом или другим словом.',
      'Отрицание глаголов строится аффиксом -ma-, именных сказуемых — словом emas.',
    ],
  },
  {
    id: 6,
    slug: 'bosh-bolaklar-ega-va-kesim',
    titleUz: '6. Gap bo‘laklari: ega va kesim. Bog‘lama va moslashuv',
    titleRu: '6. Главные члены предложения: подлежащее и сказуемое. Связка и согласование',
    shortDescUz: '«Men talabaman = Я студент». O‘zbek tilida shaxs-son qanday moslashadi?',
    shortDescRu: '«Men talabaman = Я студент». Как узбекское сказуемое согласуется с подлежащим.',
    targetUz: 'Ega va kesimni aniqlash, ot kesimlarda shaxs qo‘shimchalarini to‘g‘ri qo‘llash.',
    targetRu: 'Находить подлежащее и сказуемое, правильно присоединять личные окончания к именным сказуемым.',
    durationMinutes: 18,
    levelGrade: '6–7-sinf',
    culturalImageKey: 'anor',
    lectureUz: `Gapning grammatik asosini **bosh bo‘laklar** — **ega** va **kesim** tashkil etadi.
- **Ega** (подлежащее): gap kim yoki nima haqida ekanini bildiradi (kim? nima? so‘rog‘i). Tagiga bitta to‘g‘ri chiziq chiziladi (—).
- **Kesim** (сказуемое): eganing harakati, holati yoki belgisini bildiradi (nima qildi? kimdir? qandaydir?). Tagiga ikkita to‘g‘ri chiziq chiziladi (═).

**ENG MUHIM FARQ — BOG‘LAMA**:
Rus tilida hozirgi zamonda связка (есть) tushib qoladi: *Я студент*, *Мы школьники*.
O‘zbek tilida esa kesim vazifasidagi ot yoki sifatga SHAXS QO‘SHIMCHASI qo‘shiladi:
- *Men talaba + man* (Я студент)
- *Sen o‘quvchi + san* (Ты ученик)
- *Biz do‘st + miz* (Мы друзья)
- *Siz ustoz + siz* (Вы учитель)
Agar shaxs qo‘shimchasi aytilmasa (*Men talaba*), gap tugallanmagandek eshitiladi!`,
    lectureRu: `Грамматическую основу предложения составляют главные члены:
- **Ega (Подлежащее)**: называет предмет речи (kim? nima? — кто? что?). Подчёркивается одной прямой линией (—).
- **Kesim (Сказуемое)**: сообщает действие, состояние или свойство подлежащего. Подчёркивается двойной чертой (═).

**ГЛАВНАЯ ЛОВУШКА ДЛЯ РУССКИХ УЧАЩИХСЯ**:
В русском языке в настоящем времени глагол-связка опускается: *Я студент*, *Ты школьник*, *Мы готовы*.
В узбекском языке сказуемое ОБЯЗАНО согласоваться с подлежащим при помощи ЛИЧНЫХ АФФИКСОВ (shaxs qo‘shimchalari):
- Men talaba**man** (Я студент)
- Sen o‘quvchi**san** (Ты ученик)
- U shifokor (Он врач — в 3 лице окончание нулевое или -dir)
- Biz o‘quvchi**miz** (Мы ученики)
- Siz muallim**siz** (Вы учитель)
- Ular do‘stlar (Они друзья)

Нельзя говорить просто *Men talaba* — обязательно нужно окончание лица: *Men talabaman*!`,
    comparisonTable: [
      {
        featureUz: 'Ot-kesimda shaxs ko‘rsatkichi',
        featureRu: 'Личный показатель в именном сказуемом',
        uzbekRule: 'Kesimga shaxs qo‘shimchasi (-man, -san, -miz, -siz) ulanadi.',
        uzbekExample: 'Men talabaman. Biz maktabdamiz.',
        russianRule: 'В настоящем времени нулевая связка (нет окончания лица у существительного).',
        russianExample: 'Я студент. Мы в школе.',
        notesUz: 'Shaxs qo‘shimchasi gapning kesimlik belgisidir.',
        notesRu: 'Личное окончание делает слово полноценным сказуемым.',
      },
      {
        featureUz: 'Grammatik jins (rod) moslashuvi',
        featureRu: 'Согласование по роду',
        uzbekRule: 'O‘zbek tilida rod mutlaqo yo‘q: U o‘qidi (u o‘g‘il yoki qiz bo‘lishidan qat’i nazar bir xil).',
        uzbekExample: 'U o‘qidi (o‘g‘il bola ham, qiz bola ham).',
        russianRule: 'В прошедшем времени глагол меняется по родам: Он читал / Она читала.',
        russianExample: 'Он читал / Она читала / Оно лежало.',
        notesUz: 'O‘zbek tilida fe’l jinsga qarab o‘zgarmaydi.',
        notesRu: 'В узбекском глаголы НЕ изменяются по родам!',
      },
    ],
    keyExamples: [
      {
        uz: 'Men talabaman.',
        ru: 'Я студент.',
        breakdownUz: 'Men (ega, 1-shaxs) + talaba (ot) + man (1-shaxs kesimlik ko‘rsatkichi)',
        breakdownRu: 'Суффикс -man прямо указывает на первое лицо («я есть студент»).',
        ruleHighlight: 'Ot-kesimlarda shaxs-son ko‘rsatkichlarini unutmaslik shart.',
      },
      {
        uz: 'Ona uyda.',
        ru: 'Мама дома.',
        breakdownUz: 'Ona (ega, kim?) + uyda (kesim, qayerda?)',
        breakdownRu: '3-shaxsda shaxs qo‘shimchasi odatda nolga teng bo‘ladi.',
        ruleHighlight: '3-shaxsda qo‘shimcha talab etilmaydi yoki -dir qo‘shilishi mumkin (uyda / uydadir).',
      },
      {
        uz: 'U o‘qidi.',
        ru: 'Он читал / Она читала.',
        breakdownUz: 'U (ega, 3-shaxs) + o‘qidi (kesim)',
        breakdownRu: 'В узбекском нет различия между «он читал» и «она читала» — только «U o‘qidi».',
        ruleHighlight: 'Grammatik rodning yo‘qligi o‘zbek sintaksisini ancha soddalashtiradi.',
      },
    ],
    didYouKnow: {
      factUz: 'O‘zbek tilida ko‘pincha egani aytmasdan tushirib qoldirish mumkin, chunki kesimning o‘zidagi qo‘shimcha kim haqida gap ketayotganini aniq ko‘rsatadi: «Kitob o‘qidim» (Men ekani -dim qo‘shimchasidan ma’lum).',
      factRu: 'В узбекском языке подлежащее-местоимение часто опускают, так как окончание сказуемого само по себе однозначно указывает на лицо: Kitob o‘qidim (Читал книгу — понятно, что «я»).',
      source: 'H. Jamolxonov «Hozirgi o‘zbek adabiy tili»',
    },
    summaryUz: [
      'Ega kim? nima? so‘rog‘iga javob beradi (—), kesim nima qildi? nima qilmoqda? (═).',
      'Ot kesimlarda 1- va 2-shaxsda shaxs qo‘shimchalari (-man, -san, -miz, -siz) majburiydir.',
      'O‘zbek tilida grammatik rod yo‘q, fe’l jinsga qarab o‘zgarmaydi.',
    ],
    summaryRu: [
      'Подлежащее: кто? что? (—), сказуемое: что делает? каков? (═).',
      'В 1 и 2 лице именного сказуемого обязательно прибавляются аффиксы (-man, -san, -miz, -siz).',
      'В узбекском языке нет категории грамматического рода.',
    ],
  },
  {
    id: 7,
    slug: 'ikkinchi-darajali-bolaklar',
    titleUz: '7. Ikkinchi darajali bo‘laklar: to‘ldiruvchi, aniqlovchi, hol',
    titleRu: '7. Второстепенные члены: дополнение, определение, обстоятельство',
    shortDescUz: 'Gapni boyituvchi va ma’nosini aniqlashtiruvchi uch do‘st.',
    shortDescRu: 'Три помощника, которые обогащают и уточняют смысл предложения.',
    targetUz: 'To‘ldiruvchi, aniqlovchi va hol turlarini (o‘rin, payt, sabab, maqsad, tarz) to‘g‘ri aniqlash.',
    targetRu: 'Научиться выделять дополнение, определение и виды обстоятельств (места, времени, причины, образа действия).',
    durationMinutes: 20,
    levelGrade: '7–8-sinf',
    culturalImageKey: 'dutor',
    lectureUz: `Gapda bosh bo‘laklardan tashqari **ikkinchi darajali bo‘laklar** ham ishtirok etadi:
1. **Aniqlovchi (определение)**:
   - Narsa-buyumning belgisini, xususiyatini, miqdorini yoki kimga tegishliligini bildiradi.
   - So‘roqlari: *qanday? qaysi? qancha? kimning? nimaning?*
   - Tagiga **to‘lqinsimon chiziq** chiziladi (〜〜〜).
   - Misol: *Biz **qiziqarli** kitobni o‘qidik*.

2. **To‘ldiruvchi (дополнение)**:
   - Harakat yoki belgi qaratilgan vosita yoki obyektni bildiradi.
   - So‘roqlari: bosh kelishikdan boshqa kelishik so‘roqlari (*kimni? nimani? kimga? nimaga? kimdan? nimadan? kim bilan?*).
   - Tagiga **uzuq-yuluq chiziq** chiziladi (- - -).
   - Misol: *Anvar **do‘stiga** xat yozdi*.

3. **Hol (обстоятельство)**:
   - Harakatning qayerda, qachon, qay tarzda, nima sababdan sodir bo‘lganini bildiradi.
   - Turlari: o‘rin holi (*maktabda*), payt holi (*ertaga*), tarz holi (*tez*), sabab holi (*quvonganidan*), maqsad holi (*o‘qish uchun*).
   - Tagiga **nuqta-chiziq** chiziladi (- · -).`,
    lectureRu: `Второстепенные члены предложения поясняют главные или другие второстепенные члены:
1. **Aniqlovchi (Определение)**:
   - Обозначает признак, качество, количество или принадлежность.
   - Вопросы: *какой? чей? который? сколько?* (qanday? qaysi? qancha? kimning?).
   - Подчёркивается **волнистой линией** (〜〜〜).
   - Пример: *Biz **yangi** maktabda o‘qiymiz*.

2. **To‘ldiruvchi (Дополнение)**:
   - Обозначает предмет, на который направлено действие.
   - Вопросы косвенных падежей (*кого? что? кому? чему? кем? о ком?* — kimni? nimani? kimga? nimadan?).
   - Подчёркивается **пунктирной линией** (- - -).
   - Пример: *Nodir **kitobni** oldi*.

3. **Hol (Обстоятельство)**:
   - Поясняет, где, когда, как, почему и с какой целью совершается действие.
   - Виды: места (*bog‘da*), времени (*kecha*), образа действия (*chiroyli*), причины (*kasalligi tufayli*), цели (*dam olish uchun*).
   - Подчёркивается **тире-точка** (- · -).`,
    comparisonTable: [
      {
        featureUz: 'Aniqlovchining o‘rni',
        featureRu: 'Место определения',
        uzbekRule: 'Aniqlovchi hamisha aniqlanmishdan (otdan) OLDIN keladi.',
        uzbekExample: 'qiziqarli hikoya (qiziqarli oldinda)',
        russianRule: 'Обычно перед существительным, но несогласованное — позади (книга брата).',
        russianExample: 'интересный рассказ / книга брата',
        notesUz: 'O‘zbek tilida qaratqich aniqlovchi ham oldinda turadi: akamning kitobi.',
        notesRu: 'В узбекском несогласованное определение тоже строго впереди: akamning kitobi.',
      },
      {
        featureUz: 'To‘ldiruvchi va predloglar',
        featureRu: 'Дополнение и предлоги',
        uzbekRule: 'Kelishiklar yoki ko‘makchilar orqali ifodalanadi (bilan, haqida, uchun).',
        uzbekExample: 'dadam haqida gapirdim',
        russianRule: 'Используются предлоги: говорил об отце, писал карандашом.',
        russianExample: 'говорил об отце, писал карандашом',
      },
    ],
    keyExamples: [
      {
        uz: 'Bola yangi kitobni qiziqib o‘qidi.',
        ru: 'Ребёнок с интересом читал новую книгу.',
        breakdownUz: 'Bola (ega) + yangi (aniqlovchi) + kitobni (to‘ldiruvchi) + qiziqib (tarz holi) + o‘qidi (kesim)',
        breakdownRu: 'Смотрите на порядок: Подлежащее → Определение → Дополнение → Обстоятельство → Сказуемое!',
        ruleHighlight: 'Barcha bo‘laklar o‘z o‘rnida va kesim eng oxirida.',
      },
    ],
    didYouKnow: {
      factUz: 'O‘zbek tilida ravishlar ham, sifatdoshlar ham, otlar ham aniqlovchi bo‘lib kela oladi: «g‘isht bino» (ot aniqlovchi), «yugurgan bola» (sifatdosh aniqlovchi).',
      factRu: 'В узбекском языке существительное без изменения может быть определением: g‘isht bino (кирпичное здание — g‘isht = кирпич).',
      source: 'M. Asqarova, R. Yunusov «O‘zbek tili darsligi»',
    },
    summaryUz: [
      'Aniqlovchi (〜〜〜) qanday? qaysi? kimning? so‘rog‘iga javob berib, otdan oldin keladi.',
      'To‘ldiruvchi (- - -) vositali va vositasiz bo‘lib, kelishiklar bilan bog‘lanadi.',
      'Hol (- · -) harakatning joyi, vaqti, tarzi va sababini bildiradi.',
    ],
    summaryRu: [
      'Определение (〜〜〜) всегда стоит перед определяемым существительным.',
      'Дополнение (- - -) отвечает на вопросы косвенных падежей.',
      'Обстоятельство (- · -) поясняет время, место и способ совершения действия.',
    ],
  },
  {
    id: 8,
    slug: 'soz-tartibi-sov-va-svo',
    titleUz: '8. So‘z tartibi: SOV va SVO qoidasi, mantiqiy urg‘u',
    titleRu: '8. Порядок слов: правило SOV и SVO, логическое ударение',
    shortDescUz: 'Nega o‘zbek tilida fe’l qamoqda saqlangandek eng oxirida turadi?',
    shortDescRu: 'Почему узбекский глагол всегда строго замыкает предложение?',
    targetUz: 'O‘zbek tilidagi qat’iy SOV (Ega — To‘ldiruvchi — Kesim) tartibini va mantiqiy urg‘u o‘rnini o‘zlashtirish.',
    targetRu: 'Усвоить строгий порядок слов SOV (Подлежащее — Дополнение — Сказуемое) и позицию логического ударения.',
    durationMinutes: 18,
    levelGrade: '7–8-sinf',
    culturalImageKey: 'navroz',
    lectureUz: `Dunyodagi tillar gapdagi so‘z tartibiga ko‘ra bir necha guruhga bo‘linadi:
- **Rus tili: SVO** (Subject — Verb — Object) tartibiga moyil:
  *Ребёнок (S) читает (V) книгу (O)*.
- **O‘zbek tili: SOV** (Subject — Object — Verb) qat’iy tartibiga ega:
  *Bola (S) kitobni (O) o‘qiydi (V)*.

**KESIM HAMISHA OXIRIDA**:
O‘zbek tilida kesim odatda gapning eng oxirida keladi. Agar fe’lni o‘rtaga qo‘ysangiz (*Bola o‘qiydi kitobni*), bu rus tilining ta’siri bo‘lib, o‘zbekcha nutq tabiatiga to‘g‘ri kelmaydi.

**MANTIQIY URG‘U (Логическое ударение)**:
O‘zbek tilida gapdagi eng muhim, ta’kidlanayotgan so‘z **KESIMDAN OLDINGI O‘RINGA** qo‘yiladi!
- *Men kecha **kinoga** bordim* (Urg‘u kinoga — qayerga borgani muhim).
- *Kinoga men **kecha** bordim* (Urg‘u kecha — qachon borgani muhim).`,
    lectureRu: `По базовому порядку главных элементов языки мира различаются:
- **Русский язык: тип SVO** (Подлежащее — Глагол — Дополнение):
  *Ученик (S) пишет (V) упражнение (O)*. Глагол стоит в центре!
- **Узбекский язык: тип SOV** (Подлежащее — Дополнение — Глагол):
  *O‘quvchi (S) mashqni (O) yozyapti (V)*. Глагол СТРОГО в самом конце!

Перенос глагола в середину предложения по русской привычке (*O‘quvchi yozyapti mashqni) — одна из самых частых и режущих слух ошибок русскоязычных учеников!

**ЛОГИЧЕСКОЕ УДАРЕНИЕ (Mantiqiy urg‘u)**:
В узбекском языке логически выделенное, самое главное слово в предложении ставится **НЕПОСРЕДСТВЕННО ПЕРЕД СКАЗУЕМЫМ**:
- *Men do‘stimga **kitobni** berdim* (Упор на то, ЧТО именно я дал — книгу).
- *Men kitobni **do‘stimga** berdim* (Упор на то, КОМУ именно я дал — другу).`,
    comparisonTable: [
      {
        featureUz: 'Standart so‘z tartibi',
        featureRu: 'Базовый порядок слов',
        uzbekRule: 'SOV: Ega + Ikkinchi darajali bo‘laklar + Kesim.',
        uzbekExample: 'Bola kitobni o‘qiydi. (Kesim oxirida)',
        russianRule: 'SVO: Подлежащее + Сказуемое + Дополнение.',
        russianExample: 'Ребёнок читает книгу. (Сказуемое в центре)',
        notesUz: 'O‘zbek tilida fe’l gapni yakunlaydi.',
        notesRu: 'В узбекском глагол ставит точку в предложении.',
      },
      {
        featureUz: 'Mantiqiy urg‘u o‘rni',
        featureRu: 'Позиция логического ударения',
        uzbekRule: 'Muhim axborot kesimdan bevosita oldingi o‘ringa ko‘chiriladi.',
        uzbekExample: 'Dars soat to‘qqizda boshlanadi.',
        russianRule: 'Часто выделяется только силой голоса (интонацией).',
        russianExample: 'Урок начинается в девять часов.',
      },
    ],
    keyExamples: [
      {
        uz: 'Bola kitobni o‘qiydi.',
        ru: 'Ребёнок читает книгу.',
        breakdownUz: 'Bola (S) + kitobni (O) + o‘qiydi (V)',
        breakdownRu: 'Сравните: Ребёнок (S) + читает (V) + книгу (O). В узбекском глагол переместился в конец!',
        ruleHighlight: 'SOV tartibi buzilsa, nutq uslubiy jihatdan g‘alizlashadi.',
      },
      {
        uz: 'Biz ertaga teatrga boramiz.',
        ru: 'Мы завтра пойдём в театр.',
        breakdownUz: 'Biz (S) + ertaga (payt holi) + teatrga (o‘rin holi) + boramiz (V)',
        breakdownRu: 'Сказуемое «boramiz» строго закрывает предложение.',
        ruleHighlight: 'Harakat bildiruvchi so‘z gap oxirida turadi.',
      },
    ],
    didYouKnow: {
      factUz: 'Dunyo tillarining taxminan 45% qismi SOV (o‘zbek, yapon, koreys, turk), 42% qismi esa SVO (rus, ingliz, fransuz, xitoy) tartibiga ega!',
      factRu: 'Около 45% языков мира используют порядок SOV (узбекский, японский, корейский, турецкий), и около 42% — порядок SVO (русский, английский, французский).',
      source: 'World Atlas of Language Structures (WALS)',
    },
    summaryUz: [
      'O‘zbek tili SOV tartibiga ega: ega boshida, to‘ldiruvchi o‘rtada, kesim oxirida.',
      'Fe’lni gap o‘rtasiga qo‘yish rus tili ta’siridagi xatodir.',
      'Mantiqiy urg‘u tushgan so‘z kesimning ro‘parasiga (oldiga) qo‘yiladi.',
    ],
    summaryRu: [
      'Узбекский язык — язык структуры SOV (Подлежащее — Дополнение — Сказуемое).',
      'Глагол в нейтральной речи всегда стоит на последнем месте.',
      'Слово с логическим ударением занимает позицию перед сказуемым.',
    ],
  },
  {
    id: 9,
    slug: 'sodda-va-qoshma-gap',
    titleUz: '9. Sodda va qo‘shma gap: -sa, -ki, sifatdosh qurilmalari',
    titleRu: '9. Простое и сложное предложение: -sa, -ki, причастные обороты',
    shortDescUz: '«Kitob o‘qigan bola = ребёнок, который читал книгу». Murakkab fikrlar ko‘prigi.',
    shortDescRu: '«Kitob o‘qigan bola = ребёнок, который читал книгу». Мост сложных мыслей.',
    targetUz: 'Qo‘shma gaplar, shart mayli (-sa) va sifatdoshli birikmalarning ruscha ekvivalentlarini solishtirish.',
    targetRu: 'Понять структуру узбекских сложных предложений с -sa, -ki и замену русских придаточных причастными оборотами.',
    durationMinutes: 20,
    levelGrade: '8–9-sinf',
    culturalImageKey: 'registan',
    lectureUz: `Fikr kengayganda gaplar sodda va qo‘shma shaklda tuziladi:
1. **Sodda gap (простое)**: bitta grammatik asosga ega (*Quyosh chiqdi*).
2. **Qo‘shma gap (сложное)**: ikki yoki undan ortiq grammatik asosga ega (*Quyosh chiqdi va qushlar sayradi*).

**RUSIY ZABONLAR UCHUN IKKI KATTA O‘ZIGA XOSLIK**:
1. **Shart mayli (-sa) orqali ergashish**:
   Rus tilida: *Если погода будет хорошая, мы пойдём гулять*.
   O‘zbek tilida: *Havo yaxshi **bo‘lsa**, biz sayrga chiqamiz*. «Agar» so‘zini aytmasa ham, **-sa** qo‘shimchasi shart ma’nosini to‘liq yetkazadi!

2. **«Который» o‘rniga sifatdosh qurilmasi**:
   Rus tilida ergash gap ishlatiladi: *Ребёнок, **который** читал книгу*.
   O‘zbek tilida esa bu SODDA GAP QURILMASIGA aylanadi: *Kitob **o‘qigan** bola*.
   -gan / -digan sifatdosh qo‘shimchalari ruscha «который»li gaplarni bitta ixcham birikmaga aylantirib beradi!`,
    lectureRu: `По составу грамматических основ предложения делятся на:
1. **Sodda gap (Простое)**: одна грамматическая основа (*Qo‘ng‘iroq chalindi*).
2. **Qo‘shma gap (Сложное)**: две и более основы (*Qo‘ng‘iroq chalindi va dars boshlandi*).

**ДВА ВАЖНЕЙШИХ МОСТА С РУССКИМ ЯЗЫКОМ**:
1. **Условное придаточное с аффиксом -sa**:
   В русском требуется союз «если»: *Если придёт весна, зацветут сады*.
   В узбекском слово «agar» необязательно — всю работу делает аффикс **-sa**:
   *Bahor kel**sa**, bog‘lar gullaydi*.

2. **Причастные конструкции вместо придаточных со словом «который»**:
   Русский язык строит сложноподчиненное предложение: *Мальчик, **который** пришёл вчера*.
   Узбекский язык предпочитает простое предложение с причастием на **-gan / -digan**:
   *Kecha **kelgan** bola*.
   *Ребёнок, который читает книгу* → *Kitob **o‘qiydigan** bola*.`,
    comparisonTable: [
      {
        featureUz: 'Shart ergash gap (-sa)',
        featureRu: 'Придаточное условия (-sa)',
        uzbekRule: 'Fe’lga -sa qo‘shiladi (agar so‘zi ixtiyoriy).',
        uzbekExample: 'Havo yaxshi bo‘lsa, sayrga chiqamiz.',
        russianRule: 'Союз "если" обязателен: Если погода хорошая...',
        russianExample: 'Если погода хорошая, мы пойдём гулять.',
        notesUz: '-sa shart mayli affiksidir.',
        notesRu: 'Аффикс -sa самодостаточен без союза «agar».',
      },
      {
        featureUz: '«Который»li ergash gaplar',
        featureRu: 'Придаточные с союзным словом «который»',
        uzbekRule: 'Sifatdosh orqali soddalashtiriladi: -gan / -digan.',
        uzbekExample: 'Kitob o‘qigan bola, ertaga keladigan mehmon.',
        russianRule: 'Сложноподчиненное предложение с словом "который".',
        russianExample: 'Ребёнок, который прочитал книгу / Гость, который придёт завтра.',
        notesUz: 'O‘zbek tili sintaktik jihatdan ancha ixchamdir.',
        notesRu: 'Узбекская конструкция компактнее и выразительнее.',
      },
    ],
    keyExamples: [
      {
        uz: 'Havo yaxshi bo‘lsa, sayrga chiqamiz.',
        ru: 'Если погода хорошая, мы пойдём гулять.',
        breakdownUz: 'Havo yaxshi bo‘lsa (shart qism) + sayrga chiqamiz (bosh qism)',
        breakdownRu: 'Аффикс -sa присоединяется к основе bo‘l- и заменяет союз «если».',
        ruleHighlight: '-sa qo‘shimchasi shart ergash gapning asosiy ko‘rsatkichidir.',
      },
      {
        uz: 'Kitob o‘qigan bola a’lochi bo‘ladi.',
        ru: 'Ребёнок, который читал книги, будет отличником.',
        breakdownUz: 'Kitob o‘qigan (sifatdosh birikma) + bola (ega)',
        breakdownRu: 'Вместо сложного предложения «который читал» — причастие o‘qigan.',
        ruleHighlight: '-gan va -digan sifatdoshlari otdan oldin kelib aniqlovchi vazifasini bajaradi.',
      },
    ],
    didYouKnow: {
      factUz: 'Fors-tojik tilidan o‘tgan «-ki» bog‘lovchisi o‘zbek tilida bosh gapni ergash gapga bog‘laydi, lekin jonli xalq tilida sifatdoshli ixcham iboralarga ko‘proq ustunlik beriladi: «Bilmanki...» o‘rniga «Bilishimcha...».',
      factRu: 'Союз «-ki» пришёл из фарси и оформляет придаточные изъяснительные, однако в разговорной речи узбеки чаще используют причастные обороты: Мен билдимки... → Менинг билишимча...',
      source: 'A. Nurmonov «O‘zbek tili sintaksisi masalalari»',
    },
    summaryUz: [
      'Shart ergash gaplar -sa qo‘shimchasi orqali shakllanadi.',
      'Ruscha «который»li ergash gaplar o‘zbek tilida sifatdoshli (-gan, -digan) birikmalarga aylanadi.',
      'Sifatdoshli qurilmalar nutqni ixcham va ravon qiladi.',
    ],
    summaryRu: [
      'Придаточные условия образуются с помощью аффикса -sa.',
      'Конструкции со словом «который» переводятся узбекскими причастиями на -gan / -digan.',
      'Причастные обороты делают речь лаконичной и естественной.',
    ],
  },
  {
    id: 10,
    slug: 'takrorlash-tipik-xatolar',
    titleUz: '10. Takrorlash: rusiyzabonlarning tipik xatolari va ularni tuzatish',
    titleRu: '10. Повторение: типичные ошибки русскоязычных учеников и их исправление',
    shortDescUz: 'Barcha o‘rganilgan qoidalarni birlashtiramiz va xatolarga chek qo‘yamiz!',
    shortDescRu: 'Объединяем все изученные правила и ставим точку в типичных ошибках!',
    targetUz: 'Rusiyzabon o‘quvchilar yo‘l qo‘yadigan 5 ta asosiy sintaktik xatoni tahlil qilish va tuzatish.',
    targetRu: 'Проанализировать и окончательно устранить 5 главных синтаксических ошибок русскоязычных учащихся.',
    durationMinutes: 22,
    levelGrade: '5–9-sinf',
    culturalImageKey: 'buxoro',
    lectureUz: `Rus tilida so‘zlashuvchi o‘quvchilar o‘zbek tili sintaksisida ko‘pincha ruscha qoliplarni to‘g‘ridan-to‘g‘ri ko‘chirib (kalka qilib) xatoga yo‘l qo‘yadilar.

Keling, eng ko‘p uchraydigan 5 ta xatoni ko‘rib chiqamiz:
1. **Sifatni ko‘plikda ishlatish**:
   - Xato: *qizillar olmalar*, *yaxshilar bolalar*.
   - To‘g‘ri: **qizil olmalar**, **yaxshi bolalar** (sifat o‘zgarmaydi!).
2. **Fe’lni o‘rtaga qo‘yish (SVO tartibi)**:
   - Xato: *Men o‘qiyman qiziqarli kitobni*.
   - To‘g‘ri: **Men qiziqarli kitobni o‘qiyman** (kesim har doim oxirida!).
3. **Izofada -i / -si qo‘shimchasini unutish**:
   - Xato: *Toshkent shahar*, *o‘zbek til*, *maktab bog‘*.
   - To‘g‘ri: **Toshkent shahri**, **o‘zbek tili**, **maktab bog‘i**.
4. **Ot-kesimlarda shaxs qo‘shimchasini tushirib qoldirish**:
   - Xato: *Men o‘quvchi*, *Biz do‘st*.
   - To‘g‘ri: **Men o‘quvchiman**, **Biz do‘stmiz**.
5. **So‘roq gapda -mi yuklamasini ishlatmaslik**:
   - Xato: *Sen kelding?* (faqat ohang bilan).
   - To‘g‘ri: **Sen keldingmi?** (-mi yuklamasi shart!).`,
    lectureRu: `Русскоязычные ученики часто автоматически переносят структуру родного языка на узбекский.

Вот ТОП-5 типичных ошибок и как их навсегда исправить:
1. **Согласование прилагательного во множественном числе**:
   - ❌ Ошибка: *yangi kitoblar* вместо *yangilar kitoblar*. Прилагательное в узбекском НЕ изменяется!
   - ✅ Правильно: **yangi kitoblar**, **chiroyli gullar**.
2. **Порядок слов SVO вместо SOV**:
   - ❌ Ошибка: *Men ko‘rdim do‘stimni*.
   - ✅ Правильно: **Men do‘stimni ko‘rdim** (сказуемое ВСЕГДА в конце!).
3. **Потеря аффикса принадлежности в изафете**:
   - ❌ Ошибка: *Toshkent shahar*, *rus til*, *fizika dars*.
   - ✅ Правильно: **Toshkent shahri**, **rus tili**, **fizika darsi**.
4. **Пропуск личного аффикса в сказуемом**:
   - ❌ Ошибка: *Men talaba*, *Biz tayyor*.
   - ✅ Правильно: **Men talabaman**, **Biz tayyormiz**.
5. **Отсутствие вопросительной частицы -mi**:
   - ❌ Ошибка: *Dars tugadi?* (только интонация).
   - ✅ Правильно: **Dars tugadimi?** (частица -mi обязательна!).`,
    comparisonTable: [
      {
        featureUz: '1-xato: Sifat ko‘pligi',
        featureRu: 'Ошибка 1: Множественное число прилагательного',
        uzbekRule: 'Sifat o‘zgarmasdir: qizil olmalar.',
        uzbekExample: 'qizil olmalar (qizillar emas!)',
        russianRule: 'В русском: красные яблоки (прилагательное согласуется).',
        russianExample: 'красные яблоки',
      },
      {
        featureUz: '2-xato: Kesim o‘rni',
        featureRu: 'Ошибка 2: Позиция сказуемого',
        uzbekRule: 'Kesim gap oxirida turadi.',
        uzbekExample: 'Ular kinoga ketishdi.',
        russianRule: 'Они пошли в кино.',
        russianExample: 'Они пошли в кино.',
      },
      {
        featureUz: '3-xato: Izofatdagi -i',
        featureRu: 'Ошибка 3: Потеря -i в изафете',
        uzbekRule: 'Toshkent shahri, Navoiy ko‘chasi.',
        uzbekExample: 'Navoiy ko‘chasi (Navoiy ko‘cha emas!)',
        russianRule: 'Улица Навои (нет окончания принадлежности).',
        russianExample: 'улица Навои',
      },
    ],
    keyExamples: [
      {
        uz: 'Biz qiziqarli kitoblarni o‘qidik.',
        ru: 'Мы читали интересные книги.',
        breakdownUz: 'Biz (ega) + qiziqarli (aniqlovchi, o‘zgarmagan!) + kitoblarni (to‘ldiruvchi) + o‘qidik (kesim, oxirida!)',
        breakdownRu: 'Все ключевые правила в одном предложении: qiziqarli неизменно, o‘qidik в конце!',
        ruleHighlight: 'To‘g‘ri o‘zbekcha jumla — chiroyli va qat’iy tartibli sintaksis samarasidir.',
      },
    ],
    didYouKnow: {
      factUz: 'Taniqli tilshunos Polivanov o‘zbek tilining grammatik tuzilishini eng mantiqiy va qat’iy qonuniyatlarga asoslangan tillardan biri deb atagan.',
      factRu: 'Выдающийся востоковед Е. Д. Поливанов отмечал, что грамматика узбекского языка поражает своей кристальной логичностью и математической стройностью суффиксальной системы.',
      source: 'Ye. D. Polivanov «Uzbekskaya dialektologiya i grammatika»',
    },
    summaryUz: [
      'Sifat ot bilan moslashmaydi: yangi kitoblar.',
      'Kesim gap oxirida keladi: SOV tartibi.',
      'Izofatda ikkinchi so‘zga -i / -si qo‘yilishi shart: Toshkent shahri.',
      'Ot-kesimda shaxs qo‘shimchasi bo‘lishi lozim: Men o‘quvchiman.',
      'Umumiy so‘roqda -mi yuklamasi qo‘shib yoziladi: Keldingmi?',
    ],
    summaryRu: [
      'Прилагательное не изменяется по числам и родам (yangi kitoblar).',
      'Сказуемое всегда стоит в конце предложения (SOV).',
      'В изафете обязателен аффикс -i / -si (Toshkent shahri).',
      'Именное сказуемое требует личного аффикса (Men o‘quvchiman).',
      'Вопрос оформляется частицей -mi (Tushundingizmi?).',
    ],
  },
];
