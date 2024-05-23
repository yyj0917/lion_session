const arr = ['mon', 'tues', 'wednes', 'thurs', 'fri', 'satur', 'sun'];

const newArr = arr.map((item) => item+'day');
console.log(newArr)

const filterArr = arr.filter((item) => item.includes('s'))
console.log(filterArr)