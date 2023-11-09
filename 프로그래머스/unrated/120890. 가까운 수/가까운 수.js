// 답으로 리턴할 값을 담는 변수 answer와 최저 절대값을 담을 변수 absNum 선언 (n의 최대값이 100이므로 absNum은 100으로 초기화)
// array에 들어있는 요소 중 |n과의 차이값|이 가장 작은 수에 해당하는 요소 찾기
// 1. array를 돌며 Math.abs(요소 - n) 한 값이 absNum보다 작은 경우
// 1-1. answer = 요소(n과 제일 근접한 값을 재할당)
// 1-2. 다음 반복회차에서 이전 절대값과의 비교를 위해 absNum에 Math.abs(요소-n) 값 재할당
// 2. array를 돌며 Math.abs(요소 - n) 한 값이 absNum과 같은 경우
// 2-1. answer과 요소를 비교하여 더 작은값을 answer에 재할당
// 3. answer 리턴
function solution(array, n) {
    let answer = 0;
    let absNum = 100;
    for(i = 0; i < array.length; i++){
        if(Math.abs(array[i] - n) < absNum){
            absNum = Math.abs(array[i] - n);
            answer = array[i];
        } else if (Math.abs(array[i] - n) === absNum){
            array[i] < answer ? answer = array[i] : answer
        } 
    }
    return answer;
}