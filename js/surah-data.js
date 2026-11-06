// Data 114 Surat Lengkap dalam Al-Qur'an
// Sumber: Standar Kementerian Agama Republik Indonesia (Kemenag RI)

const SURAH_LIST = [
  { nomor: 1, nama: "الفاتحة", namaLatin: "Al-Fatihah", jumlahAyat: 7, tempatTurun: "Mekah", arti: "Pembukaan" },
  { nomor: 2, nama: "البقرة", namaLatin: "Al-Baqarah", jumlahAyat: 286, tempatTurun: "Madinah", arti: "Sapi Betina" },
  { nomor: 3, nama: "آل عمران", namaLatin: "Ali 'Imran", jumlahAyat: 200, tempatTurun: "Madinah", arti: "Keluarga Imran" },
  { nomor: 4, nama: "النساء", namaLatin: "An-Nisa'", jumlahAyat: 176, tempatTurun: "Madinah", arti: "Wanita" },
  { nomor: 5, nama: "المائدة", namaLatin: "Al-Ma'idah", jumlahAyat: 120, tempatTurun: "Madinah", arti: "Jamuan Hidangan" },
  { nomor: 6, nama: "الأنعام", namaLatin: "Al-An'am", jumlahAyat: 165, tempatTurun: "Mekah", arti: "Binatang Ternak" },
  { nomor: 7, nama: "الأعراف", namaLatin: "Al-A'raf", jumlahAyat: 206, tempatTurun: "Mekah", arti: "Tempat Tertinggi" },
  { nomor: 8, nama: "الأنفال", namaLatin: "Al-Anfal", jumlahAyat: 75, tempatTurun: "Madinah", arti: "Rampasan Perang" },
  { nomor: 9, nama: "التوبة", namaLatin: "At-Taubah", jumlahAyat: 129, tempatTurun: "Madinah", arti: "Pengampunan" },
  { nomor: 10, nama: "يونس", namaLatin: "Yunus", jumlahAyat: 109, tempatTurun: "Mekah", arti: "Nabi Yunus" },
  { nomor: 11, nama: "هود", namaLatin: "Hud", jumlahAyat: 123, tempatTurun: "Mekah", arti: "Nabi Hud" },
  { nomor: 12, nama: "يوسف", namaLatin: "Yusuf", jumlahAyat: 111, tempatTurun: "Mekah", arti: "Nabi Yusuf" },
  { nomor: 13, nama: "الرعد", namaLatin: "Ar-Ra'd", jumlahAyat: 43, tempatTurun: "Madinah", arti: "Guruh" },
  { nomor: 14, nama: "إبراهيم", namaLatin: "Ibrahim", jumlahAyat: 52, tempatTurun: "Mekah", arti: "Nabi Ibrahim" },
  { nomor: 15, nama: "الحجر", namaLatin: "Al-Hijr", jumlahAyat: 99, tempatTurun: "Mekah", arti: "Daerah Pegunungan Hijr" },
  { nomor: 16, nama: "النحل", namaLatin: "An-Nahl", jumlahAyat: 128, tempatTurun: "Mekah", arti: "Lebah" },
  { nomor: 17, nama: "الإسراء", namaLatin: "Al-Isra'", jumlahAyat: 111, tempatTurun: "Mekah", arti: "Memperjalankan Malam Hari" },
  { nomor: 18, nama: "الكهف", namaLatin: "Al-Kahf", jumlahAyat: 110, tempatTurun: "Mekah", arti: "Penghuni Gua" },
  { nomor: 19, nama: "مريم", namaLatin: "Maryam", jumlahAyat: 98, tempatTurun: "Mekah", arti: "Maryam" },
  { nomor: 20, nama: "طه", namaLatin: "Taha", jumlahAyat: 135, tempatTurun: "Mekah", arti: "Taha" },
  { nomor: 21, nama: "الأنبياء", namaLatin: "Al-Anbiya'", jumlahAyat: 112, tempatTurun: "Mekah", arti: "Para Nabi" },
  { nomor: 22, nama: "الحج", namaLatin: "Al-Hajj", jumlahAyat: 78, tempatTurun: "Madinah", arti: "Haji" },
  { nomor: 23, nama: "المؤمنون", namaLatin: "Al-Mu'minun", jumlahAyat: 118, tempatTurun: "Mekah", arti: "Orang-orang Mukmin" },
  { nomor: 24, nama: "النور", namaLatin: "An-Nur", jumlahAyat: 64, tempatTurun: "Madinah", arti: "Cahaya" },
  { nomor: 25, nama: "الفرقان", namaLatin: "Al-Furqan", jumlahAyat: 77, tempatTurun: "Mekah", arti: "Pembeda" },
  { nomor: 26, nama: "الشعراء", namaLatin: "Asy-Syu'ara'", jumlahAyat: 227, tempatTurun: "Mekah", arti: "Para Penyair" },
  { nomor: 27, nama: "النمل", namaLatin: "An-Naml", jumlahAyat: 93, tempatTurun: "Mekah", arti: "Semut" },
  { nomor: 28, nama: "القصص", namaLatin: "Al-Qasas", jumlahAyat: 88, tempatTurun: "Mekah", arti: "Kisah-kisah" },
  { nomor: 29, nama: "العنكبوت", namaLatin: "Al-'Ankabut", jumlahAyat: 69, tempatTurun: "Mekah", arti: "Laba-laba" },
  { nomor: 30, nama: "الروم", namaLatin: "Ar-Rum", jumlahAyat: 60, tempatTurun: "Mekah", arti: "Bangsa Romawi" },
  { nomor: 31, nama: "لقمان", namaLatin: "Luqman", jumlahAyat: 34, tempatTurun: "Mekah", arti: "Luqman" },
  { nomor: 32, nama: "السجدة", namaLatin: "As-Sajdah", jumlahAyat: 30, tempatTurun: "Mekah", arti: "Sujud" },
  { nomor: 33, nama: "الأحزاب", namaLatin: "Al-Ahzab", jumlahAyat: 73, tempatTurun: "Madinah", arti: "Golongan yang Bersekutu" },
  { nomor: 34, nama: "سبأ", namaLatin: "Saba'", jumlahAyat: 54, tempatTurun: "Mekah", arti: "Kaum Saba'" },
  { nomor: 35, nama: "فاطر", namaLatin: "Fatir", jumlahAyat: 45, tempatTurun: "Mekah", arti: "Pencipta" },
  { nomor: 36, nama: "يس", namaLatin: "Yasin", jumlahAyat: 83, tempatTurun: "Mekah", arti: "Yasin" },
  { nomor: 37, nama: "الصافات", namaLatin: "As-Saffat", jumlahAyat: 182, tempatTurun: "Mekah", arti: "Barisan-barisan" },
  { nomor: 38, nama: "ص", namaLatin: "Sad", jumlahAyat: 88, tempatTurun: "Mekah", arti: "Sad" },
  { nomor: 39, nama: "الزمر", namaLatin: "Az-Zumar", jumlahAyat: 75, tempatTurun: "Mekah", arti: "Rombongan" },
  { nomor: 40, nama: "غافر", namaLatin: "Gafir", jumlahAyat: 85, tempatTurun: "Mekah", arti: "Yang Mengampuni" },
  { nomor: 41, nama: "فصلت", namaLatin: "Fussilat", jumlahAyat: 54, tempatTurun: "Mekah", arti: "Yang Dijelaskan" },
  { nomor: 42, nama: "الشورى", namaLatin: "Asy-Syura", jumlahAyat: 53, tempatTurun: "Mekah", arti: "Musyawarah" },
  { nomor: 43, nama: "الزخرف", namaLatin: "Az-Zukhruf", jumlahAyat: 89, tempatTurun: "Mekah", arti: "Perhiasan" },
  { nomor: 44, nama: "الدخان", namaLatin: "Ad-Dukhan", jumlahAyat: 59, tempatTurun: "Mekah", arti: "Kabut / Asap" },
  { nomor: 45, nama: "الجاثية", namaLatin: "Al-Jasiyah", jumlahAyat: 37, tempatTurun: "Mekah", arti: "Yang Berlutut" },
  { nomor: 46, nama: "الأحقاف", namaLatin: "Al-Ahqaf", jumlahAyat: 35, tempatTurun: "Mekah", arti: "Bukit-bukit Pasir" },
  { nomor: 47, nama: "محمد", namaLatin: "Muhammad", jumlahAyat: 38, tempatTurun: "Madinah", arti: "Nabi Muhammad" },
  { nomor: 48, nama: "الفتح", namaLatin: "Al-Fath", jumlahAyat: 29, tempatTurun: "Madinah", arti: "Kemenangan" },
  { nomor: 49, nama: "الحجرات", namaLatin: "Al-Hujurat", jumlahAyat: 18, tempatTurun: "Madinah", arti: "Kamar-kamar" },
  { nomor: 50, nama: "ق", namaLatin: "Qaf", jumlahAyat: 45, tempatTurun: "Mekah", arti: "Qaf" },
  { nomor: 51, nama: "الذاريات", namaLatin: "Az-Zariyat", jumlahAyat: 60, tempatTurun: "Mekah", arti: "Angin yang Menerbangkan" },
  { nomor: 52, nama: "الطور", namaLatin: "At-Tur", jumlahAyat: 49, tempatTurun: "Mekah", arti: "Bukit Tursina" },
  { nomor: 53, nama: "النجم", namaLatin: "An-Najm", jumlahAyat: 62, tempatTurun: "Mekah", arti: "Bintang" },
  { nomor: 54, nama: "القمر", namaLatin: "Al-Qamar", jumlahAyat: 55, tempatTurun: "Mekah", arti: "Bulan" },
  { nomor: 55, nama: "الرحمن", namaLatin: "Ar-Rahman", jumlahAyat: 78, tempatTurun: "Madinah", arti: "Yang Maha Pengasih" },
  { nomor: 56, nama: "الواقعة", namaLatin: "Al-Waqi'ah", jumlahAyat: 96, tempatTurun: "Mekah", arti: "Hari Kiamat" },
  { nomor: 57, nama: "الحديد", namaLatin: "Al-Hadid", jumlahAyat: 29, tempatTurun: "Madinah", arti: "Besi" },
  { nomor: 58, nama: "المجادلة", namaLatin: "Al-Mujadilah", jumlahAyat: 22, tempatTurun: "Madinah", arti: "Gugatan" },
  { nomor: 59, nama: "الحشر", namaLatin: "Al-Hasyr", jumlahAyat: 24, tempatTurun: "Madinah", arti: "Pengusiran" },
  { nomor: 60, nama: "الممتحنة", namaLatin: "Al-Mumtahanah", jumlahAyat: 13, tempatTurun: "Madinah", arti: "Wanita yang Diuji" },
  { nomor: 61, nama: "الصف", namaLatin: "As-Saff", jumlahAyat: 14, tempatTurun: "Madinah", arti: "Barisan" },
  { nomor: 62, nama: "الجمعة", namaLatin: "Al-Jumu'ah", jumlahAyat: 11, tempatTurun: "Madinah", arti: "Hari Jumat" },
  { nomor: 63, nama: "المنافقون", namaLatin: "Al-Munafiqun", jumlahAyat: 11, tempatTurun: "Madinah", arti: "Orang-orang Munafik" },
  { nomor: 64, nama: "التغابن", namaLatin: "At-Tagabun", jumlahAyat: 18, tempatTurun: "Madinah", arti: "Hari Ditampakkan Kesalahan" },
  { nomor: 65, nama: "الطلاق", namaLatin: "At-Talaq", jumlahAyat: 12, tempatTurun: "Madinah", arti: "Talak" },
  { nomor: 66, nama: "التحريم", namaLatin: "At-Tahrim", jumlahAyat: 12, tempatTurun: "Madinah", arti: "Pengharaman" },
  { nomor: 67, nama: "الملك", namaLatin: "Al-Mulk", jumlahAyat: 30, tempatTurun: "Mekah", arti: "Kerajaan" },
  { nomor: 68, nama: "القلم", namaLatin: "Al-Qalam", jumlahAyat: 52, tempatTurun: "Mekah", arti: "Pena" },
  { nomor: 69, nama: "الحاقة", namaLatin: "Al-Haqqah", jumlahAyat: 52, tempatTurun: "Mekah", arti: "Hari Kiamat yang Nyata" },
  { nomor: 70, nama: "المعارج", namaLatin: "Al-Ma'arij", jumlahAyat: 44, tempatTurun: "Mekah", arti: "Tempat-tempat Naik" },
  { nomor: 71, nama: "نوح", namaLatin: "Nuh", jumlahAyat: 28, tempatTurun: "Mekah", arti: "Nabi Nuh" },
  { nomor: 72, nama: "الجن", namaLatin: "Al-Jinn", jumlahAyat: 28, tempatTurun: "Mekah", arti: "Jin" },
  { nomor: 73, nama: "المزمل", namaLatin: "Al-Muzzammil", jumlahAyat: 20, tempatTurun: "Mekah", arti: "Orang yang Berselimut" },
  { nomor: 74, nama: "المدثر", namaLatin: "Al-Muddassir", jumlahAyat: 56, tempatTurun: "Mekah", arti: "Orang yang Berkemul" },
  { nomor: 75, nama: "القيامة", namaLatin: "Al-Qiyamah", jumlahAyat: 40, tempatTurun: "Mekah", arti: "Hari Kiamat" },
  { nomor: 76, nama: "الإنسان", namaLatin: "Al-Insan", jumlahAyat: 31, tempatTurun: "Madinah", arti: "Manusia" },
  { nomor: 77, nama: "المرسلات", namaLatin: "Al-Mursalat", jumlahAyat: 50, tempatTurun: "Mekah", arti: "Malaikat-malaikat yang Diutus" },
  { nomor: 78, nama: "النبأ", namaLatin: "An-Naba'", jumlahAyat: 40, tempatTurun: "Mekah", arti: "Berita Besar" },
  { nomor: 79, nama: "النازعات", namaLatin: "An-Nazi'at", jumlahAyat: 46, tempatTurun: "Mekah", arti: "Malaikat yang Mencabut" },
  { nomor: 80, nama: "عبس", namaLatin: "'Abasa", jumlahAyat: 42, tempatTurun: "Mekah", arti: "Bermuka Masam" },
  { nomor: 81, nama: "التكوير", namaLatin: "At-Takwir", jumlahAyat: 29, tempatTurun: "Mekah", arti: "Menggulung" },
  { nomor: 82, nama: "الانفطار", namaLatin: "Al-Infitar", jumlahAyat: 19, tempatTurun: "Mekah", arti: "Terbelah" },
  { nomor: 83, nama: "المطففين", namaLatin: "Al-Mutaffifin", jumlahAyat: 36, tempatTurun: "Mekah", arti: "Orang-orang Curang" },
  { nomor: 84, nama: "الانشقاق", namaLatin: "Al-Insyiqaq", jumlahAyat: 25, tempatTurun: "Mekah", arti: "Terbelah Menjadi Dua" },
  { nomor: 85, nama: "البروج", namaLatin: "Al-Buruj", jumlahAyat: 22, tempatTurun: "Mekah", arti: "Gugusan Bintang" },
  { nomor: 86, nama: "الطارق", namaLatin: "At-Tariq", jumlahAyat: 17, tempatTurun: "Mekah", arti: "Yang Datang di Malam Hari" },
  { nomor: 87, nama: "الأعلى", namaLatin: "Al-A'la", jumlahAyat: 19, tempatTurun: "Mekah", arti: "Yang Maha Tinggi" },
  { nomor: 88, nama: "الغاشية", namaLatin: "Al-Gasyiyah", jumlahAyat: 26, tempatTurun: "Mekah", arti: "Hari Pembalasan" },
  { nomor: 89, nama: "الفجر", namaLatin: "Al-Fajr", jumlahAyat: 30, tempatTurun: "Mekah", arti: "Fajar" },
  { nomor: 90, nama: "البلد", namaLatin: "Al-Balad", jumlahAyat: 20, tempatTurun: "Mekah", arti: "Negeri" },
  { nomor: 91, nama: "الشمس", namaLatin: "Asy-Syams", jumlahAyat: 15, tempatTurun: "Mekah", arti: "Matahari" },
  { nomor: 92, nama: "الليل", namaLatin: "Al-Lail", jumlahAyat: 21, tempatTurun: "Mekah", arti: "Malam" },
  { nomor: 93, nama: "الضحى", namaLatin: "Ad-Duha", jumlahAyat: 11, tempatTurun: "Mekah", arti: "Waktu Dhuha" },
  { nomor: 94, nama: "الشرح", namaLatin: "Asy-Syarh", jumlahAyat: 8, tempatTurun: "Mekah", arti: "Kelapangan Hati" },
  { nomor: 95, nama: "التين", namaLatin: "At-Tin", jumlahAyat: 8, tempatTurun: "Mekah", arti: "Buah Tin" },
  { nomor: 96, nama: "العلق", namaLatin: "Al-'Alaq", jumlahAyat: 19, tempatTurun: "Mekah", arti: "Segumpal Darah" },
  { nomor: 97, nama: "القدر", namaLatin: "Al-Qadr", jumlahAyat: 5, tempatTurun: "Mekah", arti: "Kemuliaan" },
  { nomor: 98, nama: "البينة", namaLatin: "Al-Bayyinah", jumlahAyat: 8, tempatTurun: "Madinah", arti: "Bukti Nyata" },
  { nomor: 99, nama: "الزلزلة", namaLatin: "Az-Zalzalah", jumlahAyat: 8, tempatTurun: "Madinah", arti: "Guncangan Dahsyat" },
  { nomor: 100, nama: "العاديات", namaLatin: "Al-'Adiyat", jumlahAyat: 11, tempatTurun: "Mekah", arti: "Kuda Perang Berlari Kencang" },
  { nomor: 101, nama: "القارعة", namaLatin: "Al-Qari'ah", jumlahAyat: 11, tempatTurun: "Mekah", arti: "Hari Kiamat" },
  { nomor: 102, nama: "التكاثر", namaLatin: "At-Takasur", jumlahAyat: 8, tempatTurun: "Mekah", arti: "Bermegah-megahan" },
  { nomor: 103, nama: "العصر", namaLatin: "Al-'Asr", jumlahAyat: 3, tempatTurun: "Mekah", arti: "Masa / Waktu" },
  { nomor: 104, nama: "الهمزة", namaLatin: "Al-Humazah", jumlahAyat: 9, tempatTurun: "Mekah", arti: "Pengumpat" },
  { nomor: 105, nama: "الفيل", namaLatin: "Al-Fil", jumlahAyat: 5, tempatTurun: "Mekah", arti: "Gajah" },
  { nomor: 106, nama: "قريش", namaLatin: "Quraisy", jumlahAyat: 4, tempatTurun: "Mekah", arti: "Suku Quraisy" },
  { nomor: 107, nama: "الماعون", namaLatin: "Al-Ma'un", jumlahAyat: 7, tempatTurun: "Mekah", arti: "Bantuan Bermanfaat" },
  { nomor: 108, nama: "الكوثر", namaLatin: "Al-Kausar", jumlahAyat: 3, tempatTurun: "Mekah", arti: "Nikmat yang Melimpah" },
  { nomor: 109, nama: "الكافرون", namaLatin: "Al-Kafirun", jumlahAyat: 6, tempatTurun: "Mekah", arti: "Orang-orang Kafir" },
  { nomor: 110, nama: "النصر", namaLatin: "An-Nasr", jumlahAyat: 3, tempatTurun: "Madinah", arti: "Pertolongan" },
  { nomor: 111, nama: "اللهب", namaLatin: "Al-Lahab", jumlahAyat: 5, tempatTurun: "Mekah", arti: "Gejolak Api" },
  { nomor: 112, nama: "الإخلاص", namaLatin: "Al-Ikhlas", jumlahAyat: 4, tempatTurun: "Mekah", arti: "Kemurnian Keesaan Allah" },
  { nomor: 113, nama: "الفلق", namaLatin: "Al-Falaq", jumlahAyat: 5, tempatTurun: "Mekah", arti: "Waktu Subuh" },
  { nomor: 114, nama: "الناس", namaLatin: "An-Nas", jumlahAyat: 6, tempatTurun: "Mekah", arti: "Manusia" }
];

// Data Pembagian 30 Juz
const JUZ_LIST = [
  { juz: 1, nama: "Juz 1", mulaiSurat: 1, mulaiAyat: 1, sampaiSurat: 2, sampaiAyat: 141, keterangan: "Al-Fatihah 1 - Al-Baqarah 141" },
  { juz: 2, nama: "Juz 2", mulaiSurat: 2, mulaiAyat: 142, sampaiSurat: 2, sampaiAyat: 252, keterangan: "Al-Baqarah 142 - Al-Baqarah 252" },
  { juz: 3, nama: "Juz 3", mulaiSurat: 2, mulaiAyat: 253, sampaiSurat: 3, sampaiAyat: 92, keterangan: "Al-Baqarah 253 - Ali 'Imran 92" },
  { juz: 4, nama: "Juz 4", mulaiSurat: 3, mulaiAyat: 93, sampaiSurat: 4, sampaiAyat: 23, keterangan: "Ali 'Imran 93 - An-Nisa' 23" },
  { juz: 5, nama: "Juz 5", mulaiSurat: 4, mulaiAyat: 24, sampaiSurat: 4, sampaiAyat: 147, keterangan: "An-Nisa' 24 - An-Nisa' 147" },
  { juz: 6, nama: "Juz 6", mulaiSurat: 4, mulaiAyat: 148, sampaiSurat: 5, sampaiAyat: 81, keterangan: "An-Nisa' 148 - Al-Ma'idah 81" },
  { juz: 7, nama: "Juz 7", mulaiSurat: 5, mulaiAyat: 82, sampaiSurat: 6, sampaiAyat: 110, keterangan: "Al-Ma'idah 82 - Al-An'am 110" },
  { juz: 8, nama: "Juz 8", mulaiSurat: 6, mulaiAyat: 111, sampaiSurat: 7, sampaiAyat: 87, keterangan: "Al-An'am 111 - Al-A'raf 87" },
  { juz: 9, nama: "Juz 9", mulaiSurat: 7, mulaiAyat: 88, sampaiSurat: 8, sampaiAyat: 40, keterangan: "Al-A'raf 88 - Al-Anfal 40" },
  { juz: 10, nama: "Juz 10", mulaiSurat: 8, mulaiAyat: 41, sampaiSurat: 9, sampaiAyat: 92, keterangan: "Al-Anfal 41 - At-Taubah 92" },
  { juz: 11, nama: "Juz 11", mulaiSurat: 9, mulaiAyat: 93, sampaiSurat: 11, sampaiAyat: 5, keterangan: "At-Taubah 93 - Hud 5" },
  { juz: 12, nama: "Juz 12", mulaiSurat: 11, mulaiAyat: 6, sampaiSurat: 12, sampaiAyat: 52, keterangan: "Hud 6 - Yusuf 52" },
  { juz: 13, nama: "Juz 13", mulaiSurat: 12, mulaiAyat: 53, sampaiSurat: 14, sampaiAyat: 52, keterangan: "Yusuf 53 - Ibrahim 52" },
  { juz: 14, nama: "Juz 14", mulaiSurat: 15, mulaiAyat: 1, sampaiSurat: 16, sampaiAyat: 128, keterangan: "Al-Hijr 1 - An-Nahl 128" },
  { juz: 15, nama: "Juz 15", mulaiSurat: 17, mulaiAyat: 1, sampaiSurat: 18, sampaiAyat: 74, keterangan: "Al-Isra' 1 - Al-Kahf 74" },
  { juz: 16, nama: "Juz 16", mulaiSurat: 18, mulaiAyat: 75, sampaiSurat: 20, sampaiAyat: 135, keterangan: "Al-Kahf 75 - Taha 135" },
  { juz: 17, nama: "Juz 17", mulaiSurat: 21, mulaiAyat: 1, sampaiSurat: 22, sampaiAyat: 78, keterangan: "Al-Anbiya' 1 - Al-Hajj 78" },
  { juz: 18, nama: "Juz 18", mulaiSurat: 23, mulaiAyat: 1, sampaiSurat: 25, sampaiAyat: 20, keterangan: "Al-Mu'minun 1 - Al-Furqan 20" },
  { juz: 19, nama: "Juz 19", mulaiSurat: 25, mulaiAyat: 21, sampaiSurat: 27, sampaiAyat: 55, keterangan: "Al-Furqan 21 - An-Naml 55" },
  { juz: 20, nama: "Juz 20", mulaiSurat: 27, mulaiAyat: 56, sampaiSurat: 29, sampaiAyat: 45, keterangan: "An-Naml 56 - Al-'Ankabut 45" },
  { juz: 21, nama: "Juz 21", mulaiSurat: 29, mulaiAyat: 46, sampaiSurat: 33, sampaiAyat: 30, keterangan: "Al-'Ankabut 46 - Al-Ahzab 30" },
  { juz: 22, nama: "Juz 22", mulaiSurat: 33, mulaiAyat: 31, sampaiSurat: 36, sampaiAyat: 27, keterangan: "Al-Ahzab 31 - Yasin 27" },
  { juz: 23, nama: "Juz 23", mulaiSurat: 36, mulaiAyat: 28, sampaiSurat: 39, sampaiAyat: 31, keterangan: "Yasin 28 - Az-Zumar 31" },
  { juz: 24, nama: "Juz 24", mulaiSurat: 39, mulaiAyat: 32, sampaiSurat: 41, sampaiAyat: 46, keterangan: "Az-Zumar 32 - Fussilat 46" },
  { juz: 25, nama: "Juz 25", mulaiSurat: 41, mulaiAyat: 47, sampaiSurat: 45, sampaiAyat: 37, keterangan: "Fussilat 47 - Al-Jasiyah 37" },
  { juz: 26, nama: "Juz 26", mulaiSurat: 46, mulaiAyat: 1, sampaiSurat: 51, sampaiAyat: 30, keterangan: "Al-Ahqaf 1 - Az-Zariyat 30" },
  { juz: 27, nama: "Juz 27", mulaiSurat: 51, mulaiAyat: 31, sampaiSurat: 57, sampaiAyat: 29, keterangan: "Az-Zariyat 31 - Al-Hadid 29" },
  { juz: 28, nama: "Juz 28", mulaiSurat: 58, mulaiAyat: 1, sampaiSurat: 66, sampaiAyat: 12, keterangan: "Al-Mujadilah 1 - At-Tahrim 12" },
  { juz: 29, nama: "Juz 29", mulaiSurat: 67, mulaiAyat: 1, sampaiSurat: 77, sampaiAyat: 50, keterangan: "Al-Mulk 1 - Al-Mursalat 50 (Tabarak)" },
  { juz: 30, nama: "Juz 30", mulaiSurat: 78, mulaiAyat: 1, sampaiSurat: 114, sampaiAyat: 6, keterangan: "An-Naba' 1 - An-Nas 6 (Juz 'Amma)" }
];

// Qari Tersedia
const QARI_LIST = [
  { id: "05", name: "Misyari Rasyid Al-Afasi", title: "Misyari Rasyid Al-Afasi" },
  { id: "03", name: "Abdurrahman as-Sudais", title: "Abdurrahman As-Sudais (Imam Masjidil Haram)" },
  { id: "01", name: "Abdullah Al-Juhany", title: "Abdullah Al-Juhany" },
  { id: "02", name: "Abdul Muhsin Al-Qasim", title: "Abdul Muhsin Al-Qasim" },
  { id: "04", name: "Ibrahim Al-Akhdar", title: "Ibrahim Al-Akhdar" },
  { id: "06", name: "Ahmad Ali Al-Husaily", title: "Ahmad Ali Al-Husaily" }
];

// Fallback Surat Al-Fatihah jika offline/koneksi bermasalah
const FALLBACK_SURAH_1 = {
  nomor: 1,
  nama: "الفاتحة",
  namaLatin: "Al-Fatihah",
  jumlahAyat: 7,
  tempatTurun: "Mekah",
  arti: "Pembukaan",
  deskripsi: "Surat Al Fatihah (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat. Surat ini dinamakan Al Fatihah (Pembukaan) karena dengan surat inilah dibuka dan dimulainya Al-Qur'an. Dinamakan pula Ummul Qur'an (Induk Al-Qur'an) atau Ummul Kitab (Induk Al-Kitab) karena merupakan induk dari semua isi Al-Qur'an.",
  audioFull: {
    "01": "https://equran.id/audio-full/Abdullah-Al-Juhany/001.mp3",
    "02": "https://equran.id/audio-full/Abdul-Muhsin-Al-Qasim/001.mp3",
    "03": "https://equran.id/audio-full/Abdurrahman-as-Sudais/001.mp3",
    "04": "https://equran.id/audio-full/Ibrahim-Al-Akhdar/001.mp3",
    "05": "https://equran.id/audio-full/Misyari-Rasyid-Al-Afasi/001.mp3",
    "06": "https://equran.id/audio-full/Ahmad-Ali-Al-Husaily/001.mp3"
  },
  ayat: [
    {
      nomorAyat: 1,
      teksArab: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
      teksLatin: "Bismillāhir-raḥmānir-raḥīm(i).",
      teksIndonesia: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",
      audio: {
        "01": "https://equran.id/audio/Abdullah-Al-Juhany/001001.mp3",
        "02": "https://equran.id/audio/Abdul-Muhsin-Al-Qasim/001001.mp3",
        "03": "https://equran.id/audio/Abdurrahman-as-Sudais/001001.mp3",
        "04": "https://equran.id/audio/Ibrahim-Al-Akhdar/001001.mp3",
        "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/001001.mp3",
        "06": "https://equran.id/audio/Ahmad-Ali-Al-Husaily/001001.mp3"
      }
    },
    {
      nomorAyat: 2,
      teksArab: "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ",
      teksLatin: "Al-ḥamdu lillāhi rabbil-'ālamīn(a).",
      teksIndonesia: "Segala puji bagi Allah, Tuhan seluruh alam,",
      audio: {
        "01": "https://equran.id/audio/Abdullah-Al-Juhany/001002.mp3",
        "02": "https://equran.id/audio/Abdul-Muhsin-Al-Qasim/001002.mp3",
        "03": "https://equran.id/audio/Abdurrahman-as-Sudais/001002.mp3",
        "04": "https://equran.id/audio/Ibrahim-Al-Akhdar/001002.mp3",
        "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/001002.mp3",
        "06": "https://equran.id/audio/Ahmad-Ali-Al-Husaily/001002.mp3"
      }
    },
    {
      nomorAyat: 3,
      teksArab: "الرَّحْمٰنِ الرَّحِيْمِۙ",
      teksLatin: "Ar-raḥmānir-raḥīm(i).",
      teksIndonesia: "Yang Maha Pengasih, Maha Penyayang,",
      audio: {
        "01": "https://equran.id/audio/Abdullah-Al-Juhany/001003.mp3",
        "02": "https://equran.id/audio/Abdul-Muhsin-Al-Qasim/001003.mp3",
        "03": "https://equran.id/audio/Abdurrahman-as-Sudais/001003.mp3",
        "04": "https://equran.id/audio/Ibrahim-Al-Akhdar/001003.mp3",
        "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/001003.mp3",
        "06": "https://equran.id/audio/Ahmad-Ali-Al-Husaily/001003.mp3"
      }
    },
    {
      nomorAyat: 4,
      teksArab: "مٰلِكِ يَوْمِ الدِّيْنِۗ",
      teksLatin: "Māliki yaumid-dīn(i).",
      teksIndonesia: "Pemilik hari pembalasan.",
      audio: {
        "01": "https://equran.id/audio/Abdullah-Al-Juhany/001004.mp3",
        "02": "https://equran.id/audio/Abdul-Muhsin-Al-Qasim/001004.mp3",
        "03": "https://equran.id/audio/Abdurrahman-as-Sudais/001004.mp3",
        "04": "https://equran.id/audio/Ibrahim-Al-Akhdar/001004.mp3",
        "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/001004.mp3",
        "06": "https://equran.id/audio/Ahmad-Ali-Al-Husaily/001004.mp3"
      }
    },
    {
      nomorAyat: 5,
      teksArab: "اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ",
      teksLatin: "Iyyāka na'budu wa iyyāka nasta'īn(u).",
      teksIndonesia: "Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.",
      audio: {
        "01": "https://equran.id/audio/Abdullah-Al-Juhany/001005.mp3",
        "02": "https://equran.id/audio/Abdul-Muhsin-Al-Qasim/001005.mp3",
        "03": "https://equran.id/audio/Abdurrahman-as-Sudais/001005.mp3",
        "04": "https://equran.id/audio/Ibrahim-Al-Akhdar/001005.mp3",
        "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/001005.mp3",
        "06": "https://equran.id/audio/Ahmad-Ali-Al-Husaily/001005.mp3"
      }
    },
    {
      nomorAyat: 6,
      teksArab: "اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَۙ",
      teksLatin: "Ihdinaṣ-ṣirāṭal-mustaqīm(a).",
      teksIndonesia: "Bimbinglah kami ke jalan yang lurus,",
      audio: {
        "01": "https://equran.id/audio/Abdullah-Al-Juhany/001006.mp3",
        "02": "https://equran.id/audio/Abdul-Muhsin-Al-Qasim/001006.mp3",
        "03": "https://equran.id/audio/Abdurrahman-as-Sudais/001006.mp3",
        "04": "https://equran.id/audio/Ibrahim-Al-Akhdar/001006.mp3",
        "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/001006.mp3",
        "06": "https://equran.id/audio/Ahmad-Ali-Al-Husaily/001006.mp3"
      }
    },
    {
      nomorAyat: 7,
      teksArab: "صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ ࣖ",
      teksLatin: "Ṣirāṭal-lażīna an'amta 'alaihim, gairil-magḍūbi 'alaihim walāḍ-ḍāllīn(a).",
      teksIndonesia: "(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.",
      audio: {
        "01": "https://equran.id/audio/Abdullah-Al-Juhany/001007.mp3",
        "02": "https://equran.id/audio/Abdul-Muhsin-Al-Qasim/001007.mp3",
        "03": "https://equran.id/audio/Abdurrahman-as-Sudais/001007.mp3",
        "04": "https://equran.id/audio/Ibrahim-Al-Akhdar/001007.mp3",
        "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/001007.mp3",
        "06": "https://equran.id/audio/Ahmad-Ali-Al-Husaily/001007.mp3"
      }
    }
  ],
  suratSebelumnya: false,
  suratSelanjutnya: {
    nomor: 2,
    nama: "البقرة",
    namaLatin: "Al-Baqarah",
    jumlahAyat: 286,
    tempatTurun: "Madinah",
    arti: "Sapi Betina"
  }
};

const FALLBACK_SURAH_112 = {
  nomor: 112,
  nama: "الإخلاص",
  namaLatin: "Al-Ikhlas",
  jumlahAyat: 4,
  tempatTurun: "Mekah",
  arti: "Kemurnian Keesaan Allah",
  deskripsi: "Surat Al Ikhlas (Memurnikan Keesaan Allah) terdiri atas 4 ayat, diturunkan di Mekah. Surat ini menegaskan keesaan Allah dan menolak segala bentuk syirik dan penyekutuan terhadap-Nya.",
  audioFull: {
    "01": "https://equran.id/audio-full/Abdullah-Al-Juhany/112.mp3",
    "02": "https://equran.id/audio-full/Abdul-Muhsin-Al-Qasim/112.mp3",
    "03": "https://equran.id/audio-full/Abdurrahman-as-Sudais/112.mp3",
    "04": "https://equran.id/audio-full/Ibrahim-Al-Akhdar/112.mp3",
    "05": "https://equran.id/audio-full/Misyari-Rasyid-Al-Afasi/112.mp3",
    "06": "https://equran.id/audio-full/Ahmad-Ali-Al-Husaily/112.mp3"
  },
  ayat: [
    {
      nomorAyat: 1,
      teksArab: "قُلْ هُوَ اللّٰهُ اَحَدٌۚ",
      teksLatin: "Qul huwallāhu aḥad(un).",
      teksIndonesia: "Katakanlah (Muhammad), \"Dialah Allah, Yang Maha Esa.\"",
      audio: {
        "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/112001.mp3"
      }
    },
    {
      nomorAyat: 2,
      teksArab: "اَللّٰهُ الصَّمَدُۚ",
      teksLatin: "Allāhuṣ-ṣamad(u).",
      teksIndonesia: "Allah tempat meminta segala sesuatu.",
      audio: {
        "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/112002.mp3"
      }
    },
    {
      nomorAyat: 3,
      teksArab: "لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ",
      teksLatin: "Lam yalid wa lam yūlad.",
      teksIndonesia: "(Allah) tidak beranak dan tidak pula diperanakkan,",
      audio: {
        "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/112003.mp3"
      }
    },
    {
      nomorAyat: 4,
      teksArab: "وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ ࣖ",
      teksLatin: "Wa lam yakul lahū kufuwan aḥad(un).",
      teksIndonesia: "Dan tidak ada sesuatu yang setara dengan Dia.",
      audio: {
        "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/112004.mp3"
      }
    }
  ],
  suratSebelumnya: { nomor: 111, namaLatin: "Al-Lahab" },
  suratSelanjutnya: { nomor: 113, namaLatin: "Al-Falaq" }
};

const FALLBACK_SURAH_113 = {
  nomor: 113,
  nama: "الفلق",
  namaLatin: "Al-Falaq",
  jumlahAyat: 5,
  tempatTurun: "Mekah",
  arti: "Waktu Subuh",
  deskripsi: "Surat Al Falaq (Waktu Subuh) terdiri dari 5 ayat, diturunkan di Mekah. Surat ini berisi perintah memohon perlindungan kepada Allah dari segala macam kejahatan.",
  audioFull: {
    "05": "https://equran.id/audio-full/Misyari-Rasyid-Al-Afasi/113.mp3"
  },
  ayat: [
    {
      nomorAyat: 1,
      teksArab: "قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِۙ",
      teksLatin: "Qul a'ūżu birabbil-falaq(i).",
      teksIndonesia: "Katakanlah, \"Aku berlindung kepada Tuhan yang menguasai subuh (fajar),\"",
      audio: { "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/113001.mp3" }
    },
    {
      nomorAyat: 2,
      teksArab: "مِنْ شَرِّ مَا خَلَقَۙ",
      teksLatin: "Min syarri mā khalaq(a).",
      teksIndonesia: "dari kejahatan (makhluk yang) Dia ciptakan,",
      audio: { "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/113002.mp3" }
    },
    {
      nomorAyat: 3,
      teksArab: "وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ",
      teksLatin: "Wa min syarri gāsiqin iżā waqab(a).",
      teksIndonesia: "dan dari kejahatan malam apabila telah gelap gulita,",
      audio: { "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/113003.mp3" }
    },
    {
      nomorAyat: 4,
      teksArab: "وَمِنْ شَرِّ النَّفّٰثٰتِ فِى الْعُقَدِۙ",
      teksLatin: "Wa min syarrin-naffāṡāti fil-'uqad(i).",
      teksIndonesia: "dan dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya),",
      audio: { "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/113004.mp3" }
    },
    {
      nomorAyat: 5,
      teksArab: "وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ ࣖ",
      teksLatin: "Wa min syarri ḥāsidin iżā ḥasad(a).",
      teksIndonesia: "dan dari kejahatan orang yang dengki apabila dia dengki.\"",
      audio: { "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/113005.mp3" }
    }
  ],
  suratSebelumnya: { nomor: 112, namaLatin: "Al-Ikhlas" },
  suratSelanjutnya: { nomor: 114, namaLatin: "An-Nas" }
};

const FALLBACK_SURAH_114 = {
  nomor: 114,
  nama: "الناس",
  namaLatin: "An-Nas",
  jumlahAyat: 6,
  tempatTurun: "Mekah",
  arti: "Manusia",
  deskripsi: "Surat An Nas (Manusia) terdiri atas 6 ayat, diturunkan di Mekah. Surat ini berisi anjuran agar manusia memohon perlindungan kepada Allah dari bisikan setan.",
  audioFull: {
    "05": "https://equran.id/audio-full/Misyari-Rasyid-Al-Afasi/114.mp3"
  },
  ayat: [
    {
      nomorAyat: 1,
      teksArab: "قُلْ اَعُوْذُ بِرَبِّ النَّاسِۙ",
      teksLatin: "Qul a'ūżu birabbin-nās(i).",
      teksIndonesia: "Katakanlah, \"Aku berlindung kepada Tuhannya manusia,\"",
      audio: { "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/114001.mp3" }
    },
    {
      nomorAyat: 2,
      teksArab: "مَلِكِ النَّاسِۙ",
      teksLatin: "Malikin-nās(i).",
      teksIndonesia: "Raja manusia,",
      audio: { "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/114002.mp3" }
    },
    {
      nomorAyat: 3,
      teksArab: "اِلٰهِ النَّاسِۙ",
      teksLatin: "Ilāhin-nās(i).",
      teksIndonesia: "sembahan manusia,",
      audio: { "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/114003.mp3" }
    },
    {
      nomorAyat: 4,
      teksArab: "مِنْ شَرِّ الْوَسْوَاسِ ەۙ الْخَنَّاسِۖ",
      teksLatin: "Min syarril-waswāsil-khannās(i).",
      teksIndonesia: "dari kejahatan (bisikan) setan yang bersembunyi,",
      audio: { "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/114004.mp3" }
    },
    {
      nomorAyat: 5,
      teksArab: "الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِۙ",
      teksLatin: "Al-lażī yuwaswisu fī ṣudūrin-nās(i).",
      teksIndonesia: "yang membisikkan (kejahatan) ke dalam dada manusia,",
      audio: { "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/114005.mp3" }
    },
    {
      nomorAyat: 6,
      teksArab: "مِنَ الْجِنَّةِ وَالنَّاسِ ࣖ",
      teksLatin: "Minal-jinnati wan-nās(i).",
      teksIndonesia: "dari (golongan) jin dan manusia.\"",
      audio: { "05": "https://equran.id/audio/Misyari-Rasyid-Al-Afasi/114006.mp3" }
    }
  ],
  suratSebelumnya: { nomor: 113, namaLatin: "Al-Falaq" },
  suratSelanjutnya: false
};

const FALLBACK_MAP = {
  1: FALLBACK_SURAH_1,
  112: FALLBACK_SURAH_112,
  113: FALLBACK_SURAH_113,
  114: FALLBACK_SURAH_114
};
