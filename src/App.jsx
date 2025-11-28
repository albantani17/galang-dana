import { useState } from "react";
import "./App.css";

const needs = [
  "Makanan siap saji, susu bayi, dan air bersih untuk 7 hari pertama",
  "Perahu karet, pelampung, serta selimut hangat bagi lansia & balita",
  "Paket kebersihan, popok, dan obat infeksi kulit akibat air kotor",
  "Bantuan perbaikan rumah, sekolah, dan mushola setelah air surut",
];

const actions = [
  {
    title: "72 Jam Pertama",
    steps: [
      "Kiriman logistik darurat: makanan, air galon, dan selimut kering",
      "Tim evakuasi siaga dengan perahu karet di titik arus deras",
      "Pendirian tenda keluarga, pencatatan kebutuhan balita & lansia",
    ],
  },
  {
    title: "Minggu Pertama",
    steps: [
      "Distribusi paket kebersihan, popok, dan obat kulit di posko kesehatan",
      "Dapur umum mobile menyuplai 1.500 porsi makanan hangat per hari",
      "Pemulihan akses: koordinasi alat berat untuk membersihkan jalur ke desa",
    ],
  },
  {
    title: "Pemulihan Awal",
    steps: [
      "Rehabilitasi rumah rusak dan ruang belajar darurat untuk siswa",
      "Pemasangan tandon air bersih dan penyuluhan kesehatan pasca banjir",
      "Laporan transparan penyaluran dana ke donatur setiap pekan",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='page'>
      <nav className='navbar'>
        <div className='nav-brand'>Peduli Aceh</div>
        <button
          className='nav-toggle'
          aria-label='Toggle navigasi'
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href='#main' onClick={() => setMenuOpen(false)}>
            Beranda
          </a>
          <a href='#aceh' onClick={() => setMenuOpen(false)}>
            Situasi Aceh
          </a>
          <a href='#rencana' onClick={() => setMenuOpen(false)}>
            Rencana Aksi
          </a>
          <a href='#donasi' onClick={() => setMenuOpen(false)}>
            Kebutuhan
          </a>
          <a href='#ajak' onClick={() => setMenuOpen(false)}>
            Ajak Orang Lain
          </a>
        </div>
      </nav>

      <header className='hero' id='main'>
        <div className='hero-badge'>Tanggap Darurat • Banjir Aceh</div>
        <h1>Galang Dana untuk Pulihkan Masyarakat Aceh yang Terdampak</h1>
        <p className='lede'>
          Hujan ekstrem memicu banjir bandang di lima kecamatan. Bantuan Anda
          akan langsung dipakai untuk kebutuhan terpenting: logistik, evakuasi,
          dan pemulihan dini setelah air surut.
        </p>
        <div className='hero-notes'>
          <h3>Kenapa mendesak?</h3>
          <ul>
            <li>
              Akses ke 3 desa masih terputus dan hanya bisa ditembus perahu.
            </li>
            <li>
              Pengungsi balita & lansia membutuhkan makanan hangat dan selimut
              kering.
            </li>
            <li>
              Hujan susulan berpotensi memperparah arus, evakuasi perlu standby.
            </li>
          </ul>
        </div>
        <div className='hero-actions'>
          <a className='btn primary' href='#donasi'>
            Donasi Sekarang
          </a>
          <a className='btn secondary' href='#rencana'>
            Lihat Rencana Aksi
          </a>
        </div>
      </header>

      <section className='section' id='aceh'>
        <p className='eyebrow'>Banjir Bandang Aceh</p>
        <h2>16 kabupaten terdampak, lebih dari 6.000 jiwa menunggu bantuan</h2>
        <p className='section-text'>
          Jalur utama terputus, listrik dan sinyal mati. Warga terisolasi di
          rumah-rumah terendam—dari anak-anak, lansia, hingga ibu hamil. Donasi
          segera akan membantu menembus lokasi dengan perahu dan kendaraan
          khusus.
        </p>
        <div className='grid reasons'>
          <article className='card'>
            <h3>Mengapa galang dana ini mendesak?</h3>
            <ul>
              <li>Akses terputus, jalan dan fasilitas umum terendam total.</li>
              <li>
                Tidak ada listrik dan sinyal; warga tidak bisa meminta tolong.
              </li>
              <li>
                6.188 jiwa terdampak, banyak terjebak tanpa logistik cukup.
              </li>
              <li>
                Kebutuhan darurat: makanan, air bersih, penerangan, obat,
                selimut, kebutuhan bayi.
              </li>
              <li>
                Tanpa dukungan publik, biaya transport logistik dan operasional
                tidak bisa ditutup.
              </li>
              <li>
                Penggalang dana kehilangan kabar keluarga—kita bantu seluruh
                warga Aceh.
              </li>
            </ul>
            <div className='panel note'>
              <strong>Kesimpulan:</strong> dana yang terkumpul dipakai langsung
              untuk menyelamatkan ribuan jiwa yang terisolasi, tanpa listrik,
              sinyal, atau akses bantuan cepat.
            </div>
          </article>
          <article className='card'>
            <h3>Cerita kejadian bencana</h3>
            <p>
              Hujan deras berhari-hari memicu banjir besar dan longsor di Aceh
              Tamiang. Dalam semalam, sungai meluap, rumah tenggelam, akses
              jalan terputus, dan beberapa desa terisolasi total tanpa listrik
              maupun sinyal.
            </p>
            <p>
              Air naik saat warga beristirahat; banyak keluarga hanya sempat
              lari tanpa membawa apa pun. Kini 6.188 jiwa bertahan di
              pengungsian darurat dengan logistik terbatas, menunggu bantuan
              masuk lewat jalur air atau kendaraan khusus.
            </p>
            <div className='panel note'>
              <strong>Fokus respon:</strong> buka akses, kirim logistik, dan
              pastikan keluarga rentan aman hingga cuaca stabil.
            </div>
          </article>
        </div>
      </section>

      <section className='section' id='rencana'>
        <p className='eyebrow'>Rencana Penyaluran</p>
        <h2>Prioritas ketika dana terkumpul</h2>
        <p className='section-text'>
          Donasi Anda langsung digerakkan ke kebutuhan paling mendesak. Berikut
          rencana tiga tahap agar bantuan tepat sasaran dan transparan.
        </p>
        <div className='grid actions'>
          {actions.map((item) => (
            <article key={item.title} className='card action-card'>
              <h3>{item.title}</h3>
              <ul>
                {item.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className='section' id='donasi'>
        <p className='eyebrow'>Kebutuhan Mendesak</p>
        <h2>Fokus bantuan yang dibutuhkan</h2>
        <div className='grid needs'>
          {needs.map((item) => (
            <article key={item} className='card need-card'>
              <span className='bullet' />
              <p>{item}</p>
            </article>
          ))}
        </div>
        <div className='donation-accounts'>
          <h3>Rekening donasi</h3>
          <ul>
            <li>
              <strong>BCA</strong> — 2452830478 (M. Afrizal Fahlefi)
            </li>
            <li>
              <strong>SeaBank</strong> — 901913258485 (M. Afrizal Fahlefi)
            </li>
            <li>
              <strong>Dana</strong> — 08992510059 (Camelia Eka Putri Irawan)
            </li>
            <li>
              <strong>Kontak</strong> — 089531721711 (M. Afrizal Fahlefi)
            </li>
          </ul>
          <p className='small'>
            Mohon sertakan nama dan bukti transfer untuk pencatatan.
          </p>
        </div>
      </section>

      <section className='section callout' id='ajak'>
        <div>
          <p className='eyebrow'>Mari bergerak bersama</p>
          <h2>Setiap donasi berarti harapan baru</h2>
          <p>
            Dengan dukungan Anda, relawan segera menyalurkan logistik,
            mengevakuasi warga rentan, dan menyiapkan pemulihan awal setelah
            banjir surut.
          </p>
          <div className='transparency'>
            <h3>Transparansi penyaluran</h3>
            <ul>
              <li>
                Laporan mingguan via email/WhatsApp: jumlah dana & barang
                terkirim.
              </li>
              <li>Rincian pengeluaran dipublikasikan di laman update posko.</li>
              <li>
                Dokumentasi penyerahan bantuan dibuka untuk donatur yang
                mengajukan.
              </li>
            </ul>
          </div>
        </div>
        <a className='btn secondary' href='#donasi'>
          Salurkan Bantuan
        </a>
      </section>
    </div>
  );
}

export default App;
