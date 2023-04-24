function printSentence(words) {
    if (typeof words === "string") {
        console.log(words);
    }
    else {
        console.log(words.join(" "));
    }
}
printSentence(["Мова", "програмування", "TypeScript"]);
printSentence("Мова програмування JavaScript");
