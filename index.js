function getLowerCase(str) {
    var x = str.toLowerCase();
    return x;
}
// console.log(getLowerCase("Hello WOrld"));
function add(number1, number2) {
    return number1 + number2;
}
// console.log(add(1,1));
var sub = function (num1, num2) {
    return num1 - num2;
};
// console.log(sub(2,3));
var arr = [124, 355, 674];
var str1 = ['234', '132'];
var id = [324325, '3225434'];
var person1 = {
    name: 'reg',
    age: 5,
    hobby: 'code'
};
var person2 = {
    name: 'ex',
    age: 1
};
var colors;
(function (colors) {
    colors["color1"] = "colorOne";
    colors["color2"] = "colortow";
    colors["color3"] = "colorThree";
})(colors || (colors = {}));
console.log(colors.color3);
