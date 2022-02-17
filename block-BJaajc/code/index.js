function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function isPalindrome(str) {
   let reverseStr = str.split("").reverse().join(""); 
    return str === reverseStr;
}


function getCircumference(radius) {
    return `The circumference is ${Math.floor(2 * Math.PI * radius)}`;    
}

function getAreaOfCircle(radius) {
    return `The area is ${ Math.floor(Math.PI * (radius * radius))}`;
}

module.exports = {
    getFullName,
    isPalindrome,
    getCircumference, 
    getAreaOfCircle,
};