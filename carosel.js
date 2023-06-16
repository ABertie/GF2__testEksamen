const CAROSEL_SLIDER = document.querySelector(".carosel__slider");
const CAROSEL_FORWARD = document.querySelector(".carosel__forwardArrow");
const CAROSEL_BACK = document.querySelector(".carosel__backArrow");
const SPOTS = document.querySelector(".carosel__nav");
const SLIDE = [
    '<article class="carosel__slide1"><div class="textField"><h1>Teambuilding</h1><p>Jagtanekdoter, bramfri råvaresnak og madlavning i det fri.</p><p>Mød naturmanden Jørgen Skouboe og kokken Nikolai Kirk fra det populære tv-program “Nak og Æd”.</p><button>Læs mere</button></div><img src="./asset/img/COLOURBOX2002681.jpg" alt="Snobrød"></article>','<article class="carosel__slide2"><div class="textField"><h1 class="SpanHeader">Event Centrum skaber<span>DEN HELT RIGTIGE STEMNING</span></h1><div class="textSeparator"></div><p>...i jeres egne rammer (kantine, lager, parkeringskælder), udendørs (skov, strand) eller på hoteller & konferencesteder overalt i Danmark.</p><button class="buttonBorder">Læs mere</button></div><img src="./asset/img/COLOURBOX2556345.jpg" alt="Planlægningsmøde"></article>','<article class="carosel__slide3"><div class="textField"><h1>Erfaring og enagagement</h1><p>Event Centrum har mange års erfaring med udvikling og afholdelse af både store og små arrangementer.</p><p>Hos Event Centrum stræber vi efter, at vores kunder kommer til at opleve glæde og motivation ved hjælp af ekstraordinære oplevelser. Vi vil med vores professionalisme og gode historier skabe grobund for at styrke relationer mellem ledelse og medarbejdere, virksomheden og kunderne.</p><button class="buttonBorder">Læs mere</button></div><img src="./asset/img/COLOURBOX548669.jpg" alt="Middelalder kriger"></article>'
];

var index = 0
CAROSEL_SLIDER.innerHTML = (SLIDE[index])

SLIDE.forEach(function () {
    const CREATESPOT = document.createElement("button")
    CREATESPOT.classList.add('carosel__spot')
    SPOTS.appendChild(CREATESPOT)
})
const BUTTONS = SPOTS.querySelectorAll("button")

CAROSEL_FORWARD.addEventListener("click", shuffleForward);
CAROSEL_BACK.addEventListener("click", shuffleBack);
CAROSEL_SLIDER.addEventListener("animationend", disabelAnimation)

function highlightButton() {
    BUTTONS.forEach(function (button, i) {
        if (index === i) {
            button.classList.add('carosel__highlightButton')
        } else {
            button.classList.remove('carosel__highlightButton')
        }
        button.addEventListener("click", function () {
            if (index < i) {
                CAROSEL_SLIDER.classList.add('animate__fadeOutLeftBig')
            } else {
                CAROSEL_SLIDER.classList.add('animate__fadeOutRightBig')
            }
            index = i
            highlightButton()
        })
    })
}
highlightButton()

function shuffleForward() {
    index++
    if (SLIDE.length === index) {
        index = 0
    }
    CAROSEL_SLIDER.classList.add('animate__fadeOutLeftBig')
    window.highlightButton()
}

function shuffleBack() {
    if (index === 0) {
        index = SLIDE.length
    }
    index--
    CAROSEL_SLIDER.classList.add('animate__fadeOutRightBig')
    window.highlightButton()
}

function disabelAnimation() {
    if (CAROSEL_SLIDER.classList.contains('animate__fadeOutRightBig')) {
        CAROSEL_SLIDER.innerHTML = (SLIDE[index])
        CAROSEL_SLIDER.classList.remove('animate__fadeOutRightBig')
        CAROSEL_SLIDER.classList.add('animate__fadeInLeftBig')
    } else {
        CAROSEL_SLIDER.classList.remove('animate__fadeInLeftBig')
    }

    if (CAROSEL_SLIDER.classList.contains('animate__fadeOutLeftBig')) {
        CAROSEL_SLIDER.innerHTML = (SLIDE[index])
        CAROSEL_SLIDER.classList.remove('animate__fadeOutLeftBig')
        CAROSEL_SLIDER.classList.add('animate__fadeInRightBig')
    } else {
        CAROSEL_SLIDER.classList.remove('animate__fadeInRightBig')
    }
    
}

window.setInterval(shuffleForward, 90000)
    