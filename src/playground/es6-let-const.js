// Var can be reassigned and overwritten
var nameVar = 'Paul';
nameVar = 'Mike';
var nameVar = 'Joe';
console.log('nameVar', nameVar);

// let can be reassigned but not overwritten
let nameLet = 'Freddy';
nameLet = 'Karyn';
console.log('nameLet', nameLet);

// const cannot be reassigned or overwritten
const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    let petName = 'Winnie';
    return petName;
}

// Block scoping

var fullName = 'Paul Laird';

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);