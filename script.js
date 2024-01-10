
//EXERCICE: LEVEL 1

//LENGTH TESTING

let challenge = "30 Days Of JavaScript";
console.log(challenge.length);


//UPPER CASE
console.log(challenge.toUpperCase());

//LOWER CASE
console.log(challenge.toLowerCase());

//CUT
const newChallenge = challenge.substring(3, 21);
console.log(newChallenge);

//INCLUDES
console.log(challenge.includes("Script"));

//SPLIT
console.log(challenge.split());
console.log(challenge.split(""));

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));

//CHANGE
console.log(challenge.replace("JavaScript", "Python"));

//CHART AT
console.log(challenge.charAt(15));

console.log(challenge.charCodeAt("J"));

//INDEX OF

console.log(challenge.indexOf("a"));

console.log(challenge.lastIndexOf("a"));

let challenge2 = "You cannot end a sentence with because because because is a conjunction";

console.log(challenge2.indexOf("because"));

console.log(challenge2.lastIndexOf("because"));

//SEARCH

console.log(challenge2.search("because"));

//TRIM
console.log(challenge.trim());

//STARTWITH
console.log(challenge.startsWith("30 Days"));

//ENDWITH
console.log(challenge.endsWith("JavaScript"));

//MATCH
console.log(challenge.match("a"));

//CONCAT
let challenge3 = ["30 Days of"];
let challenge4 = ["JavaScript"];

console.log(challenge3.concat(challenge4));

//REPEAT
console.log(challenge.repeat(2));

//EXERCICE: LEVEL 2

console.log("There is no exercise better for the heart than reaching down and lifting people up.");

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//TYPE OF

console.log(typeof "10" === 10);
let num = "10";

let numInt = parseInt(Math.floor(num));
console.log(numInt);
console.log(10);

//PARSEFLOAT
let floatNbr = 9.8;
let parseNbr = parseFloat(Math.ceil(floatNbr));

console.log(parseNbr);

//CHECK
let case1 = "Python";
let case2 = "jargon";

console.log(case1.match("on") && case2.match("on"))

let case3 = "I hope this course is not full of jargon";
console.log(case3.match("jargon"))

//RANDOM
let randoNum = Math.random();
let randNum = randoNum * 101;
let toTheFloor = Math.floor(randNum)

console.log(toTheFloor)

let randomNumber50_100 = Math.floor(Math.random() * (100-50 + 1)) + 50;

console.log(randomNumber50_100);

let randomNumber0_255 = Math.floor(Math.random() * 256);

console.log(randomNumber0_255)

//SLICE

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');


console.log(challenge2.indexOf("because"))
console.log(challenge2.lastIndexOf("because"))

console.log(challenge2.slice(31, 54))

// EXERCICE : LEVEL 3

//COUNT 

let sentenceLove = "Love is the best thing in this world. Some found their love and some are still looking for their love.";

let sentenceLowerCase = sentenceLove.toLowerCase();

console.log(sentenceLowerCase.match(/love/g));

console.log(challenge2.match(/because/g))

//CLEAN

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. \
;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let cleanSentence = sentence.replace(/%/g,""); 
let cleanSentence2 = cleanSentence.replace(/@/g, "");
let cleanSentence3 = cleanSentence2.replace(/\$/g, "");
let cleanSentence4 = cleanSentence3.replace(/&/g, "");
let cleanSentence5 = cleanSentence4.replace(/#/g, "");
console.log(cleanSentence5)


// INCOME CALCUL
const incomeSentence = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let incomeNumbers = /\d+/g;

let incomeDigits = incomeSentence.match(incomeNumbers) || [];

let income1 = Number(incomeDigits[0]) || 0;
let income2 = Number(incomeDigits[1]) || 0;
let income3 = Number(incomeDigits[2]) || 0;


let annualIncome = (income1 * 12) + income2 + (income3 *12);

console.log('Annual Income:', annualIncome);












