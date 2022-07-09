let person1 = {
    name: 'Jose Azael',
    age: 24
};
let person2 = {
    name: 'Luis Felipe',
    age: 23
};
let person3 = {
    name: 'Balbina Veronica',
    age: 22
};

let people = [person1, person2, person3];

//console.log(people);

for (let i = 0; i < people.length; i++) {
    let someone = people[i]
    console.log(`${someone.name} -- ${someone.age}`);
}
