/*eslint-env browser*/
var MAXDICESIDES = 6;

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
    
};

var getRandomNumber = function () {
    "use strict";
    var random;
    if (!isNaN(maxDiceSides)) {
        random = Math.random();
        random = Math.floor(random * maxDiceSides);
        random = random + 1;
    }
    return random;
    
    
   
};

var changePlayer = function () {
        "use strict";
        if ($("current").innerHTML === $("player1").value) {
            $("current").innerHTML = $("player2").value;
        } else {
            $("current").innerHTML = $("player1").value;
        }
        $("die").value = 0;
        $("total").value = 0;
        $("roll").focus();
    };

var newGame = function () {
        "use strict";
        $("score1").value = "0";
        $("score2").value = "0";
    
        if ($("player1").value === "" || $("player2").value === "") {
            $("turn").removeAttribute("class");
            window.alert("Please enter two player names");
        
        
        } else {
            $("turn").setAttribute("class", "open");
            changePlayer();
            
        }
    };

var rollDice = function () {
        "use strict";
        var dice, total;
        total = parseInt($("total").value, 10);
        dice = getRandomNumber();
        if (dice === 1) {
            total = 0;
            changePlayer();
        } else {
            total = total + dice;
        }
        $("die").value = dice;
        $("total").value = total;
    };

var holdTurn = function () {
        "use strict";
        var score, total;
        total = parseInt($("total").value, 10);
    
        if ($("current").innerHTML === $("player1").value) {
            score = $("score1");
            
            
        } else {
            score =  $("score2");
            
        }
    
        score.value = parseInt(score.value, 10) + total;
        if (score.value >= 100) {
            window.alert($("current").innerHTML + " Wins!");
        } else {
            changePlayer();
        }
    };

window.addEventListener("load", function () {
    "use strict";
    $("new_game").addEventListener("click", newGame);
    $("roll").addEventListener("click", rollDice);
    $("hold").addEventListener("click", holdTurn);
    
});
