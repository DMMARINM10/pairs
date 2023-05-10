
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const pairs = (array, sum) => {
    const noIter = []
    const result = []
    for(const i in array) {
        if(!noIter.includes(i)) {
            const value1 = array[i]
            const counterVal = (Number(sum) - Number(value1)).toString()
            const index = array.findIndex((val) => val === counterVal && counterVal !== value1)
            if(index >= 0) {
                noIter.push(index.toString())
                result.push([value1, counterVal])
            }
        }
    }
    console.log(result)
}


rl.question('Enter your input: ', (answer) => {
    const inputs = answer.toString().split(' ')
    const sum = inputs[1]
    const array = inputs[0].split(',')
    pairs(array, sum)
    rl.close();
});