let numbers = [1,2,3,4,5,6,7,8,9,10]
const promF = input => {
    let total = 0
    lengthN = input.length
    input.forEach((number) => {
        total = total + number
    })
    return total / lengthN
}
console.log(promF(numbers))