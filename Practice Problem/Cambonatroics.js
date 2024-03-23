class Combinatorics {
    factorial(num) {
   let result = 1;
   for (let i = 2; i <= num; i++) {
     result *= i;
   }
   return result;
 }

 findCombinations(N, R) {
   if (R > N) return 0;
   return this.factorial(N) / (this.factorial(R) * this.factorial(N - R));
 }

 findPermutations(N, R) {
   if (R > N) return 0;
   return this.factorial(N) / this.factorial(N - R);
 }
}