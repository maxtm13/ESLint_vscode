const user = {
  name: 'John',
  age: 17,
  skills: ['js', 'eslint', 'prettier'],
  address: { city: 'Riga', zip: 12345 },
};
function greet(name) {
  console.log('Hi,' + name + '!');
  return { ok: true, user: user, tags: ['a', 'b', 'c'] };
}
console.log(greet('Dan'));
