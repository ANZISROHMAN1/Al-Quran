# 📖 Al-Qur'an Indonesia Digital (Web App)

Aplikasi web Al-Qur'an lengkap 30 Juz dan 114 Surat dengan terjemahan bahasa Indonesia resmi standar **Kementerian Agama Republik Indonesia (Kemenag RI)**. Dirancang khusus dengan prioritas utama pada **kenyamanan membaca (*readability*)**, tipografi Arab yang indah, navigasi cepat, dan fitur murottal interaktif.

---

## ✨ Fitur Unggulan

### 1. Kenyamanan & Estetika Membaca (High Readability)
- **Tipografi Arab Premium**: Menggunakan Google Font *Amiri* dan *Scheherazade New* dengan tata letak harakat/tasykil yang rapi dan tidak bertumpuk (*line-height* proporsional).
- **Pengaturan Ukuran Huruf Fleksibel**: Slider dinamis untuk memperbesar atau memperkecil tulisan Arab (22px – 46px) dan teks terjemahan Indonesia (13px – 22px).
- **3 Pilihan Tema Warna Nyaman di Mata**:
  - ☀️ **Terang (Light)**: Bersih dengan aksen hijau zamrud (*emerald green*).
  - 🌙 **Gelap (Dark / OLED)**: Mengurangi silau di malam hari dan hemat baterai.
  - 📜 **Sepia / Kitab Klasik**: Warna krem hangat menyerupai kertas mushaf fisik klasik, paling direkomendasikan untuk membaca dalam durasi lama tanpa lelah mata.
- **Mode Tampilan Ganda**:
  - **Mode Ayat (Card Mode)**: Lengkap dengan nomor ayat, terjemahan Indonesia, transliterasi Latin, audio per ayat, tafsir, tombol salin, dan markah.
  - **Mode Mushaf (Continuous Mode)**: Teks Arab mengalir bersambung seperti membuka Al-Qur'an cetak langsung.
- **Sakelar Tampilan**: Opsi untuk menampilkan atau menyembunyikan transliterasi Latin maupun terjemahan Indonesia sesuai kebutuhan.

---

### 2. Kelengkapan Isi & Data
- **114 Surat Lengkap & 30 Juz**: Dilengkapi informasi nomor surat, tempat turun (Makkiyyah / Madaniyyah), arti nama surat, dan jumlah ayat.
- **Tafsir Ringkas Resmi Kemenag RI**: Penjelasan tafsir per ayat yang dapat dibuka secara instan melalui modal pop-up.
- **Pencarian Cepat & Filter**:
  - Cari surat berdasarkan nama Latin (misal: *Al-Kahf*, *Yasin*), nomor surat (misal: *18*, *36*), maupun arti surat (misal: *Gua*, *Sapi Betina*).
  - Filter langsung berdasarkan surat Makkiyyah dan Madaniyyah.
- **Lompat ke Ayat (*Jump to Ayah*)**: Navigasi instan ke ayat tertentu tanpa perlu menggulir panjang.
- **Navigasi Cepat Surat**: Tombol surat sebelumnya dan surat selanjutnya di bagian bawah.

---

### 3. Audio Murottal Interaktif
- **Putar Murottal Penuh Satu Surat**: Audio jernih lengkap satu surat dengan pemutar mengambang (*floating player*).
- **Putar Audio per Ayat**: Klik tombol play di ayat manapun untuk mendengarkan pelafalan qari pada ayat tersebut.
- **Highlight Ayat Aktif & Auto-Scroll**: Ayat yang sedang diputar akan ditandai dengan warna lembut dan layar otomatis menggulir mengikuti bacaan qari.
- **Putar Beruntun Otomatis (*Auto Next*)**: Lanjut memutar ayat berikutnya secara otomatis ketika ayat selesai dibaca (sangat cocok untuk tilawah & menghafal/tahfidz).
- **6 Pilihan Qari Terkenal Dunia**:
  1. Misyari Rasyid Al-Afasi
  2. Abdurrahman As-Sudais (Imam Masjidil Haram)
  3. Abdullah Al-Juhany
  4. Abdul Muhsin Al-Qasim
  5. Ibrahim Al-Akhdar
  6. Ahmad Ali Al-Husaily
- **Pengatur Kecepatan Murottal**: 0.75x, 1.0x, 1.25x, 1.5x.

---

### 4. Fitur Penunjang & Spiritual
- **Tandai Terakhir Dibaca (*Last Read*)**: Simpan posisi surat dan ayat terakhir yang Anda baca dengan satu klik. Posisi ini akan muncul di banner beranda untuk melanjutkan tilawah.
- **Markah Ayat Tersimpan (*Bookmarks*)**: Simpan ayat-ayat favorit dengan mudah.
- **Salin & Bagikan Ayat**: Salin teks ayat lengkap (Arab + Latin + Terjemahan + Keterangan Surat) atau bagikan langsung ke WhatsApp.
- **🤲 Doa-doa Mustajab Al-Qur'an (Rabbana)**: Kumpulan doa-doa para Nabi yang diabadikan dalam Al-Qur'an.
- **Doa Khatam Al-Qur'an**: Doa setelah selesai membaca Al-Qur'an lengkap dengan teks Arab, Latin, dan artinya.
- **✨ 99 Asmaul Husna**: Daftar nama-nama Allah yang indah beserta arti dan penjelasannya.

---

## 🚀 Cara Menjalankan Website

Aplikasi ini dibuat menggunakan standar web modern tanpa memerlukan proses *build* atau instalasi paket yang rumit.

### Opsi 1: Buka Langsung di Browser (Paling Praktis)
Cukup buka file `index.html` dengan peramban web favorit Anda (Google Chrome, Safari, Firefox, Edge).
Di macOS, Anda bisa mengetik perintah berikut di Terminal:
```bash
open index.html
```

### Opsi 2: Jalankan via Local HTTP Server (Python / Node)
Untuk pengalaman terbaik (memanfaatkan cache browser dan navigasi hash):
```bash
# Menggunakan Python 3:
python3 -m http.server 8080
```
Lalu buka peramban di: **`http://localhost:8080`**

---

## 📁 Struktur Direktori
```text
quran-web/
├── index.html          # Halaman utama aplikasi (Single Page Architecture)
├── css/
│   └── style.css       # Desain responsif, tema (Light/Dark/Sepia), tipografi
├── js/
│   ├── app.js          # Logika audio player, routing, modal, bookmark, cache
│   ├── surah-data.js   # Metadata 114 surat, 30 juz, dan offline fallback
│   └── doa-data.js     # Data Doa Khatam, Doa Al-Quran, dan Asmaul Husna
└── README.md           # Panduan lengkap dokumentasi
```

---

## 📌 Sumber Data & Hak Cipta
- Teks ayat, transliterasi Latin, dan terjemahan bahasa Indonesia bersumber dari **Kementerian Agama Republik Indonesia (Kemenag RI)** melalui API terbuka EQuran.id.
- Audio murottal bersumber dari qari rekaman resmi berlisensi terbuka untuk pembelajaran Al-Qur'an.

