let random = Math.floor(Math.random()*20) + 1
console.log(random) 

function timer(timeLeft){
    document.querySelector('.start-image').innerHTML = `<img src="images/${random}.jpeg" alt="a tasty burger" id="start-image">`
    let timerVar = setInterval(() => {
        document.querySelector('.timer').innerHTML = `${timeLeft}`
        timeLeft-=1
        console.log(timeLeft)
        if(timeLeft < 0){
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

memorize()
    play()