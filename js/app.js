/**
 * ==========================================================================
 * AL-QUR'AN INDONESIA - APPLICATION ENGINE v2.0
 * Focused on High Readability, Audio Control, & Modern UI/UX
 * ==========================================================================
 */

// Storage Keys
const APP_STORAGE_KEY = 'quran_id_settings_v2';
const LAST_READ_KEY = 'quran_id_last_read_v2';
const BOOKMARKS_KEY = 'quran_id_bookmarks_v2';

// Default Settings
const defaultSettings = {
  theme: 'light', // 'light' | 'dark' | 'sepia'
  arabicSize: 34,
  transSize: 15.5,
  showLatin: true,
  showTranslation: true,
  readingMode: 'list', // 'list' | 'mushaf'
  selectedQari: '05', // Misyari Rasyid Al-Afasi
  selectedLogo: 'kaligrafi', // 'kaligrafi' | 'mushaf' | 'hilal' | 'rubelhizb'
  autoPlayNext: true,
  autoScroll: true,
  repeatAyah: false
};

// Koleksi 4 Desain Logo Islami Mewah (Vector SVG)
const LOGO_VARIANTS = {
  kaligrafi: `
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="kaligrafiBg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#047857" />
          <stop offset="100%" stop-color="#064e3b" />
        </linearGradient>
        <linearGradient id="kaligrafiGold" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="50%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>
      </defs>
      <rect width="44" height="44" rx="13" fill="url(#kaligrafiBg)" />
      <rect x="1.5" y="1.5" width="41" height="41" rx="11.5" stroke="url(#kaligrafiGold)" stroke-width="1.2" stroke-opacity="0.65" />
      <circle cx="22" cy="22" r="16.5" stroke="url(#kaligrafiGold)" stroke-width="1" stroke-dasharray="2 2" stroke-opacity="0.6" />
      <text x="22" y="27.5" font-family="'Amiri Quran', 'Amiri', serif" font-size="20" font-weight="bold" fill="url(#kaligrafiGold)" text-anchor="middle">القرآن</text>
      <path d="M22 7.5 L22.8 9.5 L25 10.3 L22.8 11.1 L22 13 L21.2 11.1 L19 10.3 L21.2 9.5 Z" fill="url(#kaligrafiGold)" />
    </svg>
  `,
  mushaf: `
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoBgGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#047857" />
          <stop offset="100%" stop-color="#064e3b" />
        </linearGradient>
        <linearGradient id="logoGold" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#fde68a" />
          <stop offset="50%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>
        <linearGradient id="logoPageL" x1="12" y1="16" x2="22" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#e2e8f0" />
        </linearGradient>
        <linearGradient id="logoPageR" x1="22" y1="16" x2="32" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#ecfdf5" />
        </linearGradient>
      </defs>
      <rect width="44" height="44" rx="13" fill="url(#logoBgGrad)" />
      <rect x="1.5" y="1.5" width="41" height="41" rx="11.5" stroke="url(#logoGold)" stroke-width="1.2" stroke-opacity="0.65" />
      <path d="M22 6 L23.5 9.5 L27 11 L23.5 12.5 L22 16 L20.5 12.5 L17 11 L20.5 9.5 Z" fill="url(#logoGold)" />
      <path d="M14 34 L22 28 L30 34 M17 31.5 L27 31.5" stroke="url(#logoGold)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22 18 C18 17 13 18 10.5 20 C10 20.4 9.8 21 9.8 21.6 L9.8 28.5 C12 27 17 26 22 27.5 Z" fill="url(#logoPageL)" />
      <path d="M22 18 C26 17 31 18 33.5 20 C34 20.4 34.2 21 34.2 21.6 L34.2 28.5 C32 27 27 26 22 27.5 Z" fill="url(#logoPageR)" />
      <path d="M22 17.5 L22 28" stroke="url(#logoGold)" stroke-width="1.5" stroke-linecap="round" />
      <path d="M22 21 C23 23.5 23.5 26.5 24 30 L25.5 28.5 L27 30 C26 26.5 24 23.5 22 21 Z" fill="url(#logoGold)" />
    </svg>
  `,
  hilal: `
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hilalBg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#047857" />
          <stop offset="100%" stop-color="#064e3b" />
        </linearGradient>
        <linearGradient id="hilalGold" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="50%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>
      </defs>
      <rect width="44" height="44" rx="13" fill="url(#hilalBg)" />
      <rect x="1.5" y="1.5" width="41" height="41" rx="11.5" stroke="url(#hilalGold)" stroke-width="1.2" stroke-opacity="0.65" />
      <!-- Golden Crescent Moon -->
      <path d="M24 9.5 C16 9.5 9.5 16 9.5 24 C9.5 30.5 14 36 20 38 C16.5 34.5 15 30 15 25 C15 17.5 20 12 26.5 10 C25.7 9.7 24.8 9.5 24 9.5 Z" fill="url(#hilalGold)" />
      <!-- Mosque Dome Silhouette -->
      <path d="M26 34 L26 26 C26 23.8 27.5 22 29.5 20 C31.5 22 33 23.8 33 26 L33 34 Z" fill="url(#hilalGold)" />
      <path d="M29.5 17 L29.5 20" stroke="url(#hilalGold)" stroke-width="1.5" stroke-linecap="round" />
      <path d="M28 11.5 L28.8 13.2 L30.5 14 L28.8 14.8 L28 16.5 L27.2 14.8 L25.5 14 L27.2 13.2 Z" fill="url(#hilalGold)" />
    </svg>
  `,
  rubelhizb: `
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rubelBg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#047857" />
          <stop offset="100%" stop-color="#064e3b" />
        </linearGradient>
        <linearGradient id="rubelGold" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="50%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>
      </defs>
      <rect width="44" height="44" rx="13" fill="url(#rubelBg)" />
      <rect x="1.5" y="1.5" width="41" height="41" rx="11.5" stroke="url(#rubelGold)" stroke-width="1.2" stroke-opacity="0.65" />
      <!-- Rub el Hizb 8-Pointed Star -->
      <rect x="13" y="13" width="18" height="18" rx="2.5" stroke="url(#rubelGold)" stroke-width="1.8" fill="rgba(245, 158, 11, 0.12)" />
      <rect x="13" y="13" width="18" height="18" rx="2.5" transform="rotate(45 22 22)" stroke="url(#rubelGold)" stroke-width="1.8" fill="rgba(245, 158, 11, 0.12)" />
      <circle cx="22" cy="22" r="5" stroke="url(#rubelGold)" stroke-width="1.5" fill="none" />
      <circle cx="22" cy="22" r="2" fill="url(#rubelGold)" />
    </svg>
  `
};

let currentSettings = { ...defaultSettings };
let currentSurahData = null;
let lastRead = null;
let bookmarks = [];

// Curated Daily Inspiring Verses
const DAILY_VERSES = [
  {
    surahNo: 2,
    ayahNo: 255,
    surahName: "Al-Baqarah",
    arabic: "اللّٰهُ لَآ اِلٰهَ اِلَّا هُوَ الْحَيُّ الْقَيُّوْمُۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ",
    translation: "Allah, tidak ada tuhan selain Dia. Yang Mahahidup, Yang terus-menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur..."
  },
  {
    surahNo: 94,
    ayahNo: 5,
    surahName: "Asy-Syarh",
    arabic: "فَاِنَّ مَعَ الْعُسْرِ يُسْرًاۙ",
    translation: "Maka sesungguhnya beserta kesulitan ada kemudahan."
  },
  {
    surahNo: 3,
    ayahNo: 139,
    surahName: "Ali 'Imran",
    arabic: "وَلَا تَهِنُوْا وَلَا تَحْزَنُوْا وَاَنْتُمُ الْاَعْلَوْنَ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ",
    translation: "Dan janganlah kamu (merasa) lemah, dan jangan (pula) bersedih hati, sebab kamu paling tinggi (derajatnya), jika kamu orang beriman."
  },
  {
    surahNo: 65,
    ayahNo: 3,
    surahName: "At-Talaq",
    arabic: "وَّيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُۗ وَمَنْ يَّتَوَكَّلْ عَلَى اللّٰهِ فَهُوَ حَسْبُهٗ ۗ",
    translation: "Dan Dia memberinya rezeki dari arah yang tidak disangka-sangkanya. Dan barangsiapa bertawakal kepada Allah, niscaya Allah akan mencukupkan (keperluan)nya."
  }
];

let dailyVerseData = DAILY_VERSES[0];

// Audio State
const audioPlayer = new Audio();
let audioState = {
  isPlaying: false,
  mode: null, // 'full' | 'ayah'
  surahNo: null,
  ayahNo: null,
  currentAyahIndex: 0,
  duration: 0,
  currentTime: 0,
  speed: 1.0,
  isRepeating: false
};

// ==========================================================================
// Inisialisasi Aplikasi
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadStoredPreferences();
  applySettingsToDOM();
  initDailyVerse();
  initAudioListeners();
  renderLastReadBanner();
  renderSurahGrid(SURAH_LIST);
  setupKeyboardShortcuts();

  // URL Hash routing listener
  window.addEventListener('hashchange', handleHashRouting);
  handleHashRouting();
});

function loadStoredPreferences() {
  try {
    const saved = localStorage.getItem(APP_STORAGE_KEY);
    if (saved) {
      currentSettings = { ...defaultSettings, ...JSON.parse(saved) };
    }
    const savedLast = localStorage.getItem(LAST_READ_KEY);
    if (savedLast) {
      lastRead = JSON.parse(savedLast);
    }
    const savedBookmarks = localStorage.getItem(BOOKMARKS_KEY);
    if (savedBookmarks) {
      bookmarks = JSON.parse(savedBookmarks);
    }
  } catch (e) {
    console.warn('Storage read warning:', e);
  }
}

function saveSettings() {
  try {
    localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(currentSettings));
  } catch (e) {
    console.warn('Storage save warning:', e);
  }
}

function applySettingsToDOM() {
  document.documentElement.setAttribute('data-theme', currentSettings.theme);
  document.documentElement.style.setProperty('--arabic-size', `${currentSettings.arabicSize}px`);
  document.documentElement.style.setProperty('--trans-size', `${currentSettings.transSize}px`);

  // Update Quick Theme button icon
  const btnQuick = document.getElementById('btnQuickTheme');
  if (btnQuick) {
    if (currentSettings.theme === 'light') btnQuick.textContent = '☀️';
    else if (currentSettings.theme === 'sepia') btnQuick.textContent = '📜';
    else if (currentSettings.theme === 'dark') btnQuick.textContent = '🌙';
  }

  // Update Settings Sheet Inputs
  document.querySelectorAll('.theme-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === currentSettings.theme);
  });

  const arabicSlider = document.getElementById('sheetArabicSlider');
  if (arabicSlider) arabicSlider.value = currentSettings.arabicSize;
  const arabicBadge = document.getElementById('previewArabicSizeVal');
  if (arabicBadge) arabicBadge.textContent = `${currentSettings.arabicSize}px`;

  const transSlider = document.getElementById('sheetTransSlider');
  if (transSlider) transSlider.value = currentSettings.transSize;
  const transBadge = document.getElementById('previewTransSizeVal');
  if (transBadge) transBadge.textContent = `${currentSettings.transSize}px`;

  const chkLatin = document.getElementById('toggleLatinCheckbox');
  if (chkLatin) chkLatin.checked = currentSettings.showLatin;

  const chkTrans = document.getElementById('toggleTransCheckbox');
  if (chkTrans) chkTrans.checked = currentSettings.showTranslation;

  const chkAutoNext = document.getElementById('toggleAutoNextCheckbox');
  if (chkAutoNext) chkAutoNext.checked = currentSettings.autoPlayNext;

  const chkAutoScroll = document.getElementById('toggleAutoScrollCheckbox');
  if (chkAutoScroll) chkAutoScroll.checked = currentSettings.autoScroll;

  const qariSelect = document.getElementById('sheetQariSelect');
  if (qariSelect) qariSelect.value = currentSettings.selectedQari;

  // Update Navbar Logo Variant
  updateNavbarLogo(currentSettings.selectedLogo || 'kaligrafi');

  // Update Logo Choice Buttons Active State
  document.querySelectorAll('.logo-choice-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.logo === currentSettings.selectedLogo);
  });
}

// Function to Switch Logo Variant
function setLogoVariant(logoKey) {
  if (!LOGO_VARIANTS[logoKey]) return;
  currentSettings.selectedLogo = logoKey;
  saveSettings();
  updateNavbarLogo(logoKey);

  document.querySelectorAll('.logo-choice-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.logo === logoKey);
  });

  const names = {
    kaligrafi: 'Kaligrafi Arab "القرآن"',
    mushaf: 'Mushaf & Rehal Emas',
    hilal: 'Bulan Sabit & Kubah Masjid',
    rubelhizb: 'Bintang Geometris Rub el Hizb'
  };
  showToast(`Logo diganti ke: ${names[logoKey] || logoKey} ✨`);
}

function updateNavbarLogo(logoKey) {
  const brandIconBox = document.getElementById('brandLogoBox');
  if (brandIconBox && LOGO_VARIANTS[logoKey]) {
    brandIconBox.innerHTML = LOGO_VARIANTS[logoKey];
  }
}

// ==========================================================================
// Theme Quick Cycler (Light -> Sepia -> Dark)
// ==========================================================================
function cycleQuickTheme() {
  const themes = ['light', 'sepia', 'dark'];
  const nextIdx = (themes.indexOf(currentSettings.theme) + 1) % themes.length;
  setTheme(themes[nextIdx]);

  const names = { light: 'Terang ☀️', sepia: 'Sepia (Kitab) 📜', dark: 'Gelap (Malam) 🌙' };
  showToast(`Tema diubah: ${names[themes[nextIdx]]}`);
}

function setTheme(theme) {
  currentSettings.theme = theme;
  saveSettings();
  applySettingsToDOM();
}

// ==========================================================================
// Daily Verse Widget
// ==========================================================================
function initDailyVerse() {
  const dayIndex = new Date().getDate() % DAILY_VERSES.length;
  dailyVerseData = DAILY_VERSES[dayIndex];

  const refEl = document.getElementById('dailySurahRef');
  const arEl = document.getElementById('dailyArabic');
  const trEl = document.getElementById('dailyTranslation');

  if (refEl) refEl.textContent = `QS. ${dailyVerseData.surahName}: ${dailyVerseData.ayahNo}`;
  if (arEl) arEl.textContent = dailyVerseData.arabic;
  if (trEl) trEl.textContent = `"${dailyVerseData.translation}"`;
}

function playDailyVerse() {
  navigateToSurah(dailyVerseData.surahNo, dailyVerseData.ayahNo);
}

// ==========================================================================
// Routing & View Manager
// ==========================================================================
function handleHashRouting() {
  const hash = window.location.hash || '#home';

  // Update Navigation Active Pills
  document.querySelectorAll('.nav-link-pill').forEach(pill => pill.classList.remove('active'));
  if (hash === '#home' || hash === '' || hash.startsWith('#surah')) {
    const pill = document.getElementById('navPillSurah');
    if (pill) pill.classList.add('active');
  } else if (hash === '#doa') {
    const pill = document.getElementById('navPillDoa');
    if (pill) pill.classList.add('active');
  } else if (hash === '#asmaul') {
    const pill = document.getElementById('navPillAsmaul');
    if (pill) pill.classList.add('active');
  }

  if (hash === '#home' || hash === '#') {
    showHomeView();
  } else if (hash.startsWith('#surah/')) {
    const parts = hash.split('/');
    const surahNo = parseInt(parts[1], 10);
    const targetAyah = parts[2] ? parseInt(parts[2], 10) : null;
    if (surahNo >= 1 && surahNo <= 114) {
      loadSurahDetail(surahNo, targetAyah);
    } else {
      showHomeView();
    }
  } else if (hash === '#doa') {
    showDoaView();
  } else if (hash === '#asmaul') {
    showAsmaulView();
  } else if (hash === '#bookmarks') {
    showHomeView();
    filterSurahTab('bookmark');
  }
}

function showHomeView() {
  document.getElementById('homeView').style.display = 'block';
  document.getElementById('surahDetailView').style.display = 'none';
  document.getElementById('doaView').style.display = 'none';
  document.getElementById('asmaulView').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDoaView() {
  document.getElementById('homeView').style.display = 'none';
  document.getElementById('surahDetailView').style.display = 'none';
  document.getElementById('doaView').style.display = 'block';
  document.getElementById('asmaulView').style.display = 'none';
  renderDoaList();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAsmaulView() {
  document.getElementById('homeView').style.display = 'none';
  document.getElementById('surahDetailView').style.display = 'none';
  document.getElementById('doaView').style.display = 'none';
  document.getElementById('asmaulView').style.display = 'block';
  renderAsmaulList();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// Rendering Beranda (114 Surat, 30 Juz, Markah, Last Read)
// ==========================================================================
function renderLastReadBanner() {
  const container = document.getElementById('lastReadContainer');
  if (!container) return;

  if (lastRead) {
    container.innerHTML = `
      <button class="btn-hero-resume" onclick="navigateToSurah(${lastRead.surahNo}, ${lastRead.ayahNo})">
        <span style="font-size: 1.25rem;">📖</span>
        <div style="text-align: left; line-height: 1.2;">
          <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.75;">Lanjutkan Membaca</div>
          <div style="font-size: 1rem; font-weight: 800;">${lastRead.surahName} : Ayat ${lastRead.ayahNo}</div>
        </div>
      </button>
    `;
  } else {
    container.innerHTML = `
      <button class="btn-hero-resume" onclick="navigateToSurah(1)">
        <span style="font-size: 1.25rem;">✨</span>
        <div style="text-align: left; line-height: 1.2;">
          <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.75;">Mulai Tilawah</div>
          <div style="font-size: 1rem; font-weight: 800;">Surat Al-Fatihah (Pembukaan)</div>
        </div>
      </button>
    `;
  }
}

function renderSurahGrid(list) {
  const container = document.getElementById('surahGridContainer');
  if (!container) return;

  if (!list || list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-faint);">
        <p style="font-size: 1.25rem; font-weight: 700;">Surat Tidak Ditemukan</p>
        <p style="font-size: 0.9rem; margin-top: 0.5rem;">Coba cari nama surat lain atau gunakan nomor surat.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(surah => `
    <div class="surah-card" onclick="navigateToSurah(${surah.nomor})">
      <div class="surah-card-left">
        <!-- Rub el Hizb Geometric Star Badge -->
        <div class="rub-el-hizb-badge">
          <div class="star-bg"></div>
          <div class="star-bg-inner"></div>
          <span class="star-num">${surah.nomor}</span>
        </div>
        
        <div class="surah-details">
          <span class="surah-title-latin">${surah.namaLatin}</span>
          <div class="surah-meta-row">
            <span class="surah-badge-revelation">${surah.tempatTurun}</span>
            <span>•</span>
            <span>${surah.jumlahAyat} Ayat</span>
          </div>
          <span class="surah-translation-sub">"${surah.arti}"</span>
        </div>
      </div>

      <div class="surah-card-right">
        <div class="surah-arabic-calligraphy">${surah.nama}</div>
      </div>
    </div>
  `).join('');
}

function renderJuzGrid() {
  const container = document.getElementById('juzGridContainer');
  if (!container) return;

  container.innerHTML = JUZ_LIST.map(juz => `
    <div class="surah-card" onclick="navigateToSurah(${juz.mulaiSurat}, ${juz.mulaiAyat})">
      <div class="surah-card-left">
        <div class="rub-el-hizb-badge">
          <div class="star-bg"></div>
          <div class="star-bg-inner"></div>
          <span class="star-num">${juz.juz}</span>
        </div>
        <div class="surah-details">
          <span class="surah-title-latin">${juz.nama}</span>
          <div class="surah-meta-row" style="margin-top: 0.2rem;">
            <span>Mulai QS. ${juz.mulaiSurat}:${juz.mulaiAyat}</span>
          </div>
          <span class="surah-translation-sub">${juz.keterangan}</span>
        </div>
      </div>
      <div class="surah-card-right">
        <span class="kbd-badge" style="color: var(--primary);">Buka →</span>
      </div>
    </div>
  `).join('');
}

function renderBookmarksGrid() {
  const container = document.getElementById('bookmarkGridContainer');
  if (!container) return;

  if (bookmarks.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-faint);">
        <p style="font-size: 2rem;">🔖</p>
        <p style="font-size: 1.15rem; font-weight: 700; margin-top: 0.5rem; color: var(--text-main);">Belum Ada Markah</p>
        <p style="font-size: 0.875rem; margin-top: 0.25rem;">Tandai ayat favorit saat membaca agar tersimpan di sini.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = bookmarks.map((b, idx) => `
    <div class="surah-card" style="align-items: flex-start;">
      <div class="surah-card-left" style="flex: 1;" onclick="navigateToSurah(${b.surahNo}, ${b.ayahNo})">
        <div class="rub-el-hizb-badge">
          <div class="star-bg"></div>
          <div class="star-bg-inner"></div>
          <span class="star-num">★</span>
        </div>
        <div class="surah-details">
          <span class="surah-title-latin">${b.surahName} : Ayat ${b.ayahNo}</span>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.35rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            ${b.textIndonesia || ''}
          </p>
          <span style="font-size: 0.725rem; color: var(--text-faint); margin-top: 0.4rem;">Ditandai: ${b.date || ''}</span>
        </div>
      </div>
      <button class="btn-ayah-tool" title="Hapus Markah" onclick="removeBookmark(${idx}); event.stopPropagation();">
        🗑️
      </button>
    </div>
  `).join('');
}

function filterSurahTab(tab, evt) {
  // Update segmented control buttons
  document.querySelectorAll('#mainFilterTabs .seg-btn').forEach(btn => btn.classList.remove('active'));
  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add('active');
  } else {
    const targetBtn = document.querySelector(`#mainFilterTabs .seg-btn[data-tab="${tab}"]`);
    if (targetBtn) targetBtn.classList.add('active');
  }

  const surahSec = document.getElementById('surahGridSection');
  const juzSec = document.getElementById('juzGridSection');
  const bookmarkSec = document.getElementById('bookmarkGridSection');
  const counterLabel = document.getElementById('surahCounterLabel');

  if (tab === 'juz') {
    surahSec.style.display = 'none';
    juzSec.style.display = 'block';
    bookmarkSec.style.display = 'none';
    if (counterLabel) counterLabel.textContent = 'Menampilkan 30 Juz';
    renderJuzGrid();
    return;
  }

  if (tab === 'bookmark') {
    surahSec.style.display = 'none';
    juzSec.style.display = 'none';
    bookmarkSec.style.display = 'block';
    if (counterLabel) counterLabel.textContent = `Menampilkan ${bookmarks.length} Markah Tersimpan`;
    renderBookmarksGrid();
    return;
  }

  // Filter Surat (all / Mekah / Madinah)
  surahSec.style.display = 'block';
  juzSec.style.display = 'none';
  bookmarkSec.style.display = 'none';

  if (tab === 'all') {
    if (counterLabel) counterLabel.textContent = 'Menampilkan 114 Surat';
    renderSurahGrid(SURAH_LIST);
  } else {
    const filtered = SURAH_LIST.filter(s => s.tempatTurun.toLowerCase() === tab.toLowerCase());
    if (counterLabel) counterLabel.textContent = `Menampilkan ${filtered.length} Surat (${tab}yyah)`;
    renderSurahGrid(filtered);
  }
}

function switchTab(tab) {
  showHomeView();
  filterSurahTab(tab);
}

// ==========================================================================
// Reading Interface (Surah Detail & Reading Modes)
// ==========================================================================
async function loadSurahDetail(surahNo, targetAyah = null) {
  document.getElementById('homeView').style.display = 'none';
  document.getElementById('doaView').style.display = 'none';
  document.getElementById('asmaulView').style.display = 'none';
  const detailView = document.getElementById('surahDetailView');
  detailView.style.display = 'block';

  // Loading Skeleton State
  detailView.innerHTML = `
    <div style="text-align: center; padding: 5rem 1rem;">
      <div style="width: 44px; height: 44px; border: 3px solid var(--border); border-top-color: var(--primary); border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 1.25rem;"></div>
      <p style="font-weight: 700; font-size: 1.1rem;">Memuat Ayat Al-Qur'an...</p>
      <span style="font-size: 0.85rem; color: var(--text-faint);">Teks & Terjemahan Standar Kemenag RI</span>
    </div>
  `;

  const cacheKey = `quran_surah_v2_${surahNo}`;
  let data = null;

  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      data = JSON.parse(cached);
    }
  } catch (e) {}

  if (!data) {
    try {
      const res = await fetch(`https://equran.id/api/v2/surat/${surahNo}`);
      if (!res.ok) throw new Error('API request failed');
      const json = await res.json();
      if (json && json.data) {
        data = json.data;
        try {
          localStorage.setItem(cacheKey, JSON.stringify(data));
        } catch (e) {}
      }
    } catch (err) {
      console.warn('API fetch failed, checking offline fallback:', err);
      if (typeof FALLBACK_MAP !== 'undefined' && FALLBACK_MAP[surahNo]) {
        data = FALLBACK_MAP[surahNo];
      }
    }
  }

  if (!data) {
    detailView.innerHTML = `
      <div style="text-align: center; padding: 5rem 1rem;">
        <p style="font-size: 1.35rem; font-weight: 800; color: #ef4444;">Koneksi Tidak Tersedia</p>
        <p style="color: var(--text-muted); margin: 0.75rem 0 1.5rem;">Gagal memuat Surat ${surahNo}. Mohon pastikan sambungan internet aktif.</p>
        <button class="btn-read-primary" onclick="loadSurahDetail(${surahNo}, ${targetAyah})">Coba Lagi</button>
        <button class="btn-read-action" style="margin-left: 0.5rem;" onclick="showHomeView()">Kembali ke Beranda</button>
      </div>
    `;
    return;
  }

  currentSurahData = data;
  renderSurahReadingInterface(data);

  if (targetAyah) {
    setTimeout(() => {
      scrollToAyah(targetAyah);
    }, 350);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function renderSurahReadingInterface(surah) {
  const container = document.getElementById('surahDetailView');
  const showBismillah = surah.nomor !== 1 && surah.nomor !== 9;
  const ayahOptions = surah.ayat.map(a => `<option value="${a.nomorAyat}">Ayat ${a.nomorAyat}</option>`).join('');

  container.innerHTML = `
    <div class="surah-detail-wrapper">
      
      <!-- Sticky Readability Toolbar -->
      <div class="reading-sticky-bar">
        <div class="reading-toolbar-inner">
          <div class="toolbar-group-left">
            <a href="#home" class="btn-read-action" title="Kembali ke Daftar Surat">
              <span>←</span> <span>Beranda</span>
            </a>
            <select class="select-modern" onchange="scrollToAyah(this.value)">
              <option value="">Lompat Ayat...</option>
              ${ayahOptions}
            </select>
          </div>

          <div class="toolbar-group-right">
            <button class="btn-read-primary" onclick="playFullSurahAudio(${surah.nomor})">
              <span>▶</span> <span>Murottal Penuh</span>
            </button>
            <div class="segmented-control" style="padding: 0.2rem;">
              <button class="seg-btn ${currentSettings.readingMode === 'list' ? 'active' : ''}" onclick="switchReadingMode('list')">
                Ayat
              </button>
              <button class="seg-btn ${currentSettings.readingMode === 'mushaf' ? 'active' : ''}" onclick="switchReadingMode('mushaf')">
                Mushaf
              </button>
            </div>
            <button class="btn-header-action" onclick="openSettingsSheet()" title="Pengaturan Tulisan & Tampilan">
              ⚙️
            </button>
          </div>
        </div>
      </div>

      <!-- Surah Header Banner -->
      <div class="surah-reading-header">
        <div class="surah-header-arabic">${surah.nama}</div>
        <h1 class="surah-header-latin">${surah.namaLatin}</h1>
        <div class="surah-header-meaning">"${surah.arti}"</div>
        <div class="surah-pill-badges">
          <span class="header-pill">Surat Ke-${surah.nomor}</span>
          <span class="header-pill">${surah.tempatTurun}</span>
          <span class="header-pill">${surah.jumlahAyat} Ayat</span>
        </div>
      </div>

      <!-- Bismillah Banner -->
      ${showBismillah ? `
        <div class="bismillah-lux-card">
          <div class="bismillah-text">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
        </div>
      ` : ''}

      <!-- Reading Area -->
      <div id="readingArea">
        ${currentSettings.readingMode === 'list' ? renderAyatList(surah) : renderMushafContinuous(surah)}
      </div>

      <!-- Adjacent Surah Footer -->
      <div class="surah-adjacent-nav">
        ${surah.suratSebelumnya ? `
          <div class="adjacent-nav-card" onclick="navigateToSurah(${surah.suratSebelumnya.nomor})">
            <div>
              <div class="nav-direction-label">← Surat Sebelumnya</div>
              <div class="nav-surah-title">${surah.suratSebelumnya.namaLatin}</div>
            </div>
          </div>
        ` : '<div></div>'}

        ${surah.suratSelanjutnya ? `
          <div class="adjacent-nav-card next-card" onclick="navigateToSurah(${surah.suratSelanjutnya.nomor})">
            <div>
              <div class="nav-direction-label">Surat Selanjutnya →</div>
              <div class="nav-surah-title">${surah.suratSelanjutnya.namaLatin}</div>
            </div>
          </div>
        ` : '<div></div>'}
      </div>

    </div>
  `;
}

function renderAyatList(surah) {
  return `
    <div class="ayah-list-wrapper">
      ${surah.ayat.map((ayah, idx) => {
        const isCurrentPlaying = audioState.isPlaying && audioState.surahNo === surah.nomor && audioState.ayahNo === ayah.nomorAyat;
        return `
          <div class="ayah-card ${isCurrentPlaying ? 'is-playing' : ''}" id="ayah-card-${ayah.nomorAyat}">
            <div class="ayah-card-header">
              <div style="display: flex; align-items: center; gap: 0.65rem;">
                <div class="ayah-ref-pill">
                  <span>${surah.nomor}:${ayah.nomorAyat}</span>
                </div>
                <div class="equalizer-wave">
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                </div>
              </div>

              <!-- Action Pills -->
              <div class="ayah-action-pill-group">
                <button class="btn-ayah-tool ${isCurrentPlaying ? 'active' : ''}" id="btn-play-ayah-${ayah.nomorAyat}" title="Dengarkan Ayat" onclick="playAyahAudio(${surah.nomor}, ${ayah.nomorAyat}, ${idx})">
                  ${isCurrentPlaying ? '⏸' : '▶'}
                </button>
                <button class="btn-ayah-tool" title="Buka Tafsir Kemenag RI" onclick="openTafsirSheet(${surah.nomor}, ${ayah.nomorAyat})">
                  📖
                </button>
                <button class="btn-ayah-tool" title="Tandai Terakhir Dibaca" onclick="setLastRead(${surah.nomor}, ${ayah.nomorAyat}, '${escapeQuote(surah.namaLatin)}')">
                  🔖
                </button>
                <button class="btn-ayah-tool" title="Salin Ayat & Terjemahan" onclick="copyAyahText(${surah.nomor}, ${ayah.nomorAyat})">
                  📋
                </button>
                <button class="btn-ayah-tool" title="Bagikan ke WhatsApp" onclick="shareAyahWA(${surah.nomor}, ${ayah.nomorAyat})">
                  💬
                </button>
              </div>
            </div>

            <!-- Teks Ayat Arab -->
            <div class="ayah-arabic-text">
              ${ayah.teksArab}
              <span class="ayah-end-ornament">۝${toArabicDigits(ayah.nomorAyat)}</span>
            </div>

            <!-- Transliterasi Latin -->
            ${currentSettings.showLatin ? `
              <div class="ayah-transliteration">${ayah.teksLatin}</div>
            ` : ''}

            <!-- Terjemahan Bahasa Indonesia Kemenag -->
            ${currentSettings.showTranslation ? `
              <div class="ayah-translation-text">${ayah.teksIndonesia}</div>
            ` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderMushafContinuous(surah) {
  return `
    <div class="mushaf-reading-card">
      <div class="mushaf-flow-text">
        ${surah.ayat.map((ayah, idx) => `
          <span class="mushaf-ayah-unit" id="mushaf-span-${ayah.nomorAyat}" onclick="playAyahAudio(${surah.nomor}, ${ayah.nomorAyat}, ${idx})">
            ${ayah.teksArab}
            <span class="mushaf-ayah-number">${ayah.nomorAyat}</span>
          </span>
        `).join('')}
      </div>
    </div>
    <p style="text-align: center; color: var(--text-faint); font-size: 0.85rem; margin-top: 1.25rem;">
      💡 Tip: Klik langsung pada nomor atau lafadz ayat untuk mendengarkan bacaan qari.
    </p>
  `;
}

function switchReadingMode(mode) {
  currentSettings.readingMode = mode;
  saveSettings();
  if (currentSurahData) {
    const area = document.getElementById('readingArea');
    if (area) {
      area.innerHTML = mode === 'list' ? renderAyatList(currentSurahData) : renderMushafContinuous(currentSurahData);
    }
  }
}

// ==========================================================================
// Audio Dock Engine (Play, Next, Prev, Repeat, Speed)
// ==========================================================================
function initAudioListeners() {
  audioPlayer.addEventListener('timeupdate', () => {
    if (!isNaN(audioPlayer.duration) && audioPlayer.duration > 0) {
      audioState.currentTime = audioPlayer.currentTime;
      audioState.duration = audioPlayer.duration;
      updateAudioDockUI();
    }
  });

  audioPlayer.addEventListener('ended', handleAudioEnded);

  audioPlayer.addEventListener('play', () => {
    audioState.isPlaying = true;
    updateAudioDockPlayState(true);
  });

  audioPlayer.addEventListener('pause', () => {
    audioState.isPlaying = false;
    updateAudioDockPlayState(false);
  });

  audioPlayer.addEventListener('error', (e) => {
    console.warn('Audio playback error:', e);
    showToast('Gagal memuat audio murottal. Coba qari lain.');
    stopAudio();
  });

  const dockSlider = document.getElementById('dockSlider');
  if (dockSlider) {
    dockSlider.addEventListener('input', (e) => {
      seekAudio(e.target.value);
    });
  }
}

function playAyahAudio(surahNo, ayahNo, index) {
  if (!currentSurahData) return;

  // Toggle play/pause jika ayat yang sama
  if (audioState.mode === 'ayah' && audioState.surahNo === surahNo && audioState.ayahNo === ayahNo) {
    if (audioState.isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    return;
  }

  const ayahObj = currentSurahData.ayat[index];
  if (!ayahObj || !ayahObj.audio) return;

  const audioUrl = ayahObj.audio[currentSettings.selectedQari] || ayahObj.audio['05'];
  if (!audioUrl) {
    showToast('Audio untuk ayat ini belum tersedia.');
    return;
  }

  audioState.mode = 'ayah';
  audioState.surahNo = surahNo;
  audioState.ayahNo = ayahNo;
  audioState.currentAyahIndex = index;

  audioPlayer.src = audioUrl;
  audioPlayer.playbackRate = audioState.speed;
  audioPlayer.play();

  highlightPlayingAyah(ayahNo);
  showAudioDock(`${currentSurahData.namaLatin} : Ayat ${ayahNo}`);

  if (currentSettings.autoScroll) {
    scrollToAyah(ayahNo);
  }
}

function playFullSurahAudio(surahNo) {
  if (!currentSurahData || !currentSurahData.audioFull) return;

  const audioUrl = currentSurahData.audioFull[currentSettings.selectedQari] || currentSurahData.audioFull['05'];
  if (!audioUrl) {
    showToast('Audio murottal penuh belum tersedia.');
    return;
  }

  audioState.mode = 'full';
  audioState.surahNo = surahNo;
  audioState.ayahNo = null;

  audioPlayer.src = audioUrl;
  audioPlayer.playbackRate = audioState.speed;
  audioPlayer.play();

  showAudioDock(`Surat ${currentSurahData.namaLatin} (Penuh)`);
}

function handleAudioEnded() {
  if (audioState.isRepeating && audioState.mode === 'ayah') {
    // Loop current ayah (Muroja'ah)
    audioPlayer.currentTime = 0;
    audioPlayer.play();
    return;
  }

  if (audioState.mode === 'ayah' && currentSettings.autoPlayNext && currentSurahData) {
    const nextIndex = audioState.currentAyahIndex + 1;
    if (nextIndex < currentSurahData.ayat.length) {
      const nextAyah = currentSurahData.ayat[nextIndex];
      playAyahAudio(audioState.surahNo, nextAyah.nomorAyat, nextIndex);
      return;
    }
  }

  stopAudio();
}

function playNextAyah() {
  if (!currentSurahData) return;
  const nextIndex = audioState.currentAyahIndex + 1;
  if (nextIndex < currentSurahData.ayat.length) {
    const nextAyah = currentSurahData.ayat[nextIndex];
    playAyahAudio(audioState.surahNo, nextAyah.nomorAyat, nextIndex);
  } else {
    showToast('Ini adalah ayat terakhir.');
  }
}

function playPrevAyah() {
  if (!currentSurahData) return;
  const prevIndex = audioState.currentAyahIndex - 1;
  if (prevIndex >= 0) {
    const prevAyah = currentSurahData.ayat[prevIndex];
    playAyahAudio(audioState.surahNo, prevAyah.nomorAyat, prevIndex);
  } else {
    showToast('Ini adalah ayat pertama.');
  }
}

function toggleAudioPlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

function toggleRepeatAyah() {
  audioState.isRepeating = !audioState.isRepeating;
  const btn = document.getElementById('btnRepeatAyah');
  if (btn) {
    btn.style.color = audioState.isRepeating ? 'var(--primary)' : 'var(--text-muted)';
  }
  showToast(audioState.isRepeating ? 'Pengulangan ayat aktif (Loop Muroja\'ah) 🔁' : 'Pengulangan ayat dinonaktifkan');
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  audioState.isPlaying = false;
  removeAyahHighlights();
  hideAudioDock();
}

function seekAudio(percent) {
  if (!isNaN(audioPlayer.duration)) {
    audioPlayer.currentTime = (percent / 100) * audioPlayer.duration;
  }
}

function changePlaybackSpeed() {
  const speeds = [1.0, 1.25, 1.5, 0.75];
  const nextIdx = (speeds.indexOf(audioState.speed) + 1) % speeds.length;
  audioState.speed = speeds[nextIdx];
  audioPlayer.playbackRate = audioState.speed;

  const btn = document.getElementById('dockSpeedBtn');
  if (btn) btn.textContent = `${audioState.speed}x`;
  showToast(`Kecepatan Murottal: ${audioState.speed}x`);
}

function changeQari(qariId) {
  currentSettings.selectedQari = qariId;
  saveSettings();
  const qari = QARI_LIST.find(q => q.id === qariId);
  showToast(`Qari: ${qari ? qari.name : qariId}`);

  if (audioState.isPlaying) {
    if (audioState.mode === 'ayah') {
      playAyahAudio(audioState.surahNo, audioState.ayahNo, audioState.currentAyahIndex);
    } else {
      playFullSurahAudio(audioState.surahNo);
    }
  }
}

function showAudioDock(title) {
  const dock = document.getElementById('floatingAudioDock');
  const titleEl = document.getElementById('dockTrackTitle');
  const reciterEl = document.getElementById('dockTrackReciter');
  const qari = QARI_LIST.find(q => q.id === currentSettings.selectedQari);

  if (titleEl) titleEl.textContent = title;
  if (reciterEl) reciterEl.textContent = qari ? qari.name : 'Murottal';
  if (dock) dock.classList.add('is-active');

  updateAudioDockPlayState(true);
}

function hideAudioDock() {
  const dock = document.getElementById('floatingAudioDock');
  if (dock) dock.classList.remove('is-active');
}

function updateAudioDockUI() {
  const slider = document.getElementById('dockSlider');
  const currentEl = document.getElementById('dockCurrentTime');
  const durationEl = document.getElementById('dockDuration');

  if (slider && audioState.duration > 0) {
    slider.value = (audioState.currentTime / audioState.duration) * 100;
  }
  if (currentEl) currentEl.textContent = formatTime(audioState.currentTime);
  if (durationEl) durationEl.textContent = formatTime(audioState.duration);
}

function updateAudioDockPlayState(isPlaying) {
  const btn = document.getElementById('btnDockPlay');
  if (btn) btn.textContent = isPlaying ? '⏸' : '▶';

  if (audioState.ayahNo) {
    const ayahBtn = document.getElementById(`btn-play-ayah-${audioState.ayahNo}`);
    if (ayahBtn) ayahBtn.textContent = isPlaying ? '⏸' : '▶';
  }
}

function highlightPlayingAyah(ayahNo) {
  removeAyahHighlights();

  const card = document.getElementById(`ayah-card-${ayahNo}`);
  if (card) {
    card.classList.add('is-playing');
    const btn = document.getElementById(`btn-play-ayah-${ayahNo}`);
    if (btn) {
      btn.textContent = '⏸';
      btn.classList.add('active');
    }
  }

  const mushafSpan = document.getElementById(`mushaf-span-${ayahNo}`);
  if (mushafSpan) {
    mushafSpan.classList.add('is-playing');
  }
}

function removeAyahHighlights() {
  document.querySelectorAll('.ayah-card.is-playing').forEach(el => el.classList.remove('is-playing'));
  document.querySelectorAll('.mushaf-ayah-unit.is-playing').forEach(el => el.classList.remove('is-playing'));
  document.querySelectorAll('.btn-ayah-tool').forEach(el => {
    if (el.textContent === '⏸') el.textContent = '▶';
    el.classList.remove('active');
  });
}

function formatTime(sec) {
  if (isNaN(sec) || sec <= 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// ==========================================================================
// Slide-Over Sheets (Settings & Tafsir)
// ==========================================================================
function openSettingsSheet() {
  const overlay = document.getElementById('settingsSheetOverlay');
  if (overlay) overlay.classList.add('is-open');
}

function closeSettingsSheet() {
  const overlay = document.getElementById('settingsSheetOverlay');
  if (overlay) overlay.classList.remove('is-open');
}

async function openTafsirSheet(surahNo, ayahNo) {
  const overlay = document.getElementById('tafsirSheetOverlay');
  const title = document.getElementById('tafsirSheetTitle');
  const body = document.getElementById('tafsirSheetBody');

  title.innerHTML = `<span>📖</span> Tafsir QS. ${currentSurahData.namaLatin} : Ayat ${ayahNo}`;
  body.innerHTML = `
    <div style="text-align: center; padding: 3rem 0; color: var(--text-faint);">
      <div style="width: 36px; height: 36px; border: 3px solid var(--border); border-top-color: var(--primary); border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 1rem;"></div>
      <p style="font-weight: 600;">Memuat Tafsir Kemenag RI...</p>
    </div>
  `;
  overlay.classList.add('is-open');

  const cacheKey = `quran_tafsir_v2_${surahNo}`;
  let tafsirList = null;

  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) tafsirList = JSON.parse(cached);
  } catch (e) {}

  if (!tafsirList) {
    try {
      const res = await fetch(`https://equran.id/api/v2/tafsir/${surahNo}`);
      if (res.ok) {
        const json = await res.json();
        if (json && json.data && json.data.tafsir) {
          tafsirList = json.data.tafsir;
          try {
            localStorage.setItem(cacheKey, JSON.stringify(tafsirList));
          } catch (e) {}
        }
      }
    } catch (err) {
      console.warn('Tafsir fetch warning:', err);
    }
  }

  if (tafsirList) {
    const item = tafsirList.find(t => t.ayat === ayahNo);
    if (item) {
      body.innerHTML = `
        <div style="margin-bottom: 1.25rem; padding: 0.85rem 1rem; background-color: var(--primary-subtle); border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--primary); font-weight: 700; border: 1px solid var(--primary-border);">
          📚 Tafsir Ringkas Kementerian Agama RI (Kemenag)
        </div>
        <div style="font-size: 1rem; line-height: 1.85; color: var(--text-main); white-space: pre-line;">
          ${item.teks}
        </div>
      `;
      return;
    }
  }

  body.innerHTML = `
    <div style="text-align: center; padding: 3rem 0; color: var(--text-faint);">
      <p style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">Tafsir Belum Tersedia Offline</p>
      <p style="font-size: 0.85rem; margin-top: 0.5rem;">Silakan periksa koneksi internet untuk memuat tafsir surat ini.</p>
    </div>
  `;
}

function closeTafsirSheet() {
  const overlay = document.getElementById('tafsirSheetOverlay');
  if (overlay) overlay.classList.remove('is-open');
}

function closeSheetOnBackdrop(e, overlayId) {
  if (e.target && e.target.id === overlayId) {
    e.target.classList.remove('is-open');
  }
}

// Typography Controls
function setArabicSize(size) {
  currentSettings.arabicSize = parseInt(size, 10);
  saveSettings();
  applySettingsToDOM();
}

function setTransSize(size) {
  currentSettings.transSize = parseFloat(size);
  saveSettings();
  applySettingsToDOM();
}

function toggleLatin(enabled) {
  currentSettings.showLatin = enabled;
  saveSettings();
  if (currentSurahData && currentSettings.readingMode === 'list') {
    document.getElementById('readingArea').innerHTML = renderAyatList(currentSurahData);
  }
}

function toggleTranslation(enabled) {
  currentSettings.showTranslation = enabled;
  saveSettings();
  if (currentSurahData && currentSettings.readingMode === 'list') {
    document.getElementById('readingArea').innerHTML = renderAyatList(currentSurahData);
  }
}

// ==========================================================================
// Spotlight Quick Search Modal (Cmd+K / Ctrl+K)
// ==========================================================================
function setupKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSpotlight();
    } else if (e.key === 'Escape') {
      closeSpotlight();
      closeSettingsSheet();
      closeTafsirSheet();
    }
  });

  const spotlightInput = document.getElementById('spotlightSearchInput');
  if (spotlightInput) {
    spotlightInput.addEventListener('input', (e) => {
      renderSpotlightResults(e.target.value.toLowerCase().trim());
    });
  }
}

function openSpotlight() {
  const overlay = document.getElementById('spotlightOverlay');
  const input = document.getElementById('spotlightSearchInput');
  if (overlay) {
    overlay.classList.add('is-open');
    renderSpotlightResults('');
    setTimeout(() => {
      if (input) input.focus();
    }, 100);
  }
}

function closeSpotlight() {
  const overlay = document.getElementById('spotlightOverlay');
  if (overlay) overlay.classList.remove('is-open');
}

function closeSpotlightOnBackdrop(e) {
  if (e.target && e.target.id === 'spotlightOverlay') {
    closeSpotlight();
  }
}

function renderSpotlightResults(keyword) {
  const container = document.getElementById('spotlightResults');
  if (!container) return;

  const matches = !keyword ? SURAH_LIST.slice(0, 10) : SURAH_LIST.filter(s => {
    return s.namaLatin.toLowerCase().includes(keyword) ||
      s.nomor.toString() === keyword ||
      s.arti.toLowerCase().includes(keyword);
  });

  if (matches.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-faint);">
        Surat tidak ditemukan untuk pencarian "<strong>${keyword}</strong>"
      </div>
    `;
    return;
  }

  container.innerHTML = matches.map(s => `
    <div class="spotlight-item" onclick="navigateToSurah(${s.nomor}); closeSpotlight();">
      <div style="display: flex; align-items: center; gap: 0.85rem;">
        <span class="kbd-badge">${s.nomor}</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">${s.namaLatin}</div>
          <div style="font-size: 0.775rem; color: var(--text-faint);">${s.tempatTurun} • ${s.jumlahAyat} Ayat • "${s.arti}"</div>
        </div>
      </div>
      <div style="font-family: var(--font-arabic); font-size: 1.35rem; color: var(--primary);">
        ${s.nama}
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// Markah & Terakhir Dibaca
// ==========================================================================
function setLastRead(surahNo, ayahNo, surahName) {
  lastRead = {
    surahNo,
    ayahNo,
    surahName,
    timestamp: new Date().toISOString()
  };

  try {
    localStorage.setItem(LAST_READ_KEY, JSON.stringify(lastRead));
  } catch (e) {}

  renderLastReadBanner();
  showToast(`Tersimpan: ${surahName} : Ayat ${ayahNo} 🔖`);
  saveToBookmarks(surahNo, ayahNo, surahName);
}

function saveToBookmarks(surahNo, ayahNo, surahName) {
  const exists = bookmarks.find(b => b.surahNo === surahNo && b.ayahNo === ayahNo);
  if (!exists && currentSurahData) {
    const ayahObj = currentSurahData.ayat.find(a => a.nomorAyat === ayahNo);
    bookmarks.unshift({
      surahNo,
      ayahNo,
      surahName,
      textIndonesia: ayahObj ? ayahObj.teksIndonesia : '',
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    });
    try {
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    } catch (e) {}
  }
}

function removeBookmark(index) {
  bookmarks.splice(index, 1);
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  } catch (e) {}
  renderBookmarksGrid();
  showToast('Markah berhasil dihapus.');
}

// ==========================================================================
// Salin & Bagikan Ayat
// ==========================================================================
function copyAyahText(surahNo, ayahNo) {
  if (!currentSurahData) return;
  const ayah = currentSurahData.ayat.find(a => a.nomorAyat === ayahNo);
  if (!ayah) return;

  const content = `${ayah.teksArab}\n\n"${ayah.teksIndonesia}"\n\n(QS. ${currentSurahData.namaLatin}: Ayat ${ayahNo})\n- Dibaca di Al-Qur'an Indonesia`;

  navigator.clipboard.writeText(content).then(() => {
    showToast(`Ayat ${ayahNo} disalin ke papan klip! 📋`);
  }).catch(() => {
    showToast('Gagal menyalin teks.');
  });
}

function shareAyahWA(surahNo, ayahNo) {
  if (!currentSurahData) return;
  const ayah = currentSurahData.ayat.find(a => a.nomorAyat === ayahNo);
  if (!ayah) return;

  const text = `*${ayah.teksArab}*\n\n"${ayah.teksIndonesia}"\n\n_(QS. ${currentSurahData.namaLatin} : ${ayahNo})_`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
}

// ==========================================================================
// Doa Al-Qur'an & Asmaul Husna
// ==========================================================================
function renderDoaList() {
  const container = document.getElementById('doaListContainer');
  if (!container) return;

  container.innerHTML = `
    <!-- Doa Khatam Banner -->
    <div class="doa-lux-card" style="border: 2px solid var(--primary); background: var(--bg-card); margin-bottom: 2rem;">
      <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--primary);">${DOA_KHATAM.judul}</h3>
      <div style="font-size: 0.85rem; color: var(--gold); font-weight: 700; margin-top: 0.25rem;">Doa Sesudah Membaca Al-Qur'an</div>
      <div style="font-family: var(--font-arabic); font-size: 2.1rem; line-height: 2.4; text-align: right; direction: rtl; color: var(--text-arabic); margin: 1.25rem 0;">
        ${DOA_KHATAM.arab}
      </div>
      <div style="font-style: italic; color: var(--text-latin); font-size: 0.95rem; margin-bottom: 0.75rem;">${DOA_KHATAM.latin}</div>
      <div style="color: var(--text-muted); font-size: 1rem; line-height: 1.7;">${DOA_KHATAM.arti}</div>
    </div>

    <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 1.25rem;">Doa-doa Pilihan Para Nabi (Rabbana)</h3>
    <div class="doa-grid">
      ${DOA_QURAN_LIST.map(doa => `
        <div class="doa-lux-card">
          <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--primary);">${doa.judul}</h4>
          <div style="font-size: 0.8rem; color: var(--text-faint); margin-bottom: 1rem;">${doa.surat}</div>
          <div style="font-family: var(--font-arabic); font-size: 1.85rem; line-height: 2.3; text-align: right; direction: rtl; color: var(--text-arabic); margin-bottom: 1rem;">
            ${doa.arab}
          </div>
          <div style="font-style: italic; color: var(--text-latin); font-size: 0.9rem; margin-bottom: 0.5rem;">${doa.latin}</div>
          <div style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.7;">${doa.arti}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderAsmaulList() {
  const container = document.getElementById('asmaulListContainer');
  if (!container) return;

  container.innerHTML = ASMAUL_HUSNA.map(item => `
    <div class="asmaul-card">
      <div style="font-size: 0.75rem; color: var(--text-faint); font-weight: 700; margin-bottom: 0.35rem;">#${item.no}</div>
      <div style="font-family: var(--font-arabic); font-size: 1.75rem; color: var(--primary); line-height: 1.2; margin-bottom: 0.5rem;">${item.arab}</div>
      <div style="font-weight: 800; font-size: 1rem; color: var(--text-main);">${item.latin}</div>
      <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">${item.arti}</div>
    </div>
  `).join('');
}

// ==========================================================================
// Helpers & Utilities
// ==========================================================================
function navigateToSurah(surahNo, ayahNo = null) {
  const targetHash = ayahNo ? `#surah/${surahNo}/${ayahNo}` : `#surah/${surahNo}`;
  if (window.location.hash === targetHash) {
    loadSurahDetail(surahNo, ayahNo);
  } else {
    window.location.hash = targetHash;
  }
}

function scrollToAyah(ayahNo) {
  const card = document.getElementById(`ayah-card-${ayahNo}`) || document.getElementById(`mushaf-span-${ayahNo}`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.style.transition = 'box-shadow 0.3s ease';
    card.style.boxShadow = '0 0 0 4px var(--primary-glow)';
    setTimeout(() => {
      card.style.boxShadow = '';
    }, 2000);
  }
}

function toArabicDigits(num) {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num.toString().split('').map(d => arabicDigits[parseInt(d, 10)]).join('');
}

function escapeQuote(str) {
  return (str || '').replace(/'/g, "\\'");
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-pill';
  toast.innerHTML = `<span>✨</span><span>${msg}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 2700);
}
