// 결과가 될 배열을 담을 변수를 선언한다.
// s를 String.prototype.split('') 메서드를 이용하여 배열화 시킨다.
// 배열화된 s를 for문을 돌면서 이중 포문으로 
// filter 메서드를 이용하여 [i]번째 요소와 el이 같은 배열을 리턴해서 길이가 1 초과면 [i]번째 요소는 결과가 될 배열에 push하지 않는다.
// 결과가 될 배열에 Array.prototype.sort() 메서드를 이용하여 정렬한 뒤 
// Array.prototype.join('') 메서드로 하나의 문자열로 만들어 리턴한다.

function solution(s) {
    let resultArr = [];
    const splitedArr = s.split('')
    for(let i = 0; i < splitedArr.length; i++){
        splitedArr.filter(el => el === splitedArr[i]).length === 1 ? resultArr.push(splitedArr[i]) : resultArr
    }
    return resultArr.sort().join('')
}