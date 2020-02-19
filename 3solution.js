console.log("-> Third Solution :");

function vreplace(word, v) {
    word = word.split("");
    let n = "";
    for (let i = 0; i < word.length; i++) {
      if (
        word[i] == "a" ||
        word[i] == "e" ||
        word[i] == "i" ||
        word[i] == "o" ||
        word[i] == "u"
      ) {
        n += v;
      } else {
        n += word[i];
      }
    }
    return n;
  }

console.log(vreplace("apples and bananas", "u"));
console.log(vreplace("cheese casserole", "o"));
console.log(vreplace("stuffed jalapeno poppers", "e"));
  