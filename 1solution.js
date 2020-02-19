console.log("-> First Solution :");

const isVowel = (letter) => {
    vowels = ["a", "e", "i", "o", "u"];
    let isWowel = false;
    vowels.forEach((vowel) => {
      if (letter === vowel) {
        isWowel = true;
      }
    });
    return isWowel;
  };
  const vowelReplace = (str, vowel) => {
    split = str.split("");
    split.forEach((element) => {
      if (isVowel(element)) {
        str = str.replace(element, vowel);
      }
    });
    return str;
  };
  console.log(vowelReplace("apples and bananas", "i"));
  console.log(vowelReplace("stuffed jalapeno poppers", "e"));
  console.log(vowelReplace("cheese casserole", "o"))