const dataset = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

// filling exts

const ext = document.querySelector("main");

dataset.forEach((data) => {
  let checked = "";
  if (data.isActive) {
    checked = "checked";
  }

  ext.innerHTML += `<div class="ext">
          <div class="ext-body">
            <img src=${data.logo} alt="" />
            <div class="desc">
              <h3>${data.name}</h3>
              <p>${data.description}</p>
            </div>
          </div>
          <div class="footer">
            <button class="remove">Remove</button>
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" id="mySwitch" ${checked} />
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>`;
});

// dark

// const darkLogo = "./assets/images/logo-dark.svg";
// const lightLogo = "./assets/images/logo.svg";

// if (document.body.classList.contains("darkmode")) {
//   document.querySelector(".logo").innerHTML = "";
//   document.querySelector(".logo").innerHTML = `<img src=${darkLogo} alt="" />`;
// } else {
//   document.querySelector(".logo").innerHTML = "";
//   document.querySelector(".logo").innerHTML = `<img src=${lightLogo} alt="" />`;
// }

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.querySelector(".theme");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") {
  enableDarkMode();
}

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});

// HARD-CODED TABBING

const activeBtns = document.querySelectorAll(".btn");
activeBtns[0].addEventListener("click", () => {
  activeBtns.forEach((btn) => btn.classList.remove("active"));
  activeBtns[0].classList.add("active");
  ext.innerHTML = "";

  dataset.forEach((data) => {
    let checked = "";
    if (data.isActive) {
      checked = "checked";
    }

    ext.innerHTML += `<div class="ext">
          <div class="ext-body">
            <img src=${data.logo} alt="" />
            <div class="desc">
              <h3>${data.name}</h3>
              <p>${data.description}</p>
            </div>
          </div>
          <div class="footer">
            <button class="remove">Remove</button>
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" id="mySwitch" ${checked} />
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>`;
  });
});

activeBtns[1].addEventListener("click", () => {
  activeBtns.forEach((btn) => btn.classList.remove("active"));
  activeBtns[1].classList.add("active");
  ext.innerHTML = "";

  const activeExts = dataset.filter((active) => active.isActive === true);
  activeExts.forEach((activeExt) => {
    let checked = "";
    if (activeExt.isActive) {
      checked = "checked";
    }
    ext.innerHTML += `<div class="ext">
          <div class="ext-body">
            <img src=${activeExt.logo} alt="" />
            <div class="desc">
              <h3>${activeExt.name}</h3>
              <p>${activeExt.description}</p>
            </div>
          </div>
          <div class="footer">
            <button class="remove">Remove</button>
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" id="mySwitch" ${checked} />
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>`;
  });
});

activeBtns[2].addEventListener("click", () => {
  activeBtns.forEach((btn) => btn.classList.remove("active"));
  activeBtns[2].classList.add("active");
  ext.innerHTML = "";

  const activeExts = dataset.filter((active) => active.isActive === false);
  activeExts.forEach((activeExt) => {
    let checked = "";
    if (activeExt.isActive) {
      checked = "checked";
    }
    ext.innerHTML += `<div class="ext">
          <div class="ext-body">
            <img src=${activeExt.logo} alt="" />
            <div class="desc">
              <h3>${activeExt.name}</h3>
              <p>${activeExt.description}</p>
            </div>
          </div>
          <div class="footer">
            <button class="remove">Remove</button>
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" id="mySwitch" ${checked} />
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>`;
  });
});
