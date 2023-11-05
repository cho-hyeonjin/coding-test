// 1. order를 Number.prototype.toString()메서드를 이용해 문자열로 바꾼다.
// 2. let array = [...문자열로 바꾼 order.String.prototype.matchAll('3','6','9' 중 하나와 일치하는 요소에 해당하는 정규식)] 을 이용하여 ['3'],['6'],['9']들을 요소로 가지는 배열을 만든다.
// 3. array.length를 리턴한다
function solution(order) {
    let array = [...order.toString().matchAll(/[369]/g)];
    return array.length;
}