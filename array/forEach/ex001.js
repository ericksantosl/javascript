let arr = [1, 2, 3, 4, 5, 6]

arr.forEach((item, index) => {
    if(item % 2 === 0) {
        console.log(`Número: ${item}; Posição: ${index}`)
    }
})