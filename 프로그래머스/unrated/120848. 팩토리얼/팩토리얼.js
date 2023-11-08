// 재귀함수 문제
// 10!이 3,628,800 이므로 제한사항은 0 < n <= 10!
// 결과값을 담을 변수 answer (1부터 10까지 돌면서 팩토리얼 연산을 할 때, n보다 작거나 같은 팩토리얼 값);
// 팩토리얼 값을 담을 변수 factorialResult
// 1~10까지 반목문 돌면서
// 그 반복문 안에서 factorialResult*i(1~10까지 한바퀴당 +1되는 수) 해서 factorialResult에 재할당
// 그 반복문 안에서 위 연산 아래에 조건문으로 factorialResult값이 n보다 작거나 같으면 answer에 i 재할당 
// (5!이라고 치면, factorialResult는 120. 5가 i.
// 문제가 요구하는 건 n보다 작은 i값(팩토리얼 입력값)이지 결과값이 아님.
// 팩토리얼 연산 결과가 n보다 작은 i값 구하기가 문제임)


function solution(n) {
    let answer = 0;
    let factorialResult = 1;
    for(let i = 1; i <= 10; i++){
        factorialResult = factorialResult * i
        if(factorialResult <= n){
            answer = i
        }
    }
    return answer;
}