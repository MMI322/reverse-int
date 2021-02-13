module.exports = function reversive(str) {

    let positiveString = Math.abs(+str); // getting the module of the incoming string

    let reversedString = String(positiveString).split(''); // splitting a string into an array of numbers

    return reversedString.reverse().join(''); // reversing and joining array into a string
}
