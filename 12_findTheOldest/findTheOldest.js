const findTheOldest = function(people) {
    for (const person of people) {
        person.age = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
    }
    
    return people.sort((a, b) => b.age - a.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
