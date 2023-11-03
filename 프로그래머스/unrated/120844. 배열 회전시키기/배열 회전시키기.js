function solution(numbers, direction) {
    // direction이 'right'이면 -1번째 요소를 잘라내서 0번째 요소로 push(unshift)
    // directiondl 'left'면 0번째 요소를 잘라서 -1번째 요소로 push
    let cuttedItem = ''
    if(direction === 'left'){
        cuttedItem = numbers.shift()
        numbers.push(cuttedItem)
        return numbers
    }
    if(direction === 'right') {
        cuttedItem = numbers.reverse().shift()
        numbers.reverse().unshift(cuttedItem)
        return numbers
    }
    
}