import { TIMINGS, ACTIVE_LINK_STYLE, IMAGES, LINKS, EMAILS, EMBEDS, TEXTS, COLORS } from "./constants.js";

// --- Sélection des éléments DOM ---
const root           = document.documentElement;
const lightsOffText  = document.getElementById("lightsOffText");
const boutonLightsOff= document.getElementById("myButton");
const lightsOffDiv   = document.getElementById("lightsOffMode");
const raveOnDiv      = document.getElementById("raveOnMode");
const raveOnText     = document.getElementById("raveOnText");
const bookingText    = document.getElementById("bookingText");
const releasesText   = document.getElementById("releasesText");
const raveonLogo     = document.getElementById("raveonLogo");
const lightBackground= document.getElementById("light-background");
const releasesDiv    = document.getElementById("releasesPart");
const popUpEvent     = document.getElementById("popUp-Event");
const backgroundImage= document.getElementById("background-image");
const RaveMiddlePart = document.getElementById("RaveMiddlePart");
const BookingPart    = document.getElementById("bookingPart");
const spotifySoundcloud = document.querySelectorAll(".spotifySoundcloud");
const bookingA       = document.getElementById("bookingAlink");
const releasesA      = document.getElementById("releasesAlink");

// --- Injection des constantes dans le DOM ---
function applyConstants() {
  document.getElementById("lightsOffText").src  = IMAGES.lightsOffText;
  document.getElementById("raveOnText").src      = IMAGES.raveOnText;
  document.getElementById("raveonLogo").src      = IMAGES.raveonLogo;
  document.getElementById("popUpFlyer").src      = IMAGES.nextShowFlyer;
  document.querySelectorAll(".star-image").forEach(el => el.src = IMAGES.star);

  document.getElementById("nextShowLink").href   = LINKS.nextShow;
  document.getElementById("instagram").href      = LINKS.instagram;
  document.getElementById("spotify").href        = LINKS.spotify;
  document.getElementById("tiktok").href         = LINKS.tiktok;

  const demosLink   = document.getElementById("demosEmail");
  demosLink.href        = `mailto:${EMAILS.demos}`;
  demosLink.textContent = EMAILS.demos;

  const bookingLink = document.getElementById("bookingEmail");
  bookingLink.href        = `mailto:${EMAILS.booking}`;
  bookingLink.textContent = EMAILS.booking;

  document.getElementById("spotifyEmbed").src    = EMBEDS.spotify;
  document.getElementById("soundcloudEmbed").src = EMBEDS.soundcloud;

  document.getElementById("bookingAlink").textContent  = TEXTS.booking;
  document.getElementById("releasesAlink").textContent = TEXTS.releases;
  document.getElementById("nextShowLabel").textContent = TEXTS.nextShowLabel;
  document.getElementById("demosTitle").textContent    = TEXTS.demos;
  document.getElementById("bookingTitle").textContent  = TEXTS.bookingTitle;
  document.getElementById("socialsTitle").textContent  = TEXTS.socials;

  // --- Variables CSS ---
  root.style.setProperty("--bandeau-from", COLORS.bandeauFrom);
  root.style.setProperty("--bandeau-to",   COLORS.bandeauTo);
}

applyConstants();

// --- État de la navigation ---
let releasesIsActive = false;
let bookingIsActive  = false;

/* =========================
   DETECTION TACTILE + SPOTLIGHT
   - Mobile: vignette seulement (pas de lampe)
   - Desktop: spotlight souris
   ========================= */

// Détection tactile robuste (évite les différences entre émulation et vrai téléphone)
const touchLike =
  window.matchMedia("(hover: none), (pointer: coarse), (any-hover: none), (any-pointer: coarse)").matches ||
  navigator.maxTouchPoints > 0 ||
  "ontouchstart" in window;

// Force une classe CSS pour le style mobile
document.documentElement.classList.toggle("is-touch", touchLike);

// Fallback : centre la lumière si jamais les variables ne sont pas définies
root.style.setProperty("--x", "50%");
root.style.setProperty("--y", "45%");

// Spotlight souris (desktop uniquement)
if (!touchLike) {
  root.addEventListener("mousemove", (e) => {
    root.style.setProperty("--x", e.clientX + "px");
    root.style.setProperty("--y", e.clientY + "px");
  });
}

// --- Effet parallaxe sur l'image de fond (desktop uniquement) ---
if (!touchLike) {
  document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX / window.innerWidth  - 0.5) * 35;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 35;
    backgroundImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
}

// --- Séquence d'intro : Lights Off → Rave On ---
raveOnText.style.display = "none";
lightsOffText.classList.add("simpleFadePlusTransformAnim");

setTimeout(() => {
  boutonLightsOff.style.display = "inline-block";
  boutonLightsOff.classList.add("fadeUpAnimation");
}, TIMINGS.buttonAppear);

boutonLightsOff.addEventListener("click", () => {
  // Animations de sortie (Lights Off)
  lightsOffText.classList.remove("simpleFadePlusTransformAnim");
  lightsOffText.classList.add("fadeOutAnimation");
  boutonLightsOff.classList.remove("fadeUpAnimation");
  boutonLightsOff.classList.add("fadeOuAndSkewtAnimation");
  lightBackground.classList.add("simpleFadeReverseAnimation");

  // Apparition du texte Rave On
  setTimeout(() => {
    raveOnText.style.display = "inline-block";
    raveOnText.classList.add("fadeInAnimation");
    raveOnDiv.style.zIndex = 2;
    releasesDiv.style.zIndex = 3;
  }, TIMINGS.raveOnTextAppear);

  // Masquage des éléments Lights Off + apparition des éléments Rave On
  setTimeout(() => {
    lightsOffText.style.display = "none";
    boutonLightsOff.style.display = "none";

    [raveonLogo, bookingText, releasesText].forEach((el) => {
      el.style.display = "inline-block";
      el.classList.add("simpleFadeAnimation");
    });

    lightsOffDiv.classList.add("opacityToZeroAnimation");
  }, TIMINGS.lightsOffHide);

  // Pop-up événement
  setTimeout(() => {
    popUpEvent.classList.add("popUpAnimation");
  }, TIMINGS.popUpAppear);

  // Suppression finale du div Lights Off
  setTimeout(() => {
    lightsOffDiv.style.display = "none";
  }, TIMINGS.lightsOffRemove);
});

// --- Helpers navigation ---

/** Active ou désactive l'effet de flou sur les éléments de fond */
function setBlur(active) {
  RaveMiddlePart.classList.toggle("blurEffect", active);
  backgroundImage.classList.toggle("blurEffect", active);
  popUpEvent.classList.toggle("blurEffect", active);
  popUpEvent.style.pointerEvents = active ? "none" : "";
}

/** Ouvre/ferme le panneau Releases */
function toggleReleases(forceClose = false) {
  if (forceClose || releasesIsActive) {
    releasesIsActive = false;
    releasesA.style.color = "";
    releasesA.style.fontSize = "";
    bookingA.style.pointerEvents = "";
    setBlur(false);
    spotifySoundcloud.forEach((el) => {
      el.classList.remove("fadeUpAndNotSkewAnim");
      el.classList.add("fadeUpAndNotSkewAnimReverse");
    });
  } else {
    releasesIsActive = true;
    releasesA.style.color    = ACTIVE_LINK_STYLE.color;
    releasesA.style.fontSize = ACTIVE_LINK_STYLE.fontSize;
    setBlur(true);
    spotifySoundcloud.forEach((el) => {
      el.classList.remove("fadeUpAndNotSkewAnimReverse");
      el.classList.add("fadeUpAndNotSkewAnim");
    });
  }
}

/** Ouvre/ferme le panneau Booking */
function toggleBooking(forceClose = false) {
  if (forceClose || bookingIsActive) {
    bookingIsActive = false;
    bookingA.style.color = "";
    bookingA.style.fontSize = "";
    releasesA.style.pointerEvents = "";
    BookingPart.style.pointerEvents = "";
    setBlur(false);
    BookingPart.classList.remove("bookingAnim");
    BookingPart.classList.add("bookingAnimReverse");
  } else {
    bookingIsActive = true;
    bookingA.style.color    = ACTIVE_LINK_STYLE.color;
    bookingA.style.fontSize = ACTIVE_LINK_STYLE.fontSize;
    BookingPart.style.pointerEvents = "all";
    setBlur(true);
    BookingPart.classList.remove("bookingAnimReverse");
    BookingPart.classList.add("bookingAnim");
  }
}

// --- Écouteurs de navigation ---
releasesText.addEventListener("click", () => {
  if (bookingIsActive) toggleBooking(true);
  toggleReleases();
});

bookingText.addEventListener("click", () => {
  if (releasesIsActive) toggleReleases(true);
  toggleBooking();
});

// Clic sur le logo = ferme tout
raveonLogo.addEventListener("click", () => {
  if (releasesIsActive) toggleReleases(true);
  if (bookingIsActive)  toggleBooking(true);
});