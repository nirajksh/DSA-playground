function getLastNames(firstName, people) {
    return new Promise(function (resolve, reject) {
         let matchingPeople = people.filter((obj) => {
              return obj.firstName === firstName;
         })
         if (matchingPeople.length === 0) {
              reject("Invalid")
         }
         else {
              let unsortedLastnameArray = [];
              for (let i = 0; i < matchingPeople.length; i++) {
                   let lastName = matchingPeople[i].lastName;
                   unsortedLastnameArray.push(lastName);
              }

              unsortedLastnameArray.sort();

              resolve(unsortedLastnameArray);
         }
    })
}

let firstName = 'David';

let people = [

    {

         firstName: 'David',

         lastName: 'Dobrick'

    },

    {

         firstName: 'David',

         lastName: 'Beckham'

    },

    {

         firstName: 'Chris',

         lastName: 'Lee'

    },

    {

         firstName: 'James',

         lastName: 'Bond'

    },

]
console.log(getLastNames(firstName, people));
