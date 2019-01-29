// first task 
/*function log(a) {
  for (var i = 1; i <= a; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      console.log("BuzzFizz");
    } else if (i % 3 == 0) {
      console.log("Buzz");
    } else if (i % 5 == 0) {
      console.log("Fuzz");
    } else {
      console.log(i);
    }
  }
}
log(100);
*/
/*
//without if
function log(a) {
  for (var i = 1; i <= a; i++) {
   console.log ((i % 15 === 0 && "FizzBuzz") || (i % 5 === 0 && "Buzz") || (i % 3 == 0 && "Fizz") || i);
  }
}
log(50);
*/

//second task
/*function isPolindrom(textString) {
  
  let wordLength = textString.length;
  console.log(wordLength);
  
  let fstHalfWord = textString.slice(0, Math.floor(wordLength / 2));
  console.log(fstHalfWord);
  
  let secHalfWord = textString.slice(-wordLength / 2);
  console.log(secHalfWord);

  let reverseSecStrHalf = secHalfWord.split("").reverse().join("");
  console.log(reverseSecStrHalf);
 
  return reverseSecStrHalf === fstHalfWord ? true : false;
}
console.log(isPolindrom("wireriw"));
console.log(isPolindrom("someword"));
console.log(isPolindrom("hannah"));
*/
/*function test(str) {
  return str.split("").slice(0, str.length / 2).every((v, i) => v == str[str.length - 1 - i]);
}

console.log(test("abba"));
console.log(test("abbaa"));
console.log(test("abbb"));
console.log(test("hannah"));
console.log(test("wireriw"));
console.log(test(""));
*/


// задание B из тетради
/*let word = prompt("Write some word").toLowerCase();
console.log(word);
let latVowels = "аоиеёэыуюя";
var counter = 0;


function latLetInWord(word) {
  let arr = word.split("");
  console.log(arr);
  console.log(arr.length);
  let arrVowels = latVowels.split("");
  console.log(arrVowels);
  console.log(arrVowels.length);

  for (var i = 0; i < arr.length; i++) {

    for (var e = 0; e < arrVowels.length; e++) {

      if (arr[i] == arrVowels[e] ){
        console.log("совпадение: " + arr[i]);
        counter+= 1;
        console.log("Количество совпадений: " + counter);
        break;
      };
    }
  }
}
latLetInWord(word);
/*