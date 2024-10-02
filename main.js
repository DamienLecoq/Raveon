var pos = document.documentElement;
const lightsOffText = document.getElementById("lightsOffText");
const boutonLightsOff = document.getElementById("myButton");
const lightsOffDiv = document.getElementById("lightsOffMode");
const raveOnDiv = document.getElementById("raveOnMode");
const raveOnText = document.getElementById("raveOnText");
const bookingText = document.getElementById("bookingText");
const releasesText = document.getElementById("releasesText");
const raveonLogo = document.getElementById("raveonLogo");
const spotLeft = document.getElementById("spotLeft");
const spotRight = document.getElementById("spotRight");

raveOnText.style.display = "none";
lightsOffText.classList.add("simpleFadePlusTransformAnim");
spotLeft.classList.add("spotlightAnimation");
spotRight.classList.add("spotlightAnimation");


pos.addEventListener('mousemove', e =>{
        pos.style.setProperty('--x', e.clientX + 'px');
        pos.style.setProperty('--y', e.clientY + 'px');
});

setTimeout(()=> {
    boutonLightsOff.style.display = "inline-block";
    boutonLightsOff.classList.add("fadeUpAnimation");
}, 1000);

boutonLightsOff.addEventListener("click", () => {
    lightsOffText.classList.remove("simpleFadePlusTransformAnim");
    boutonLightsOff.classList.remove("fadeUpAnimation");

    lightsOffText.classList.add("fadeOutAnimation")
    boutonLightsOff.classList.add("fadeOuAndSkewtAnimation");

    setTimeout(() => {
        raveOnText.style.display = "inline-block";
        raveOnText.classList.add("fadeInAnimation")
        raveOnDiv.style.zIndex = 2;
    }, 1000);

    setTimeout(() => {
        lightsOffText.style.display = "none";
        boutonLightsOff.style.display = "none";
    }, 2000);

    setTimeout(() => {
        raveonLogo.style.display = "inline-block";
        bookingText.style.display = "inline-block";
        releasesText.style.display = "inline-block";
        bookingText.classList.add("simpleFadeAnimation");
        releasesText.classList.add("simpleFadeAnimation");
        raveonLogo.classList.add("simpleFadeAnimation");
    }, 2000);

    setTimeout(()=>{
        lightsOffDiv.classList.add("opacityToZeroAnimation")
    }, 2000);

    setTimeout(()=>{
        lightsOffDiv.style.display = "none";
    }, 5000);

})

document.addEventListener('mousemove', function(e) {
    const posX = e.clientX / window.innerWidth;
    const posY = e.clientY / window.innerHeight;
    const backgroundImage = document.getElementById('background-image');
    
    const moveX = (posX - 0.5) * 35;
    const moveY = (posY - 0.5) * 35;

    backgroundImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
});