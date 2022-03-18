function getLowerCase(str: string) {
  const x = str.toLowerCase();
  return x;
}
// console.log(getLowerCase("Hello WOrld"));

function add(number1: number, number2: number): number {
  return number1 + number2;
}

// console.log(add(1,1));


const sub =(num1:number,num2:number)=>{
return num1-num2
}

// console.log(sub(2,3));

const arr:number[] = [124,355,674];
const str1:string[]= ['234','132']
type  arrayAndString = string | number 
const id: arrayAndString[] = [324325,'3225434']


interface IPerson {
  name?:string,
  age?:number,
  hobby?:string
}

const person1: IPerson={
    name:'reg',
    age:5,
    hobby:'code'
}

const person2: IPerson={
name:'ex',
age:1
}

enum colors{
  color1="colorOne",
  color2="colortow",
  color3="colorThree"
}

console.log(colors.color3);


