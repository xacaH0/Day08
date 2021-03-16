function convertStrToInt(str){

    return parseInt(str, 16)


}
console.log(convertStrToInt("BA"));
console.log(convertStrToInt("F1"));
console.log(convertStrToInt("Jeff Bezos"));

module.exports = convertStrToInt;