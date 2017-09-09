// the issue with var is you can reassign && redefine the same variable without throwing any errors


var nameVar = "Domitrius";


console.log('nameVar', nameVar);

// let can be reassigned but it can not be redefined

let nameLet = 'Jen';
nameLet = 'Mike';
console.log('nameLet', nameLet);

// const (or constant) doesn't allow you to reassign or redefine a variable 

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// const, var, and let are all function scoped the same and can not be accessed outside of the scope

function getPetName() {
    var petName = 'Hal'
    return petName;
}


getPetName();

// Block Scoping

const fullName = "domitrius clark";
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

// const and let do not work outside of the blocked scope it's contained in
console.log(firstName);



// Arrow functions


// arguments object - no longer bound with arrow functions

// this one will show the arguments used inside the function by calling 'arguments'
const add = function (a,b) {
    console.log(arguments);
    return a + b;
};

// the arrow function will not show the 'arguments' there will be an error
// const addUp = (a,b) => {
//     console.log(arguments);
//     return a + b;
// }

console.log(add(55,1,1001))


// this keyword - no longer bound

// a regular function can call the 'this' keyword 
const user = {
    name: "Domitrius",
    cities: ['New Jersey', "Philadelphia", "New York"],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        // you could use var that = this for a workaround to make this work!

        // this.cities.forEach(function (city) {
        //     console.log(this.name + ' has lived in ' + city );
        // });

        // or the arrow function will use the 'this' of the parent scope
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// if you want to use this to bind to the current container use ES5 functions otherwise use arrow functions

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());


