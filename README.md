# «Xolida ustoz bilan o‘zbek tilini o‘rganamiz»
### (Изучаем узбекский язык с учителем Холидой)

**Loyiha muallifi va metodisti:** Toshkent shahar Mirzo Ulug‘bek tumani 54-maktab oliy toifali o‘zbek tili fani o‘qituvchisi **Karakuziyeva Xolida Nigmatillayevna**.

Rus tilida o‘qitiladigan umumta’lim maktablarining 5–9-sinf o‘quvchilari (11–15 yosh) va o‘qituvchilari uchun o‘zbek tili qiyosiy sintaksisi bo‘yicha interaktiv ta’limiy veb-platforma.

---

## 🌟 Asosiy xususiyatlar

1. **10 ta to‘liq qiyosiy modul**:
   - 1. Sintaksis nima? So‘z birikmasi, gap, matn.
   - 2. So‘z birikmasi: hokim va tobe so‘z.
   - 3. Tobelanish usullari: moslashuv, boshqaruv, bitishuv. 6 ta kelishik va ularning ruscha ekvivalentlari.
   - 4. Izofa: qaratqich va qaralmish (maktabning bog‘i, Toshkent shahri).
   - 5. Gap turlari va -mi so‘roq yuklamasi.
   - 6. Bosh bo‘laklar: ega va kesim. Ot-kesimlarda shaxs-son bog‘lamasi.
   - 7. Ikkinchi darajali bo‘laklar: to‘ldiruvchi, aniqlovchi, hol.
   - 8. So‘z tartibi: SOV va SVO, mantiqiy urg‘u.
   - 9. Sodda va qo‘shma gap: -sa shart mayli, sifatdoshli ixcham qurilmalar.
   - 10. Takrorlash: rusiyzabonlarning 5 ta tipik xatosini fosh qilish.
2. **«Sintaksis ko‘prigi»**: bitta gap o‘zbek va rus tillarida parallel ravishda, ranglar va maxsus tagiga chizish uslublari orqali tartib farqini ko‘rsatadi.
3. **6 ta to‘liq interaktiv o‘yin**:
   - «Gap konstruktori» (SOV tartibida so‘zlarni yig‘ish)
   - «Bo‘lak detektivi» (Ega, kesim, to‘ldiruvchi, aniqlovchi va holni ajratish)
   - «Kelishik ruleti» (6 ta kelishik va ularning ruscha tahlili)
   - «Juftlik topish» (Memory: o‘zbekcha-ruscha sintaktik juftliklar)
   - «Xato detektivi» (Tipik xatolarni topish va tuzatish)
   - «Tarjima ko‘prigi» (Vaqtga qarshi tezkor tarjima yig‘ish)
4. **100+ amaliy mashqlar** (8 xil turda: to‘g‘ri variant, bo‘sh joy, juftlash, gap tuzish, xato ovlash, tarjima, bo‘lak ajratish, to‘g‘ri/noto‘g‘ri).
5. **100+ savolli darajali testlar banki** (xatolar tahlili va takrorlash bo‘yicha tavsiyalar bilan).
6. **Ruscha–o‘zbekcha sintaksis mini-lug‘ati** (qidiruv va so‘z turkumlari filtri).
7. **20 ta qiziqarli lingvistik fakt** (manbalar bilan).
8. **Darsliklar va rasmiy ta’limiy manbalar** (ZiyoNET, EduPortal, Xalq ta’limi vazirligi).
9. **O‘qituvchi rejimi** (mashqlarni tanlash, chop etish / PDF formatida tarqatma varaq yaratish).
10. **Gamifikatsiya**: XP, 5 ta daraja (Yangi o‘quvchi → Sintaksis ustasi), streak, 12 ta nishon, kunlik topshiriq.

---

## 🛠 Texnologik stack

- **Frontend**: React 19, TypeScript (Strict), Vite
- **Router**: React Router v7 (`react-router-dom`)
- **Styling**: Tailwind CSS v4 (yorug‘ va tungi rejim, tizim sozlamasini avtomatik aniqlash)
- **Ikonkalar**: Lucide React
- **Effektlar**: Canvas Confetti
- **Saqlash**: Mahalliy `localStorage` (server yoki tashqi API kalitlarsiz to‘liq xavfsiz va mustaqil ishlaydi)
- **Deploy**: Vercel SPA (`vercel.json`)

---

## 🚀 O‘rnatish va mahalliylashtirish (Local setup)

1. Loyihani yuklab oling yoki klon qiling:
```bash
git clone <repo-url>
cd applet
```

2. Kerakli paketlarni o‘rnating:
```bash
npm install
```

3. Dasturchi rejimida ishga tushiring:
```bash
npm run dev
```
Brauzerda `http://localhost:3000` manzilini oching.

4. Production uchun build olish:
```bash
npm run build
```
Natija `dist/` papkasida hosil bo‘ladi.

---

## 📦 GitHub’ga yuklash (Push to GitHub)

```bash
git init
git add .
git commit -m "feat: Xolida ustoz bilan o'zbek tilini o'rganamiz ta'limiy platformasi"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

---

## ☁️ Vercel’ga deploy qilish

1. [Vercel](https://vercel.com) saytiga kiring va GitHub profilingizni ulang.
2. «Add New...» → «Project» tugmasini bosing va o‘z repozitoriylaringizdan ushbu loyihani tanlang.
3. Sozlamalar:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. «Deploy» tugmasini bosing. Loyihada `vercel.json` fayli mavjud bo‘lib, u barcha yo‘llarni (SPA routes) to‘g‘ri yo‘naltiradi (404 xatosi chiqmaydi).

---

## 📝 O‘qituvchi va metodistlar uchun eslatma (TODO)

Loyihadagi darsliklar va manbalar sahifasida (`/src/data/textbooks.ts`):
- O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi tomonidan har bir o‘quv yili uchun tasdiqlanadigan aniq mualliflar ro‘yxati va nashr yillarini o‘qituvchi o‘z o‘quv rejasiga muvofiq kiritishi uchun bo‘sh shablonlar qoldirilgan.
- Barcha qoidalar, o‘yinlar va mashqlar amaldagi davlat ta’lim standartlariga to‘liq mos keladi.
