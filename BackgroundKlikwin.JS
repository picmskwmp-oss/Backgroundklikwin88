(function () {
  if (window.__kwCustomInit) return;   // <-- kunci: cukup jalan sekali
  window.__kwCustomInit = true;

function isMobile() {
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|iphone|ipod|ipad|mobile|webos|windows phone/i.test(userAgent);
}
(function injectCriticalStyles() {
  const criticalCSS = `
   body { overflow-x: hidden !important; }
    #page-content-wrapper { padding-top: 0 !important; }
    .download-banner { display: none !important; }
    .no-scroll { position: relative !important; }
    .navbar-brand img { max-width: 116px !important;}
    #slider + .mt-10 { margin-top: 0 !important; }
  `;

  const style = document.createElement("style");
  style.id = "critical-styles";
  style.textContent = criticalCSS;

  if (document.head) {
    document.head.appendChild(style);
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      document.head.appendChild(style);
    });
  }
})();
if (isMobile()) {
  function redirectHrefToHome() {
    const firstLink = document.querySelector("div.mt-10 > a[href]");
    if (firstLink) {
      firstLink.href = "/";
    }
  }
  function modifySportsbookLinkBelowSlider() {
    const sliderDiv = document.getElementById("slider");
    if (!sliderDiv) return;

    // Get the next <a> sibling after #slider
    let next = sliderDiv.nextElementSibling;
    if (
      next &&
      next.tagName === "A" &&
      next.querySelector(".game-item") &&
      next.querySelector(".game-title")?.textContent.trim().toLowerCase() ===
        "sports"
    ) {
      next.setAttribute("href", "/");
    }
  }
  function fixNoScrollPosition() {
    // Add CSS rule to stylesheet instead of inline styles
    const style = document.createElement("style");
    style.textContent = `
        .no-scroll {
            position: relative !important;
        }
    `;
    document.head.appendChild(style);
  }
  function removeSliderMargin() {
    const style = document.createElement("style");
    style.textContent = `
    #slider + .mt-10 {
      margin-top: 0px !important;
    }
  `;
    document.head.appendChild(style);
  }

  // Execute all code only for mobile
  document.addEventListener("DOMContentLoaded", function () {
    // ... your existing mobile code ...

    redirectHrefToHome(); // <-- Add this line
    modifySportsbookLinkBelowSlider();
    fixNoScrollPosition();
    removeSliderMargin();
  });

  (function injectCustomMarqueeStyles() {
    if (!document.head) {
      requestAnimationFrame(injectCustomMarqueeStyles);
      return;
    }

    const marqueeWrapper = document.querySelector(".marquee-wrapper");
    if (!marqueeWrapper) {
      requestAnimationFrame(injectCustomMarqueeStyles);
      return;
    }

    const css = `
    .inkjet-marquee-wrapper {
      background-color: black !important;
      float: right !important;
      width: 92% !important;
      padding: 4px 8px;
      border-radius: 4px;
      overflow: hidden;
    }

    .inkjet-marquee-wrapper .marquee {
      font-size: 13px !important;
      color: white !important;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      text-shadow:
        1px 0 0 #bbb,
        0 1px 0 #bbb,
        1px 1px 0 #bbb,
        2px 1px 0 #999,
        1px 2px 0 #999;
    }

    .inkjet-marquee-wrapper .js-marquee {
      float: left !important;
      margin-right: 50px !important;
      white-space: nowrap;
    }

    .jackpot-wrapper {
      position: relative;
      margin: 16px auto;
      width: 95%;
      max-width: 440px;
      height: 85px;
      background: url('https://s6.imgcdn.dev/YHRo3T.gif') no-repeat center;
      background-size: 100% 100%;
      border-radius: 12px;
      overflow: hidden;
    }

    .jackpot-glow {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -55%);
      font-family: 'Orbitron', sans-serif;
      font-size: 28px;
      font-weight: 600;
      color: #ffe600;
      text-shadow: 0 0 6px #000, 0 0 10px #ff0;
      animation: glow 2s ease-in-out infinite;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
      z-index: 2;
    }

    .jackpot-glow .kode {
      margin-right: 10px;
    }

    .jackpot-glow .angka {
      display: inline-block;
      min-width: 200px;
      color: white;
      text-shadow: none;
    }

    @keyframes glow {
      0%, 100% {
        text-shadow: 0 0 6px #000, 0 0 10px #ff0;
      }
      50% {
        text-shadow: 0 0 10px #000, 0 0 20px #ffff00;
      }
    }

    @media only screen and (max-width: 768px) {
      .mobile-shortcut-menu {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        background: radial-gradient(farthest-corner at 30% 0, #2c6005 0%, #0d3200 40%);
        padding: 10px 5px;
        gap: 12px;
        width: 100% !important;
        box-sizing: border-box;
        clear: both;
        position: relative;
        z-index: 1;
      }

      .mobile-shortcut-menu::-webkit-scrollbar {
        display: none;
      }

      .mobile-shortcut-item {
        flex: 0 0 auto;
        text-align: center;
        color: #fff;
        font-size: 11px;
        font-weight: bold;
        width: 65px;
      }

      .mobile-shortcut-item img {
        width: 38px;
        height: 38px;
        margin-bottom: 5px;
        filter: drop-shadow(0 0 2px #000);
      }

      .mobile-shortcut-item span {
        display: block;
        line-height: 1.2;
      }

      .game-item {
        background: radial-gradient(farthest-corner at 20% 0, #41760c 0%, #0d3200 50%) !important;
      }
    }

    @media only screen and (min-width: 769px) {
      .mobile-shortcut-menu {
        display: none !important;
      }
    }

    .mb-10,
    .game-item,
    .game-box,
    .game-thumb,
    .row,
    .col-xs-6,
    .col-6,
    [class*="col-"] {
      margin: 0 !important;
      padding: 0 !important;
      gap: 0 !important;
      box-sizing: border-box;
    }

    .game-item::after {
      content: none !important;
    }

    #slider {
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    #slider img {
      width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
      box-sizing: border-box;
    }

    .owl-carousel,
    .owl-stage-outer {
      overflow: hidden;
    }

    .mobile-shortcut-menu + .mb-10,
    .mobile-shortcut-menu + .game-item,
    .mobile-shortcut-menu + div {
      margin-top: 0 !important;
      padding-top: 0 !important;
    }

    #btnLogin.btn-primary,
    .login-btn.btn-primary {
      background: linear-gradient(to bottom, #bbbbbb, #555555) !important;
      color: white !important;
      border: none !important;
      border-radius: 50px !important;
      border: 2px solid #FFFFFF !important;
      padding: 1px 10px !important;
      font-weight: bold !important;
      text-transform: uppercase !important;
      margin: 10px 5px;
    }

    #btn-register.btn-success,
    .login-btn.btn-success {
      background: linear-gradient(to bottom, #d4ff00, #2e9800) !important;
      color: white !important;
      border: none !important;
      border-radius: 50px !important;
      border: 2px solid #81db01 !important;
      padding: 1px 10px !important;
      font-weight: bold !important;
      text-transform: uppercase !important;
    }

    a.btn-slider.btn-primary,
    a.btn.btn-primary.text-uppercase,
    a.btn.btn-primary {
      background: linear-gradient(to bottom, #bbbbbb, #555555) !important;
      color: white !important;
      border-radius: 50px !important;
      border: 2px solid #FFFFFF !important;
      font-weight: bold !important;
      text-transform: uppercase !important;
      padding: 1px 10px !important;
    }

    a.btn-slider.btn-success,
    a.btn.btn-success.text-uppercase,
    a.btn.btn-success {
      background: linear-gradient(to bottom, #d4ff00, #2e9800) !important;
      color: white !important;
      border-radius: 50px !important;
      border: 2px solid #81db01 !important;
      font-weight: bold !important;
      text-transform: uppercase !important;
      padding: 1px 10px !important;
      margin: 10px 5px;
    }

    #btnLogin.btn-primary:hover,
    #btn-register.btn-success:hover,
    a.btn-slider.btn-primary:hover,
    a.btn-slider.btn-success:hover,
    .login-btn.btn-primary:hover,
    .login-btn.btn-success:hover {
      opacity: 0.9;
      transform: scale(1.03);
    }

    .quick-footer-navbar a.grid-btn {
      background: radial-gradient(farthest-corner at 20% 0, #41760c 0%, #0d3200 50%) !important;
      color: #ffffff !important;
    }

    .quick-footer-navbar a.grid-btn.active {
      background-color: #67c700 !important;
      background-image: none !important;
      color: #ffffff !important;
    }

    .quick-footer-navbar a.grid-btn i,
    .quick-footer-navbar a.grid-btn span {
      color: #ffffff !important;
    }

    .header {
      background: radial-gradient(farthest-corner at 20% 0, #41760c 0%, #0d3200 50%) !important;
      background-size: cover !important;
      background-repeat: no-repeat !important;
    }

    .navbar {
      background: linear-gradient(to bottom, #a4ff00 0%, #62b515 30%, #006c06 100%) !important;
      color: #ffffff !important;
      border: none !important;
    }

    .container {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .navbar .container,
    .navbar .row {
      width: 100%;
      max-width: 100%;
      margin: 0 auto !important;
      padding: 0 !important;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  `;

    const styleTag = document.createElement("style");
    styleTag.type = "text/css";
    styleTag.appendChild(document.createTextNode(css));
    document.head.appendChild(styleTag);

    marqueeWrapper.classList.add("inkjet-marquee-wrapper");
  })();

  (function resetSidebarButtons() {
    const buttons = document.querySelectorAll(".btn-sidebar a");

    if (buttons.length > 0) {
      buttons.forEach((button) => {
        button.removeAttribute("style");
        button.removeAttribute("data-toggle");
        button.removeAttribute("data-target");
        button.className = "btn btn-default accordion-toggle btn-joinnow";
      });
    } else {
      requestAnimationFrame(resetSidebarButtons);
    }
  })();

  (function injectHeader() {
    if (!document.head || !document.body) {
      requestAnimationFrame(injectHeader);
      return;
    }

    // >>> PENGAMAN: jangan buat banner "Download APK" dua kali
    if (document.querySelector(".injected-header")) return;

    const css = `
    @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');

    .injected-header {
      position: sticky;
      top: 0;
      width: 100%;
      background: radial-gradient(farthest-corner at 30% 0, #2c6005 0%, #0d3200 40%);
      color: #fff;
      padding: 0 15px;
      padding-bottom: 12px;
      font-family: sans-serif;
      font-size: 18px;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .injected-header .left-side {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .injected-header .close-btn {
      cursor: pointer;
      font-size: 20px;
      padding: 4px 8px;
      background: transparent;
      border: none;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .injected-header .close-btn:hover {
      color: #ff6666;
    }

    .injected-header .logo {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .injected-header .logo img {
      height: 32px;
      width: 32px;
    }

    .injected-header .center-text {
      font-size: 12px;
      margin-top: 10px;
      flex: 1;
      text-align: center;
      white-space: pre-line; /* preserve line breaks */
    }

    .injected-header .right-side {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .injected-header .download-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background-color: #2c6005;
      border-radius: 100%;
      color: white;
      cursor: pointer;
      text-decoration: none;
      transition: background-color 0.3s ease;
      margin-top: 10px;
    }

    .injected-header .download-link:hover {
      background-color: #195003;
    }
  `;

    const styleTag = document.createElement("style");
    styleTag.type = "text/css";
    styleTag.appendChild(document.createTextNode(css));
    document.head.appendChild(styleTag);

    const header = document.createElement("header");
    header.className = "injected-header";

    const leftSide = document.createElement("div");
    leftSide.className = "left-side";

    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.title = "Close";
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", () => header.remove());

    const logoDiv = document.createElement("div");
    logoDiv.className = "logo";
    logoDiv.innerHTML = `
    <img src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-POPUPAPLIKASI.webp" alt="Logo">
  `;

    leftSide.appendChild(closeBtn);
    leftSide.appendChild(logoDiv);

    const centerText = document.createElement("div");
    centerText.className = "center-text";
    centerText.textContent = `Download APK
Pengalaman baru bermain di APK`;

    const rightSide = document.createElement("div");
    rightSide.className = "right-side";

    const downloadLink = document.createElement("a");
    downloadLink.className = "download-link";
    downloadLink.href = "https://generator.idns889.net/api/app/541/download";
    downloadLink.setAttribute("download", "");
    downloadLink.setAttribute("aria-label", "Download");
    downloadLink.innerHTML = `<i class="bi bi-box-arrow-down"></i>`;

    rightSide.appendChild(downloadLink);

    header.appendChild(leftSide);
    header.appendChild(centerText);
    header.appendChild(rightSide);
    document.body.insertBefore(header, document.body.firstChild);
  })();

  document.addEventListener("DOMContentLoaded", function () {
    const mainElement = document.querySelector(".main");

    if (mainElement && window.innerWidth <= 768) {
      mainElement.style.backgroundImage =
        "url('https://www.image2url.com/r2/default/files/1786048282416-109f39e7-a8ed-47cc-a82b-a2d1685a8db5.png')";
      mainElement.style.backgroundColor = "#000000";
      mainElement.style.backgroundPosition = "top center";
      mainElement.style.backgroundRepeat = "no-repeat";
      mainElement.style.backgroundAttachment = "fixed";
      mainElement.style.backgroundSize = "cover";
    }
  });

  (function injectLogoStylesAndUpdate() {
    if (!document.head) {
      requestAnimationFrame(injectLogoStylesAndUpdate);
      return;
    }

    const styleContent = `
    .header-cover {
      background-repeat: no-repeat !important;
      background-position: 15px 15px !important;
      position: relative !important;
      z-index: 100 !important;
      height: 16px !important;
    }
    .logo {
      display: flex !important;
      align-items: center !important; /* Vertically center the logo */
      height: 100%; /* Stretch to container height */
    }

    .logo img {
      display: block;
      margin-top: 10px !important; /* No top margin needed when using flex */
    }
  `;

    const styleTag = document.createElement("style");
    styleTag.type = "text/css";
    styleTag.textContent = styleContent;
    document.head.appendChild(styleTag);

    // Wait for the logo image element to exist
    const updateLogo = () => {
      const logoImg = document.querySelector(".navbar-brand img");
      if (!logoImg) {
        requestAnimationFrame(updateLogo);
        return;
      }

      const updateMobileLogo = () => {
        if (window.innerWidth <= 768) {
          logoImg.src =
            "https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-LOGOMOBILE.webp";
          logoImg.alt = "New Mobile Logo - KLIKWIN88";
          logoImg.title = "New Mobile Logo - KLIKWIN88";
        }
      };

      updateMobileLogo();
      window.addEventListener("resize", updateMobileLogo);
    };

    updateLogo();
  })();

  (function injectGameBoxStyles() {
    if (!document.head) {
      requestAnimationFrame(injectGameBoxStyles);
      return;
    }

    const style = document.createElement("style");
    style.textContent = `
    .mb-10 .game-box {
      display: flex !important;
      flex-direction: column !important; /* fixed typo */
      align-items: center !important;
      justify-content: center !important;
      gap: 5px !important;
      margin: 10px !important;
      background: radial-gradient(farthest-corner at 20% 0, #41760c 0%, #0d3200 50%) !important;
    }
    .game-title {
      background: linear-gradient(to bottom, #a4ff00 0%, #62b515 30%, #006c06 100%) !important;
      color: white !important;
      padding: 5px 10px !important;
      width: fit-content !important;
      margin: auto !important;
      display: block !important;
      font-weight: bold !important;
      border-radius: 5px !important;
      text-align: center !important;
      box-sizing: border-box !important;
      user-select: none !important;
    }
    .game-box-arcade {
      background: radial-gradient(farthest-corner at 20% 0, #41760c 0%, #0d3200 50%) !important;
    }
  `;

    document.head.appendChild(style);
  })();

  (function initJackpotCarousel() {
    if (!document.body) {
      requestAnimationFrame(initJackpotCarousel);
      return;
    }

    // Inject styles immediately
    injectStyles();

    // Setup mutation observer to wait for elements and then insert carousel
    const observer = new MutationObserver(onMutations);
    observer.observe(document.body, { childList: true, subtree: true });

    function injectStyles() {
      const style = document.createElement("style");
      style.textContent = `
      .jackpot-carousel-container {
        background: radial-gradient(farthest-corner at 20% 0, #41760c 0%, #0d3200 50%) !important;
        padding: 16px 16px !important;
        margin: auto;
        width: auto !important;
        max-width: 1024px;
      }

      .jackpot-wrapper {
        position: relative !important;
        margin: 0 auto 16px auto !important;
        width: 95% !important;
        max-width: 440px !important;
        height: 85px !important;
        background: url('https://s6.imgcdn.dev/YHRo3T.gif') no-repeat center !important;
        background-size: 100% 100% !important;
        border-radius: 12px !important;
        overflow: hidden !important;
        pointer-events: none !important;
      }

      .jackpot-glow {
        margin-left: 20px !important;
        font-size: 20px !important;
      }

      .carousel-control-prev,
      .carousel-control-next {
        margin-left: 8px !important;
        margin-right: 8px !important;
        border-radius: 100% !important;
        background-color: #000 !important;
        width: 16px !important;
        height: 16px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        box-shadow: 0 2px 6px rgba(0,0,0,0.15) !important;
        border: none !important;
        transition: background-color 0.3s ease !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        z-index: 1050 !important;
        padding: 5px !important;
        right: -30px !important;
      }

      .carousel-control-prev {
        left: -30px !important;
      }

      .carousel-control-prev:hover,
      .carousel-control-next:hover {
        background-color: green !important;
      }

      .carousel-control-prev i,
      .carousel-control-next i {
        color: #000 !important;
        font-size: 1rem !important;
        padding: 2px !important;
      }

      #carouselExampleControls {
        margin-left: 50px !important;
        margin-right: 50px !important;
      }

      .carousel {
        margin-bottom: 12px !important;
      }

      .items {
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        border-radius: 0.5rem !important;
        overflow: hidden !important;
        padding: 0 20px !important;
        margin: 0 auto !important;
        gap: 1rem !important;
      }

      .items > * {
        flex: 1 1 40% !important;
        max-width: 40% !important;
        height: 60px !important;
        box-sizing: border-box !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 0.25rem !important;
      }
    `;
      document.head.appendChild(style);
    }

    function onMutations() {
      // >>> PENGAMAN: kalau carousel jackpot sudah dibuat, hentikan
      if (document.querySelector(".jackpot-carousel-container")) {
        observer.disconnect();
        return;
      }

      const jackpotWrapper = document.querySelector(".jackpot-wrapper");
      const nextGameItem = document.querySelector(".mb-10.game-item");

      if (jackpotWrapper && nextGameItem) {
        insertCarousel(jackpotWrapper, nextGameItem);
        observer.disconnect();
      }
    }

    function insertCarousel(jackpotWrapper, nextGameItem) {
      const container = document.createElement("div");
      container.className = "jackpot-carousel-container";

      // Move jackpotWrapper inside container
      container.appendChild(jackpotWrapper);

      // Carousel HTML content
      const carouselHTML = `
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active">
            <div class="items">
              <div class="col-md-4">
                <img class="d-block w-100" src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-GatesOfOlympus.webp" alt="1st" style="height: 100%; object-fit: cover; border-radius: 0.5rem;">
              </div>
              <div class="col-md-4">
                <img class="d-block w-100" src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-StarlightPrincess.webp" alt="2nd" style="height: 100%; object-fit: cover; border-radius: 0.5rem;">
              </div>
              <div class="col-md-4">
                <img class="d-block w-100" src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-SweetBonanza.webp" alt="3rd" style="height: 100%; object-fit: cover; border-radius: 0.5rem;">
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item">
            <div class="items">
              <div class="col-md-4 item">
                <img class="d-block w-100" src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-GatesofGatotKaca.webp" alt="4th" style="height: 100%; object-fit: cover; border-radius: 0.5rem;">
              </div>
              <div class="col-md-4 item">
                <img class="d-block w-100" src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-TreasureofAztec.webp" alt="5th" style="height: 100%; object-fit: cover; border-radius: 0.5rem;">
              </div>
              <div class="col-md-4 item">
                <img class="d-block w-100" src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-WildBandito.webp" alt="6th" style="height: 100%; object-fit: cover; border-radius: 0.5rem;">
              </div>
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="carousel-item">
            <div class="items">
              <div class="col-md-4 item">
                <img class="d-block w-100" src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-LuckyNeko.webp" alt="7th" style="height: 100%; object-fit: cover; border-radius: 0.5rem;">
              </div>
              <div class="col-md-4 item">
                <img class="d-block w-100" src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-LuckyFortune.webp" alt="8th" style="height: 100%; object-fit: cover; border-radius: 0.5rem;">
              </div>
              <div class="col-md-4 item">
                <img class="d-block w-100" src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-GoldenLion.webp" alt="9th" style="height: 100%; object-fit: cover; border-radius: 0.5rem;">
              </div>
            </div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    `;

      container.insertAdjacentHTML("beforeend", carouselHTML);

      nextGameItem.parentNode.insertBefore(container, nextGameItem);

      // Initialize Bootstrap carousel if bootstrap is loaded
      const carouselElement = document.querySelector(
        "#carouselExampleControls"
      );
      if (carouselElement && window.bootstrap && bootstrap.Carousel) {
        new bootstrap.Carousel(carouselElement);
      }
    }
  })();

  (function initDynamicGameLinkInjection() {
    const isDashboard = location.pathname.endsWith("/dashboard");

    const linkRules = [
      {
        matchAlt: "sports",
        type: "href",
        href: isDashboard ? "/games/sportsbook" : "/sportsbook",
      },
      {
        matchAlt: "lottery",
        type: "href",
        href: isDashboard ? "/games/lottery" : "/lottery",
      },
      {
        matchAlt: "multiplayer",
        matchTitle: "idnpoker",
        type: isDashboard ? null : "href",
        href: "/idnpoker",
      },
      {
        matchAlt: "arcade",
        type: "href",
        href: isDashboard ? "/games/arcadegames" : "/arcadeGames",
      },
      {
        matchAlt: "idnraffle",
        type: "href",
        href: "https://idnraffle.com/",
      },
    ];

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", injectGameLinks);
    } else {
      injectGameLinks();
    }

    function injectGameLinks() {
      const gameBoxes = document.querySelectorAll(
        ".game-box, .game-box-arcade, .game-box-raffle"
      );

      gameBoxes.forEach((box) => {
        const img = box.querySelector("img");
        const title =
          box.querySelector("h5")?.textContent.trim().toLowerCase() || "";
        const alt = img?.alt.trim().toLowerCase() || "";

        const matchedRule = linkRules.find((rule) => {
          const altMatch = rule.matchAlt && alt === rule.matchAlt;
          const titleMatch = rule.matchTitle ? title === rule.matchTitle : true;
          return altMatch && titleMatch;
        });

        if (!matchedRule || matchedRule.type !== "href") return;

        const outerAnchor = findClosestAnchor(box);
        if (
          outerAnchor &&
          outerAnchor.hasAttribute("data-toggle") &&
          outerAnchor.getAttribute("data-toggle") === "modal"
        ) {
          // Replace modal <a> with new href <a>
          const newAnchor = createHrefLink(matchedRule.href);
          moveChildren(outerAnchor, newAnchor);
          outerAnchor.parentNode.replaceChild(newAnchor, outerAnchor);
        } else {
          if (!isAlreadyWrapped(box)) {
            const anchor = createHrefLink(matchedRule.href);
            moveChildren(box, anchor);
            box.appendChild(anchor);
          }
        }
      });
    }

    function findClosestAnchor(el) {
      while (el) {
        if (el.tagName === "A") return el;
        el = el.parentElement;
      }
      return null;
    }

    function isAlreadyWrapped(el) {
      return el.parentElement && el.parentElement.tagName === "A";
    }

    function createHrefLink(href) {
      const a = document.createElement("a");
      a.href = href;
      a.style.display = "block";
      a.style.textDecoration = "none";
      a.style.color = "inherit";
      return a;
    }

    function moveChildren(from, to) {
      while (from.firstChild) {
        to.appendChild(from.firstChild);
      }
    }
  })();

  (function updateIDNRaffleSidebarLink() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", replaceIDNRaffleLink);
    } else {
      replaceIDNRaffleLink();
    }

    function replaceIDNRaffleLink() {
      const sidebarLinks = document.querySelectorAll(".nav.sidebar-nav a");

      sidebarLinks.forEach((link) => {
        const text = link.textContent.trim().toLowerCase();
        const isIDNRaffle =
          text === "idnraffle" ||
          (text.includes("idn") && text.includes("raffle"));
        const isModalLink = link.getAttribute("data-toggle") === "modal";

        if (isIDNRaffle && isModalLink) {
          const li = link.closest("li");
          if (!li) return;

          const newLink = document.createElement("a");
          newLink.href = "https://idnraffle.com/";
          newLink.className = link.className || "";
          newLink.innerHTML = `
          <i class="svg-idnraffle"></i> IDNRaffle
          <div class="new-ribbon-sidebar"><span>BARU</span></div>
        `;

          li.innerHTML = ""; // Clear old content
          li.appendChild(newLink);
        }
      });
    }
  })();
} else {
  // Execute all code if not mobile ( Table & Desktop )

  (function init() {
    injectEarlyCustomStyles();
    injectHeaderCoverStyles();
    setupCustomLogo();
  })();

  function injectEarlyCustomStyles() {
    const css = `
    .header {
      background: radial-gradient(farthest-corner at 20% 0, #41760c 0%, #0d3200 50%) !important;
      background-size: cover !important;
      background-repeat: no-repeat !important;
    }

    .navbar {
      background: linear-gradient(to bottom, #a4ff00 0%, #62b515 30%, #006c06 100%) !important;
      color: #ffffff !important;
      border: none !important;
    }

    .navbar .nav-pills {
      padding: 5px 0 !important;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0;
      margin: 0;
      flex-wrap: nowrap;
      overflow: visible !important;
    }

    .navbar .nav-pills > li > a {
      color: #ffffff !important;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      border-radius: 100px;
      background: transparent !important;
      border: 2px solid transparent;
      transition: all 0.3s ease-in-out;
      white-space: nowrap;
      position: relative;
      z-index: 1;
    }

    .navbar .nav-pills > li > a:hover {
      background-color: transparent !important;
    }

    .navbar .nav > li:hover,
    .navbar .nav li.active,
    .navbar .nav li .current,
    .navbar .nav li .hover,
    .navbar .nav > li > a:hover {
      background-color: transparent !important;
      background-image: none !important;
      color: #ffffff;
    }

    .navbar .nav-pills > li > a:focus,
    .navbar .nav-pills > li > a.current,
    .navbar .nav-pills > li.active > a {
      background-color: green !important;
      margin-top: -1px;
      color: #ffffff !important;
      border: 2px solid #0d3200 !important;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2) !important;
    }

    .new-ribbon-navbar, .promo-ribbon-navbar {
      z-index: 3 !important;
    }

    .msg-wrapper {
      margin-top: 8em !important;
    }
  `;

    function inject() {
      const style = document.createElement("style");
      style.type = "text/css";
      style.textContent = css;
      document.head.appendChild(style);
    }

    if (document.head) {
      inject();
    } else {
      requestAnimationFrame(injectEarlyCustomStyles);
    }
  }

  function injectHeaderCoverStyles() {
    const styleContent = `
    .header-cover {
      background-repeat: no-repeat !important;
      background-position: 15px 15px !important;
      position: relative !important;
      z-index: 100 !important;
      height: 16px !important;
    }

    .logo {
      display: flex !important;
      align-items: center !important;
      height: 100%;
    }

    .logo img {
      display: block;
      margin-top: 10px !important;
    }
  `;

    function inject() {
      const styleTag = document.createElement("style");
      styleTag.type = "text/css";
      styleTag.textContent = styleContent;
      document.head.appendChild(styleTag);
    }

    if (document.head) {
      inject();
    } else {
      requestAnimationFrame(injectHeaderCoverStyles);
    }
  }

  function setupCustomLogo() {
    function updateLogo() {
      const logoWrapper = document.querySelector(".hdcontent .logo");
      const logoLink = logoWrapper?.querySelector("a");

      if (logoWrapper && logoLink) {
        const oldImg = logoWrapper.querySelector("img");
        if (oldImg) oldImg.remove();

        const newLogo = document.createElement("img");
        newLogo.src =
          "https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-LOGODESKTOP.webp";
        newLogo.alt = "KLIKWIN88 Logo";
        newLogo.title = "KLIKWIN88 Logo";
        newLogo.style.maxHeight = "40px";
        newLogo.style.width = "auto";
        logoLink.appendChild(newLogo);
      }

      const logoImg = document.querySelector(".navbar-brand img");
      if (window.innerWidth <= 768 && logoImg) {
        logoImg.src =
          "https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-LOGOMOBILE.webp";
        logoImg.alt = "New Mobile Logo - KLIKWIN88";
        logoImg.title = "New Mobile Logo - KLIKWIN88";
      }
    }

    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      updateLogo();
    } else {
      document.addEventListener("DOMContentLoaded", updateLogo);
    }

    window.addEventListener("resize", updateLogo);
  }

  (function modifyJoinButtons() {
    const btnsContainers = document.querySelectorAll(".btns");
    if (btnsContainers.length === 0) {
      requestAnimationFrame(modifyJoinButtons);
      return;
    }

    const loginButtonHTML = `
    <a href="https://speed-ly.com/KLIKWIN88" class="btn btn-default accordion-toggle btn-joinnow" bis_skin_checked="1">
      <span class="text">MASUK</span>
      <span class="caret"></span>
    </a>`;

    const containerStyle = `margin-top: -15px !important; margin-left: 5px !important; padding: 12px;`;

    for (let i = 0; i < btnsContainers.length && i < 3; i++) {
      const container = btnsContainers[i];
      container.setAttribute("style", containerStyle);

      const daftarButton = container.querySelector(".btn-joinnow");
      if (daftarButton) {
        daftarButton.className = "btn btn-default accordion-toggle btn-joinnow";
        daftarButton.removeAttribute("style");

        const temp = document.createElement("div");
        temp.innerHTML = loginButtonHTML;
        const masukButton = temp.firstElementChild;

        daftarButton.parentNode.insertBefore(
          masukButton,
          daftarButton.nextSibling
        );
      }
    }
  })();

  (function applyMainBackgroundStyle() {
    const mainElement = document.querySelector(".main");
    if (mainElement) {
      mainElement.style.backgroundImage =
        "url('http://plcl.me/images/FKAVX.jpg')";
      mainElement.style.backgroundColor = "#000000";
      mainElement.style.backgroundPosition = "top center";
      mainElement.style.backgroundRepeat = "no-repeat";
      mainElement.style.backgroundAttachment = "fixed";
      mainElement.style.backgroundSize = "cover";
    } else {
      requestAnimationFrame(applyMainBackgroundStyle);
    }
  })();
}

window.addEventListener("DOMContentLoaded", function () {
  // >>> PENGAMAN: jangan buat kotak jackpot dua kali
  if (document.querySelector(".jackpot-wrapper")) return;

  const jackpotWrap = document.createElement("div");
  jackpotWrap.className = "jackpot-wrapper";
  jackpotWrap.innerHTML = `
    <div class="jackpot-glow">
      <span class="kode">IDR</span><span class="angka" id="jackpotValue">1.138.376.590</span>
    </div>
  `;

  const shortcutMenu = document.querySelector(".mobile-shortcut-menu");
  if (shortcutMenu && shortcutMenu.parentNode) {
    shortcutMenu.parentNode.insertBefore(jackpotWrap, shortcutMenu.nextSibling);
  }

  let currentAmount = 1138376590;

  function updateJackpot() {
    currentAmount += Math.floor(Math.random() * 3000) + 1000;
    const el = document.getElementById("jackpotValue");
    if (el) el.textContent = formatNumber(currentAmount);
  }

  function formatNumber(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  setInterval(updateJackpot, 150);
});

document.addEventListener("DOMContentLoaded", function () {
  // >>> PENGAMAN: jangan buat baris menu ikon dua kali
  if (document.querySelector(".mobile-shortcut-menu")) return;

  const firstGameItem = document.querySelectorAll(".mb-10.game-item")[0];
  if (!firstGameItem) return;

  const menuDiv = document.createElement("div");
  menuDiv.className = "mobile-shortcut-menu";
  menuDiv.innerHTML = `
    <a href="/games/slots" class="mobile-shortcut-item">
      <img src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-Slot.svg" alt="Slot" />
      <span>Slots</span>
    </a>
    <a href="/games/sportsbook" class="mobile-shortcut-item">
      <img src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-Sportbook.svg" alt="Sportbook" />
      <span>Sportbook</span>
    </a>
    <a href="/games/casino" class="mobile-shortcut-item">
      <img src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-Casino.svg" alt="Live Casino" />
      <span>Live Casino</span>
    </a>
    <a href="/games/arcadegames" class="mobile-shortcut-item">
      <img src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-Arcade.svg" alt="Arcade" />
      <span>Arcade</span>
    </a>
    <a href="/games/lottery" class="mobile-shortcut-item">
      <img src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-Togel.svg" alt="Lottery" />
      <span>Lottery</span>
    </a>
    <a href="/games/idnseamless" class="mobile-shortcut-item">
      <img src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-IDNLive.svg" alt="IDN Live" />
      <span>IDN Live</span>
    </a>
    <a href="/games/idnpoker" class="mobile-shortcut-item">
      <img src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-IDNPoker.svg" alt="IDN Poker" />
      <span>IDN Poker</span>
    </a>
    <a href="/games/tablegames" class="mobile-shortcut-item">
      <img src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-TableGames.svg" alt="Table" />
      <span>Table</span>
    </a>
    <a href="/games/slots/Fishing%20Game" class="mobile-shortcut-item">
      <img src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-Fhising.svg" alt="Fhising" />
      <span>Fhising</span>
    </a>
    <a href="https://idnraffle.com/" class="mobile-shortcut-item">
      <img src="https://imgcdn.it.com/fgvd39llmr0q3vtfb90onts6w/membersite/asset/KW-IDNRaffle.svg" alt="IDN Raffle" />
      <span>IDN Raffle</span>
    </a>
  `;

  // Insert before first game item
  firstGameItem.parentNode.insertBefore(menuDiv, firstGameItem);

  // If not in /dashboard route, strip `/games` from internal links
  if (!window.location.pathname.includes("/dashboard")) {
    const shortcutLinks = menuDiv.querySelectorAll(
      "a.mobile-shortcut-item[href^='/games/']"
    );
    shortcutLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.setAttribute("href", href.replace(/^\/games/, ""));
    });
  }
});

//for all device

(function injectButtonRoundingStyle() {
  if (document.head) {
    const style = document.createElement("style");
    style.textContent = `
      .btn.btn-slider,
      .btn.btn-login,
      .btn.btn-default,
      .btn.btn-joinnow,
      .btn.btn-success,
      .btn.btn-depo,
      .nav-tabs .nav-item.show .nav-link,
      .nav-tabs .nav-link.active,
      .nav-tabs .nav-link:focus,
      .nav-tabs .nav-link:hover {
        border-radius: 50px !important;
      }
    `;
    document.head.appendChild(style);
  } else {
    requestAnimationFrame(injectButtonRoundingStyle);
  }
})();

})();  // <-- penutup guard "run once" (window.__kwCustomInit)
