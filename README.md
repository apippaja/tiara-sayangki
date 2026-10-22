# Happy Birthday, Tiara ♡

Website ulang tahun bergaya *romantic scrapbook*: HTML, CSS, dan JavaScript murni.
Tidak perlu npm, build, server, atau database. Cukup upload ke GitHub Pages.

```
/
├── index.html          ← struktur halaman
├── style.css           ← tampilan (warna & font di :root paling atas)
├── script.js           ← CONFIG di bagian paling atas + semua interaksi
├── README.md
├── .nojekyll           ← supaya GitHub Pages menyajikan file apa adanya
└── assets/
    ├── images/
    │   ├── hero.jpg          ← foto pembuka untuk layar lebar (laptop / HP miring)
    │   ├── hero-mobile.jpg   ← foto pembuka untuk layar tegak (HP)
    │   ├── memory-01.jpg … memory-15.jpg   ← foto galeri
    │   ├── thumbs/           ← versi kecil foto galeri untuk thumbnail
    │   └── song-cover.jpg    ← sampul lagu di pemutar musik
    └── music/
        └── our-song.mp3      ← (belum ada, kamu yang tambahkan)
```

> ⚠️ **File lagu belum disertakan.** Taruh MP3-nya di `assets/music/our-song.mp3`.
> Selama belum ada, pemutar musik menampilkan pesan "lagu belum bisa diputar"
> dan halaman tetap berjalan normal.

---

## 1. Kustomisasi (cukup edit `script.js`)

Buka `script.js`. Bagian paling atas berisi objek `CONFIG`:

| Bagian | Isi |
|---|---|
| `name` | Nama pacarmu, dipakai di judul, surat, dan pesan penutup |
| `heroSubtitle` | Kalimat di bawah "Happy Birthday" |
| `letter` | Sapaan, paragraf surat, penutup, dan **tanda tanganmu** (`signature`) |
| `letterPhotos` | 1–2 foto polaroid di samping surat (+ caption pendek) |
| `photos` | Daftar foto galeri: `src`, `alt`, `caption`, `date` (opsional) |
| `slideshow` | `autoplay` (true/false) dan `interval` dalam milidetik |
| `song` | File lagu, judul, penyanyi, sampul, `loop`, `playOnOpen` |
| `surprise` | Paragraf pesan kejutan + kalimat penutup (`{name}` otomatis jadi nama) |

Tips:
- Caption galeri bebas diganti dengan cerita aslinya, atau kosongkan (`caption: ""`)
  kalau fotonya mau tampil tanpa teks.
- `date` boleh teks bebas, misalnya `"14 Februari 2025"` atau `"Bandung, 2024"`.
  Kosongkan (`""`) kalau tidak ingin menampilkan tanggal.
- Isi `alt` dengan deskripsi singkat foto (misalnya "Kita berdua di pantai saat senja").
  Ini dibaca oleh pembaca layar.
- Tambah foto: salin satu baris di `photos`, ubah nama filenya. Hapus baris untuk mengurangi.
- Warna dan font ada di `:root` paling atas `style.css`.

## 2. Mengganti foto

1. Siapkan foto berformat `.jpg` (atau `.webp`/`.png`, asal nama di `CONFIG` sama).
2. Taruh di `assets/images/`.
3. **Foto hero**: ada dua versi. `hero.jpg` (landscape, untuk laptop) dan `hero-mobile.jpg`
   (portrait, untuk HP). Bagian kiri `hero.jpg` dan bagian bawah `hero-mobile.jpg` tertutup teks,
   jadi wajah sebaiknya ada di kanan (laptop) atau di atas (HP). Versi saat ini sudah
   diperlebar/diperpanjang sedikit supaya teks tidak menutupi wajah.
4. **Foto galeri**: timpa `memory-01.jpg` dst., atau pakai nama lain lalu sesuaikan di `CONFIG.photos`.
   Kalau menambah foto baru tanpa thumbnail, hapus saja `thumb` di barisnya (foto aslinya yang dipakai).
   Orientasi portrait maupun landscape sama-sama aman: foto ditampilkan utuh (tidak terpotong)
   dengan latar blur dari foto itu sendiri.
5. **Sampul lagu**: timpa `song-cover.jpg` (persegi, ±800 px).

Supaya halaman tetap ringan, perkecil foto dulu ke sisi terpanjang **±1600–2000 px**
dan ukuran file di bawah ±400 KB (bisa pakai squoosh.app atau aplikasi edit foto di HP).

⚠️ Nama file di GitHub Pages **peka huruf besar/kecil**: `Memory-01.JPG` ≠ `memory-01.jpg`.
Kalau ada foto yang tidak ketemu, halaman menampilkan kotak "Foto belum ditambahkan" beserta nama filenya.

## 3. Menambahkan lagu

1. Siapkan file MP3, lalu namai `our-song.mp3`.
2. Taruh di `assets/music/our-song.mp3`.
3. Ubah `CONFIG.song.title` dan `CONFIG.song.artist`.

Cara kerja musik:
- Lagu **tidak pernah diputar otomatis** saat halaman dibuka. Lagu mulai saat Tiara menekan
  **"Open My Letter ♡"** (bisa dimatikan dengan `playOnOpen: false`).
- Hanya ada satu elemen audio untuk seluruh halaman, jadi lagu tidak mengulang dari awal saat di-scroll.
- Tombol hati di navigasi atas bisa memutar atau menjeda lagu dari bagian mana pun.
- Kalau file tidak ada atau gagal dimuat, pemutar menampilkan pesan dan tombol play dinonaktifkan.
  Tampilannya tidak akan pura-pura "sedang diputar".
- Batas ukuran file di GitHub adalah 100 MB per file. MP3 3–5 menit (±5–10 MB) aman.

### Soal hak cipta lagu
Gunakan lagu secara sah: misalnya lagu yang kamu beli/miliki untuk penggunaan pribadi,
rekamanmu sendiri, atau musik berlisensi bebas (Creative Commons / royalty-free).
Ingat bahwa repositori GitHub **publik** dan situs GitHub Pages bisa diakses siapa pun yang
punya link-nya, sehingga mengunggah lagu komersial ke sana bisa melanggar hak cipta. Jika ragu,
pakai lagu berlisensi bebas atau rekam versi akustikmu sendiri.

## 4. Deploy ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `untuk-tiara`.
2. Upload **semua isi folder ini** (termasuk `.nojekyll` dan folder `assets`) ke root repository.
   - Lewat web: **Add file → Upload files**, seret semua file & folder, lalu **Commit changes**.
   - Lewat git:
     ```bash
     git init
     git add .
     git commit -m "Website ulang tahun untuk Tiara"
     git branch -M main
     git remote add origin https://github.com/USERNAME/untuk-tiara.git
     git push -u origin main
     ```
3. Di repository: **Settings → Pages**.
4. **Source**: *Deploy from a branch* → Branch: `main`, folder: `/ (root)` → **Save**.
5. Tunggu 1–2 menit. Situsmu ada di `https://USERNAME.github.io/untuk-tiara/`.

Semua path di proyek ini relatif (tanpa `/` di depan), jadi tetap berjalan meski situs
berada di subfolder `/untuk-tiara/`.

Catatan privasi: halaman ini memakai `noindex` agar tidak muncul di mesin pencari,
tetapi siapa pun yang punya link tetap bisa membukanya. Repository publik juga bisa dilihat orang lain.

### Mencoba di komputer sendiri
Cukup buka `index.html` di browser (klik dua kali). Kalau ingin persis seperti di server:
```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## 5. Checklist sebelum dikirim ke Tiara

- [ ] Caption di `CONFIG.photos` sudah sesuai
- [ ] `signature` di surat sudah diganti dengan namamu
- [ ] Judul & penyanyi lagu sudah benar, dan file `our-song.mp3` sudah diupload
- [ ] Buka link GitHub Pages dari **HP** dan **laptop**
- [ ] Tombol "Open My Letter ♡" membuka surat dan memutar lagu
- [ ] Musik tetap berjalan saat scroll, dan tombol hati di atas bisa jeda/putar
- [ ] Slideshow: tombol kiri/kanan, thumbnail, swipe di HP, dan counter "01 / 08" berjalan
- [ ] Klik foto besar membuka lightbox; bisa ditutup dengan tombol × dan tombol Esc
- [ ] Tombol "Click for a Surprise" menampilkan pesan terakhir
- [ ] Tidak ada foto berisi kotak "Foto belum ditambahkan" (artinya nama file salah)
- [ ] Teks terbaca jelas di atas foto hero di layar HP
- [ ] Coba di Safari (iPhone) dan Chrome (Android)

## 6. Detail teknis singkat

- Tanpa framework atau library. Satu-satunya sumber eksternal adalah Google Fonts
  (Caveat & Jost). Jika gagal dimuat, font sistem dipakai otomatis.
- Animasi menghormati pengaturan **"kurangi gerakan"** (prefers-reduced-motion):
  efek tulisan, hati melayang, dan slideshow otomatis dimatikan.
- Slideshow otomatis berhenti saat bagian galeri tidak terlihat, saat kursor/fokus ada di galeri,
  saat lightbox terbuka, saat tab tidak aktif, atau saat dijeda lewat tombol "Jeda slideshow".
- Keyboard: Tab untuk berpindah, ← → di galeri & lightbox, Esc menutup lightbox/menu.
- Status "surat sudah dibuka" disimpan di `sessionStorage`, jadi kalau halaman di-refresh pada
  tab yang sama, surat langsung tampil (tanpa memutar musik otomatis).
- Tanpa tracking atau analytics.
