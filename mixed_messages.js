// Generates a random message when run
const message = {firstPart:["Today, ", "Tomorrow, ", "Next week, ","This year, "],
                 secondPart : ["is very lucky to buy a lottery ticket", "you will get a promotion", "the chances are that you will get a new job offer",
                 "Please dont meddle into anyone's fight", "your partner will give you a nice surprise!"],
                 greetMessage :["Hello! ","Hi! ","Chao! ","Hey there! ","Ola! ", "Namaste! "]

}
// A function which generates an emoji according to the message
const addEmoji = message => {
    switch (message){
        case 0: 
            return String.fromCodePoint(0x1F601);
            break;
        case 1:
            return String.fromCodePoint(0x1F44F);
            break;
        case 2:
            return String.fromCodePoint(0x1F91E);
            break;
        case 3:
            return String.fromCodePoint(0x1F44A);
            break;
        case 4:
            return String.fromCodePoint(0x1F44C);
            break;
    }
}
// A function which generates random messages
const messageGenerator = obj => {
    const greet = Math.floor(Math.random() * obj.greetMessage.length);
    const ran1 = Math.floor(Math.random() * obj.firstPart.length);
    const ran2 = Math.floor(Math.random() * obj.secondPart.length);
    const greetMessage = obj.greetMessage[greet];
    const ranFirstPart = obj.firstPart[ran1];
    const ranSecondPart = obj.secondPart[ran2];
    return (greetMessage + " " + ranFirstPart + "" + ranSecondPart + " " + addEmoji(ran2)) ;
}


// Calling a function
console.log(messageGenerator(message));
