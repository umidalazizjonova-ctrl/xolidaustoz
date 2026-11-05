import { TextbookResource } from '../types';

export const OFFICIAL_EDUCATION_PORTALS = [
  {
    nameUz: 'ZiyoNET Ta’lim axborot tarmog‘i',
    nameRu: 'Образовательная сеть ZiyoNET',
    url: 'https://ziyonet.uz',
    descUz: 'O‘zbekiston Respublikasi ta’lim muassasalari uchun rasmiy axborot-resurs portali va elektron kutubxona.',
    descRu: 'Официальный образовательный портал и библиотека учебных материалов Республики Узбекистан.',
  },
  {
    nameUz: 'EduPortal — O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi portali',
    nameRu: 'EduPortal — Портал Министерства дошкольного и школьного образования РУз',
    url: 'https://eduportal.uz',
    descUz: 'Umumta’lim maktablari darsliklarining rasmiy elektron nusxalari va metodik qo‘llanmalar bazasi.',
    descRu: 'База электронных версий утверждённых школьных учебников и методических пособий.',
  },
  {
    nameUz: 'O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi',
    nameRu: 'Министерство дошкольного и школьного образования Республики Узбекистан',
    url: 'https://uzedu.uz',
    descUz: 'Davlat ta’lim standartlari, o‘quv dasturlari va rasmiy buyruqlar.',
    descRu: 'Государственные образовательные стандарты, учебные программы и нормативные документы.',
  },
  {
    nameUz: 'Lex.uz — O‘zbekiston qonunchiligi milliy bazasi («Davlat tili haqida»gi Qonun)',
    nameRu: 'Lex.uz — Национальная база законодательства (Закон «О государственном языке»)',
    url: 'https://lex.uz',
    descUz: 'O‘zbekiston Respublikasining rasmiy me’yoriy-huquqiy hujjatlari.',
    descRu: 'Официальные нормативно-правовые акты Республики Узбекистан.',
  },
];

// O‘zbekiston Respublikasi Xalq ta’limi vazirligi tasdiqlagan darsliklar shabloni.
// DIQQAT: Foydalanuvchi talabiga ko‘ra, uydirma ma’lumot qo‘shilmasin!
// Quyidagi maydonlar o‘qituvchi tomonidan tasdiqlangan rasmiy darslik ma’lumotlari bilan to‘ldiriladi.
export const TEXTBOOKS_DATA: TextbookResource[] = [
  {
    id: 'tb_grade5',
    title: 'O‘zbek tili (Rus tilida o‘qitiladigan maktablarning 5-sinfi uchun)',
    grade: '5-sinf',
    // TODO: o‘qituvchi tasdiqlangan ma’lumot bilan to‘ldirsin (mualliflar)
    authors: '[O‘qituvchi tasdiqlangan mualliflar tarkibini kiritadi]',
    // TODO: o‘qituvchi tasdiqlangan ma’lumot bilan to‘ldirsin (nashr yili)
    year: '[Nashr yili]',
    publisher: '«O‘zbekiston» / «G‘afur G‘ulom» nomidagi NMIU',
    isOfficialCurriculum: true,
    descriptionUz: '5-sinf rusiyzabon o‘quvchilari uchun boshlang‘ich so‘z birikmasi va sodda gap sintaksisi.',
    descriptionRu: 'Начальный синтаксис словосочетания и простого предложения для 5 класса русских школ.',
    teacherNote: 'Amaldagi davlat o‘quv dasturi va ta’lim standartlariga muvofiq.',
  },
  {
    id: 'tb_grade6',
    title: 'O‘zbek tili (Rus tilida o‘qitiladigan maktablarning 6-sinfi uchun)',
    grade: '6-sinf',
    // TODO: o‘qituvchi tasdiqlangan ma’lumot bilan to‘ldirsin
    authors: '[O‘qituvchi tasdiqlangan mualliflar tarkibini kiritadi]',
    year: '[Nashr yili]',
    publisher: 'Maktabgacha va maktab ta’limi vazirligi tasdiqlagan nashriyot',
    isOfficialCurriculum: true,
    descriptionUz: 'Kelishiklar, boshqaruv va izofali birikmalar bo‘yicha nazariy va amaliy mashqlar majmuasi.',
    descriptionRu: 'Падежи, управление и изафетные конструкции для 6 класса русских школ.',
    teacherNote: 'Izofat va egalik mavzulari uchun tavsiya etiladi.',
  },
  {
    id: 'tb_grade7',
    title: 'O‘zbek tili (Rus tilida o‘qitiladigan maktablarning 7-sinfi uchun)',
    grade: '7-sinf',
    // TODO: o‘qituvchi tasdiqlangan ma’lumot bilan to‘ldirsin
    authors: '[O‘qituvchi tasdiqlangan mualliflar tarkibini kiritadi]',
    year: '[Nashr yili]',
    publisher: 'Maktabgacha va maktab ta’limi vazirligi tasdiqlagan nashriyot',
    isOfficialCurriculum: true,
    descriptionUz: 'Gap bo‘laklari: ega, kesim, ikkinchi darajali bo‘laklar va ularning rus tili bilan qiyosi.',
    descriptionRu: 'Члены предложения: подлежащее, сказуемое, второстепенные члены и их сравнительный анализ.',
    teacherNote: 'Bosh va ikkinchi darajali bo‘laklar bobiga mos.',
  },
  {
    id: 'tb_grade8',
    title: 'O‘zbek tili (Rus tilida o‘qitiladigan maktablarning 8-sinfi uchun)',
    grade: '8-sinf',
    // TODO: o‘qituvchi tasdiqlangan ma’lumot bilan to‘ldirsin
    authors: '[O‘qituvchi tasdiqlangan mualliflar tarkibini kiritadi]',
    year: '[Nashr yili]',
    publisher: 'Maktabgacha va maktab ta’limi vazirligi tasdiqlagan nashriyot',
    isOfficialCurriculum: true,
    descriptionUz: 'SOV so‘z tartibi, mantiqiy urg‘u va uyushiq bo‘lakli gaplar sintaksisi.',
    descriptionRu: 'Порядок слов SOV, логическое ударение и однородные члены предложения.',
    teacherNote: 'SOV va SVO taqqoslashida asosiy manba.',
  },
  {
    id: 'tb_grade9',
    title: 'O‘zbek tili (Rus tilida o‘qitiladigan maktablarning 9-sinfi uchun)',
    grade: '9-sinf',
    // TODO: o‘qituvchi tasdiqlangan ma’lumot bilan to‘ldirsin
    authors: '[O‘qituvchi tasdiqlangan mualliflar tarkibini kiritadi]',
    year: '[Nashr yili]',
    publisher: 'Maktabgacha va maktab ta’limi vazirligi tasdiqlagan nashriyot',
    isOfficialCurriculum: true,
    descriptionUz: 'Murakkab sintaksis: qo‘shma gaplar, -sa shart mayli, sifatdosh va ravishdoshli qurilmalar.',
    descriptionRu: 'Сложный синтаксис: сложные предложения, условие на -sa, причастные и деепричастные обороты.',
    teacherNote: '9-modul («Sodda va qo‘shma gap») uchun dasturiy manba.',
  },
  {
    id: 'tb_dict_academic',
    title: '«O‘zbek tilining izohli lug‘ati» (5 jildlik)',
    grade: 'Ilmiy-akademik manba',
    authors: 'O‘zbekiston Respublikasi Fanlar akademiyasi Alisher Navoiy nomidagi Til va adabiyot instituti',
    year: '2006–2008',
    publisher: '«O‘zbekiston Milliy ensiklopediyasi» Davlat ilmiy nashriyoti',
    isOfficialCurriculum: true,
    descriptionUz: '80 000 dan ortiq so‘z va birikmani o‘z ichiga olgan eng to‘liq va nufuzli akademik izohli lug‘at.',
    descriptionRu: 'Самый авторитетный академический 5-томный толковый словарь узбекского языка (более 80 000 слов).',
    teacherNote: 'O‘qituvchilar va iqtidorli o‘quvchilar uchun asosiy etalon manba.',
  },
];
