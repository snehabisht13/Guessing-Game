alert("You have to guess the number which you think is generated in the game!!");

let random_no = Math.floor((Math.random() * 10));
alert("The number is generated guess between 1 to 10!");

let game = prompt("You want to start?(yes/no)");
if (game == "yes") {
    let guess = prompt("Enter the guess");

    while (true) {
        if (guess == "quit") {
            alert("quitted");
            console.log("quitted");
            break;
        }
        if (guess == random_no) {
            alert("Right guess");
            console.log(`right guessed number is ${random_no}`);
            let ask = prompt("You want to play again (yes/no)");
            if (ask == "yes") {
                random_no = Math.floor((Math.random() * 10));
                alert("The number is generated guess between 1 to 100!");
                guess = prompt("Enter the guess");
            }
            else {
                console.log("quitted");
                break;
            }
        }
        else if (guess < random_no) {
            alert(`Hint: number is greater then ${guess}, try again`);
            guess = prompt("Enter the guess");
        }
        else if (guess > random_no) {
            alert(`Hint: number is less then ${guess}, try again`);
            guess = prompt("Enter the guess");
        }

    }
}
else {
    alert("Quitted");
}
