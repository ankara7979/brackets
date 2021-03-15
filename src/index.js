module.exports = function check(str, bracketsConfig) {
    let acc = [];
    let array = str.split("");
    let count = 0;

    while(count < array.length){
        acc.push(array[count]);
        for (let i = 0; i < bracketsConfig.length; i++){
            if (acc[acc.length-2] === bracketsConfig[i][0] && acc[acc.length-1] === bracketsConfig[i][1]){
                acc.pop();
                acc.pop();
            }
        }
        count++;
    }
    return !acc.length;
}
