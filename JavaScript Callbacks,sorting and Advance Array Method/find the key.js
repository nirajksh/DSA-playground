
function search(arr, key) {
 
    for ( let i of arr){
   
    if(i===key)
    {
      return true 
    }}
    return false
   
   }
   
   if (search([1, 2, 3, 2, 3, 2], 0) != false)
     console.log("Test fails: Expected false for input arr = [1, 2, 3, 2, 3, 2], and key = 0 ");
   else
     console.log("Sample test case for input arr = [1, 2, 3, 2, 3, 2], and key = 0  passed!");
   
   