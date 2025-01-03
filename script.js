let random = Math.floor(Math.random()*20) + 1
console.log(random) 

function timer(timeLeft, timer1){
    document.querySelector('.start-image').innerHTML = `<img src="images/${random}.jpeg" alt="a tasty burger" id="start-image">`
    let timerVar = setInterval(() => {
        let time=''
        document.querySelectorAll('.timer').forEach(e => {
            e.innerHTML = `${timeLeft}`
        })
        timeLeft-=1
        if(timeLeft < 0){
            playAudio()
            clearInterval(timerVar)
            let l = ["meat", "cheese", "tomato", "lettuce", "onion", "pickles", "sauce"]
            if(timer1){
                time += `
                    <div class="timer e1"></div>
                    <div class="timer e2"></div>
                    <div class="start-image">
                        <div class="scrolable">
                            <div class="build-burger">
                                <div class="ingredient upper pan"></div>
                                <div class="ingredient down pan"></div>
                            </div>
                        </div>    
                    </div>
                    <p id="para">Can you make the same sandwich ?</p>
                `
                document.querySelector('.sandwich').innerHTML = time;
                for(let i=0;i<l.length;i++){
                    document.querySelector(`.b${i+1}`).innerHTML = `<button onclick="add('${l[i]}')">add ${l[i]}</button>`
                }
            }
            else{ 
                result();
                for(let i=0;i<l.length;i++){
                    document.querySelector(`.b${i+1}`).innerHTML = `<button>add ${l[i]}</button>`
                }
            }
        }
    }, 1000)
}

function playAudio(){
    let borgir = new Audio("./borgir.mp3");
    borgir.play();
}

const comparison = {
    img1: ["lettuce", "onion", "meat", "cheese", "tomato", "lettuce"],
    img2: ["lettuce", "meat", "tomato", "pickles", "onion"],
    img3: ["sauce", "lettuce", "tomato", "meat", "cheese", "meat", "cheese"],
    img4: ["lettuce", "meat", "cheese", "tomato", "pickles", "onion"],
    img5: ["meat", "cheese", "meat", "cheese", "tomato", "onion", "lettuce", "lettuce"],
    img6: ["sauce", "lettuce", "tomato", "onion", "meat", "cheese"],
    img7: ["sauce", "pickles", "tomato", "lettuce", "meat", "cheese", "sauce"],
    img8: ["meat", "cheese", "pickles", "sauce"],
    img9: ["lettuce", "onion", "meat", "cheese", "tomato"],
    img10: ["lettuce", "meat", "onion", "tomato", "lettuce"],
    img11: ["lettuce", "meat", "cheese", "meat", "cheese", "sauce", "pickles", "lettuce", "tomato"],
    img12: ["meat", "sauce", "onion", "lettuce"],
    img13: ["lettuce", "meat", "cheese", "lettuce", "tomato", "sauce"],
    img14: ["sauce", "lettuce", "tomato", "onion", "meat", "cheese", "meat", "cheese", "pickles", "sauce"],
    img15: ["lettuce", "meat", "tomato",],
    img16: ["meat", "cheese", "meat", "cheese", "meat","onion", "pickles","tomato", "lettuce"],
    img17: ["lettuce", "pickles", "meat", "sauce"],
    img18: ["lettuce", "sauce", "pickles", "meat", "cheese", "meat", "cheese", "tomato", "lettuce"],
    img19: ["tomato", "lettuce", "meat", "cheese", "onion", "meat", "cheese"],
    img20: ["lettuce", "meat", "cheese", "lettuce", "tomato", "onion", "lettuce"],
}

let ingredients = [];

function add(ing){
    let html = '';
    ingredients.push(ing);
    html+='<div class="scrolable">'
    html += '<div class="build-burger"><div class="ingredient upper pan"></div>';
    
    for(let i=ingredients.length-1; i>=0;i--){
        html += `<div class="${ingredients[i]} ingredient"></div>`
    }
    
    html += '<div class="ingredient down pan"></div></div></div>';
    document.querySelector('.start-image').innerHTML = html;
}

function getResult(){
    console.log(JSON.stringify(ingredients));
    console.log(JSON.stringify(comparison[`img${random}`]));
    return JSON.stringify(ingredients) === JSON.stringify(comparison[`img${random}`]);
}

function result() {
    let html = `
    <a href="gamePage.html"><button class="element e1">Try Again</button></a>
    <a href="description.html"><button class="element e2">Description</button></a>
    `;
    if(getResult()){
        html += `
        <div class="start-image">
        <img src="images/win.jpeg" alt="sigma hasbula" id="start-image">
        </div>
        <p id="para">You won</p>
        `;
    }
    else {
        html += `
        <div class="start-image">
        <img src="images/lose.jpeg" alt="sad hasbula" id="start-image">
        </div>
        <p id="para">You lost</p>
        `;
    }
    document.querySelector('.sandwich').innerHTML = html;
}

function memorize(){
    timer(5, true)
}

function play(){
    timerVar = setTimeout(() => {
        timer(10, false)
    }, 5000)
}

memorize()
play()