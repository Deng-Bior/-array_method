// quiz 1. Using a loop, iterate through this array and console.log all of the people.
let people = ["Greg", "Mary", "Devon", "James"];
console.log(people.length)

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// quiz 2. Write the command to remove “Greg” from the array.
people.shift();
people;

// quiz 3. Write the command to remove “James” from the array.
people.pop();
people;

// quiz 4. Write the command to add “Matt” to the front of the array.
people.unshift("Matt");
people;

// quiz 5. Write the command to add your name to the end of the array.
people.push("Deng");
people;

// quiz 6. Using a loop, iterate through this array and after 1. console.log-ing “Mary”, exit from the loop.
for(let i = 0; i<people.length; i++){
    if(Math.random() > 0.5){
        console.log("Mary" + i);
        break;
    }
    console.log(people);
}


// quiz 7. Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
let sl = people.slice(2)

people.slice(2)
console.log(sl);

// quiz 8. Write the command that gives the indexOf where “Mary” is located.
people.indexOf("Mary");

// quiz 9. Write the command that gives the indexOf where “Foo” is located (this should return -1).
arr.indexOf("Foo");

// quiz 10. Redefine the people variable with the value you started with. Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
people.splice(2, 1, 'Elizabeth','Artie')

console.log(people);

// quiz 11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.slice("Bob")

console.log(withBob)
console.log(people)