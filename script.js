var dice1 = document.getElementById("dice1")
var dice2 = document.getElementById("dice2")
dice1.style.visibility = "hidden"
dice2.style.visibility = "hidden"
var bonusLadder = document.getElementById("bonusLadder")
bonusLadder.style.display = "none"
var oopsSnake = document.getElementById("oopsSnake")
oopsSnake.style.display = "none"
var newGame = document.getElementById("newGame")
newGame.style.display = "none"

var gameBoard = document.getElementById("gameBoard")
var div = []
count = 100
for(var i = 1; i <= 10; i++){
    div[i]=[]
    for(var j = 1; j <= 10; j++){
        div[i][j] = document.createElement('span')
        div[i][j].setAttribute('id', 'r'+i+'c'+j)
        div[i][j].setAttribute('class', count)
        count--
        gameBoard.appendChild(div[i][j])
    }
}
var allSnakes = ["r10c4", "r8c6", "r6c3", "r4c10", "r3c6", "r1c4"]
for(var i = 0; i < allSnakes.length; i++){
    var snake = document.getElementById(allSnakes[i])
    snake.style.backgroundColor = "#fa3e3e"
    snake.style.backgroundImage = "url('resources/snake.png')"
    snake.style.backgroundSize = "45px"
}

var allLadders = ["r10c8", "r8c2", "r7c9", "r5c5", "r4c1", "r2c8"]
for(var i = 0; i < allLadders.length; i++){
    var ladder = document.getElementById(allLadders[i])
    ladder.style.backgroundColor = "#3e8ffa"
    ladder.style.backgroundImage = "url('resources/ladder.png')"
    ladder.style.backgroundSize = "46px"
}
// var nonNumbers = ["r10c4", "r8c6", "r6c3", "r4c10", "r3c6", "r1c4", "r10c8", "r8c2", "r7c9", "r5c5", "r4c1", "r2c8", "r10c10", "r1c1"]
// count = 100
// positions = 100
// for(var i = 1; i <= 10; i++){
//     for(var j = 1; j<= 10; j++){
//         var numbers = document.getElementById('r'+i+'c'+j)
//         // var numbers = document.getElementsByClassName("100")
//         // for(var k = 0; k < nonNumbers.length; k++){
//         //     if('r'+i+'c'+j != nonNumbers[k]){
//         //         numbers.textContent = count
//         //         count--
//         //     }
//         // }
//         if('r'+i+'c'+j != "r10c4" || 'r'+i+'c'+j != "r8c6" || 'r'+i+'c'+j != "r6c3" || 'r'+i+'c'+j != "r4c10" || 'r'+i+'c'+j != "r3c6" || 'r'+i+'c'+j != "r1c4" || 'r'+i+'c'+j != "r10c8" || 'r'+i+'c'+j != "r8c2" || 'r'+i+'c'+j != "r7c9" || 'r'+i+'c'+j != "r5c5" || 'r'+i+'c'+j != "r4c1" || 'r'+i+'c'+j != "r2c8"){
//             numbers.textContent = count
//             count--
//         }
//         // if(positions != 100){
//         //     numbers.textContent = count
//         //     positions--
//         //     count--
//         // }
//         else{
//             // positions--
//             count--
//         }
//     }
// }

var start = document.getElementById("r10c10")
start.style.backgroundColor = "#3ab636"
start.style.backgroundImage = "url('resources/start2.png')"
start.style.backgroundSize = "48px"

var goal = document.getElementById("r1c1")
goal.style.backgroundColor = "#e6b105"
goal.style.backgroundImage = "url('resources/winner3.png')"
goal.style.backgroundSize = "48px"

var startP1
var startImageP1
var playerOne
var playerTwo
var playerOneWinner = document.getElementById("playerOneWinner")
playerOneWinner.style.display = "none"
var playerTwoWinner = document.getElementById("playerTwoWinner")
playerTwoWinner.style.display = "none"

function startGame(){
    playerOne = document.getElementById("playerOne").value
    playerTwo = document.getElementById("playerTwo").value
    if(playerOne == "" || playerTwo == ""){
        alert("To start, provide both players name!")
    }
    else{
        var playerOneName = document.getElementById("playerOneName")
        var playerTwoName = document.getElementById("playerTwoName")
        playerOneName.innerHTML = playerOne
        playerTwoName.innerHTML = playerTwo

        var dice1 = document.getElementById("dice1")
        dice1.style.visibility = "visible"

        startP1 = document.getElementById("r10c10")
        startImageP1 = document.createElement('img')
        startImageP1.setAttribute('src','resources/player1.png')
        startImageP1.setAttribute('id','player1')
        startImageP1.style.width = "20px"
        startImageP1.style.marginTop = "15px"
        startImageP1.style.marginLeft = "13px"
        startP1.appendChild(startImageP1)

        var startGame = document.getElementById("startGame")
        startGame.style.display = "none"

        // bonusLadder.style.display = "unset"
        // oopsSnake.style.display = "unset"
        // playerOneWinner.style.display = "unset"
    }
}
function playAgain(){
    // alert("Refreshing...")
    location.replace('/home/saikiran/projects/masai/sprint-2/index.html')
}

var id1
var tempID1
var tempClass1
var id2
var tempID2
var tempClass2
var playerOnePosition
var newPlayerOnePosition
var playerTwoPosition
var newPlayerTwoPosition
var startP2
var startImageP2

function rollDice1(){
    bonusLadder.style.display = "none"
    oopsSnake.style.display = "none"
    var dice1 = document.getElementById("dice1")
    var dice2 = document.getElementById("dice2")
    dice1.style.visibility = "hidden"
    dice2.style.visibility = "visible"
    var h1 = document.getElementById("diceValue")

    function random(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min)) + min;
    }
    var diceNum = random(1,7);
    h1.innerHTML = diceNum
    
    var initial = startP1.getAttribute('id')
    id1 = initial
    
    if(initial == "r10c10"){
        var id1 = "r10c10"

        startP2 = document.getElementById("r10c10")
        startImageP2 = document.createElement('img')
        startImageP2.setAttribute('src','resources/player2.png')
        startImageP2.setAttribute('id','player2')
        startImageP2.style.width = "20px"
        startImageP2.style.marginTop = "15px"
        startImageP2.style.marginLeft = "13px"
        startP2.appendChild(startImageP2)

        startP1 = document.getElementById(id1)
        startImageP1 = document.getElementById("player1")

        tempID1 = document.getElementById(id1)
        playerOnePosition = tempID1.getAttribute('class')
        newPlayerOnePosition = Number(playerOnePosition) + diceNum

        if(newPlayerOnePosition == 3){
            newPlayerOnePosition = newPlayerOnePosition + 6
            bonusLadder.style.display = "unset"
        }
        else if(newPlayerOnePosition == 7){
            newPlayerOnePosition = newPlayerOnePosition - 6
            oopsSnake.style.display = "unset"
        }

        newPlayerOnePosition = String(newPlayerOnePosition)
        tempClass1 = document.getElementsByClassName(newPlayerOnePosition)
        tempID1 = tempClass1[0].getAttribute('id')
        id1 = tempID1

        startP1 = document.getElementById(id1)
        startP1.appendChild(startImageP1)
    }
    else{
        console.log(id1)
        console.log(tempID1)
        console.log(tempClass1)
        console.log(playerOnePosition)
        console.log(newPlayerOnePosition)

        startP1 = document.getElementById(id1)
        startImageP1 = document.getElementById("player1")

        tempID1 = document.getElementById(id1)
        playerOnePosition = tempID1.getAttribute('class')
        newPlayerOnePosition = Number(playerOnePosition) + diceNum

        if(newPlayerOnePosition == 3 || newPlayerOnePosition == 29 || newPlayerOnePosition == 32 || newPlayerOnePosition == 56 || newPlayerOnePosition == 70 || newPlayerOnePosition == 83){
            newPlayerOnePosition = newPlayerOnePosition + 6
            bonusLadder.style.display = "unset"
        }
        else if(newPlayerOnePosition == 7 || newPlayerOnePosition == 25 || newPlayerOnePosition == 48 || newPlayerOnePosition == 61 || newPlayerOnePosition == 75 || newPlayerOnePosition == 97){
            newPlayerOnePosition = newPlayerOnePosition - 6
            oopsSnake.style.display = "unset"
        }

        newPlayerOnePosition = String(newPlayerOnePosition)
        tempClass1 = document.getElementsByClassName(newPlayerOnePosition)
        tempID1 = tempClass1[0].getAttribute('id')
        id1 = tempID1

        startP1 = document.getElementById(id1)
        startP1.appendChild(startImageP1)

        if(Number(newPlayerOnePosition) == 100){
            playerOneWinner.textContent = playerOne+" "+"Wins!"+"\n"+"Better luck next time"+" "+playerTwo
            playerOneWinner.style.display = "unset"
            newGame.style.display = "unset"
            dice1.style.visibility = "hidden"
            dice2.style.visibility = "hidden"
        }
    }
}

function rollDice2(){
    bonusLadder.style.display = "none"
    oopsSnake.style.display = "none"

    var dice1 = document.getElementById("dice1")
    var dice2 = document.getElementById("dice2")
    dice1.style.visibility = "visible"
    dice2.style.visibility = "hidden"
    var h1 = document.getElementById("diceValue")

    function random(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min)) + min;
    }
    var diceNum = random(1,7);
    h1.innerHTML = diceNum

    var initial = startP2.getAttribute('id')
    id2 = initial

    if(initial == "r10c10"){
        var id2 = "r10c10"

        startP2 = document.getElementById(id2)
        startImageP2 = document.getElementById("player2")

        tempID2 = document.getElementById(id2)
        playerTwoPosition = tempID2.getAttribute('class')
        newPlayerTwoPosition = Number(playerTwoPosition) + diceNum

        if(newPlayerTwoPosition == 3){
            newPlayerTwoPosition = newPlayerTwoPosition + 6
            bonusLadder.style.display = "unset"
        }
        else if(newPlayerTwoPosition == 7){
            newPlayerTwoPosition = newPlayerTwoPosition - 6
            oopsSnake.style.display = "unset"
        }

        newPlayerTwoPosition = String(newPlayerTwoPosition)
        tempClass2 = document.getElementsByClassName(newPlayerTwoPosition)
        tempID2 = tempClass2[0].getAttribute('id')
        id2 = tempID2

        startP2 = document.getElementById(id2)
        startP2.appendChild(startImageP2)
    }
    else{
        console.log(id2)
        console.log(tempID2)
        console.log(tempClass2)
        console.log(playerTwoPosition)
        console.log(newPlayerTwoPosition)

        startP2 = document.getElementById(id2)
        startImageP2 = document.getElementById("player2")

        tempID2 = document.getElementById(id2)
        playerTwoPosition = tempID2.getAttribute('class')
        newPlayerTwoPosition = Number(playerTwoPosition) + diceNum

        if(newPlayerTwoPosition == 3 || newPlayerTwoPosition == 29 || newPlayerTwoPosition == 32 || newPlayerTwoPosition == 56 || newPlayerTwoPosition == 70 || newPlayerTwoPosition == 83){
            newPlayerTwoPosition = newPlayerTwoPosition + 6
            bonusLadder.style.display = "unset"
        }
        else if(newPlayerTwoPosition == 7 || newPlayerTwoPosition == 25 || newPlayerTwoPosition == 48 || newPlayerTwoPosition == 61 || newPlayerTwoPosition == 75 || newPlayerTwoPosition == 97){
            newPlayerTwoPosition = newPlayerTwoPosition - 6
            oopsSnake.style.display = "unset"
        }

        newPlayerTwoPosition = String(newPlayerTwoPosition)
        tempClass2 = document.getElementsByClassName(newPlayerTwoPosition)
        tempID2 = tempClass2[0].getAttribute('id')
        id2 = tempID2

        startP2 = document.getElementById(id2)
        startP2.appendChild(startImageP2)

        if(Number(newPlayerTwoPosition) == 100){
            playerTwoWinner.textContent = playerTwo+" "+"Wins!"+"\n"+"Better luck next time"+" "+playerOne
            playerTwoWinner.style.display = "unset"
            newGame.style.display = "unset"
            dice1.style.visibility = "hidden"
            dice2.style.visibility = "hidden"
        }
    }
}