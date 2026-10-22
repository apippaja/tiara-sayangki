/* =========================================================================
   Happy Birthday, Tiara ♡ — script.js
   =========================================================================

   ✏️  AREA KUSTOMISASI
   Semua teks, foto, dan lagu diatur di objek CONFIG di bawah ini.
   Kamu tidak perlu mengubah kode lain di file ini.

   • Path file selalu RELATIF (tanpa "/" di depan), misalnya
     "assets/images/memory-01.jpg" — supaya jalan di GitHub Pages.
   • Teks boleh pakai emoji / simbol ♡.
   • Hapus atau tambah item di daftar `photos` sesukamu.
   ========================================================================= */

const CONFIG = {
  // 1) Nama pacarmu — dipakai di judul, surat, dan pesan penutup.
  name: "Tiara",

  // 2) Kalimat di bawah judul "Happy Birthday".
  heroSubtitle:
    "Hari ini adalah tentang kamu, tentang semua hal indah yang kamu bawa ke hidupku.",

  // 3) Surat ulang tahun. Satu string = satu paragraf.
  //    ✏️ GANTI/tambahkan kenangan pribadi kalian di sini kalau mau.
  letter: {
    greeting: "Tiara sayang,",
    paragraphs: [
      "Selamat ulang tahun. Aku nulis ini pelan-pelan, karena aku pengen setiap kalimatnya beneran datang dari aku, bukan sekadar ucapan yang biasa orang kirim.",
      "Terima kasih udah ada di hidupku. Kadang aku masih suka mikir, betapa beruntungnya aku bisa kenal kamu, bisa dengerin cerita kamu, dan bisa jadi orang yang kamu ajak berbagi hari-hari kamu.",
      "Aku sayang sama hal-hal kecil yang kita punya. Obrolan yang kelihatannya nggak penting tapi selalu bikin aku senyum, kabar singkat di tengah hari yang sibuk, dan rasa tenang tiap kali aku tahu kamu baik-baik aja. Mungkin sederhana, tapi buatku itu yang paling berarti.",
      "Di umur kamu yang baru ini, aku berdoa semoga kamu selalu sehat, hatimu selalu lapang, dan bahagiamu nggak pernah setengah-setengah. Semoga mimpi-mimpi kamu satu per satu jadi nyata. Dan kalau nanti ada hari yang berat, semoga kamu ingat kalau kamu nggak sendirian.",
      "Aku nggak janji bakal selalu sempurna. Tapi aku janji mau terus belajar: belajar lebih ngerti kamu, belajar lebih sabar, dan tumbuh bareng kamu, pelan-pelan, sama-sama.",
      "Hari ini tentang kamu. Dan aku senang banget bisa ikut merayakannya.",
    ],
    closing: "Dengan sayang,",
    signature: "Aku ♡", // ✏️ GANTI dengan namamu atau panggilan sayang kalian
  },

  // 4) Polaroid di samping surat (1 atau 2 foto paling pas).
  letterPhotos: [
    { src: "assets/images/memory-03.jpg", alt: "Tiara tersenyum di depan rak buku", caption: "my favorite ♡" },
    { src: "assets/images/memory-11.jpg", alt: "Selfie Tiara dan aku di kafe", caption: "always you" },
  ],

  // 5) Galeri "Little Moments, Big Memories".
  //    src     : path foto (wajib)
  //    thumb   : versi kecil untuk thumbnail (opsional, kalau kosong pakai src)
  //    alt     : deskripsi foto untuk pembaca layar (disarankan)
  //    caption : teks di bawah foto (opsional)
  //    date    : tanggal/teks kecil, contoh "14 Februari 2025" (opsional, kosongkan "" jika tidak ada)
  //    ✏️ Caption & tanggal bebas kamu ubah sesuai cerita aslinya.
  photos: [
    { src: "assets/images/memory-01.jpg", thumb: "assets/images/thumbs/memory-01.jpg", alt: "Tiara dan aku selfie di dalam mobil, sama-sama pasang muka mengaum", caption: "Mode berisik: on", date: "" },
    { src: "assets/images/memory-02.jpg", thumb: "assets/images/thumbs/memory-02.jpg", alt: "Kami berdua di photo booth bertirai merah, masing-masing memegang kamera Kodak", caption: "Dua fotografer, nol foto yang serius", date: "" },
    { src: "assets/images/memory-03.jpg", thumb: "assets/images/thumbs/memory-03.jpg", alt: "Tiara tersenyum sambil melirik ke samping di depan rak buku", caption: "Senyum yang ini ♡", date: "" },
    { src: "assets/images/memory-04.jpg", thumb: "assets/images/thumbs/memory-04.jpg", alt: "Selfie berdua di kafe, Tiara menunjuk daguku sambil tersenyum", caption: "Pose andalan: tunjuk dagu", date: "" },
    { src: "assets/images/memory-05.jpg", thumb: "assets/images/thumbs/memory-05.jpg", alt: "Aku tertawa lebar sambil memegang buket mawar", caption: "Senyum paling lebar hari itu", date: "" },
    { src: "assets/images/memory-06.jpg", thumb: "assets/images/thumbs/memory-06.jpg", alt: "Tiara menyandarkan kepala di meja di depan makanan dan cheesecake", caption: "Kenyang dulu, baru foto", date: "" },
    { src: "assets/images/memory-07.jpg", thumb: "assets/images/thumbs/memory-07.jpg", alt: "Selfie berdua, Tiara tersenyum dan aku menjulurkan lidah", caption: "Kompak ekspresinya", date: "" },
    { src: "assets/images/memory-08.jpg", thumb: "assets/images/thumbs/memory-08.jpg", alt: "Tiara melirik ke samping memakai kemeja hitam", caption: "Lirikan andalan", date: "" },
    { src: "assets/images/memory-09.jpg", thumb: "assets/images/thumbs/memory-09.jpg", alt: "Ponsel yang disandarkan di mangkuk sedang merekam kami berdua", caption: "Tripod darurat: mangkok", date: "" },
    { src: "assets/images/memory-10.jpg", thumb: "assets/images/thumbs/memory-10.jpg", alt: "Tiara menekan pipinya dengan dua jari sambil melirik ke atas", caption: "Senyum, tapi dibantu jari", date: "" },
    { src: "assets/images/memory-11.jpg", thumb: "assets/images/thumbs/memory-11.jpg", alt: "Selfie berdua di kafe dengan ekspresi cemberut yang sama", caption: "Cemberutnya pun kompak", date: "" },
    { src: "assets/images/memory-12.jpg", thumb: "assets/images/thumbs/memory-12.jpg", alt: "Tiara menjulurkan lidah ke kamera, aku di belakangnya", caption: "Usil, seperti biasa", date: "" },
    { src: "assets/images/memory-13.jpg", thumb: "assets/images/thumbs/memory-13.jpg", alt: "Tiara berbaring sambil menjulurkan lidah ke kamera", caption: "Cantik dari angle mana pun", date: "" },
    { src: "assets/images/memory-14.jpg", thumb: "assets/images/thumbs/memory-14.jpg", alt: "Tangkapan layar video call, Tiara tersenyum lebar", caption: "Jauh pun tetap ketawa", date: "" },
    { src: "assets/images/memory-15.jpg", thumb: "assets/images/thumbs/memory-15.jpg", alt: "Kami berdua berdiri berdampingan di halaman kampus", caption: "Sesekali foto yang kalem", date: "" },
  ],

  // 6) Slideshow otomatis
  slideshow: {
    autoplay: true,   // false = hanya pindah saat diklik
    interval: 6000,   // milidetik antar foto (6000 = 6 detik)
  },

  // 7) Lagu. Taruh file MP3-mu di assets/music/ (lihat README soal hak cipta).
  song: {
    file: "assets/music/our-song.mp3",
    title: "Wiseman",                    // ✏️ cek ulang judul
    artist: "Dopu",                      // ✏️ cek ulang nama penyanyi
    cover: "assets/images/song-cover.jpg",
    coverAlt: "Ponsel di atas meja yang sedang merekam kami berdua",
    loop: true,                          // ulangi lagu setelah selesai
    playOnOpen: true,                    // mulai saat tombol "Open My Letter" ditekan
  },

  // 8) Pesan kejutan terakhir. Satu string = satu paragraf.
  surprise: {
    paragraphs: [
      "Kalau suatu hari kamu lupa betapa berharganya kamu, buka lagi halaman ini, ya.",
      "Kamu pantas dapat semua hal baik di dunia ini. Dan selama aku bisa, aku mau jadi salah satu orang yang terus ngingetin kamu soal itu.",
      "Semoga tahun ini jadi salah satu tahun terbaikmu. Aku ada di sini, hari ini dan hari-hari berikutnya.",
    ],
    // {name} otomatis diganti dengan CONFIG.name
    closingLine: "Happy Birthday, {name}. Thank you for being part of my story. ♡",
  },
};

/* =========================================================================
   Kode di bawah ini tidak perlu diubah.
   ========================================================================= */
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const SESSION_KEY = "tiara-birthday:opened"; // sama dengan skrip kecil di <head>
  const pad = (n) => String(n).padStart(2, "0");
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const fileName = (src) => String(src).split("/").pop();

  function formatTime(sec) {
    if (!Number.isFinite(sec) || sec < 0) return "--:--";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${pad(s)}`;
  }

  /* Tanda "foto belum ada" yang rapi, dipakai di polaroid & galeri. */
  function missingBadge(src, small = false) {
    const el = document.createElement("span");
    el.className = "photo-missing" + (small ? " photo-missing--small" : "");
    el.innerHTML = '<svg aria-hidden="true"><use href="#i-heart-hand"/></svg>';
    if (!small) {
      const t = document.createElement("span");
      t.textContent = "Foto belum ditambahkan";
      const c = document.createElement("code");
      c.textContent = fileName(src);
      el.append(t, c);
    }
    return el;
  }

  /* ---------------- Teks dari CONFIG ---------------- */
  function applyText() {
    $$('[data-config="name"]').forEach((el) => (el.textContent = CONFIG.name));
    const sub = $('[data-config="heroSubtitle"]');
    if (sub && CONFIG.heroSubtitle) sub.textContent = CONFIG.heroSubtitle;
    document.title = `Happy Birthday, ${CONFIG.name} ♡`;
  }

  /* ---------------- Surat ---------------- */
  function renderLetter() {
    const body = $("#letterBody");
    const { greeting, paragraphs = [], closing, signature } = CONFIG.letter || {};
    const items = [];
    if (greeting) {
      const g = document.createElement("p");
      g.className = "greeting";
      g.textContent = greeting;
      items.push(g);
    }
    paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      items.push(p);
    });
    items.forEach((p, i) => p.style.setProperty("--i", i));
    body.replaceChildren(...items);
    $("#letterClosing").textContent = closing || "";
    $("#letterSignature").textContent = signature || "";

    // Efek tulisan muncul saat surat terlihat
    const write = () => body.classList.add("is-written");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return write();
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { write(); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(body);
  }

  function renderLetterPhotos() {
    const wrap = $("#letterPhotos");
    const list = (CONFIG.letterPhotos || []).filter((p) => p && p.src).slice(0, 2);
    const figs = list.map((p, i) => {
      const fig = document.createElement("figure");
      fig.className = "polaroid";
      if (i === 0) fig.insertAdjacentHTML("afterbegin", '<span class="tape tape--photo" aria-hidden="true"></span>');
      const img = new Image(800, 1000);
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = p.alt || "";
      img.addEventListener("error", () => {
        const badge = missingBadge(p.src);
        badge.style.inset = "10px 10px 44px";
        fig.append(badge);
        img.style.visibility = "hidden";
      }, { once: true });
      img.src = p.src;
      fig.append(img);
      if (p.caption) {
        const cap = document.createElement("figcaption");
        cap.textContent = p.caption;
        fig.append(cap);
      }
      return fig;
    });
    wrap.replaceChildren(...figs);
  }

  /* ---------------- Navigasi ---------------- */
  function setupNav() {
    const nav = $("#siteNav");
    const toggle = $("#navToggle");
    const menu = $("#navMenu");
    const hero = $("#top");

    const setMenu = (open) => {
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".sr-only").textContent = open ? "Tutup menu" : "Buka menu";
    };
    toggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("click", (e) => {
      if (menu.classList.contains("is-open") && !e.target.closest(".site-nav__nav")) setMenu(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-open")) { setMenu(false); toggle.focus(); }
    });

    // Latar nav jadi krem setelah melewati hero
    let ticking = false;
    const update = () => {
      ticking = false;
      const limit = hero.offsetHeight - nav.offsetHeight - 10;
      nav.classList.toggle("is-solid", window.scrollY > limit);
    };
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();

    // Tandai link bagian yang sedang dibaca
    if ("IntersectionObserver" in window) {
      const links = $$("a", menu);
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => {
            if (a.getAttribute("href") === `#${entry.target.id}`) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      ["top", "letter", "memories", "song", "surprise"].forEach((id) => { const s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  /* ---------------- Reveal saat scroll ---------------- */
  function setupReveal() {
    const items = $$(".reveal");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    items.forEach((el) => io.observe(el));
  }

  /* ---------------- Audio player ---------------- */
  function setupPlayer() {
    const song = CONFIG.song || {};
    const audio = $("#audio");
    const player = $("#player");
    const playBtn = $("#playerPlay");
    const seek = $("#playerSeek");
    const cur = $("#playerCurrent");
    const dur = $("#playerDuration");
    const status = $("#playerStatus");
    const label = $("#playerLabel");
    const vol = $("#playerVolume");
    const volWrap = $("#playerVolumeWrap");
    const mute = $("#playerMute");
    const toggle = $("#musicToggle");
    const toggleLabel = $("#musicToggleLabel");
    const cover = $("#playerCover");

    let unavailable = false;
    let seeking = false;
    let userPaused = false;

    $("#playerTitle").textContent = song.title || "Lagu kita";
    $("#playerArtist").textContent = song.artist || "";
    cover.alt = song.coverAlt || "";
    cover.addEventListener("error", () => { cover.style.visibility = "hidden"; $("#playerCoverMissing").hidden = false; }, { once: true });
    if (song.cover) cover.src = song.cover; else cover.dispatchEvent(new Event("error"));

    toggle.removeAttribute("aria-pressed"); // label yang berubah sudah cukup jelas

    const setStatus = (msg) => { status.textContent = msg || ""; };
    const setLoading = (on) => player.classList.toggle("is-loading", on);
    const setPlaying = (on) => {
      player.classList.toggle("is-playing", on);
      toggle.classList.toggle("is-playing", on);
      playBtn.setAttribute("aria-label", on ? "Jeda lagu" : "Putar lagu");
      toggleLabel.textContent = on ? "Jeda lagu" : "Putar lagu";
      label.textContent = on ? "Sedang diputar" : "Lagu untukmu";
    };
    const markUnavailable = () => {
      unavailable = true;
      setLoading(false);
      setPlaying(false);
      playBtn.disabled = true;
      seek.disabled = true;
      toggle.disabled = true;
      toggle.title = "Lagu belum tersedia";
      dur.textContent = "--:--";
      setStatus(`Lagunya belum bisa diputar ♡ File "${song.file}" belum ditemukan atau formatnya tidak didukung browser.`);
    };

    const setFill = (input) => {
      const pct = ((input.value - input.min) / (input.max - input.min)) * 100 || 0;
      input.style.setProperty("--fill", `${pct}%`);
    };
    const syncTime = () => {
      const d = audio.duration;
      if (!seeking && Number.isFinite(d) && d > 0) {
        seek.value = Math.round((audio.currentTime / d) * 1000);
        setFill(seek);
      }
      cur.textContent = formatTime(seeking ? (seek.value / 1000) * d : audio.currentTime);
      seek.setAttribute("aria-valuetext", `${cur.textContent} dari ${formatTime(d)}`);
    };
    const syncDuration = () => {
      const d = audio.duration;
      if (Number.isFinite(d) && d > 0) {
        dur.textContent = formatTime(d);
        seek.disabled = false;
      }
      syncTime();
    };

    audio.loop = song.loop !== false;
    audio.addEventListener("loadedmetadata", syncDuration);
    audio.addEventListener("durationchange", syncDuration);
    audio.addEventListener("timeupdate", syncTime);
    audio.addEventListener("playing", () => { setLoading(false); setPlaying(true); setStatus(""); });
    audio.addEventListener("pause", () => { setLoading(false); setPlaying(false); });
    audio.addEventListener("waiting", () => { if (!audio.paused) setLoading(true); });
    audio.addEventListener("ended", () => { setPlaying(false); syncTime(); });
    audio.addEventListener("error", markUnavailable);

    if (song.file) audio.src = song.file;
    else markUnavailable();

    async function play() {
      if (unavailable) { markUnavailable(); return false; }
      userPaused = false;
      setLoading(true);
      try {
        await audio.play();
        return true;
      } catch (err) {
        setLoading(false);
        setPlaying(!audio.paused);
        if (err && err.name === "NotAllowedError") {
          setStatus("Browser menahan pemutaran otomatis. Tekan tombol play untuk memutar lagu ♡");
        } else if (err && err.name === "AbortError") {
          /* diputus oleh pause — tidak perlu pesan */
        } else {
          markUnavailable();
        }
        return false;
      }
    }
    function pause() { userPaused = true; audio.pause(); }
    function togglePlay() { if (audio.paused) play(); else pause(); }

    playBtn.addEventListener("click", togglePlay);
    toggle.addEventListener("click", togglePlay);

    // Seek
    seek.addEventListener("input", () => { seeking = true; setFill(seek); syncTime(); });
    seek.addEventListener("change", () => {
      const d = audio.duration;
      if (Number.isFinite(d) && d > 0) audio.currentTime = (seek.value / 1000) * d;
      seeking = false;
      syncTime();
    });

    // Volume (di iOS volume hanya bisa diatur lewat tombol fisik, jadi slider disembunyikan)
    const volumeSettable = (() => { try { const a = new Audio(); a.volume = 0.5; return a.volume === 0.5; } catch { return false; } })();
    if (!volumeSettable) vol.hidden = true;
    audio.volume = vol.value / 100;
    setFill(vol);
    vol.addEventListener("input", () => {
      audio.volume = vol.value / 100;
      audio.muted = Number(vol.value) === 0;
    });
    mute.addEventListener("click", () => {
      audio.muted = !audio.muted;
      if (!audio.muted && audio.volume === 0) { audio.volume = 0.6; }
    });
    audio.addEventListener("volumechange", () => {
      const muted = audio.muted || audio.volume === 0;
      mute.setAttribute("aria-pressed", String(muted));
      mute.setAttribute("aria-label", muted ? "Nyalakan suara" : "Bisukan");
      vol.value = audio.muted ? 0 : Math.round(audio.volume * 100);
      setFill(vol);
    });
    if (!volumeSettable && !("muted" in audio)) volWrap.hidden = true;

    // Info lagu di lock screen / notifikasi media (jika didukung)
    if ("mediaSession" in navigator && "MediaMetadata" in window) {
      try {
        const artwork = song.cover ? [{ src: new URL(song.cover, document.baseURI).href, sizes: "800x800", type: "image/jpeg" }] : [];
        navigator.mediaSession.metadata = new MediaMetadata({ title: song.title || "", artist: song.artist || "", artwork });
        navigator.mediaSession.setActionHandler("play", play);
        navigator.mediaSession.setActionHandler("pause", pause);
      } catch { /* abaikan */ }
    }

    return {
      play,
      get isPlaying() { return !audio.paused; },
      get userPaused() { return userPaused; },
    };
  }

  /* ---------------- Pembuka (tombol "Open My Letter") ---------------- */
  function setupOpening(player) {
    const btn = $("#openLetterBtn");
    const letterTitle = $("#letterTitle");
    letterTitle.setAttribute("tabindex", "-1");

    btn.addEventListener("click", () => {
      const firstTime = !root.classList.contains("is-open");
      if (firstTime) {
        root.classList.add("is-open");
        try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* abaikan */ }
      }
      // Musik dimulai karena ada interaksi pengguna (bukan autoplay)
      if (CONFIG.song && CONFIG.song.playOnOpen !== false && !player.isPlaying && !player.userPaused) {
        player.play();
      }
      requestAnimationFrame(() => {
        document.getElementById("letter").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
        letterTitle.focus({ preventScroll: true });
      });
    });
  }

  /* ---------------- Slideshow ---------------- */
  function setupSlideshow(onOpen) {
    const photos = (CONFIG.photos || []).filter((p) => p && p.src);
    const region = $("#slideshow");
    const stage = $(".slideshow__open", region);
    const img = $("#slideImg");
    const backdrop = $("#slideBackdrop");
    const missing = $("#slideMissing");
    const missingName = $("#slideMissingName");
    const caption = $("#slideCaption");
    const date = $("#slideDate");
    const counter = $("#slideCounter");
    const thumbsList = $("#slideThumbs");
    const autoBtn = $("#slideAuto");
    const autoLabel = $("#slideAutoLabel");
    const prevBtn = $("#slidePrev");
    const nextBtn = $("#slideNext");

    if (!photos.length) {
      region.innerHTML = '<p class="section-sub">Belum ada foto. Tambahkan foto di CONFIG.photos (script.js).</p>';
      return { show() {}, get length() { return 0; }, photos, setPaused() {} };
    }

    const total = photos.length;
    const interval = Math.max(2500, Number(CONFIG.slideshow && CONFIG.slideshow.interval) || 6000);
    const autoEnabled = !!(CONFIG.slideshow && CONFIG.slideshow.autoplay) && total > 1;
    let index = 0;
    let swapToken = 0;
    let timer = null;
    let inView = false;
    let userPaused = false;
    let hoverPaused = false;
    let externalPaused = false;

    if (total < 2) { prevBtn.hidden = true; nextBtn.hidden = true; }

    // Thumbnail
    const thumbs = photos.map((p, i) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button";
      b.className = "thumb";
      b.setAttribute("aria-label", `Lihat foto ${i + 1}${p.caption ? `: ${p.caption}` : ""}`);
      const t = new Image(160, 116);
      t.alt = "";
      t.loading = "lazy";
      t.decoding = "async";
      t.addEventListener("error", () => { b.classList.add("is-missing"); t.remove(); }, { once: true });
      t.src = p.thumb || p.src;
      b.append(t);
      b.addEventListener("click", () => { show(i); restart(); });
      li.append(b);
      return { li, b };
    });
    thumbsList.replaceChildren(...thumbs.map((t) => t.li));
    if (total < 2) thumbsList.hidden = true;

    const preload = (src) => new Promise((resolve) => {
      const im = new Image();
      im.onload = () => resolve(true);
      im.onerror = () => resolve(false);
      im.src = src;
    });

    async function show(i, { instant = false } = {}) {
      index = (i + total) % total;
      const p = photos[index];
      const n = index + 1;
      const token = ++swapToken;

      counter.textContent = `${pad(n)} / ${pad(total)}`;
      caption.textContent = p.caption || "";
      date.textContent = p.date || "";
      stage.setAttribute("aria-label", `Perbesar foto ${n} dari ${total}`);
      thumbs.forEach(({ b }, k) => {
        if (k === index) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
      });
      // Geser thumbnail aktif ke tengah tanpa menggulir halaman
      const tb = thumbs[index].b;
      const left = tb.offsetLeft - (thumbsList.clientWidth - tb.offsetWidth) / 2;
      thumbsList.scrollTo({ left, behavior: reducedMotion.matches || instant ? "auto" : "smooth" });

      const fade = !instant && !reducedMotion.matches;
      if (fade) stage.classList.add("is-fading");
      const [ok] = await Promise.all([preload(p.src), wait(fade ? 320 : 0)]);
      if (token !== swapToken) return; // sudah pindah ke foto lain

      if (ok) {
        img.src = p.src;
        img.alt = p.alt || p.caption || `Foto kenangan ${n}`;
        img.hidden = false;
        backdrop.style.backgroundImage = `url("${encodeURI(p.src)}")`;
        missing.hidden = true;
      } else {
        img.removeAttribute("src");
        img.alt = "";
        img.hidden = true;
        backdrop.style.backgroundImage = "none";
        missingName.textContent = fileName(p.src);
        missing.hidden = false;
      }
      requestAnimationFrame(() => stage.classList.remove("is-fading"));

      // Muat foto berikutnya lebih dulu agar transisi mulus
      if (total > 1) preload(photos[(index + 1) % total].src);
    }

    const next = () => show(index + 1);
    const prev = () => show(index - 1);

    // Autoplay
    const canAuto = () =>
      autoEnabled && !userPaused && !hoverPaused && !externalPaused && inView &&
      !document.hidden && !reducedMotion.matches;
    function restart() {
      clearTimeout(timer);
      timer = null;
      if (canAuto()) timer = setTimeout(() => { next(); restart(); }, interval);
    }
    function syncAutoButton() {
      autoBtn.hidden = !(autoEnabled && !reducedMotion.matches);
      autoLabel.textContent = userPaused ? "Putar slideshow" : "Jeda slideshow";
      $("use", autoBtn).setAttribute("href", userPaused ? "#i-play" : "#i-pause");
    }
    autoBtn.addEventListener("click", () => { userPaused = !userPaused; syncAutoButton(); restart(); });
    syncAutoButton();

    region.addEventListener("mouseenter", () => { hoverPaused = true; restart(); });
    region.addEventListener("mouseleave", () => { hoverPaused = false; restart(); });
    region.addEventListener("focusin", () => { hoverPaused = true; restart(); });
    region.addEventListener("focusout", (e) => { if (!region.contains(e.relatedTarget)) { hoverPaused = false; restart(); } });
    document.addEventListener("visibilitychange", restart);
    reducedMotion.addEventListener?.("change", () => { syncAutoButton(); restart(); });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
        restart();
      }, { threshold: 0.35 }).observe(region);
    }

    // Tombol & keyboard
    prevBtn.addEventListener("click", () => { prev(); restart(); });
    nextBtn.addEventListener("click", () => { next(); restart(); });
    region.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      if (e.key === "ArrowLeft") prev(); else next();
      restart();
      if (document.activeElement && document.activeElement.classList.contains("thumb")) thumbs[index].b.focus();
    });

    // Geser (swipe) di layar sentuh
    let sx = 0, sy = 0, swiped = false;
    stage.addEventListener("pointerdown", (e) => { sx = e.clientX; sy = e.clientY; swiped = false; });
    stage.addEventListener("pointerup", (e) => {
      if (e.pointerType === "mouse") return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) {
        swiped = true;
        if (dx < 0) next(); else prev();
        restart();
      }
    });
    stage.addEventListener("click", () => {
      if (swiped) { swiped = false; return; }
      onOpen(index);
    });

    show(0, { instant: true });

    return {
      photos,
      get length() { return total; },
      get index() { return index; },
      show: (i) => { show(i, { instant: true }); },
      setPaused(p) { externalPaused = p; restart(); },
    };
  }

  /* ---------------- Lightbox ---------------- */
  function setupLightbox(getSlideshow) {
    const dialog = $("#lightbox");
    const img = $("#lightboxImg");
    const missing = $("#lightboxMissing");
    const cap = $("#lightboxCaption");
    const meta = $("#lightboxMeta");
    const prevBtn = $("#lightboxPrev");
    const nextBtn = $("#lightboxNext");
    let index = 0;
    let opener = null;
    const supportsDialog = typeof dialog.showModal === "function";

    function render() {
      const s = getSlideshow();
      const p = s.photos[index];
      const n = index + 1;
      missing.hidden = true;
      img.hidden = false;
      img.alt = p.alt || p.caption || `Foto kenangan ${n}`;
      img.onerror = () => { img.hidden = true; missing.hidden = false; };
      img.src = p.src;
      cap.textContent = p.caption || "";
      meta.textContent = [p.date, `${pad(n)} / ${pad(s.length)}`].filter(Boolean).join("  ·  ");
      const multi = s.length > 1;
      prevBtn.hidden = !multi;
      nextBtn.hidden = !multi;
    }

    function open(i) {
      const s = getSlideshow();
      if (!s.length) return;
      index = i;
      opener = document.activeElement;
      render();
      s.setPaused(true);
      document.body.classList.add("no-scroll");
      if (supportsDialog) dialog.showModal(); else dialog.setAttribute("open", "");
      $("#lightboxClose").focus();
    }

    function close() {
      if (supportsDialog) { if (dialog.open) dialog.close(); }
      else { dialog.removeAttribute("open"); onClosed(); }
    }

    function onClosed() {
      const s = getSlideshow();
      document.body.classList.remove("no-scroll");
      if (s.index !== index) s.show(index);
      s.setPaused(false);
      if (opener && typeof opener.focus === "function") opener.focus({ preventScroll: true });
    }

    function go(step) {
      const total = getSlideshow().length;
      index = (index + step + total) % total;
      render();
    }

    dialog.addEventListener("close", onClosed);
    $("#lightboxClose").addEventListener("click", close);
    prevBtn.addEventListener("click", () => go(-1));
    nextBtn.addEventListener("click", () => go(1));
    dialog.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
      else if (e.key === "Escape" && !supportsDialog) close();
    });
    // Klik area gelap di luar foto untuk menutup
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog || e.target.classList.contains("lightbox__inner")) close();
    });

    return { open };
  }

  /* ---------------- Kejutan ---------------- */
  function setupSurprise() {
    const btn = $("#surpriseBtn");
    const card = $("#surpriseCard");
    const msg = $("#surpriseMessage");
    const closing = $("#surpriseClosing");
    const hearts = $("#surpriseHearts");
    const s = CONFIG.surprise || {};

    msg.replaceChildren(...(s.paragraphs || []).map((t) => {
      const p = document.createElement("p");
      p.textContent = t;
      return p;
    }));
    closing.textContent = (s.closingLine || "").replace(/\{name\}/g, CONFIG.name);

    btn.addEventListener("click", () => {
      card.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      btn.hidden = true;
      msg.focus({ preventScroll: true });
      card.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "center" });

      if (reducedMotion.matches) return;
      const spots = [12, 24, 38, 52, 64, 78, 90];
      hearts.replaceChildren(...spots.map((left, i) => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
        use.setAttribute("href", "#i-heart-fill");
        svg.append(use);
        const size = 10 + (i % 3) * 4;
        svg.setAttribute("width", size);
        svg.setAttribute("height", size);
        svg.style.left = `${left}%`;
        svg.style.animationDelay = `${300 + i * 140}ms`;
        svg.style.setProperty("--dx", `${(i % 2 ? 1 : -1) * (8 + i * 3)}px`);
        svg.style.setProperty("--r", `${(i % 2 ? 1 : -1) * 12}deg`);
        return svg;
      }));
      setTimeout(() => hearts.replaceChildren(), 4500);
    });
  }

  /* ---------------- Mulai ---------------- */
  function init() {
    applyText();
    renderLetter();
    renderLetterPhotos();
    setupNav();
    setupReveal();
    const player = setupPlayer();
    setupOpening(player);
    let slideshow = null;
    const lightbox = setupLightbox(() => slideshow);
    slideshow = setupSlideshow((i) => lightbox.open(i));
    setupSurprise();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
