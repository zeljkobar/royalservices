# Royal Services Montenegro - Website

Jednostavan, brz i moderan sajt napravljen samo sa HTML, CSS i JavaScript.

## 📁 Struktura projekta

```
royalservices.me/
├── index.html          # Glavna HTML stranica
├── css/
│   └── styles.css      # Svi stilovi
├── js/
│   └── script.js       # JavaScript funkcionalnost
├── images/             # Folder za slike
│   ├── hero-bg.jpg
│   ├── tours-budva.jpg
│   ├── tours-kotor.jpg
│   ├── transfers.jpg
│   ├── kotor-bay.jpg
│   ├── durmitor.jpg
│   ├── lake-skadar.jpg
│   ├── budva-riviera.jpg
│   ├── lovcen.jpg
│   ├── albania-tour.jpg
│   └── montenegro-landscape.jpg
└── README.md
```

## 🚀 Kako pokrenuti sajt

### Opcija 1: Otvoriti direktno u browseru

1. Dva puta klikni na `index.html` fajl
2. Sajt će se otvoriti u tvom default browseru

### Opcija 2: Pokrenuti sa lokalnim serverom (preporučeno)

Za najbolje performanse, koristi lokalni server:

**Sa Python 3:**

```bash
cd /Users/summasummarum/Desktop/royalservices.me
python3 -m http.server 8000
```

Zatim otvori: http://localhost:8000

**Sa Node.js (ako imaš instaliran):**

```bash
npx serve
```

**Sa PHP:**

```bash
php -S localhost:8000
```

## 📸 Slike

Trenutno su slike placeholder-i. Dodaj svoje slike u `images/` folder sa sledećim imenima:

- `hero-bg.jpg` - Pozadina hero sekcije (1920x1080px)
- `tours-budva.jpg` - Tours iz Budve (800x600px)
- `tours-kotor.jpg` - Tours iz Kotora (800x600px)
- `transfers.jpg` - Transfer usluge (800x600px)
- `kotor-bay.jpg` - Kotor Bay tura (800x600px)
- `durmitor.jpg` - Durmitor park (800x600px)
- `lake-skadar.jpg` - Skadarsko jezero (800x600px)
- `budva-riviera.jpg` - Budva rivijera (800x600px)
- `lovcen.jpg` - Lovćen (800x600px)
- `albania-tour.jpg` - Albanija tura (800x600px)
- `montenegro-landscape.jpg` - Crna Gora pejzaž (800x600px)

## 📧 Kontakt forma

Kontakt forma je konfigurisana da koristi **FormSubmit.co** servis (besplatan).

### Kako aktivirati kontakt formu:

1. **Korišćenjem FormSubmit.co (najlakše, besplatno):**

   - Forma je već konfigurisana
   - Prvo slanje mejla će tražiti verifikaciju
   - FormSubmit.co će poslati email na `royalservicesme@gmail.com`
   - Klikni na link u emailu da aktiviraš
   - Posle toga će svi mejlovi automatski dolaziti

2. **Korišćenjem EmailJS (više kontrole):**

   - Registruj se na [EmailJS.com](https://www.emailjs.com/)
   - Kreiraj email service i template
   - Kopiraj Service ID i Template ID
   - U `js/script.js` odkomentiraj EmailJS sekciju i dodaj svoje kredencijale
   - Dodaj EmailJS SDK u `index.html`:
     ```html
     <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
     ```

3. **Sopstveni backend:**
   - Ako imaš svoj server, možeš kreirati API endpoint
   - Odkomentiraj backend API sekciju u `js/script.js`
   - Prilagodi URL i metode po potrebi

## 🌐 Hosting opcije

### Besplatni hosting:

1. **Netlify** (preporučeno)

   - Odlične performanse
   - Automatski SSL
   - Drag & drop deploy
   - [netlify.com](https://www.netlify.com/)

2. **GitHub Pages**

   - Besplatno za javne repozitorijume
   - [pages.github.com](https://pages.github.com/)

3. **Vercel**
   - Brz i pouzdan
   - [vercel.com](https://vercel.com/)

### Kako postaviti na Netlify:

1. Idi na [netlify.com](https://www.netlify.com/)
2. Registruj se (besplatno)
3. Prevuci ceo folder `royalservices.me` na Netlify
4. Sajt je live za par sekundi!
5. Možeš povezati svoj domen `royalservices.me`

## ✨ Karakteristike

### Performanse:

- ✅ Nema WordPress-a - mnogo brži sajt
- ✅ Minimalan kod - samo ono što treba
- ✅ Optimizovano za brzinu
- ✅ Mobile-first responsive dizajn

### Funkcionalnosti:

- ✅ Sticky navigacija sa scroll efektom
- ✅ Mobile hamburger meni
- ✅ Smooth scrolling
- ✅ Radna kontakt forma
- ✅ Animacije na scroll
- ✅ SEO optimizovano
- ✅ Social media linkovi

### Dizajn:

- ✅ Moderan i čist izgled
- ✅ Profesionalne boje (plava/zlatna)
- ✅ Card layout za ture
- ✅ Hover efekti
- ✅ Font Awesome ikone

## 🔧 Prilagođavanje

### Promena boja:

Otvori `css/styles.css` i promeni CSS varijable:

```css
:root {
  --primary-color: #1a5490; /* Glavna plava */
  --secondary-color: #d4af37; /* Zlatna */
  --dark-color: #1a1a1a; /* Tamna */
}
```

### Dodavanje novih tura:

U `index.html` kopiraj postojeći `.tour-card` div i promeni sadržaj.

### Promena tekstova:

Svi tekstovi su direktno u `index.html` - lako za editovanje.

## 📱 Responsive

Sajt je potpuno responsive i radi odlično na:

- 📱 Mobilnim telefonima
- 📱 Tabletima
- 💻 Laptopovima
- 🖥️ Desktop računarima

## 🌍 Multi-jezik (opciono)

Trenutno je sajt na engleskom. Za dodavanje crnogorskog jezika:

1. Kreiraj `index-me.html` sa prevodom
2. Ili koristi JavaScript za dinamičku promenu jezika

## 📊 Analytics (opciono)

Za praćenje posetilaca, dodaj Google Analytics:

1. Registruj se na [analytics.google.com](https://analytics.google.com/)
2. Dodaj tracking kod u `<head>` sekciju `index.html`

## 🔒 Sigurnost

- Svi eksterni linkovi imaju `rel="noopener noreferrer"`
- Validacija forme na klijentskoj strani
- Bez baza podataka - nema rizika od SQL injection

## 💡 Saveti

1. **Optimizuj slike** pre upload-a (koristi TinyPNG.com)
2. **Koristi WebP format** za slike (bolja kompresija)
3. **Testiraj sajt** na različitim uređajima
4. **Proveri brzinu** na [PageSpeed Insights](https://pagespeed.web.dev/)

## 📞 Podrška

Ako nešto ne radi:

1. Proveri da li su svi fajlovi na pravim lokacijama
2. Otvori browser Console (F12) za greške
3. Proveri da li ima pravopisnih grešaka u putanjama

## 🎉 Prednosti u odnosu na WordPress

| WordPress          | Ovaj sajt            |
| ------------------ | -------------------- |
| Spor               | ⚡ Ultra brz         |
| Kompleksan         | ✅ Jednostavan       |
| Potreban hosting   | ✅ Besplatan hosting |
| Redovno održavanje | ✅ Bez održavanja    |
| Sigurnosni rizici  | ✅ Siguran           |
| Teški za backup    | ✅ Lak backup        |

---

**Napravljen za Royal Services Montenegro** 🇲🇪
Jednostavan, brz i efikasan web sajt bez komplikacija!
