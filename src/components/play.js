const arr = [
  {
    id: 1,
    name: 'Иван',
    age: 20,
  },
  {
    id: 2,
    name: 'Bright',
    age: 20,
  },
  {
    id: 3,
    name: 'Anie',
    age: 20,
  },
];

const newArr = arr[Math.round(Math.random() * (arr.length - 1))];
console.log(newArr);
