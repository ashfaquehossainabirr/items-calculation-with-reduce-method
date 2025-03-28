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


const btn = document.querySelector(".btn")

btn.addEventListener('click', (e) => {
    let appleObj = { name: e.target.innerText }
    fruits = fruits.concat(appleObj)
    console.log(e.target.innerText)

    const fruitCount = fruits.reduce((accumulator, currentValue) => {
        accumulator[currentValue.name] = (accumulator[currentValue.name] || 0) + 1
        return accumulator
    }, {})

    console.log(fruits)
    console.log(fruitCount)
    console.log(`Apples Total Price: ${fruitCount.apple * fruitPrice.apple}`)
})