var gameBoard = document.getElementById("gameBoard")
var div = []
for(var i = 1; i <= 10; i++){
    div[i]=[]
    for(var j = 1; j <= 10; j++){
        div[i][j] = document.createElement('span')
        div[i][j].setAttribute('id', 'r'+i+'c'+j)
        // div[i][j].textContent = count
        // count--
        gameBoard.appendChild(div[i][j])
    }
}
var allSnakes = ["r10c4", "r8c6", "r6c3", "r4c10", "r3c5", "r1c4"]
for(var i = 0; i < allSnakes.length; i++){
    var snake = document.getElementById(allSnakes[i])
    snake.style.backgroundColor = "#fa3e3e"
    var snakeImage = document.createElement('img')
    snakeImage.setAttribute('src','resources/snake.png')
    snakeImage.style.width = "45px"
    snake.appendChild(snakeImage)
}

var allLadders = ["r10c8", "r8c2", "r7c9", "r5c6", "r4c1", "r2c8"]
for(var i = 0; i < allLadders.length; i++){
    var ladder = document.getElementById(allLadders[i])
    ladder.style.backgroundColor = "#3e8ffa"
    var ladderImage = document.createElement('img')
    ladderImage.setAttribute('src','resources/ladder.png')
    ladderImage.style.width = "45px"
    ladder.appendChild(ladderImage)
}
// var nonNumbers = ["r10c4", "r8c6", "r6c3", "r4c10", "r3c5", "r1c4", "r10c8", "r8c2", "r7c9", "r5c6", "r4c1", "r2c8"]
// count = 100
// for(var i = 1; i <= 10; i++){
//     for(var j = 1; j<= 10; j++){
//         var numbers = document.getElementById('r'+i+'c'+j)
//         // for(var k = 0; k < nonNumbers.length; k++){
//         //     if('r'+i+'c'+j != nonNumbers[k]){
//         //         numbers.textContent = count
//         //         count--
//         //     }
//         // }
//         if(('r'+i+'c'+j) != "r10c4" || 'r'+i+'c'+j != "r8c6" || 'r'+i+'c'+j != "r6c3" || 'r'+i+'c'+j != "r4c10" || 'r'+i+'c'+j != "r3c5" || 'r'+i+'c'+j != "r1c4" || 'r'+i+'c'+j != "r10c8" || 'r'+i+'c'+j != "r8c2" || 'r'+i+'c'+j != "r7c9" || 'r'+i+'c'+j != "r5c6" || 'r'+i+'c'+j != "r4c1" || 'r'+i+'c'+j != "r2c8"){
//             numbers.textContent = count
//             count--
//         }
//         else{
//             count--
//         }
//     }
// }

var start = document.getElementById("r10c10")
start.style.backgroundColor = "#67cc63"
var startImage = document.createElement('img')
startImage.setAttribute('src','resources/start.png')
startImage.style.width = "35px"
startImage.style.marginTop = "7px"
start.appendChild(startImage)

var goal = document.getElementById("r1c1")
goal.style.backgroundColor = "#e6b105"
var winnerImage = document.createElement('img')
winnerImage.setAttribute('src','resources/winner.png')
winnerImage.style.width = "35px"
winnerImage.style.marginTop = "7px"
goal.appendChild(winnerImage)

function startGame(){
    var playerOne = document.getElementById("playerOne").value
    var playerTwo = document.getElementById("playerTwo").value
    if(playerOne == "" || playerTwo == ""){
        alert("To start, provide both players name!")
    }
    var playerOneName = document.getElementById("playerOneName")
    var playerTwoName = document.getElementById("playerTwoName")
    playerOneName.innerHTML = playerOne
    playerTwoName.innerHTML = playerTwo
}



function rollDice1(){
    var dice1 = document.getElementById("dice1")
    var dice2 = document.getElementById("dice2")
    dice1.style.visibility = "none"
    var h1 = document.getElementById("diceValue")

    function random(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min)) + min;
    }
    var diceNum = random(1,7);
    h1.innerHTML = diceNum
    // while(diceNum == 0){
    //     diceNum = random(7)
    // }
    // if(diceNum != 0){
    //     h1.innerHTML = diceNum
    // }
    // else{
    //     diceNum = random(7)
    //     h1.innerHTML = diceNum
    // }

    var playerOnePosition = ["r10c10"]
    var newPosition1 = []
    for(var i = 10; i >= 1; i--){
        for(var j = 10; j >= 1; j--){
            if(playerOnePosition == 'r'+i+'c'+j){
                for(var k = j; k >= diceNum; k--){
                    j
                }
                j = j - diceNum
                if(j)
                newPosition1 = 'r'+i+'c'+j


                var goal = document.getElementById("r1c1")
                goal.style.backgroundColor = "#e6b105"
                var winnerImage = document.createElement('img')
                winnerImage.setAttribute('src','resources/winner.png')
                winnerImage.style.width = "35px"
                winnerImage.style.marginTop = "7px"
                goal.appendChild(winnerImage)
            }
        }
    }
}
function rollDice2(){
    var dice1 = document.getElementById("dice1")
    var dice2 = document.getElementById("dice2")
    var h1 = document.getElementById("diceValue")

    function random(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min)) + min;
    }
    var diceNum = random(1,7);
    h1.innerHTML = diceNum
    // while(diceNum == 0){
    //     diceNum = random(7)
    // }
    // if(diceNum != 0){
    //     h1.innerHTML = diceNum
    // }
    // else{
    //     diceNum = random(7)
    //     h1.innerHTML = diceNum
    // }
}

