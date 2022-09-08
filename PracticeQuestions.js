
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function sum(a, b) {
  return a + b + x;
}
console.log("problem 1: ", sum(3, 4, x))
console.log("___________________");

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const sumArrow = (a, b, x) => {
  return a + b + x;
}
console.log("problem 2: ", sumArrow(3, 4, x))
console.log("___________________");


// 3. Write a function that returns another function. (use arrow functions please)
const sumAfterMultiplying = (a, b) => {
  const multiply = (a, b) => { return a * b };
  return multiply(a, b);
}
console.log("problem 3: ", sumAfterMultiplying(1, 1))
console.log("___________________");


// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

const getFunction = () => {
  const y = 5;
  const insideFunc = (a) => y + a;
  return insideFunc;
};
console.log("problem 4: ", getFunction()(2))
console.log("problem 4: JS closure gives you access to an outer function's scope from an inner function.")
console.log("___________________");



// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.
const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }
  return 'success'
}

const handleErrors = () => {
  try {
    let message = couldThrowError();
    console.log("result: ", message);
  }
  catch (error) {
    console.log("result: ", error.message);
    console.log("sorry there was an error");
  }
};
console.log("problem 5: ")
handleErrors();
console.log("");
console.log("___________________");

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 6. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const userDataArray = userData.map((user) => {
  const id = user.id;
  const numberOfFoods = user.favorites.food.length;
  return { id: id, favoriteFoods: numberOfFoods }
})
console.log("problem 6: ", userDataArray)
console.log("___________________");


// 7. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']
const pizzaFaves = userData.reduce((pizzaArray, curr) => {
  if (curr.favorites.food.includes("pizza")) {
    pizzaArray.push(curr.name);
  }
  return pizzaArray;
}, []);
console.log("problem 7: ", pizzaFaves)
console.log("___________________");




// 8. Show an an example of a switch statement being used
const name = "John";
switch (name) {
  case "Peter":
    console.log("problem 8: Peter's id number is 111.");
    break;
  case "John":
    console.log("problem 8: John's id number is 222.");
    break;
  case "Mary":
    console.log("problem 8: Mary's id number is 333");
    break;
  default:
    console.log(`Name ${name} not found.`);
}
console.log("___________________");






////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
};
const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
};


// 9. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
const user = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
}
const combineUserData = { ...userPersonalData, ...userGameData }
console.log("problem 9: combineUserData ", combineUserData)
console.log("___________________");


// 10. Make a copy of your new user object but override the birthday to december 31st
const userDataWithUpdatedBirthday = { ...combineUserData, birthday: "december 31st" };
console.log("problem 10: userDataWithUpdatedBirthday ", userDataWithUpdatedBirthday)
console.log("___________________");


// 11. Use the spread operator to make a copy of the accomplishments array and store it in a new variable
const accomplishmentsArray = [...userGameData.accomplishments];
console.log("problem 11: accomplishments: ", accomplishmentsArray)
console.log("___________________");



//  12.Given the object below, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food
var userTwo = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
};

const { food } = userTwo.favoriteThings
console.log("problem 12: ", food);
console.log("___________________");


// 13. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //
const [firstFood, secondFood] = food;
console.log("problem 13: ", firstFood, secondFood);
console.log("___________________");



// 14. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];
const [firstName, age, ...foodArray] = data;
console.log("problem 14:", firstName, age, foodArray);
console.log("___________________");


// 15. use object destructuring to grab the following from the userInfo object: 
const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food: ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing
const { name: userName,
  favorites: {
    needs: { food: favoriteFood },
    wants: { things: [firstFavoriteThing, secondFavoriteThing] }
  }
} = userInfo;

console.log("problem 15: username: ", userName, ", favorite food: ", favoriteFood, ", favoriteThing: ", firstFavoriteThing, ", secondFavoriteThing: ", secondFavoriteThing);
console.log("___________________");








// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
    try {
      // fetchingData from imaginary database
      if ((Math.ceil(Math.random() * 2)) < 2) {
        throw new Error('Error!')
      }
      resolve({ name: 'john', age: 42 })
    } catch (error) {
      reject(error);
    }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData().then(
  (value) => {
    console.log("problem 16: ", value);
  },
  (error) => {
    console.log("problem 16: ", error.message);
  }
);
console.log("___________________");


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 17. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const logFunction = async () => {
  try {
    const newVariable = await fetchData();
    console.log("problem 17: ", newVariable)
  }
  catch (error) {
    console.log("problem 17: ", error.message);
  }
}
logFunction();
console.log("___________________");
