function solution(numbers, direction) {
    // numbers에서 direction에 따라 요소를 잘라낼 때,
    // 원본 배열 numbers가 (잘라낸 요소 없어진 배열로)변경되게 하고
    // 잘라낸 요소를 배열 메서드로 0번째 요소로 추가하거나, -1번째 요소로 추가하는 것을 생각했다.
    let cuttedItem = '' // 잘라낸 요소 담을 변수
    // direction이 'left'인 경우 첫번째 요소 잘라내서, 마지막 요소로 추가한다.
    if(direction === 'left'){
        cuttedItem = numbers.shift() // shift메서드는 원본 배열을 수정하는 메서드. 잘라낸 요소를 리턴한다.
        numbers.push(cuttedItem) // numbers는 shift로 잘라낸 요소가 삭제되어 변경된 배열.
                                 // 여기에 push로 잘라낸 요소를 마지막 요소로 추가해주기.
    }
    // direction이 'right'인 경우 마지막 요소를 잘라내서, 첫번째 요소로 추가한다.
    if(direction === 'right') {
        cuttedItem = numbers.reverse().shift() // 마지막 요소를 잘라내기 위해 배열을 뒤집고, 첫번째 요소를 잘라내서 잘라낸 요소를 리턴하는 shift메서드를 사용했다.
        numbers.reverse().unshift(cuttedItem) // 뒤집힌 상태에서 마지막 요소가 삭제된 배열을 다시 뒤집어 원상복구하고, 그 상태에서 맨 앞에 잘라냈던 요소를 추가했다.
    }
    return numbers;
}