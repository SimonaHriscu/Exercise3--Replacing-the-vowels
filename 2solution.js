console.log("-> Second Solution :");

function vreplace(str, vowel) {
    return str.replace(/[aeiou]/gi, vowel); //we use regex
  }

console.log(vreplace("apples and bananas", "u"));
console.log(vreplace("cheese casserole", "o"));
console.log(vreplace("stuffed jalapeno poppers", "e"));
  