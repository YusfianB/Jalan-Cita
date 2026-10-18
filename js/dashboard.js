/* Jalan Cita — render demo dashboard dari data contoh */
(function () {
  "use strict";

  var DATA = window.JALANCITA_DATA;
  var BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  var LS_PREFIX = "jalancita:langkah:";

  var els = {
    beranda: document.getElementById("beranda-mount"),
    peta: document.getElementById("peta-mount"),
    rencana: document.getElementById("rencana-mount"),
    tindak: document.getElementById("tindak-mount"),
    count: document.getElementById("peta-count"),
    updated: document.getElementById("dash-updated"),
    filterRisiko: document.getElementById("filter-risiko"),
    filterStatus: document.getElementById("filter-status")
  };

  if (!DATA || !DATA.anak || !DATA.anak.length || !els.beranda) {
    if (els.beranda) {
      els.beranda.innerHTML =
        '<p class="empty">Data contoh tidak dapat dimuat. Pastikan berkas <code>js/data.js</code> ikut terunggah.</p>';
    }
    return;
  }

  var ANAK = DATA.anak;

  /* ---------- Bantuan kecil ---------- */

  function esc(value) {
    return String(value === null || value === undefined ? "" : value).replace(
      /[&<>"']/g,
      function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      }
    );
  }

  function fmtTanggal(iso) {
    if (!iso) return "Belum dijadwalkan";
    var p = String(iso).split("-");
    if (p.length !== 3) return iso;
    return Number(p[2]) + " " + BULAN[Number(p[1]) - 1] + " " + p[0];
  }

  function labelRisiko(r) {
    return r.charAt(0).toUpperCase() + r.slice(1);
  }

  function badgeRisiko(r) {
    return '<span class="badge badge--' + esc(r) + '">' + esc(labelRisiko(r)) + "</span>";
  }

  function badgeStatus(s) {
    return '<span class="badge badge--status">' + esc(s) + "</span>";
  }

  function byTanggal(a, b) {
    return String(a.evaluasiBerikut).localeCompare(String(b.evaluasiBerikut));
  }

  function ambil(kode) {
    for (var i = 0; i < ANAK.length; i++) {
      if (ANAK[i].kode === kode) return ANAK[i];
    }
    return null;
  }

  /* ---------- Simpan centang langkah (localStorage) ---------- */

  function bacaLangkah(kode) {
    try {
      var raw = window.localStorage.getItem(LS_PREFIX + kode);
      if (!raw) return null;
      var arr = JSON.parse(raw);
      return Object.prototype.toString.call(arr) === "[object Array]" ? arr : null;
    } catch (e) {
      return null;
    }
  }

  function simpanLangkah(kode, arr) {
    try {
      window.localStorage.setItem(LS_PREFIX + kode, JSON.stringify(arr));
    } catch (e) {
      /* localStorage tidak tersedia — perubahan hanya bertahan di sesi ini */
    }
  }

  function statusLangkah(anak) {
    if (!anak.rencana || !anak.rencana.langkah) return [];
    var disimpan = bacaLangkah(anak.kode);
    if (disimpan && disimpan.length === anak.rencana.langkah.length) {
      return disimpan.map(Boolean);
    }
    return anak.rencana.langkah.map(function (l) {
      return !!l.selesai;
    });
  }

  /* ---------- Status terpilih ---------- */

  var awal = null;
  for (var i = 0; i < ANAK.length; i++) {
    if (ANAK[i].rencana) {
      awal = ANAK[i].kode;
      break;
    }
  }
  var state = {
    risiko: "semua",
    status: "semua",
    anak: awal || ANAK[0].kode
  };

  /* ---------- Pemilih anak ---------- */

  function pickerHtml(aktif) {
    var out = '<div class="picker" role="group" aria-label="Pilih kode anak">';
    ANAK.forEach(function (a) {
      out +=
        '<button type="button" data-kode="' +
        esc(a.kode) +
        '" aria-pressed="' +
        (a.kode === aktif ? "true" : "false") +
        '">' +
        esc(a.kode) +
        "</button>";
    });
    return out + "</div>";
  }

  /* ---------- 01 — Beranda ---------- */

  function renderBeranda() {
    var total = ANAK.length;
    var tinggi = ANAK.filter(function (a) {
      return a.risiko === "tinggi";
    });
    var rencana = ANAK.filter(function (a) {
      return !!a.rencana;
    }).length;
    var belum = ANAK.filter(function (a) {
      return a.statusPendampingan === "Belum didampingi";
    });

    var jadwal = ANAK.filter(function (a) {
      return !!a.evaluasiBerikut;
    })
      .slice()
      .sort(byTanggal)
      .slice(0, 5);

    var html = "";

    html += '<div class="summary">';
    html +=
      '<div class="summary__item"><span class="summary__label">Anak terdata</span><span class="summary__value">' +
      total +
      '<small>kode anonim</small></span></div>';
    html +=
      '<div class="summary__item summary__item--accent"><span class="summary__label">Risiko tinggi</span><span class="summary__value">' +
      tinggi.length +
      '<small>perlu perhatian</small></span></div>';
    html +=
      '<div class="summary__item"><span class="summary__label">Rencana tersusun</span><span class="summary__value">' +
      rencana +
      '<small>dari ' +
      total +
      " anak</small></span></div>";
    html +=
      '<div class="summary__item"><span class="summary__label">Belum didampingi</span><span class="summary__value">' +
      belum.length +
      '<small>butuh pendamping</small></span></div>';
    html += "</div>";

    html += '<div class="block">';
    html +=
      '<div class="block__head"><h3>Tindak lanjut terdekat</h3><p>Diurutkan dari jadwal evaluasi paling awal</p></div>';
    html += '<div class="block__body">';
    if (!jadwal.length) {
      html += '<p class="empty">Belum ada jadwal evaluasi.</p>';
    } else {
      html += '<ul class="task-list">';
      jadwal.forEach(function (a) {
        html +=
          "<li><span class=\"task-list__date\">" +
          esc(fmtTanggal(a.evaluasiBerikut)) +
          '</span><p class="task-list__what">' +
          '<button type="button" class="kode-btn" data-kode="' +
          esc(a.kode) +
          '" data-go="tindak">' +
          esc(a.kode) +
          "</button> &middot; " +
          esc(a.kelas) +
          "<span>" +
          esc(a.kebutuhan) +
          "</span></p>" +
          badgeRisiko(a.risiko) +
          "</li>";
      });
      html += "</ul>";
    }
    html += "</div></div>";

    html += '<div class="block">';
    html +=
      '<div class="block__head"><h3>Perlu perhatian khusus</h3><p>Anak dengan tingkat risiko tinggi</p></div>';
    html += '<div class="block__body">';
    if (!tinggi.length) {
      html += '<p class="empty">Tidak ada anak berisiko tinggi saat ini.</p>';
    } else {
      html += '<ul class="task-list">';
      tinggi.forEach(function (a) {
        html +=
          '<li><span class="task-list__date">' +
          esc(a.usia) +
          ' th</span><p class="task-list__what">' +
          '<button type="button" class="kode-btn" data-kode="' +
          esc(a.kode) +
          '" data-go="tindak">' +
          esc(a.kode) +
          "</button> &middot; " +
          esc(a.kelas) +
          "<span>" +
          esc(a.kebutuhan) +
          "</span></p>" +
          badgeStatus(a.statusPendampingan) +
          "</li>";
      });
      html += "</ul>";
    }
    html += "</div></div>";

    html +=
      '<div class="dash-note"><strong>Catatan:</strong> angka di halaman ini hanya dari data contoh, bukan hasil pendampingan yang sudah berjalan.</div>';

    els.beranda.innerHTML = html;
  }

  /* ---------- 02 — Peta Kebutuhan ---------- */

  function anakTersaring() {
    return ANAK.filter(function (a) {
      var okRisiko = state.risiko === "semua" || a.risiko === state.risiko;
      var okStatus = state.status === "semua" || a.statusPendampingan === state.status;
      return okRisiko && okStatus;
    });
  }

  function renderPeta() {
    var daftar = anakTersaring();
    els.count.textContent = daftar.length + " dari " + ANAK.length + " anak ditampilkan";

    var html = '<div class="table-wrap"><table class="data">';
    html +=
      '<caption>Peta Anak &mdash; data contoh. Klik kode untuk membuka rencananya.</caption>';
    html +=
      "<thead><tr>" +
      '<th scope="col">Kode</th>' +
      '<th scope="col">Kelas / usia</th>' +
      '<th scope="col">Sekolah</th>' +
      '<th scope="col">Kebutuhan</th>' +
      '<th scope="col">Risiko</th>' +
      '<th scope="col">Pendampingan</th>' +
      '<th scope="col">Pendamping</th>' +
      "</tr></thead><tbody>";

    if (!daftar.length) {
      html +=
        '<tr><td colspan="7"><p class="empty">Tidak ada anak yang cocok dengan filter ini.</p></td></tr>';
    } else {
      daftar.forEach(function (a) {
        html += "<tr>";
        html +=
          '<th scope="row" class="code-cell"><button type="button" class="kode-btn" data-kode="' +
          esc(a.kode) +
          '" data-go="rencana">' +
          esc(a.kode) +
          "</button></th>";
        html += "<td>" + esc(a.kelas) + "<br><span class=\"muted\">" + esc(a.usia) + " tahun</span></td>";
        html += "<td>" + esc(a.statusSekolah) + "</td>";
        html += "<td>" + esc(a.kebutuhan) + "</td>";
        html += "<td>" + badgeRisiko(a.risiko) + "</td>";
        html += "<td>" + badgeStatus(a.statusPendampingan) + "</td>";
        html += "<td>" + (a.pendamping ? esc(a.pendamping) : '<span class="muted">Belum ada</span>') + "</td>";
        html += "</tr>";
      });
    }

    html += "</tbody></table></div>";
    els.peta.innerHTML = html;
  }

  /* ---------- 03 — Rencana Masa Depan ---------- */

  function renderRencana() {
    var anak = ambil(state.anak);
    var html = pickerHtml(state.anak);

    if (!anak) {
      html += '<p class="empty">Pilih satu anak untuk melihat rencananya.</p>';
      els.rencana.innerHTML = html;
      return;
    }

    html += '<div class="detail">';
    html +=
      '<div class="detail__head"><h3>' +
      esc(anak.kode) +
      "</h3>" +
      badgeRisiko(anak.risiko) +
      badgeStatus(anak.statusPendampingan) +
      "</div>";

    html +=
      '<dl class="facts">' +
      "<div><dt>Kelas / usia</dt><dd>" +
      esc(anak.kelas) +
      "</dd></div>" +
      "<div><dt>Status sekolah</dt><dd>" +
      esc(anak.statusSekolah) +
      "</dd></div>" +
      "<div><dt>Pendamping</dt><dd>" +
      (anak.pendamping ? esc(anak.pendamping) : "Belum ada") +
      "</dd></div>" +
      "<div><dt>Evaluasi berikutnya</dt><dd>" +
      esc(fmtTanggal(anak.evaluasiBerikut)) +
      "</dd></div>" +
      "</dl>";

    if (!anak.rencana) {
      html += '<div class="block"><div class="block__body">';
      html +=
        '<p class="empty" style="padding:0">Rencana Pasca-Lulus belum disusun untuk anak ini. Ini yang perlu dikerjakan lebih dulu.</p>';
      html += "</div></div>";
      html +=
        '<div class="dash-note"><strong>Langkah berikutnya:</strong> tetapkan Kakak Pendamping, lalu susun rencana bersama anak dan orang tua.</div>';
      html += "</div>";
      els.rencana.innerHTML = html;
      return;
    }

    var done = statusLangkah(anak);
    var jumlahSelesai = done.filter(Boolean).length;

    html += '<div class="block">';
    html += '<div class="block__head"><h3>Pilihan setelah lulus</h3></div>';
    html +=
      '<div class="block__body"><p style="margin:0"><strong>' +
      esc(anak.rencana.pilihan) +
      "</strong> &mdash; " +
      esc(anak.rencana.arah) +
      "</p></div></div>";

    html += '<div class="block">';
    html +=
      '<div class="block__head"><h3>Langkah yang disepakati</h3><p id="rencana-progress">' +
      jumlahSelesai +
      " dari " +
      done.length +
      " langkah selesai</p></div>";
    html += '<div class="block__body"><ul class="steps">';
    anak.rencana.langkah.forEach(function (l, idx) {
      var id = "step-" + anak.kode + "-" + idx;
      html +=
        '<li><input type="checkbox" id="' +
        esc(id) +
        '" data-kode="' +
        esc(anak.kode) +
        '" data-index="' +
        idx +
        '"' +
        (done[idx] ? " checked" : "") +
        '><label for="' +
        esc(id) +
        '">' +
        esc(l.teks) +
        "</label></li>";
    });
    html += "</ul></div></div>";

    html += '<div class="block">';
    html += '<div class="block__head"><h3>Hambatan</h3></div>';
    html += '<div class="block__body"><p style="margin:0">' + esc(anak.rencana.hambatan) + "</p></div></div>";

    html += '<div class="block">';
    html += '<div class="block__head"><h3>Pihak yang membantu</h3></div>';
    html += '<div class="block__body"><ul class="chips">';
    anak.rencana.bantuan.forEach(function (b) {
      html += "<li>" + esc(b) + "</li>";
    });
    html += "</ul></div></div>";

    html += "</div>";
    els.rencana.innerHTML = html;
  }

  /* ---------- 04 — Tindak Lanjut ---------- */

  function renderTindak() {
    var anak = ambil(state.anak);
    var html = pickerHtml(state.anak);

    if (!anak) {
      html += '<p class="empty">Pilih satu anak untuk melihat catatannya.</p>';
      els.tindak.innerHTML = html;
      return;
    }

    html += '<div class="detail">';
    html +=
      '<div class="detail__head"><h3>' +
      esc(anak.kode) +
      "</h3>" +
      badgeStatus(anak.statusPendampingan) +
      "</div>";

    html +=
      '<dl class="facts">' +
      "<div><dt>Evaluasi berikutnya</dt><dd>" +
      esc(fmtTanggal(anak.evaluasiBerikut)) +
      "</dd></div>" +
      "<div><dt>Pendamping</dt><dd>" +
      (anak.pendamping ? esc(anak.pendamping) : "Belum ada") +
      "</dd></div>" +
      "<div><dt>Kebutuhan utama</dt><dd>" +
      esc(anak.kebutuhan) +
      "</dd></div>" +
      "</dl>";

    html += '<div class="block">';
    html += '<div class="block__head"><h3>Catatan kemajuan</h3><p>Terbaru di atas</p></div>';
    html += '<div class="block__body">';
    var catatan = anak.catatan.slice().sort(function (a, b) {
      return String(b.tanggal).localeCompare(String(a.tanggal));
    });
    if (!catatan.length) {
      html += '<p class="empty">Belum ada catatan.</p>';
    } else {
      html += '<ol class="timeline">';
      catatan.forEach(function (c) {
        html +=
          "<li><span class=\"timeline__date\">" +
          esc(fmtTanggal(c.tanggal)) +
          '</span><p class="timeline__title">' +
          esc(c.judul) +
          "</p><p>" +
          esc(c.isi) +
          "</p></li>";
      });
      html += "</ol>";
    }
    html += "</div></div>";

    var terbuka = anak.kebutuhanTerbuka || [];
    html += '<div class="block">';
    html +=
      '<div class="block__head"><h3>Kebutuhan bantuan yang belum terselesaikan</h3></div>';
    html += '<div class="block__body">';
    if (!terbuka.length) {
      html += '<p class="empty" style="padding:0">Tidak ada kebutuhan yang menggantung. Bagus.</p>';
    } else {
      html += '<ul class="chips">';
      terbuka.forEach(function (t) {
        html += "<li>" + esc(t) + "</li>";
      });
      html += "</ul>";
    }
    html += "</div></div>";

    html +=
      '<div class="dash-note"><strong>Catatan desa:</strong> identitas anak disimpan terpisah oleh pengelola desa, tidak di aplikasi ini.</div>';

    html += "</div>";
    els.tindak.innerHTML = html;
  }

  /* ---------- Tab ---------- */

  var tabButtons = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));

  function bukaTab(button, fokus) {
    tabButtons.forEach(function (btn) {
      var dipilih = btn === button;
      btn.setAttribute("aria-selected", dipilih ? "true" : "false");
      btn.tabIndex = dipilih ? 0 : -1;
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      if (panel) panel.hidden = !dipilih;
    });
    if (fokus) button.focus();
  }

  tabButtons.forEach(function (btn, idx) {
    btn.addEventListener("click", function () {
      bukaTab(btn, false);
    });
    btn.addEventListener("keydown", function (e) {
      var target = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        target = tabButtons[(idx + 1) % tabButtons.length];
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        target = tabButtons[(idx - 1 + tabButtons.length) % tabButtons.length];
      } else if (e.key === "Home") {
        target = tabButtons[0];
      } else if (e.key === "End") {
        target = tabButtons[tabButtons.length - 1];
      }
      if (target) {
        e.preventDefault();
        bukaTab(target, true);
      }
    });
  });

  function bukaTabDenganId(id) {
    var btn = document.getElementById(id);
    if (btn) bukaTab(btn, false);
  }

  /* ---------- Interaksi ---------- */

  document.addEventListener("click", function (e) {
    var target = e.target.closest ? e.target.closest("[data-kode]") : null;
    if (!target) return;

    var kode = target.getAttribute("data-kode");
    var go = target.getAttribute("data-go");

    if (target.classList.contains("kode-btn") && go) {
      state.anak = kode;
      if (go === "tindak") {
        renderTindak();
        bukaTabDenganId("tab-tindak");
      } else {
        renderRencana();
        bukaTabDenganId("tab-rencana");
      }
      return;
    }

    if (target.parentNode && target.parentNode.classList.contains("picker")) {
      state.anak = kode;
      renderRencana();
      renderTindak();
    }
  });

  document.addEventListener("change", function (e) {
    var input = e.target;
    if (input && input.type === "checkbox" && input.hasAttribute("data-index")) {
      var kode = input.getAttribute("data-kode");
      var anak = ambil(kode);
      if (!anak || !anak.rencana) return;
      var arr = statusLangkah(anak);
      var i = Number(input.getAttribute("data-index"));
      arr[i] = input.checked;
      simpanLangkah(kode, arr);
      var progress = document.getElementById("rencana-progress");
      if (progress) {
        var selesai = arr.filter(Boolean).length;
        progress.textContent = selesai + " dari " + arr.length + " langkah selesai";
      }
    }
  });

  if (els.filterRisiko) {
    els.filterRisiko.addEventListener("change", function () {
      state.risiko = els.filterRisiko.value;
      renderPeta();
    });
  }
  if (els.filterStatus) {
    els.filterStatus.addEventListener("change", function () {
      state.status = els.filterStatus.value;
      renderPeta();
    });
  }

  /* ---------- Mulai ---------- */

  if (els.updated) {
    els.updated.textContent =
      "Data contoh diperbarui " +
      fmtTanggal(DATA.meta.pembaruanTerakhir) +
      " \u00b7 " +
      DATA.meta.versi;
  }

  renderBeranda();
  renderPeta();
  renderRencana();
  renderTindak();
})();
