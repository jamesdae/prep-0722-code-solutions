const person = {
  firstName: 'James',
  lastName: 'Yang',
  hobby: 'enjoying nature'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log('The person\'s name is:', fullName);

person.job = 'student';

console.log('The person\'s current job is:', person.job);

person.previousJob = 'server';

console.log('The person\'s previous job is:', person.previousJob);
console.log(person);
