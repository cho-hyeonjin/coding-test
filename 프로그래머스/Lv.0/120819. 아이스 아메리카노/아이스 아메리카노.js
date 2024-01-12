const solution = (money) => {
    let result = []
    result.push(Math.floor(money / 5500), money % 5500)
    return result
}