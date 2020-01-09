const person = {
    firstName: "Nicu",
    lastName: "Vlasin",
    age: 24,
    email: "nicu@aol.com",
    hobbies: ["music", "sports"],
    address: {
        city: "Miami",
        state: "FL"
    },
    getBirthYear: function() {
        return 2020 - this.age;
    }
}

let val;

val = person;
//Get specific value
val = person.firstName;
val = person["firstName"]
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: "Nicu", age: 30},
    {name: "Vlasin", age: 24},
    {name: "Nancy", age: 53453}
];

for(let i = 0; i < people.length; i++)
{
    console.log(people[i].name);
}