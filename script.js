const frame = document.querySelector(".frame")
const title = document.querySelector(".title")
const dbutt = document.querySelector(".deltabutton")

let titles = {
    "0"  : "Celestial Blanket",
    "1"  : "TEST",
    "2"  : "TEST",
    "3"  : "TEST",
    "4"  : "TEST",
    "5"  : "TEST",
    "6"  : "If You Cut Down A Tree And Look At The Rings, You Can See How Old It Is!",
    "7"  : "TEST",
    "8"  : "TEST",
    "9"  : "TEST",
    "10" : "TEST",
    "11" : "TEST",
    "12" : "TEST",
    "13" : "TEST",
    "14" : "TEST",
    "15" : "TEST",
    "16" : "TEST",
    "17" : "TEST",
    "18" : "TEST",
    "19" : "TEST",
    "21" : "TEST",
    "22" : "TEST",
    "23" : "If Something Travelled Faster Than The Speed Of Light, Would You See It Coming?",
    "24" : "TEST",
    "25" : "TEST",
    "26" : "TEST",
    "27" : "TEST",
    "28" : "TEST",
    "29" : "TEST",
    "30" : "TEST",
    "31" : "TEST",
    "32" : "TEST",
    "33" : "TEST",
    "34" : "TEST",
    "35" : "TEST",
    "36" : "TEST",
    "37" : "TEST",
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

    if (!anim){
        frame.style.animation = "ash 1s ease-out"; title.style.animation = "ash 0.5s ease-out"
        frame.src = "img/" + img + ".png"; title.textContent = titles[img]
        setTimeout(function(){frame.style.animation = ""; title.style.animation = ""; for (let x = 0; x < blist.length; x++){blist[x].removeAttribute("disabled")}}, 500)
        return
    }

    frame.style.animation = "flash 1s ease-in-out"; title.style.animation = "flash 1s ease-in-out"
    setTimeout(function(){frame.src = "img/" + img + ".png"; title.textContent = titles[img]}, 500)
    setTimeout(function(){frame.style.animation = ""; title.style.animation = ""; for (let x = 0; x < blist.length; x++){blist[x].removeAttribute("disabled")}}, 1000)
}

change(0, 0, false)