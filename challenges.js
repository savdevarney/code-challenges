/* 

Format a string of names like 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

*/

// my solution: 

function list(names) {
let names_str = '';
  if (names.length > 0) {
    for (let i = 0; i < names.length; i++) {
      if (i === 0) {
        names_str += names[i].name;
      } else if (i === names.length-1) {
        names_str += ' & ' + names[i].name;
      } else {
        names_str += ', ' + names[i].name;
      }
    }
   }
  return names_str;
}

// optimized solutions:

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }


 function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}


/*

Who likes it?

*/

// example using switch statements:

function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

/* duplicate encoder

Convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("

*/

function duplicateEncode(word) {
  let result = '';
  let letters = word.split('');
  let letterCount = {};
  for (let i = 0; i < letters.length; i++) {
      if (!(letters[i] in letterCount)) {
        letterCount.letters[i] = 1;
      } else {
        letterCount.letters[i]  += 1;
      }
  }
  for (let j = 0; j < letters.length; j++ ) {
    if (letterCount.letters[j] === 1) {
          result += "(";
      } else {
        result += ")";
      }
    }
  return result;
  }

}

/*

PERSISTENT BUGGER

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number

 */

 function persistence(num, count=0) {
  let len = num.toString().length;
  let strNums = num.toString().split('');
  nums = strNums.map( (x) => Number(x));

  if (len > 1) {
    let newNum = 1;
    for (let i = 0; i < nums.length; i++) {
      newNum *= nums[i];
    }
    count += 1;
    return persistence(newNum, count);

  } else {
    return count;  
  }

 }

 // alternative solution w/ while loop

 function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}

/*

SUM OF NUMBERS

Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

*/

function GetSum( a,b ) {
   let sum = 0;
   if (a === b) {
      sum += a;
    } else if (a < b) {
      for (let i = a; i < b+1; i++) {
        sum += i;
        }
    } else {
        for (let i = b; i < a+1; i++) {
        sum += i;
      }
      }
    return sum;
}

// alternative using Math.min and Math.max and finding min point

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

// alternative using recurrsion

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

/* 

STOP SPINNING MY WORDS

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

*/




