let images= ["dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"];
    let dice = document.querySelectorAll("img");
    // console.log(dice);
    
    function roll(){
        dice.forEach(function(die){
            die.classList.add("shake");
        });
        setTimeout(function(){
            dice.forEach(function(die){
                dice.classList.remove("shake");
            });

            let dieOneValue = Math.floor(Math.random()*6);
            let dieTwoValue = Math.floor(Math.random()*6);

            console.log(dieOneValue,dieTwoValue);
            document.querySelector("#die-1").setAttribute("src",image[dieOneValue]);
            document.querySelector("#die-2").setAttribute("src",image[dieTwoValue]);
            document.querySelector("#total").innerHTML ="You roll is " + ((dieOneValue  +1) + (dieTwoValue +1)); 

        },
        1000
        );
    }
    roll();
    