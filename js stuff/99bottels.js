var numberofbottels = 99;

while (numberofbottels >= 0) {
    var bottelword = "bottles";

    if (numberofbottels === 1) {
        bottelword = "bottle";
    }

    if (numberofbottels === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        break; //  stop the loop here to avoid going to -1
    } else {
        console.log(numberofbottels + " bottles of beer on the wall, " + bottelword + " of beer.");
        numberofbottels--;
        var nextWord = numberofbottels === 1 ? "bottle" : "bottles";
        if (numberofbottels >= 0) {
            console.log("Take one down and pass it around, " + numberofbottels + " " + nextWord + " of beer on the wall.");
        }
    }
}
