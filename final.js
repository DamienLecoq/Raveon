import {
  TIMINGS,
  ACTIVE_LINK_STYLE,
  IMAGES,
  LINKS,
  EMAILS,
  EMBEDS,
  TEXTS,
  COLORS,
  META
} from "./constants.js";

/* =========================
   SÉLECTION DOM
========================= */

const root = document.documentElement;
const backgroundImage = document.getElementById("background-image");

const lightsOffText = document.getElementById("lightsOffText");
const boutonLightsOff = document.getElementById("myButton");
const lightsOffDiv = document.getElementById("lightsOffMode");

const raveOnDiv = document.getElementById("raveOnMode");
const raveOnText = document.getElementById("raveOnText");
const raveonLogo = document.getElementById("raveonLogo");

const bookingText = document.getElementById("bookingText");
const releasesText = document.getElementById("releasesText");

const lightBackground = document.getElementById("light-background");
const releasesDiv = document.getElementById("releasesPart");
const popUpEvent = document.getElementById("popUp-Event");

const RaveMiddlePart = document.getElementById("RaveMiddlePart");
const BookingPart = document.getElementById("bookingPart");

const spotifySoundcloud = document.querySelectorAll(".spotifySoundcloud");
const bookingA = document.getElementById("bookingAlink");
const releasesA = document.getElementById("releasesAlink");

/* =========================
   INJECTION DES CONSTANTES
========================= */

function applyConstants() {

  /* META */
  document.title = META.siteTitle;

  const favicon = document.querySelector("link[rel='shortcut icon']");
  if (favicon) favicon.href = IMAGES.favicon;

  /* IMAGES */
  backgroundImage.style.backgroundImage = `url("${IMAGES.background}")`;
  lightsOffText.src = IMAGES.lightsOffText;
  raveOnText.src = IMAGES.raveOnText;
  raveonLogo.src = IMAGES.raveonLogo;
  document.getElementById("popUpFlyer").src = IMAGES.nextShowFlyer;

  document.querySelectorAll(".star-image")
    .forEach(el => el.src = IMAGES.star);

  /* LIENS */
  document.getElementById("nextShowLink").href = LINKS.nextShow;
  document.getElementById("instagram").href = LINKS.instagram;
  document.getElementById("spotify").href = LINKS.spotify;
  document.getElementById("tiktok").href = LINKS.tiktok;

  /* EMAILS */
  const demosLink = document.getElementById("demosEmail");
  demosLink.href = `mailto:${EMAILS.demos}`;
  demosLink.textContent = EMAILS.demos;

  const bookingLink = document.getElementById("bookingEmail");
  bookingLink.href = `mailto:${EMAILS.booking}`;
  bookingLink.textContent = EMAILS.booking;

  /* EMBEDS */
  document.getElementById("spotifyEmbed").src = EMBEDS.spotify;
  document.getElementById("soundcloudEmbed").src = EMBEDS.soundcloud;

  /* TEXTES */
  bookingA.textContent = TEXTS.booking;
  releasesA.textContent = TEXTS.releases;
  document.getElementById("nextShowLabel").textContent = TEXTS.nextShowLabel;
  document.getElementById("demosTitle").textContent = TEXTS.demos;
  document.getElementById("bookingTitle").textContent = TEXTS.bookingTitle;
  document.getElementById("socialsTitle").textContent = TEXTS.socials;

  /* COULEURS CSS */
  root.style.setProperty("--bandeau-from", COLORS.bandeauFrom);
  root.style.setProperty("--bandeau-to", COLORS.bandeauTo);
}

applyConstants();

/* =========================
   ETAT NAVIGATION
========================= */

let releasesIsActive = false;
let bookingIsActive = false;

/* =========================
   SPOTLIGHT + PARALLAXE
========================= */

const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

if (!isTouchDevice) {

  root.addEventListener("mousemove", (e) => {
    root.style.setProperty("--x", e.clientX + "px");
    root.style.setProperty("--y", e.clientY + "px");
  });

  document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 35;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 35;
    backgroundImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
}

/* =========================
   INTRO ANIMATION
========================= */

raveOnText.style.display = "none";
lightsOffText.classList.add("simpleFadePlusTransformAnim");

setTimeout(() => {
  boutonLightsOff.style.display = "inline-block";
  boutonLightsOff.classList.add("fadeUpAnimation");
}, TIMINGS.buttonAppear);

boutonLightsOff.addEventListener("click", () => {

  lightsOffText.classList.remove("simpleFadePlusTransformAnim");
  lightsOffText.classList.add("fadeOutAnimation");

  boutonLightsOff.classList.remove("fadeUpAnimation");
  boutonLightsOff.classList.add("fadeOuAndSkewtAnimation");

  lightBackground.classList.add("simpleFadeReverseAnimation");

  setTimeout(() => {
    raveOnText.style.display = "inline-block";
    raveOnText.classList.add("fadeInAnimation");
    raveOnDiv.style.zIndex = 2;
    releasesDiv.style.zIndex = 3;
  }, TIMINGS.raveOnTextAppear);

  setTimeout(() => {
    lightsOffText.style.display = "none";
    boutonLightsOff.style.display = "none";

    [raveonLogo, bookingText, releasesText].forEach(el => {
      el.style.display = "inline-block";
      el.classList.add("simpleFadeAnimation");
    });

    lightsOffDiv.classList.add("opacityToZeroAnimation");
  }, TIMINGS.lightsOffHide);

  setTimeout(() => {
    popUpEvent.classList.add("popUpAnimation");
  }, TIMINGS.popUpAppear);

  setTimeout(() => {
    lightsOffDiv.style.display = "none";
  }, TIMINGS.lightsOffRemove);
});

/* =========================
   NAVIGATION PANNEAUX
========================= */

function setBlur(active) {
  RaveMiddlePart.classList.toggle("blurEffect", active);
  backgroundImage.classList.toggle("blurEffect", active);
  popUpEvent.classList.toggle("blurEffect", active);
}

function toggleReleases(forceClose = false) {

  if (forceClose || releasesIsActive) {

    releasesIsActive = false;
    releasesA.style.color = "";
    releasesA.style.fontSize = "";
    setBlur(false);

    spotifySoundcloud.forEach(el => {
      el.classList.remove("fadeUpAndNotSkewAnim");
      el.classList.add("fadeUpAndNotSkewAnimReverse");
    });

  } else {

    releasesIsActive = true;
    releasesA.style.color = ACTIVE_LINK_STYLE.color;
    releasesA.style.fontSize = ACTIVE_LINK_STYLE.fontSize;
    setBlur(true);

    spotifySoundcloud.forEach(el => {
      el.classList.remove("fadeUpAndNotSkewAnimReverse");
      el.classList.add("fadeUpAndNotSkewAnim");
    });
  }
}

function toggleBooking(forceClose = false) {

  if (forceClose || bookingIsActive) {

    bookingIsActive = false;
    bookingA.style.color = "";
    bookingA.style.fontSize = "";
    setBlur(false);

    BookingPart.classList.remove("bookingAnim");
    BookingPart.classList.add("bookingAnimReverse");

  } else {

    bookingIsActive = true;
    bookingA.style.color = ACTIVE_LINK_STYLE.color;
    bookingA.style.fontSize = ACTIVE_LINK_STYLE.fontSize;
    setBlur(true);

    BookingPart.classList.remove("bookingAnimReverse");
    BookingPart.classList.add("bookingAnim");
  }
}

/* =========================
   EVENTS
========================= */

releasesText.addEventListener("click", () => {
  if (bookingIsActive) toggleBooking(true);
  toggleReleases();
});

bookingText.addEventListener("click", () => {
  if (releasesIsActive) toggleReleases(true);
  toggleBooking();
});

raveonLogo.addEventListener("click", () => {
  if (releasesIsActive) toggleReleases(true);
  if (bookingIsActive) toggleBooking(true);
});