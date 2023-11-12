// 문제를 잘 읽자. 응급도가 높은 순서대로 요소를 재정렬 하라는 게 아니라,
// 응급도가 높은 순서대로 진료 순서를 정한 배열을 리턴하라고 했다.
function solution(emergency) {
    // spread연산자로 arr의 복사본을 만들어 역정렬한다.
    const arr = [...emergency].sort((a, b) => (b - a));
    // map으로 emergency의 매 요소의 값과 인덱스를 돌며 arr에 값번째 요소에 + 1 한 값들을 push한다.
    return emergency.map((v, i) => arr.indexOf(v) + 1) 
}