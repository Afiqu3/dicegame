var play = true;
var p1, p2;
//var diceimage,diceimagesource;
//var result1,result2;

document.getElementById("startreset").onclick = function () {
    if (play == false) {
        location.reload();
    } else {
        play = false;

        hide("cover");
        document.getElementById("startreset").innerHTML = "Reset Game";

        hide("result");

        show("player1");
        show("player2");
        show("scroll1");
        show("scroll2");
        player1();
        player2();
    }
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function player1() {
    document.getElementById("scroll1").onclick = function () {
        p1 = 1 + Math.round(Math.random() * 5);

        document.getElementById("image").src = "image/dice" + p1 + ".png";
        show("results");

        setTimeout(function () {
            hide("results");
        }, 2000);
    }
}

function player2() {
    document.getElementById("scroll2").onclick = function () {
        p2 = 1 + Math.round(Math.random() * 5);
        document.getElementById("image").src = "image/dice" + p2 + ".png";
        show("results");
        setTimeout(function () {
            hide("results");
            result();
            play = true;
            document.getElementById("startreset").innerHTML = "Start Game";
        }, 2000);
    }
}


function result() {
    if (p1 > p2) {
        playerno = 1;
        document.getElementById("result").innerHTML="<p><em>Player 1 Wins!</em><br> 🚩<P>";
        show("result");
    } else if (p2 > p1) {
        playerno = 2;
        document.getElementById("result").innerHTML="<p><em>Player 2 Wins!</em><br> 🚩<P>"
        show("result");
    } else if (p1 == p2) {
        document.getElementById("result").innerHTML = "<p><em>Draw!</em><br>❤️</P>";
        show("result");
    }
}
