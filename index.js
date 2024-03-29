// const fruits = new Array();
const fruits = [];
const vegetables =['potatos','tomatos']


fruits.push('apple'); 
fruits.push('lemon'); //add element to the end
//fruits.pop(); //lase element remove
fruits.unshift('pinapple');//add element to start array
// fruits.shift();
fruits.push('banana');

const newArrayProducts = vegetables.concat(fruits);
const arrayConvertString = newArrayProducts.join(',\n ');

// console.log(vegetables.indexOf('potatos'));

// console.log(newArrayProducts);
// console.log(fruits.indexOf('banana'));

const numbers = [1,2,3,4,5];

for (let i = 0; i <newArrayProducts.length; i++){
    //numbers[i] = numbers[i] + 2;
    numbers [i] += 2;
    console.log(numbers[i]);   
}

console.log(numbers);

//i++ i --