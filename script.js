/* ============================================================
   PORTFOLIO — MUH. AKBAR PERKASA
   Vanilla JavaScript
   ============================================================ */

/* ============================================================
   ⚙️ KONFIGURASI KONTAK — UBAH DI SINI SAJA
   ============================================================ */
const CONTACT = {
  // Nomor WhatsApp format internasional TANPA "+" dan TANPA spasi.
  // Nomor 0895... dinormalisasi menjadi 62895... untuk tautan WhatsApp.
  whatsappNumber: "6289519104607",

  // Username Instagram TANPA "@"
  instagram: "kasaaa_777",

  // Username TikTok TANPA "@"
  tiktok: "blk.phantom",

  // GitHub (opsional)
  github: "akbarperkasa777-beep"
};

/* ---------- Helper: bangun URL dari konfigurasi ---------- */
const SOCIAL_URLS = {
  whatsapp: `https://wa.me/${CONTACT.whatsappNumber}`,
  instagram: `https://www.instagram.com/${CONTACT.instagram}/`,
  tiktok: `https://www.tiktok.com/@${CONTACT.tiktok}`
};

/* ---------- PROJECT SHOWCASE: edit this list to manage projects ---------- */
const PROJECTS = [
  {
    id: "kasir",
    title: "Aplikasi Kasir",
    category: "Application",
    description: "Aplikasi kasir berbasis web untuk mengelola barang, transaksi, diskon, dan laporan penjualan.",
    technologies: ["PHP Native", "MySQL", "Bootstrap 5"],
    screenshots: [
      { label: "Cover", src: "images/projects/kasir/cover.jpg" },
      { label: "Dashboard", src: "images/projects/kasir/screenshot-1.jpg" },
      { label: "Halaman transaksi", src: "images/projects/kasir/screenshot-2.jpg" }
    ],
    repository: "",
    liveDemo: ""
  },
  {
    id: "absen-karyawan",
    title: "Aplikasi Absen Karyawan",
    category: "System",
    description: "Sistem absensi karyawan untuk mencatat kehadiran, memantau riwayat absensi, dan mengelola data karyawan.",
    technologies: ["PHP Native", "MySQL", "Bootstrap 5"],
    screenshots: [
      { label: "Cover", src: "images/projects/absen-karyawan/cover.jpg" },
      { label: "Dashboard absensi", src: "images/projects/absen-karyawan/screenshot-1.jpg" },
      { label: "Portal Absensi", src: "images/projects/absen-karyawan/screenshot-2.jpg" }
    ],
    repository: "",
    liveDemo: ""
  },
  {
    id: "parkir",
    title: "Aplikasi Parkir",
    category: "System",
    description: "Sistem pengelolaan parkir untuk mencatat kendaraan masuk dan keluar, mengatur tarif, serta memantau transaksi parkir.",
    technologies: ["PHP", "MySQL", "Bootstrap 5"],
    screenshots: [
      { label: "Cover", src: "images/projects/parkir/cover.jpg" },
      { label: "Dashboard parkir", src: "images/projects/parkir/screenshot-1.jpg" },
      { label: "Halaman transaksi parkir", src: "images/projects/parkir/screenshot-2.jpg" }
    ],
    repository: "",
    liveDemo: ""
  }
];

const CURRENTLY_LEARNING = [
  { title: "JavaScript", detail: "Interaksi dan logika web", icon: "bi-filetype-js" },
  { title: "PHP", detail: "Pengembangan backend", icon: "bi-filetype-php" },
  { title: "Laravel", detail: "Framework aplikasi web", icon: "bi-layers" },
  { title: "MySQL", detail: "Pengelolaan basis data", icon: "bi-database" },
  { title: "Web Development", detail: "Membangun aplikasi end-to-end", icon: "bi-code-slash" }
];

const HOBBIES = [
  {
    title: "Web Development",
    description: "Saya suka membuat dan mengembangkan website menggunakan HTML, CSS, JavaScript, PHP, dan Bootstrap.",
    icon: "bi-code-slash"
  },
  {
    title: "Coding & Programming",
    description: "Saya menikmati menulis kode, mempelajari logika pemrograman, serta memecahkan berbagai permasalahan melalui coding.",
    icon: "bi-terminal"
  },
  {
    title: "UI/UX Design",
    description: "Saya tertarik merancang tampilan website yang modern, menarik, responsif, dan mudah digunakan.",
    icon: "bi-palette"
  },
  {
    title: "Learning New Technologies",
    description: "Saya senang mempelajari teknologi baru, framework, bahasa pemrograman, dan perkembangan dunia teknologi.",
    icon: "bi-lightbulb"
  },
  {
    title: "Building Projects",
    description: "Saya suka membuat proyek pribadi seperti website portfolio, aplikasi kasir, sistem laundry, dan aplikasi pengelolaan data siswa.",
    icon: "bi-kanban"
  },
  {
    title: "Problem Solving",
    description: "Saya menikmati proses mencari solusi, memperbaiki bug, melakukan debugging, dan meningkatkan kualitas kode.",
    icon: "bi-bug"
  }
];

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[character]);

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================
     0. INJECT LINK SOSIAL DARI KONFIGURASI
     ========================================================== */
  document.querySelectorAll('[data-social]').forEach((el) => {
    const key = el.getAttribute("data-social");
    if (SOCIAL_URLS[key]) el.setAttribute("href", SOCIAL_URLS[key]);
  });

  // Isi teks nomor WhatsApp & username di kartu kontak
  const waNumEl = document.querySelector('[data-contact="wa-number"]');
  if (waNumEl) {
    // format tampilan: +62 895-1910-4607 (best effort)
    const raw = CONTACT.whatsappNumber;
    let display = "+" + raw;
    if (raw.startsWith("62")) {
      const rest = raw.slice(2);
      display = "+62 " + rest.replace(/(\d{3})(\d{4})(\d+)/, "$1-$2-$3");
    }
    waNumEl.textContent = display;
  }
  const igEl = document.querySelector('[data-contact="ig-user"]');
  if (igEl) igEl.textContent = "@" + CONTACT.instagram;

  const ttEl = document.querySelector('[data-contact="tt-user"]');
  if (ttEl) ttEl.textContent = "@" + CONTACT.tiktok;

  const learningGrid = document.getElementById("learningGrid");
  learningGrid.innerHTML = CURRENTLY_LEARNING.map((item) => `
    <article class="learning-card reveal">
      <i class="bi ${escapeHTML(item.icon)}" aria-hidden="true"></i>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.detail)}</p>
    </article>`).join("");

  const statsGrid = document.getElementById("statsGrid");
  const portfolioStats = [
    { label: "Proyek di portfolio", value: PROJECTS.length, icon: "bi-briefcase" },
    { label: "Topik yang sedang dipelajari", value: CURRENTLY_LEARNING.length, icon: "bi-journal-code" },
    { label: "Hobi pemrograman", value: HOBBIES.length, icon: "bi-heart" }
  ];
  statsGrid.innerHTML = portfolioStats.map((item) => `
    <article class="stat-card reveal">
      <span class="stat-icon"><i class="bi ${item.icon}" aria-hidden="true"></i></span>
      <span><strong class="stat-value">${item.value}</strong><span class="stat-label">${escapeHTML(item.label)}</span></span>
    </article>`).join("");

  const hobbiesGrid = document.getElementById("hobbiesGrid");
  hobbiesGrid.innerHTML = HOBBIES.map((hobby) => `
    <article class="hobby-card reveal">
      <span class="hobby-icon"><i class="bi ${escapeHTML(hobby.icon)}" aria-hidden="true"></i></span>
      <h3>${escapeHTML(hobby.title)}</h3>
      <p>${escapeHTML(hobby.description)}</p>
    </article>`).join("");

  const messageForm = document.getElementById("messageForm");
  const messagePhone = document.getElementById("messagePhone");
  const phoneError = document.getElementById("phoneError");
  const formStatus = document.getElementById("formStatus");
  const messageSubmit = messageForm.querySelector(".message-submit");
  const whatsappFallback = document.getElementById("whatsappFallback");
  const requiredTextFields = [
    { field: document.getElementById("messageName"), message: "Nama lengkap wajib diisi." },
    { field: document.getElementById("messageSubject"), message: "Subjek pesan wajib diisi." },
    { field: document.getElementById("messageBody"), message: "Isi pesan wajib diisi." }
  ];

  const validateRequiredText = (field, message) => {
    field.setCustomValidity(field.value.trim() ? "" : message);
  };
  requiredTextFields.forEach(({ field, message }) => {
    field.addEventListener("input", () => validateRequiredText(field, message));
  });

  const validatePhone = () => {
    const digits = messagePhone.value.replace(/\D/g, "");
    const invalid = messagePhone.value.trim() && (digits.length < 8 || digits.length > 15);
    messagePhone.setCustomValidity(invalid ? "Masukkan nomor WhatsApp dengan 8 sampai 15 digit, atau kosongkan jika tidak ingin mencantumkannya." : "");
    messagePhone.setAttribute("aria-invalid", String(Boolean(invalid)));
    phoneError.textContent = invalid ? "Nomor harus berisi 8–15 digit." : "";
    return !invalid;
  };

  messagePhone.addEventListener("input", validatePhone);
  messageForm.addEventListener("input", (event) => {
    if (event.target !== messagePhone) event.target.removeAttribute("aria-invalid");
    formStatus.classList.remove("is-error", "is-ready");
    formStatus.textContent = "Kolom bertanda * wajib diisi.";
    whatsappFallback.hidden = true;
  });

  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    whatsappFallback.hidden = true;
    formStatus.classList.remove("is-ready");
    validatePhone();
    requiredTextFields.forEach(({ field, message }) => validateRequiredText(field, message));
    if (!messageForm.checkValidity()) {
      messageForm.querySelectorAll("input, select, textarea").forEach((field) => {
        field.setAttribute("aria-invalid", String(!field.validity.valid));
      });
      formStatus.textContent = "Periksa kembali kolom wajib dan format nomor WhatsApp.";
      formStatus.classList.add("is-error");
      messageForm.reportValidity();
      return;
    }

    const destinationNumber = CONTACT.whatsappNumber.replace(/\D/g, "");
    if (!/^\d{8,15}$/.test(destinationNumber)) {
      formStatus.textContent = "Nomor WhatsApp tujuan belum valid. Perbarui CONTACT.whatsappNumber di script.js.";
      formStatus.classList.add("is-error");
      return;
    }

    const data = new FormData(messageForm);
    const message = [
      "Halo, saya ingin menghubungi Anda melalui portfolio.",
      "",
      `Nama: ${data.get("name").trim()}`,
      `Nomor WhatsApp: ${data.get("phone").trim() || "Tidak dicantumkan"}`,
      `Subjek: ${data.get("subject").trim()}`,
      `Kategori: ${data.get("category")}`,
      "",
      "Pesan:",
      data.get("message").trim()
    ].join("\n");
    const whatsappUrl = `https://wa.me/${destinationNumber}?text=${encodeURIComponent(message)}`;
    whatsappFallback.href = whatsappUrl;
    messageSubmit.disabled = true;
    messageSubmit.classList.add("is-loading");

    const whatsappWindow = window.open(whatsappUrl, "_blank");
    if (whatsappWindow) whatsappWindow.opener = null;
    window.setTimeout(() => {
      messageSubmit.disabled = false;
      messageSubmit.classList.remove("is-loading");
      if (whatsappWindow) {
        formStatus.textContent = "WhatsApp terbuka dengan pesan Anda. Periksa kembali isinya lalu tekan Kirim di WhatsApp.";
        formStatus.classList.add("is-ready");
      } else {
        formStatus.textContent = "Popup diblokir browser. Gunakan tautan untuk membuka WhatsApp secara manual.";
        formStatus.classList.add("is-error");
        whatsappFallback.hidden = false;
      }
    }, 450);
  });

  /* ==========================================================
     1. TAHUN FOOTER OTOMATIS
     ========================================================== */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ==========================================================
     2. NAVBAR: SCROLL SHADOW
     ========================================================== */
  const navbar = document.getElementById("navbar");
  const scrollProgress = document.getElementById("scrollProgress");
  const updateScrollProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    scrollProgress.style.transform = `scaleX(${progress})`;
  };
  const onScrollNav = () => {
    if (window.scrollY > 20) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
    updateScrollProgress();
  };
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  /* ==========================================================
     3. HAMBURGER MENU
     ========================================================== */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  const closeMenu = () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Tutup menu saat klik link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Tutup menu saat klik di luar
  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("open") &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Tutup saat resize ke desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeMenu();
    updateScrollProgress();
  });

  /* ==========================================================
     4. SMOOTH SCROLL (fallback untuk browser lama)
     ========================================================== */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight + 10;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ==========================================================
     5. TYPING ANIMATION
     ========================================================== */
  const typedEl = document.getElementById("typed");
  const words = [
    "Calon Software Engineer.",
    "Pecinta Dunia Pemrograman.",
    "Sedang Belajar Web Development.",
    "Pengembang Aplikasi Pemula.",
    "Tertarik pada Rekayasa Perangkat Lunak.",
    "Senang Mempelajari Teknologi Baru.",
    "Belajar Membangun Website Modern.",
    "Mengembangkan Ide Menjadi Aplikasi."
  ];
  let wordIndex = 0, charIndex = 0, isDeleting = false;

  const typeLoop = () => {
    if (!typedEl) return;
    const current = words[wordIndex];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }
    typedEl.textContent = current.substring(0, charIndex);

    let delay = isDeleting ? 42 : 75;

    if (!isDeleting && charIndex === current.length) {
      delay = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 350;
    }
    setTimeout(typeLoop, delay);
  };
  typeLoop();

  /* ==========================================================
     6. PROJECT CARDS, SCREENSHOT PREVIEW & PROJECT DETAILS
     ========================================================== */
  const projectsGrid = document.getElementById("projectsGrid");
  const projectModal = document.getElementById("projectModal");
  const modalContent = document.getElementById("projectModalContent");
  const modalClose = document.getElementById("projectModalClose");
  let activeProject = null;
  let activeScreenshot = 0;
  let previousFocus = null;

  const projectLink = (url, label, icon, className) => {
    if (!url) return "";
    return `<a class="project-action ${className || ""}" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer"><i class="${icon}"></i>${label}</a>`;
  };

  const setImageFallback = (image, container) => {
    container.classList.add("is-empty");
    const showFallback = () => {
      container.classList.add("is-empty");
    };
    image.addEventListener("load", () => {
      container.classList.remove("is-empty");
    }, { once: true });
    image.addEventListener("error", showFallback, { once: true });
    if (image.complete) {
      if (image.naturalWidth) {
        container.classList.remove("is-empty");
      } else {
        showFallback();
      }
    }
  };

  const renderProjects = () => {
    projectsGrid.innerHTML = PROJECTS.map((project) => {
      const cover = project.screenshots[0] || { label: "Cover", src: "" };
      return `
        <article class="project-card reveal">
          <button class="project-thumb is-empty" type="button" data-project-action="preview" data-project-id="${escapeHTML(project.id)}" aria-label="Lihat screenshot ${escapeHTML(project.title)}">
            <img ${cover.src ? `src="${escapeHTML(cover.src)}"` : ""} alt="${escapeHTML(project.title)} — ${escapeHTML(cover.label)}">
            <span class="image-placeholder"><i class="bi bi-image" aria-hidden="true"></i><strong>Screenshot belum tersedia</strong><small>${escapeHTML(cover.src || "Tambahkan path gambar pada data proyek")}</small></span>
          </button>
          <div class="project-body">
            <span class="project-category">${escapeHTML(project.category)}</span>
            <div class="project-tags">${project.technologies.map((technology) => `<span>${escapeHTML(technology)}</span>`).join("")}</div>
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.description)}</p>
            <div class="project-links">
              <button class="project-action project-action-primary" type="button" data-project-action="preview" data-project-id="${escapeHTML(project.id)}"><i class="bi bi-images"></i>Lihat Preview</button>
              <button class="project-action" type="button" data-project-action="details" data-project-id="${escapeHTML(project.id)}"><i class="bi bi-info-circle"></i>Lihat Detail</button>
              ${projectLink(project.repository, "GitHub Repository", "bi bi-github")}
              ${projectLink(project.liveDemo, "Live Demo", "bi bi-box-arrow-up-right")}
            </div>
          </div>
        </article>`;
    }).join("");

    projectsGrid.querySelectorAll(".project-thumb img").forEach((image) => {
      setImageFallback(image, image.parentElement);
    });
  };

  const imageMarkup = (project, screenshot, screenshotCount) => `
    <div class="preview-stage is-empty" id="previewStage">
      <img ${screenshot.src ? `src="${escapeHTML(screenshot.src)}"` : ""} alt="${escapeHTML(project.title)} — ${escapeHTML(screenshot.label)}">
      <span class="image-placeholder"><i class="bi bi-image" aria-hidden="true"></i><strong>Screenshot belum tersedia</strong><small>${escapeHTML(screenshot.src || "Tambahkan path gambar pada data proyek")}</small></span>
      ${screenshotCount > 1 ? `
        <button class="preview-nav preview-prev" type="button" data-preview-direction="-1" aria-label="Screenshot sebelumnya"><i class="bi bi-chevron-left"></i></button>
        <button class="preview-nav preview-next" type="button" data-preview-direction="1" aria-label="Screenshot berikutnya"><i class="bi bi-chevron-right"></i></button>` : ""}
    </div>`;

  const openProjectModal = (project, mode, trigger) => {
    activeProject = project;
    activeScreenshot = 0;
    previousFocus = trigger;
    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    if (mode === "details") {
      const technologies = project.technologies.map((technology) => `<span>${escapeHTML(technology)}</span>`).join("");
      const links = projectLink(project.repository, "GitHub Repository", "bi bi-github")
        + projectLink(project.liveDemo, "Live Demo", "bi bi-box-arrow-up-right", "project-action-primary");
      modalContent.innerHTML = `
        <h2 class="project-modal-title" id="projectModalTitle">${escapeHTML(project.title)}</h2>
        <p class="project-modal-subtitle"><span class="project-category">${escapeHTML(project.category)}</span></p>
        <p class="project-detail-description">${escapeHTML(project.description)}</p>
        <h3 class="project-detail-label">Teknologi</h3>
        <div class="project-detail-tech project-tags">${technologies}</div>
        <h3 class="project-detail-label">Tautan proyek</h3>
        ${links ? `<div class="project-links">${links}</div>` : `<p class="project-detail-note">Repository dan live demo belum ditambahkan.</p>`}`;
    } else {
      renderPreview();
    }
    modalClose.focus();
  };

  const renderPreview = () => {
    const screenshots = activeProject.screenshots;
    const screenshot = screenshots[activeScreenshot];
    if (!screenshot) {
      modalContent.innerHTML = `<h2 class="project-modal-title" id="projectModalTitle">${escapeHTML(activeProject.title)}</h2><p class="project-detail-note">Screenshot belum ditambahkan pada data proyek.</p>`;
      return;
    }
    modalContent.innerHTML = `
      <h2 class="project-modal-title" id="projectModalTitle">${escapeHTML(activeProject.title)}</h2>
      <p class="project-modal-subtitle">${escapeHTML(activeProject.category)} · ${escapeHTML(screenshot.label)}</p>
      ${imageMarkup(activeProject, screenshot, screenshots.length)}
      <div class="preview-caption">
        <span>${escapeHTML(screenshot.label)}</span>
        <span>${activeScreenshot + 1} / ${screenshots.length}</span>
      </div>`;

    const stage = document.getElementById("previewStage");
    setImageFallback(stage.querySelector("img"), stage);
    const changeOnSwipe = (event) => {
      if (!stage.dataset.touchStart) return;
      const distance = Number(stage.dataset.touchStart) - event.changedTouches[0].clientX;
      delete stage.dataset.touchStart;
      if (Math.abs(distance) > 45 && screenshots.length > 1) {
        activeScreenshot = (activeScreenshot + (distance > 0 ? 1 : -1) + screenshots.length) % screenshots.length;
        renderPreview();
      }
    };
    stage.addEventListener("touchstart", (event) => {
      stage.dataset.touchStart = event.touches[0].clientX;
    }, { passive: true });
    stage.addEventListener("touchend", changeOnSwipe, { passive: true });
  };

  const closeProjectModal = () => {
    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (previousFocus) previousFocus.focus();
  };

  renderProjects();
  projectsGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-project-action]");
    if (!trigger) return;
    const project = PROJECTS.find((item) => item.id === trigger.dataset.projectId);
    if (project) openProjectModal(project, trigger.dataset.projectAction, trigger);
  });
  modalClose.addEventListener("click", closeProjectModal);
  projectModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-modal-close]")) closeProjectModal();
  });
  modalContent.addEventListener("click", (event) => {
    const navigation = event.target.closest("[data-preview-direction]");
    if (!navigation || !activeProject) return;
    const count = activeProject.screenshots.length;
    activeScreenshot = (activeScreenshot + Number(navigation.dataset.previewDirection) + count) % count;
    renderPreview();
  });
  document.addEventListener("keydown", (event) => {
    if (!projectModal.classList.contains("open")) return;
    if (event.key === "Escape") closeProjectModal();
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      if (!activeProject || activeProject.screenshots.length < 2) return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      activeScreenshot = (activeScreenshot + direction + activeProject.screenshots.length) % activeProject.screenshots.length;
      renderPreview();
    }
  });

  /* ==========================================================
     7. SCROLL REVEAL ANIMATION
     ========================================================== */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          // Aktifkan bar skill
          if (entry.target.classList.contains("skill-card")) {
            entry.target.classList.add("in");
          }
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ==========================================================
     7. ACTIVE NAVBAR ON SCROLL
     ========================================================== */
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-link");

  const setActiveNav = () => {
    const scrollPos = window.scrollY + navbar.offsetHeight + 40;
    let currentId = "home";
    sections.forEach((sec) => {
      const hasNavLink = Array.from(navAnchors).some((anchor) => anchor.getAttribute("href") === "#" + sec.id);
      if (hasNavLink && scrollPos >= sec.offsetTop) currentId = sec.id;
    });
    navAnchors.forEach((a) => {
      a.classList.toggle(
        "active",
        a.getAttribute("href") === "#" + currentId
      );
    });
  };
  window.addEventListener("scroll", setActiveNav, { passive: true });
  setActiveNav();

  /* ==========================================================
     8. BACK TO TOP
     ========================================================== */
  const backToTop = document.getElementById("backToTop");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 500) backToTop.classList.add("show");
      else backToTop.classList.remove("show");
    },
    { passive: true }
  );
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ==========================================================
     9. DARK / LIGHT MODE
     ========================================================== */
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const htmlEl = document.documentElement;

  const applyTheme = (theme) => {
    htmlEl.setAttribute("data-theme", theme);
    themeIcon.className =
      theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
    localStorage.setItem("portfolio-theme", theme);
  };

  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  themeToggle.addEventListener("click", () => {
    const current = htmlEl.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  /* ==========================================================
     10. EFEK INTERAKSI KARTU (3D tilt ringan)
     ========================================================== */
  if (window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".project-card, .skill-card, .contact-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -3;
        const rotY = ((x - cx) / cx) * 3;
        card.style.transform = `translateY(-6px) perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }
});