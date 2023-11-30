var numberOfDrumButtons = document.querySelectorAll(".drum").length;
console.log("numberOfDrumButtons", numberOfDrumButtons)

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonText = this.innerHTML;

        console.log("buttonText", buttonText)
        makeSound(buttonText);
        buttonAnimation(buttonText);
    })
  

}

//Add event listener on keypress


document.addEventListener("keypress", function(event){
    console.log("event", event)

    makeSound(event.key);
    buttonAnimation(event.key);
})



function makeSound(key) {
    switch(key){
            case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

            //a - tom2
            case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

            //s - tom3
            case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

            //d tom4
            case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

            //j snare
            case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

            //k crash
            case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

            //l kick bass
            case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

            default : "Invalid Input"
    }
  
  
}


function buttonAnimation(currentKey) {
    
    var activeButton = document.querySelector("." + currentKey)
   
        activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 100);



}
