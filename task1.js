const person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  city: 'New York',
};

function personInfo(obj) {
  const { name, age, email, city } = obj;
  const fullName = `${name}, ${age}`;
  const contact = `${email}, ${city}`;
  return { fullName, contact };
}

const newPerson = personInfo(person);
console.log(newPerson);

  