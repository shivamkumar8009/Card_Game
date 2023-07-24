let aUsersTurns = [];
let aDealerTurns = [];

let userScore = 5;
let dealerScore = 5;
//---------------------------------------------------------------------------------------
//-----------------drawing the card function---------------------------------------------
//---------------------------------------------------------------------------------------
function drawCards() {
    //-----------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------
    var dealerCard = Math.floor(Math.random() * 13 + 2);
    aDealerTurns.push(dealerCard);

    var dealerCardOutput = "";
    if(dealerCard === 11) {
        dealerCardOutput = "J"
    } else if(dealerCard === 12) {
        dealerCardOutput = "Q";
    } else if(dealerCard === 13) {
        dealerCardOutput = "K";
    } else if(dealerCard ===14) {
        dealerCardOutput = "A";
    } else {
        dealerCardOutput = dealerCard;
    }

    document.getElementById("dealerCardNum").innerHTML = dealerCardOutput;
    //-----------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------
    var userCard = Math.floor(Math.random() * 13 + 2);
    aUsersTurns.push(userCard);

    var userCardOutput = "";
    if(userCard === 11) {
        userCardOutput = "J"
    } else if(userCard === 12) {
        userCardOutput = "Q";
    } else if(userCard === 13) {
        userCardOutput = "K";
    } else if(userCard === 14) {
        userCardOutput = "A";
    } else {
        userCardOutput = userCard;
    }

    document.getElementById("userCardNum").innerHTML = userCardOutput;
    //-----------------------------------------------------------------------------
    //---------------------creating icons for dealer card---------------------------
    //-----------------------------------------------------------------------------
    var dealerChar = Math.floor(Math.random() * 4 + 1);

    switch(dealerChar) {
        case 1:
            dealerChar = "&hearts;";
            document.getElementById("dealerChar").style.color = "red";
            document.getElementById("dealerBigChar").style.color = "red";
        break;

        case 2:
            dealerChar = "&spades;";
            document.getElementById("dealerChar").style.color = "black";
            document.getElementById("dealerBigChar").style.color = "black";
        break;

        case 3:
            dealerChar = "&diams;";
            document.getElementById("dealerChar").style.color = "red";
            document.getElementById("dealerBigChar").style.color = "red";
        break;
        
        case 4:
            dealerChar = "&clubs;";
            document.getElementById("dealerChar").style.color = "black";
            document.getElementById("dealerBigChar").style.color = "black";
        break;
    }
    document.getElementById("dealerChar").innerHTML = dealerChar;
    document.getElementById("dealerBigChar").innerHTML = dealerChar;
    //------------------------------------------------------------------------------
    //----------------creating icons for user card----------------------------------
    //------------------------------------------------------------------------------
    var userChar = Math.floor(Math.random() * 4 + 1);

    switch(userChar) {
        case 1:
            userChar = "&hearts;";
            document.getElementById("userChar").style.color = "red";
            document.getElementById("userBigChar").style.color = "red";
        break;

        case 2:
            userChar = "&spades;";
            document.getElementById("userChar").style.color = "black";
            document.getElementById("userBigChar").style.color = "black";
        break;

        case 3:
            userChar = "&diams;";
            document.getElementById("userChar").style.color = "red";
            document.getElementById("userBigChar").style.color = "red";
        break;
        
        case 4:
            userChar = "&clubs;";
            document.getElementById("userChar").style.color = "black";
            document.getElementById("userBigChar").style.color = "black";
        break;
    }
    document.getElementById("userChar").innerHTML = userChar;
    document.getElementById("userBigChar").innerHTML = userChar;
    //-----------------------------------------------------------------------------------
    //------------------------display scores---------------------------------------------
    //-----------------------------------------------------------------------------------
    if(userCard === dealerCard) {
        document.getElementById("pointer").innerHTML = "=";
    } else if(userCard > dealerCard) {
        userScore++;
        dealerScore--;
        document.getElementById("pointer").innerHTML = "►";
    } else if(userCard < dealerCard) {
        dealerScore++;
        userScore--;
        document.getElementById("pointer").innerHTML = "◄";
    }

    if(userScore < 2) {
        document.getElementById("userScore").style.color = "red";
    } else {
        document.getElementById("userScore").style.color = "white";
    }

    if(dealerScore < 2) {
        document.getElementById("dealerScore").style.color = "red";
    } else {
        document.getElementById("dealerScore").style.color = "white";
    }
    document.getElementById("dealerScore").innerHTML = dealerScore;
    document.getElementById("userScore").innerHTML = userScore;        
    //----------------------------------------------------------------------------------
    //--------------------Display Turns-------------------------------------------------
    //----------------------------------------------------------------------------------
    var dealerTurns = "";
    var i;
    for(i = 0; i < aDealerTurns.length; i++) {
        dealerTurns = dealerTurns + aDealerTurns[i] + ", ";
        document.getElementById("dealerTurns").innerHTML = dealerTurns
    }

    var userTurns = "";
    var j;
    for(j = 0; j < aUsersTurns.length; j++) {
        userTurns = userTurns + aUsersTurns[j] + ", ";
        document.getElementById("userTurns").innerHTML = userTurns
    }
    function checkingScores() {
        if(userScore <= 0) {
            userScore = 0;
            alert("Dealer Win!");
            document.getElementById("mainBtn").disabled = true;
        } else if(dealerScore <= 0) {
            dealerScore = 0;
            alert("User Win!");
            document.getElementById("mainBtn").disabled = true;
        }
    }
    checkingScores();
}


