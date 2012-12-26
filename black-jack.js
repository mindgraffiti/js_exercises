// Card Constructor
function Card(s, n){
    var suit = s;
    var num = n;
    // getter for the card's suit
    this.getSuit = function(){
        switch(suit){
            case 1: 
                return "Hearts";
            case 2:
                return "Diamonds";
            case 3:
                return "Clubs";
            case 4:
                return "Spades";
        }
    };
    // getter for the card's face value
    this.getNumber = function(){
        switch(num){
            case 1:
                return "Ace";
            case 11:
                return "Jack";
            case 12:
                return "Queen";
            case 13:
                return "King";
            default:
                return num;
        }
    };
    // getter for the card's score
    this.getValue = function(){
        if(num === 1){
            return 11;
        }
        else if(num >= 10){
            return 10;
        }
        else{
            return num;
        }
    };
}
// deal a card
function deal(){
    // get a random card suit 1-4
    var s = Math.floor(Math.random()*4+1);
    // get a random card face 1-13
    var n = Math.floor(Math.random()*13+1);
    return new Card(s,n);
}
function Hand(){
    var hand = [];
    hand[0] = deal();
    hand[1] = deal();
    // get the Hand I'm holding
    this.getHand = function(){
      for(i=0; i<hand.length; i++){
        return hand;
      }  
    };
    // score for the hand
    this.score = function(){
        var aces = 0;
        var sum = 0;
        for(i=0; i<hand.length; i++){
            if(hand[i].getValue() === 11){
                aces++;
                console.log("There's an ace!");
            }
            sum += hand[i].getValue();
        }
        while(sum > 21 && aces > 0){
            sum -= 10;
            aces--;
            console.log("Changed Ace value to 1");
        }
        return sum;
    };
    // show me my cards
    this.printHand = function(){
        var string = "";
        for(i=0; i<hand.length; i++){
            string = string + hand[i].getNumber() + " of " + hand[i].getSuit() + ", ";
        } 
        return string;
    };
    // go on, I dare you. 
    this.hitMe = function(){
        var anotherCard = deal();
        hand.push(anotherCard);
    };
}
// Play as dealer
function playAsDealer(){
    var dealer = new Hand();
    var dealerScore = dealer.score();
    while(dealerScore < 17){
        dealer.hitMe();
        dealerScore = dealer.score();
    }
    console.log("Dealer's hand: " + dealer.printHand() + "Dealer's score: " + dealerScore);
    return dealer;
}
// Play as user
function playAsUser(){
    // deal out player's hand
    var player = new Hand();
    // track the score
    var playerScore = player.score();
    // print out the hand and score, ask if they want a hit
    var decision = confirm(player.printHand() + " score: " + playerScore + " Hit me?");
    while(decision){
        player.hitMe();
        // update the score
        playerScore = player.score();
        // hit again?
        decision = confirm(player.printHand() + " score: " + playerScore + " Hit again?");
    }
    console.log("Your hand: " + player.printHand() + "score: " + playerScore);
    return player;
}
// declare the winner
function declareWinner(player, dealer){
    var u = player.score();
    console.log("Player score: " + u);
    var d = dealer.score();
    console.log("Dealer score: " + d);
    if(u > 21){
        if(d > 21){
            return "You tied!";
        }
        else{
            return "You lose!";
        }
    }
    else if(d > 21){
        return "You win!";
    }
    else if(u > d){
        return "You win!";
    }
    else if(u === d){
        return "You tied!";
    }
    else{
        return "You lose!";
    }
}
// Run the game!
function playGame(){
    declareWinner(playAsUser(),playAsDealer());
}
// run tests
playGame();
