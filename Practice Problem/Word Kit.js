class WordKit {
    reverse(str) {
   return str.split('').reverse().join('');
 }

 isPalindrome(str) {
   return str === this.reverse(str);
 }

 makePalindrome(str) {
   return str + this.reverse(str);
 }
}
