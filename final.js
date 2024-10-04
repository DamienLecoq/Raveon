var pos = document.documentElement;
const lightsOffText = document.getElementById("lightsOffText");
const boutonLightsOff = document.getElementById("myButton");
const lightsOffDiv = document.getElementById("lightsOffMode");
const raveOnDiv = document.getElementById("raveOnMode");
const raveOnText = document.getElementById("raveOnText");
const bookingText = document.getElementById("bookingText");
const releasesText = document.getElementById("releasesText");
const raveonLogo = document.getElementById("raveonLogo");
const lightbackground = document.getElementById("light-background");
const releasesDiv = document.getElementById("releasesPart");
const popUpEvent = document.getElementById("popUp-Event");

raveOnText.style.display = "none";
lightsOffText.classList.add("simpleFadePlusTransformAnim");

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

    lightbackground.classList.add("simpleFadeReverseAnimation")

    setTimeout(() => {
        raveOnText.style.display = "inline-block";
        raveOnText.classList.add("fadeInAnimation")
        raveOnDiv.style.zIndex = 2;
        releasesDiv.style.zIndex = 3;
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
        popUpEvent.classList.add("popUpAnimation");
    }, 2500);

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


/*Play Music Part*/

const RaveMiddlePart = document.getElementById("RaveMiddlePart");
const RaveBottomPart = document.getElementById("RaveBottomPart");
const backgroundImage = document.getElementById("background-image");
const spotifySoundcloud = document.querySelectorAll(".spotifySoundcloud");
const bookingA = document.getElementById("bookingAlink");
const releasesA = document.getElementById("releasesAlink");

const AdressesPart = document.getElementById("adresses");

const BookingPart = document.getElementById("bookingPart");


let releasesIsActive = false;
let bookingIsActive = false;

releasesText.addEventListener("click", () =>{
    if(releasesIsActive){
        releasesIsActive = false;
        releasesA.style.color = "";
        releasesA.style.fontSize = "";
        bookingA.style.pointerEvents = "";
        popUpEvent.style.pointerEvents = ""; 
        RaveMiddlePart.classList.remove("blurEffect");
        backgroundImage.classList.remove("blurEffect");
        popUpEvent.classList.remove("blurEffect");
        for(let i = 0; i <= spotifySoundcloud.length - 1; i++){
            spotifySoundcloud[i].classList.remove("fadeUpAndNotSkewAnim");
            spotifySoundcloud[i].classList.add("fadeUpAndNotSkewAnimReverse");
        }
    }
    else{
        releasesIsActive = true;
        releasesA.style.color = "rgba(230, 157, 0, 1)";
        releasesA.style.fontSize = "16px";
        popUpEvent.style.pointerEvents = "none"; 
        RaveMiddlePart.classList.add("blurEffect");
        backgroundImage.classList.add("blurEffect");
        popUpEvent.classList.add("blurEffect");
        for(let i = 0; i <= spotifySoundcloud.length - 1; i++){
            spotifySoundcloud[i].classList.remove("fadeUpAndNotSkewAnimReverse");
            spotifySoundcloud[i].classList.add("fadeUpAndNotSkewAnim");
        }
    }
    if(bookingIsActive){
        bookingIsActive = false;
        bookingA.style.color = "";
        bookingA.style.fontSize = "";
        releasesA.style.pointerEvents = "";
        BookingPart.style.pointerEvents = "";
        popUpEvent.style.pointerEvents = ""; 
        BookingPart.classList.remove("bookingAnim");
        BookingPart.classList.add("bookingAnimReverse");
    }
})


bookingText.addEventListener("click", () => {
    if (!bookingIsActive){
        bookingIsActive = true;
        bookingA.style.color = "rgba(230, 157, 0, 1)";
        bookingA.style.fontSize = "16px";
        BookingPart.style.pointerEvents = "all";
        popUpEvent.style.pointerEvents = "none"; 
        RaveMiddlePart.classList.add("blurEffect");
        backgroundImage.classList.add("blurEffect");
        popUpEvent.classList.add("blurEffect");
        BookingPart.classList.remove("bookingAnimReverse");
        BookingPart.classList.add("bookingAnim");  
    }
    else{
        bookingIsActive = false;
        bookingA.style.color = "";
        bookingA.style.fontSize = "";
        releasesA.style.pointerEvents = "";
        BookingPart.style.pointerEvents = "";
        popUpEvent.style.pointerEvents = ""; 
        RaveMiddlePart.classList.remove("blurEffect");
        backgroundImage.classList.remove("blurEffect");
        popUpEvent.classList.remove("blurEffect");
        BookingPart.classList.remove("bookingAnim");
        BookingPart.classList.add("bookingAnimReverse");
    }
    if(releasesIsActive){
        releasesIsActive = false;
        releasesA.style.color = "";
        releasesA.style.fontSize = "";
        bookingA.style.pointerEvents = "";
        popUpEvent.style.pointerEvents = ""; 
        for(let i = 0; i <= spotifySoundcloud.length; i++){
            spotifySoundcloud[i].classList.remove("fadeUpAndNotSkewAnim");
            spotifySoundcloud[i].classList.add("fadeUpAndNotSkewAnimReverse");
        }
    }
})

raveonLogo.addEventListener("click", () => {
    if(releasesIsActive){
        releasesIsActive = false;
        releasesA.style.color = "";
        releasesA.style.fontSize = "";
        bookingA.style.pointerEvents = "";
        popUpEvent.style.pointerEvents = ""; 
        RaveMiddlePart.classList.remove("blurEffect");
        backgroundImage.classList.remove("blurEffect");
        popUpEvent.classList.remove("blurEffect");
        for(let i = 0; i <= spotifySoundcloud.length - 1; i++){
            spotifySoundcloud[i].classList.remove("fadeUpAndNotSkewAnim");
            spotifySoundcloud[i].classList.add("fadeUpAndNotSkewAnimReverse");
        }
    }
    if(bookingIsActive){
        bookingIsActive = false;
        bookingA.style.color = "";
        bookingA.style.fontSize = "";
        releasesA.style.pointerEvents = "";
        BookingPart.style.pointerEvents = "";
        popUpEvent.style.pointerEvents = ""; 
        RaveMiddlePart.classList.remove("blurEffect");
        backgroundImage.classList.remove("blurEffect");
        popUpEvent.classList.remove("blurEffect");
        BookingPart.classList.remove("bookingAnim");
        BookingPart.classList.add("bookingAnimReverse");
    }
})

