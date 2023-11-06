// my_string에 String.prototype.split('') 메서드를 사용하여 배열로 바꾼다.
// 배열로 바꾼 my_string을 순회하며 새로운 배열에 push한다. 이때,
// 이미 새로운 배열에 있는 문자열이라면 push하지 않는다.
// 새로운 배열을 Array.prototype.join('') 메서드로 문자열로 바꿔 리턴한다.
function solution(my_string) {
    let newArr = [];
    my_string.split('').forEach((el) => newArr.includes(el) === false ? newArr.push(el) : newArr)
    return newArr.join('');
}