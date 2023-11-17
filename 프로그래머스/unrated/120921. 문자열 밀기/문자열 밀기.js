// 1. let pushedStr = '';
// 2. let arrayA = [...A] // 기존에 쓰던 split으로 배열화 하는 방식이 아닌 spread 연산자를 이용한 Array literal을 써보자.
// 3. arrayA를 돌면서 A와 B를 비교
// > A === B ? return index 하면 0번째 인덱스이므로 0 이 리턴됨
// > : arrayA.pop()하여 arrayA에 Arrya.prototype.unshift()로 붙인 값 
// >   --> 다시 Array.prototype.join() 이용해서 문자열한 값 === B 이면 ? 
// >   최소값이 1이기 때문에 i + 1
// > : arrayA를 다 돌아도 B가 되지 못한 케이스가 넘어오므로 return -1
function solution(A, B) {
    let arrayA = [...A];
    for(let i = 0; i < arrayA.length; i++){
        if(A === B){
            return i;
        } else {
            arrayA.unshift(arrayA.pop())
            if(arrayA.join('') === B){
                return i + 1;                
            }
        }
    }
            return -1;
}