// 우선 i부터 j 사이의 숫자를 배열로 만든다.
// 한 바퀴 돌 때마다 1씩 커지는 변수 n을 갖고, j-1만큼 도는 반복문을 만든다.
// i 가 j와 같아지기 전까지 i + n 한 값을 배열에 push한다.
// 해당 배열을 Array.prototype.join('') 메서드로 하나의 문자열로 만들어준다.
// 해당 문자열을 String.prototype.split('') 메서드로 다시 배열로 만들어준 뒤
// 카운팅 변수를 하나 선언하여
// 해당 배열의 요소마다 k와 비교하여 같은 경우 카운팅 변수 값에 +1을 한 값을 리턴한다.

function solution(i, j, k) {
    let arr = [];
    let newArr = [];
    let count = 0;
    for(let n = 0; n <= j-i; n++){
        arr.push(i+n);
    }
    newArr = arr.join('').split('')
    newArr.forEach(el => Number(el) === k ? count ++ : count) // 계속 에러가 났던 이유는 el이 string이었기 때문..!
    return count;
}