var player_1name = localStorage.getItem("Player1");
var player_2name = localStorage.getItem("Player2");

 score1 = 0;
 score2 = 0;

document.getElementById("player1_name").innerHTML = player_1name + ":";
document.getElementById("player2_name").innerHTML = player_2name + ":";

document.getElementById("player1_score").innerHTML = score1;
document.getElementById("player2_score").innerHTML = score2;

document.getElementById("Player_question").innerHTML = "question turn : " + player_1name;
document.getElementById("Player_answer").innerHTML = "answer turn : " + player_2name;

function Send() {
    var v1 = document.getElementById("Word").value;
    var Word = v1.toLowerCase();
    var v2 = Word.charAt(1);
    var v3 = Math.floor(Word.length / 2);
    var v4 = Word.charAt(v3);
    var v5 = Word.length - 1;
    var v6 = Word.charAt(v5);


    var v7 = Word.replace(v2, "_");
    var v8 = v7.replace(v4, "_");
    var v9 = v8.replace(v6, "_");

    Z1 = "<h4 id='word_display'> Question. " + v9 + "</h4>";
    Z2 = "<br>Answer : <input type='text' id='input_check_box'>";
    Z3 = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = Z1 + Z2 + Z3;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Word").value = "";
}

question = "Player1";
answer = "Player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answers = get_answer.toLowerCase();
    if (answers == Word) {
        
        if (answer == "Player1") {
            
            score1 = score1 + 1;
            console.log(score1);
            document.getElementById("player1_score").innerHTML = score1;
        }
        else {
            score2 = score2 + 1;
            console.log(score2);
            document.getElementById("player2_score").innerHTML = score2;
        }
    }
    if (question == "Player1") {
        question = "Player2";
        document.getElementById("Player_question").innerHTML = "Question turn - " + player_2name;
    }

    else {
        question = "Player1";
        document.getElementById("Player_question").innerHTML = "Question turn - " + player_1name;
    }

    if (answer == "Player1") {
        answer = "Player2";
        document.getElementById("Player_answer").innerHTML = "Answer turn - " + player_2name;
    }

    else {
        answer = "Player1";
        document.getElementById("Player_answer").innerHTML = "Answer turn - " + player_1name;
    }
    document.getElementById("output").innerHTML = " ";

}
