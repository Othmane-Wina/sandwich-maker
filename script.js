let random = Math.floor(Math.random()*20) + 1
console.log(random) 

function timer(timeLeft){
    document.querySelector('.start-image').innerHTML = `<img src="images/${random}.jpeg" alt="a tasty burger" id="start-image">`
    let timerVar = setInterval(() => {
        document.querySelector('.timer').innerHTML = `${timeLeft}`
        timeLeft-=1
        console.log(timeLeft)
        if(timeLeft < 0){
            playAudio()
            clearInterval(timerVar)
            document.querySelector('.sandwich').innerHTML = '<div class="timer"></div><div class="start-image"><div class="build-burger"><div class="ingredient upper pan"></div><div class="ingredient down pan"></div></div></div><p id="para">Can you make the same sandwich now ?</p>'
        }
    }, 1000)
}

function memorize(){
    timer(5)
}

function play(){
    timerVar = setTimeout(() => {
        timer(10)
    }, 5001)
}

let ingredients = []

function add(ing){
    let html = '';
    ingredients.push(ing);
    
    html += '<div class="build-burger"><div class="ingredient upper pan"></div>';

    for(let i=ingredients.length-1; i>=0;i--){
    html += `<div class="${ingredients[i]} ingredient"></div>`
    }

    html += '<div class="ingredient down pan"></div></div>';
    document.querySelector('.start-image').innerHTML = html;
}

function playAudio(){
    var aud = document.createElement("AUDIO");
    if (aud.canPlayType("audio/mpeg")) {
    aud.setAttribute("src","borgir.mp3");
    }
    aud.play()

    document.body.appendChild(aud);
}

memorize()
    play()