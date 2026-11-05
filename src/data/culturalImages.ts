export interface CulturalImageItem {
  id: string;
  nameUz: string;
  nameRu: string;
  descriptionUz: string;
  descriptionRu: string;
  category: string;
  source: string;
  license: string;
  colorAccent: string;
}

export const CULTURAL_IMAGES: Record<string, CulturalImageItem> = {
  registan: {
    id: 'registan',
    nameUz: 'Registon maydoni, Samarqand',
    nameRu: 'Площадь Регистан, Самарканд',
    descriptionUz: 'Sharq me’morchiligining nodir durdonasi, ilm va madaniyat maskani.',
    descriptionRu: 'Жемчужина восточного зодчества, древний центр науки и культуры.',
    category: 'Tarixiy yodgorlik',
    source: 'Wikimedia Commons / Ochiq ta’lim fondi',
    license: 'Creative Commons CC-BY-SA 4.0',
    colorAccent: '#0284c7',
  },
  buxoro: {
    id: 'buxoro',
    nameUz: 'Buxoroi sharif va Minorai Kalon',
    nameRu: 'Благородная Бухара и Минарет Калян',
    descriptionUz: 'Qadimiy Ipak yo‘li chorrahasi, asrlar sadosini saqlagan obida.',
    descriptionRu: 'Перекрёсток Великого шелкового пути, символ стойкости и красоты.',
    category: 'Tarixiy yodgorlik',
    source: 'Wikimedia Commons / Ochiq ta’lim fondi',
    license: 'Creative Commons CC-BY-SA 4.0',
    colorAccent: '#d97706',
  },
  xiva: {
    id: 'xiva',
    nameUz: 'Xiva: Ichan qal’a',
    nameRu: 'Хива: Ичан-Кала',
    descriptionUz: 'Ochiq osmon ostidagi mo‘jizaviy shahar-muzey.',
    descriptionRu: 'Уникальный город-музей под открытым небом, памятник ЮНЕСКО.',
    category: 'Tarixiy yodgorlik',
    source: 'Wikimedia Commons / Ochiq ta’lim fondi',
    license: 'Creative Commons CC-BY-SA 4.0',
    colorAccent: '#0d9488',
  },
  non: {
    id: 'non',
    nameUz: 'O‘zbek tandir noni',
    nameRu: 'Узбекская лепешка из тандыра',
    descriptionUz: 'Mehmondo‘stlik va to‘kin-sochinlikning muqaddas timsoli.',
    descriptionRu: 'Священный символ гостеприимства, достатка и теплоты узбекского дома.',
    category: 'Milliy qadriyat',
    source: 'O‘zbekiston Milliy ensiklopediyasi',
    license: 'Public Domain / Ta’limiy maqsadlar uchun',
    colorAccent: '#ea580c',
  },
  atlas: {
    id: 'atlas',
    nameUz: 'Xonatlas va adras matolari',
    nameRu: 'Хан-атлас и икат',
    descriptionUz: 'Tabiiy ipakdan to‘qilgan kamalak rangli milliy g‘urur.',
    descriptionRu: 'Радужные шелковые узоры ручной работы, признанные во всем мире.',
    category: 'Milliy hunarmandchilik',
    source: 'Marg‘ilon hunarmandlar markazi',
    license: 'Creative Commons CC-BY 3.0',
    colorAccent: '#ec4899',
  },
  anor: {
    id: 'anor',
    nameUz: 'O‘zbek anori',
    nameRu: 'Узбекский гранат',
    descriptionUz: 'Quyosh nurlariga to‘yingan shirin va shifobaxsh meva.',
    descriptionRu: 'Символ изобилия, единства зерен и плодородия узбекской земли.',
    category: 'Tabiat ne’mati',
    source: 'O‘zbekiston bog‘dorchilik fondi',
    license: 'Creative Commons CC-BY-SA 4.0',
    colorAccent: '#e11d48',
  },
  dutor: {
    id: 'dutor',
    nameUz: 'O‘zbek milliy dutori',
    nameRu: 'Узбекский дутар',
    descriptionUz: 'Ipak torli, mayin ohangli ikki torli milliy sozi.',
    descriptionRu: 'Традиционный двухструнный инструмент с шелковыми струнами и мягким звуком.',
    category: 'Musiqa merosi',
    source: 'O‘zbekiston Davlat konservatoriyasi arxivi',
    license: 'Creative Commons CC-BY-SA 4.0',
    colorAccent: '#854d0e',
  },
  navroz: {
    id: 'navroz',
    nameUz: 'Navro‘z ayyomi va sumalak',
    nameRu: 'Праздник Навруз и сумаляк',
    descriptionUz: 'Bahoriy yangilanish, ezgulik va milliy birdamlik bayrami.',
    descriptionRu: 'Древний праздник весеннего равноденствия, обновления и добра.',
    category: 'Milliy bayram',
    source: 'O‘zbekiston madaniy merosi jamiyati',
    license: 'Creative Commons CC-BY-SA 4.0',
    colorAccent: '#16a34a',
  },
};
