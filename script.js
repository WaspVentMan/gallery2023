const frame = document.querySelector(".frame")
const title = document.querySelector(".title")
const dbutt = document.querySelector(".deltabutton")
const favicon = document.querySelector(".favicon")
const splash = document.querySelector(".splash")

let looming = []

let splashes = [
    "MADE WIH HATE, NOT LOVE",
    "PORGAMING :)",
    "IMAGE UNLOADING?",
    "WASPVENTMAN.CO.UK",
    "UNINSTALLING ANTIMATTER DIMENSIONS",
    "404",
    "PIPEBOMB + MAILBOX = ?",
    "OOPS, ALL SPLASHES",
    "WHAT IS THIS 'JS' YOU SPEAK OF?",
    "HELP! I LOST THE SPLASH TEXT!",
    "TEST? TEST?! TEEEEEEEST!",
    "HOLY CRAP IT'S THE GUY FROM FORTNITE!",
    "BEST VALUE!",
    "LSSB IS DEAD?!",
    "O100 IS DEAD?!",
    "WDBM IS DEAD?!",
    "SAT IS DONE?!",
    "ALL THE ART CAN BE FOUND ON MY NEWGROUNDS PAGE!",
    "WASPVENTMAN.NEWGROUNDS.COM"
]

let titles = {
    "0"  : "Celestial Blanket",
    "1"  : "N/A",
    "2"  : "N/A",
    "3"  : "N/A",
    "4"  : "N/A",
    "5"  : "N/A",
    "6"  : "If You Cut Down A Tree And Look At The Rings, You Can See How Old It Is!",
    "7"  : "N/A",
    "8"  : "N/A",
    "9"  : "N/A",
    "10" : "N/A",
    "11" : "N/A",
    "12" : "N/A",
    "13" : "N/A",
    "14" : "N/A",
    "15" : "N/A",
    "16" : "N/A",
    "17" : "N/A",
    "18" : "N/A",
    "19" : "N/A",
    "21" : "N/A",
    "22" : "N/A",
    "23" : "If Something Travelled Faster Than The Speed Of Light, Would You See It Coming?",
    "24" : "N/A",
    "25" : "N/A",
    "26" : "N/A",
    "27" : "N/A",
    "28" : "N/A",
    "29" : "N/A",
    "30" : "N/A",
    "31" : "N/A",
    "32" : "N/A",
    "33" : "N/A",
    "34" : "N/A",
    "35" : "N/A",
    "36" : "N/A",
    "37" : "N/A",
    "38" : "Monolith",
    "39a": "Hag's Delerium: Phase 1",
    "39b": "Hag's Delerium: Phase 2",
    "39c": "Hag's Delerium: Phase 3",
    "39d": "Hag's Delerium: Phase 4",
    "39e": "Hag's Delerium: Phase 5",
    "39f": "Hag's Delerium: Phase 6",
    "39g": "Hag's Delerium: Phase 7",
    "40" : "Viewers Like You.",
    "41" : "Terminal Velocity",
    "42" : "Unsaved Changes",
    "43" : "ReCode"
}

let works = 44
let deltaindex = "abcdefg"

let delta = 39

let cursor = 0
let cursordelta = 0

function change(pm, pmdelta = 0, anim = true){
    if (cursor+pm < 0){
        cursor = 44
    } else if (cursor+pm >= works){
        cursor = -1
    }

    if (cursordelta+pmdelta < 0 || cursordelta+pmdelta >= deltaindex.length){
        return
    }

    if (pm != 0){
        cursordelta = 0
    }

    cursor += pm
    if (cursor == 20){
        cursor += pm
    }

    cursordelta += pmdelta

    let img = cursor

    if (cursor == delta){
        dbutt.style.opacity = "100%"
        img += deltaindex[cursordelta]
    } else {
        dbutt.style.opacity = "0%"
    }

    let blist = document.querySelectorAll("button")

    for (let x = 0; x < blist.length; x++){blist[x].setAttribute("disabled", "true")}

    splash.textContent = splashes[Math.round(Math.random()*(splashes.length-1))].toUpperCase()

    document.title = "WVM2023: " + titles[img]

    if (!anim){
        frame.style.animation = "ash 0.5s ease-in-out"; title.style.animation = "ash 0.5s ease-in-out"

        frame.src = "img/" + img + ".png"; title.textContent = titles[img]; favicon.href = "img/" + img + ".png"
        setTimeout(function(){frame.style.animation = ""; title.style.animation = ""; for (let x = 0; x < blist.length; x++){blist[x].removeAttribute("disabled")}}, 500)
        
        return
    }

    frame.style.animation = "flash 1s ease-in-out"; title.style.animation = "flash 1s ease-in-out"

    setTimeout(function(){frame.src = "img/" + img + ".png"; title.textContent = titles[img]; favicon.href = "img/" + img + ".png"}, 500)
    setTimeout(function(){frame.style.animation = ""; title.style.animation = ""; for (let x = 0; x < blist.length; x++){blist[x].removeAttribute("disabled")}}, 1000)
}

change(0, 0, false)