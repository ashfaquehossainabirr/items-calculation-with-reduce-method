const fruitPrice = {
    apple: 200,
    banana: 60,
    orange: 300,
    mango: 120,
    pineapple: 40,
    watermelon: 250,
    papaya: 100
}

let fruits = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'orange'},
    {name: 'mango'},
    {name: 'pineapple'},
    {name: 'watermelon'},
    {name: 'papaya'},
    {name: 'apple'},
    {name: 'mango'},
    {name: 'watermelon'},
    {name: 'apple'},
    {name: 'banana'}
]

const fruitCount = fruits.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = (accumulator[currentValue.name] || 0) + 1
    return accumulator
}, {})

console.log(fruitCount)

console.log(`Apples Total Price: ${fruitCount.apple * fruitPrice.apple}`)
console.log(`Bananas Total Price: ${fruitCount.banana * fruitPrice.banana}`)


const btns = document.querySelectorAll(".btn")

btns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        let innerText = e.target.innerText
        let obj = { name: innerText }
        fruits = fruits.concat(obj)
        console.log(innerText)
    
        const fruitCount = fruits.reduce((accumulator, currentValue) => {
            accumulator[currentValue.name] = (accumulator[currentValue.name] || 0) + 1
            return accumulator
        }, {})
    
        console.log(fruits)
        console.log(fruitCount)

        console.log("Current Index: " + index)

        const keys = Object.keys(fruitPrice)
        console.log("Current Fruit Name: " + keys[index])

        console.log(`Apples Total Price: ${fruitCount.apple * fruitPrice.apple}`)
        console.log(`Banana Total Price: ${fruitCount.banana * fruitPrice.banana}`)
    })
})