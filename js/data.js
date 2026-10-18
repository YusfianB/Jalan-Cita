/* Jalan Cita — data contoh (anonim).
   Semua kode, tanggal, dan catatan di bawah ini adalah rekaan untuk demo.
   Tidak ada nama atau identitas anak. */

window.JALANCITA_DATA = {
  meta: {
    versi: "Demo 0.1",
    dicatatOleh: "Pengelola desa",
    pembaruanTerakhir: "2026-10-14",
    catatan:
      "Ini data contoh. Di lapangan, identitas anak disimpan terpisah dan hanya dipegang pengelola desa."
  },

  anak: [
    {
      kode: "JC-011",
      kelas: "Putus sekolah (kelas 7)",
      usia: 13,
      statusSekolah: "Tidak sekolah",
      kebutuhan: "Kembali belajar (jalur kesetaraan)",
      kebutuhanDetail:
        "Berhenti sejak awal kelas 7 karena jarak dan biaya. Butuh jalur kesetaraan paket B atau masuk kembali ke sekolah.",
      risiko: "tinggi",
      statusPendampingan: "Belum didampingi",
      pendamping: null,
      evaluasiBerikut: "2026-10-22",
      kebutuhanTerbuka: [
        "Kakak pendamping untuk kunjungan pertama",
        "Penjelasan jalur kesetaraan paket B kepada orang tua"
      ],
      rencana: null,
      catatan: [
        {
          tanggal: "2026-10-02",
          judul: "Terdata lewat Peta Anak",
          isi: "Muncul saat pendataan RT. Sudah setahun tidak sekolah, belum pernah dibicarakan lagi di desa."
        },
        {
          tanggal: "2026-10-11",
          judul: "Belum ada pendamping",
          isi: "Butuh satu Kakak Pendamping. Diusulkan dibahas di pertemuan Forum Pendidikan Desa berikutnya."
        }
      ]
    },
    {
      kode: "JC-025",
      kelas: "Tidak sekolah (lulus SD)",
      usia: 13,
      statusSekolah: "Tidak sekolah",
      kebutuhan: "Motivasi lanjut + pilihan sekolah dekat",
      kebutuhanDetail:
        "Lulus SD dua tahun lalu, belum melanjutkan. Orang tua ragu karena tidak ada sekolah dekat.",
      risiko: "tinggi",
      statusPendampingan: "Belum didampingi",
      pendamping: null,
      evaluasiBerikut: "2026-10-28",
      kebutuhanTerbuka: [
        "Kakak pendamping",
        "Informasi transport bersama ke SMP"
      ],
      rencana: null,
      catatan: [
        {
          tanggal: "2026-09-28",
          judul: "Obrolan awal dengan orang tua",
          isi: "Orang tua bersedia mendengar kalau ada sekolah yang terjangkau dan bisa ditempuh tiap hari."
        },
        {
          tanggal: "2026-10-09",
          judul: "Menunggu jadwal forum",
          isi: "Usulan transport bersama belum dibahas. Belum ada tindak lanjut setelahnya."
        }
      ]
    },
    {
      kode: "JC-018",
      kelas: "Kelas 9 (SMP)",
      usia: 15,
      statusSekolah: "Sekolah",
      kebutuhan: "Motivasi lanjut + informasi beasiswa",
      kebutuhanDetail:
        "Masih sekolah dan punya keinginan lanjut, tetapi keluarga mendorong untuk segera menikah setelah lulus.",
      risiko: "tinggi",
      statusPendampingan: "Aktif",
      pendamping: "R.A.",
      evaluasiBerikut: "2026-12-08",
      kebutuhanTerbuka: [
        "Pendampingan belajar matematika",
        "Anggaran transport ke sekolah menengah"
      ],
      rencana: {
        pilihan: "Lanjut sekolah",
        arah: "SMA, lalu kuliah",
        langkah: [
          { teks: "Kumpulkan nilai rapor semester 1\u20135", selesai: true },
          { teks: "Cari informasi beasiswa daerah", selesai: false },
          { teks: "Bicarakan rencana lanjut dengan orang tua", selesai: true },
          { teks: "Kunjungan sekolah tujuan bersama pendamping", selesai: false }
        ],
        hambatan:
          "Dorongan keluarga untuk menikah lebih kuat daripada dorongan sekolah. Perlu obrolan ulang dengan orang tua.",
        bantuan: ["Kakak Pendamping (R.A.)", "Wali kelas", "Forum Pendidikan Desa"]
      },
      catatan: [
        {
          tanggal: "2026-09-20",
          judul: "Pertemuan pertama",
          isi: "Anak ingin lanjut sekolah. Orang tua masih ragu, belum menolak."
        },
        {
          tanggal: "2026-10-05",
          judul: "Percakapan dengan orang tua",
          isi: "Ibu bersedia mengulur keputusan satu tahun asalkan biaya sekolah terbantu. Perlu ditindaklanjuti."
        },
        {
          tanggal: "2026-10-14",
          judul: "Rencana Pasca-Lulus disusun",
          isi: "Langkah awal ditulis bersama anak dan pendamping."
        }
      ]
    },
    {
      kode: "JC-014",
      kelas: "Kelas 8 (MTs)",
      usia: 14,
      statusSekolah: "Sekolah",
      kebutuhan: "Bantuan biaya transport",
      kebutuhanDetail:
        "Sekolah berjarak sekitar 9 km. Biaya transport jadi beban tetap dan mulai sulit dipenuhi.",
      risiko: "sedang",
      statusPendampingan: "Aktif",
      pendamping: "R.A.",
      evaluasiBerikut: "2026-11-10",
      kebutuhanTerbuka: ["Usulan transport bersama belum diputuskan"],
      rencana: {
        pilihan: "Lanjut sekolah",
        arah: "SMK (jurusan otomotif)",
        langkah: [
          { teks: "Catat biaya transport bulanan", selesai: true },
          { teks: "Ajukan ke Forum untuk transport bersama", selesai: true },
          { teks: "Cari alternatif sepeda pinjam desa", selesai: false }
        ],
        hambatan: "Belum ada keputusan anggaran desa untuk transport bersama.",
        bantuan: ["Kakak Pendamping (R.A.)", "Forum Pendidikan Desa"]
      },
      catatan: [
        {
          tanggal: "2026-09-15",
          judul: "Peta Anak diperbarui",
          isi: "Kendala utama dicatat: jarak tempuh dan biaya transport harian."
        },
        {
          tanggal: "2026-10-01",
          judul: "Usulan masuk forum",
          isi: "Usulan transport bersama diajukan ke Forum Pendidikan Desa."
        }
      ]
    },
    {
      kode: "JC-037",
      kelas: "Kelas 6 (SD)",
      usia: 12,
      statusSekolah: "Sekolah",
      kebutuhan: "Motivasi + kesadaran orang tua",
      kebutuhanDetail:
        "Masih sekolah, tetapi orang tua sering menyebut sekolah hanya sampai SD saja sudah cukup.",
      risiko: "sedang",
      statusPendampingan: "Aktif",
      pendamping: "N.F.",
      evaluasiBerikut: "2026-11-18",
      kebutuhanTerbuka: ["Percakapan lanjutan dengan ayah"],
      rencana: {
        pilihan: "Lanjut sekolah",
        arah: "SMP negeri terdekat",
        langkah: [
          { teks: "Obrolan harapan dengan ibu", selesai: true },
          { teks: "Obrolan harapan dengan ayah", selesai: false },
          { teks: "Siapkan berkas pendaftaran SMP", selesai: false }
        ],
        hambatan: "Ayah belum pernah ikut obrolan. Perlu waktu dan suasana yang tepat.",
        bantuan: ["Kakak Pendamping (N.F.)", "Guru kelas"]
      },
      catatan: [
        {
          tanggal: "2026-09-24",
          judul: "Pertemuan pertama",
          isi: "Anak semangat belajar. Kekhawatiran datang dari orang tua."
        },
        {
          tanggal: "2026-10-08",
          judul: "Obrolan dengan ibu",
          isi: "Ibu terbuka; keputusan menunggu ayah ikut bicara."
        }
      ]
    },
    {
      kode: "JC-007",
      kelas: "Kelas 5 (SD)",
      usia: 11,
      statusSekolah: "Sekolah",
      kebutuhan: "Bimbingan belajar",
      kebutuhanDetail:
        "Nilai membaca dan berhitung menurun. Anak sempat beberapa kali tidak masuk kelas.",
      risiko: "sedang",
      statusPendampingan: "Aktif",
      pendamping: "S.M.",
      evaluasiBerikut: "2026-12-01",
      kebutuhanTerbuka: ["Jadwal belajar rutin dua kali seminggu"],
      rencana: {
        pilihan: "Lanjut sekolah",
        arah: "SD, lalu SMP",
        langkah: [
          { teks: "Belajar membaca 2x seminggu", selesai: true },
          { teks: "Belajar berhitung dasar", selesai: true },
          { teks: "Evaluasi bersama guru kelas", selesai: false }
        ],
        hambatan: "Jadwal belajar bertabrakan dengan waktu membantu orang tua di sawah.",
        bantuan: ["Kakak Pendamping (S.M.)", "Guru kelas"]
      },
      catatan: [
        {
          tanggal: "2026-09-18",
          judul: "Mulai didampingi",
          isi: "Sepakati jadwal belajar sore, dua kali seminggu di rumah pendamping."
        },
        {
          tanggal: "2026-10-06",
          judul: "Kemajuan kecil",
          isi: "Sudah bisa membaca kalimat panjang. Kehadiran sekolah kembali teratur."
        }
      ]
    },
    {
      kode: "JC-009",
      kelas: "Kelas 6 (SD)",
      usia: 12,
      statusSekolah: "Sekolah",
      kebutuhan: "Bantuan biaya masuk SMP",
      kebutuhanDetail:
        "Akan lulus tahun ini. Keluarga butuh gambaran biaya dan dukungan awal masuk SMP.",
      risiko: "sedang",
      statusPendampingan: "Aktif",
      pendamping: "S.M.",
      evaluasiBerikut: "2026-11-24",
      kebutuhanTerbuka: ["Pendampingan mengurus program bantuan sekolah"],
      rencana: {
        pilihan: "Lanjut sekolah",
        arah: "SMP negeri",
        langkah: [
          { teks: "Hitung kebutuhan biaya awal masuk", selesai: true },
          { teks: "Daftar program bantuan pendidikan", selesai: false },
          { teks: "Siapkan berkas pendaftaran", selesai: false }
        ],
        hambatan: "Berkas administrasi keluarga belum lengkap.",
        bantuan: ["Kakak Pendamping (S.M.)", "Sekolah", "Forum Pendidikan Desa"]
      },
      catatan: [
        {
          tanggal: "2026-09-30",
          judul: "Persiapan kelulusan",
          isi: "Dibicarakan biaya awal masuk SMP dan berkas yang perlu disiapkan."
        }
      ]
    },
    {
      kode: "JC-021",
      kelas: "Kelas 10 (SMK)",
      usia: 16,
      statusSekolah: "Sekolah",
      kebutuhan: "Bantuan biaya praktik",
      kebutuhanDetail:
        "Masih sekolah. Biaya praktik dan alat jadi kendala; sempat berencana berhenti.",
      risiko: "sedang",
      statusPendampingan: "Terjadwal",
      pendamping: "D.P.",
      evaluasiBerikut: "2026-11-05",
      kebutuhanTerbuka: ["Cicilan biaya praktik semester ini"],
      rencana: {
        pilihan: "Lanjut sekolah + kerja",
        arah: "Lulus SMK, lalu diploma atau kerja",
        langkah: [
          { teks: "Ajukan keringanan biaya praktik", selesai: true },
          { teks: "Cari kerja paruh waktu yang tidak mengganggu sekolah", selesai: false },
          { teks: "Susun target nilai semester", selesai: false }
        ],
        hambatan: "Biaya praktik jatuh tempo bersamaan dengan kebutuhan rumah tangga.",
        bantuan: ["Kakak Pendamping (D.P.)", "Sekolah"]
      },
      catatan: [
        {
          tanggal: "2026-10-03",
          judul: "Pertemuan pertama",
          isi: "Anak tidak mau berhenti. Minta bantuan mencari jalan keluar biaya."
        }
      ]
    },
    {
      kode: "JC-031",
      kelas: "Kelas 7 (SMP)",
      usia: 13,
      statusSekolah: "Sekolah",
      kebutuhan: "Seragam dan buku",
      kebutuhanDetail:
        "Baru masuk SMP. Kebutuhan seragam dan buku belum terpenuhi sepenuhnya.",
      risiko: "rendah",
      statusPendampingan: "Terjadwal",
      pendamping: "H.Y.",
      evaluasiBerikut: "2026-10-25",
      kebutuhanTerbuka: ["Seragam olahraga"],
      rencana: {
        pilihan: "Lanjut sekolah",
        arah: "SMP, mengikuti kegiatan sekolah",
        langkah: [
          { teks: "Data kebutuhan seragam dan buku", selesai: true },
          { teks: "Ajukan bantuan seragam", selesai: false },
          { teks: "Ikut satu kegiatan ekstrakurikuler", selesai: false }
        ],
        hambatan: "Tidak ada kendala besar. Sebagian sudah tertangani.",
        bantuan: ["Kakak Pendamping (H.Y.)", "Sekolah"]
      },
      catatan: [
        {
          tanggal: "2026-10-07",
          judul: "Dijadwalkan didampingi",
          isi: "Pertemuan pertama dijadwalkan akhir Oktober bersama pendamping."
        }
      ]
    },
    {
      kode: "JC-028",
      kelas: "Kelas 4 (SD)",
      usia: 10,
      statusSekolah: "Sekolah",
      kebutuhan: "Pendampingan membaca",
      kebutuhanDetail:
        "Masih belajar membaca dengan lancar. Tidak ada kendala ekonomi yang berarti.",
      risiko: "rendah",
      statusPendampingan: "Aktif",
      pendamping: "N.F.",
      evaluasiBerikut: "2026-11-12",
      kebutuhanTerbuka: [],
      rencana: null,
      catatan: [
        {
          tanggal: "2026-10-10",
          judul: "Mulai didampingi",
          isi: "Fokus awal: membaca nyaring 15 menit setiap sore. Rencana pasca-lulus menyusul."
        }
      ]
    },
    {
      kode: "JC-034",
      kelas: "Kelas 11 (SMA)",
      usia: 17,
      statusSekolah: "Sekolah",
      kebutuhan: "Informasi kampus + beasiswa",
      kebutuhanDetail:
        "Ingin lanjut ke perguruan tinggi tetapi belum tahu jalur dan pembiayaannya.",
      risiko: "rendah",
      statusPendampingan: "Aktif",
      pendamping: "B.S.",
      evaluasiBerikut: "2027-01-14",
      kebutuhanTerbuka: [],
      rencana: {
        pilihan: "Kuliah",
        arah: "Perguruan tinggi negeri (bidang kesehatan)",
        langkah: [
          { teks: "Kumpulkan informasi jalur masuk", selesai: true },
          { teks: "Cari informasi beasiswa", selesai: true },
          { teks: "Ikut kelas persiapan", selesai: false },
          { teks: "Siapkan berkas pendaftaran", selesai: false }
        ],
        hambatan: "Belum ada contoh alumni dari desa yang menempuh jalur ini.",
        bantuan: ["Kakak Pendamping (B.S.)", "Kampus", "Guru BK"]
      },
      catatan: [
        {
          tanggal: "2026-09-12",
          judul: "Mulai didampingi",
          isi: "Bikin daftar kampus dan jalur masuk yang realistis."
        },
        {
          tanggal: "2026-10-12",
          judul: "Tayangan kisah inspiratif",
          isi: "Menonton kisah mahasiswi dari desa. Anak jadi lebih yakin."
        }
      ]
    },
    {
      kode: "JC-003",
      kelas: "Kelas 12 (SMK)",
      usia: 18,
      statusSekolah: "Sekolah",
      kebutuhan: "Pendampingan masuk kerja",
      kebutuhanDetail:
        "Akan lulus tahun ini. Sedang menyiapkan diri untuk kerja atau kursus lanjutan.",
      risiko: "rendah",
      statusPendampingan: "Selesai",
      pendamping: "D.P.",
      evaluasiBerikut: null,
      kebutuhanTerbuka: [],
      rencana: {
        pilihan: "Kerja",
        arah: "Kerja di bengkel, sambil kursus lanjutan",
        langkah: [
          { teks: "Susun CV sederhana", selesai: true },
          { teks: "Daftar satu kursus keterampilan", selesai: true },
          { teks: "Kirim lamaran ke tiga tempat", selesai: true }
        ],
        hambatan: "Tidak ada. Pendampingan dihentikan dengan kesepakatan bersama.",
        bantuan: ["Kakak Pendamping (D.P.)", "Forum Pendidikan Desa"]
      },
      catatan: [
        {
          tanggal: "2026-08-30",
          judul: "Pendampingan dimulai",
          isi: "Fokus menyiapkan kerja setelah lulus."
        },
        {
          tanggal: "2026-09-26",
          judul: "Pendampingan selesai",
          isi: "Rencana selesai. Anak diarahkan menghubungi kader desa bila butuh bantuan lagi."
        }
      ]
    }
  ]
};
