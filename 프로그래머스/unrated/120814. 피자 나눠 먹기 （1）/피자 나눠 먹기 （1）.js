function solution(n) {
    
    // n이 7 이하면 1판
    // n을 7로 나눴을때의 나머지가 7미만이면 몫+1판
    // 그 외에는 몫 판
    
//     var answer = 0;

//     if (n <= 7){
//         return  answer = 1;
//     }
//     else if(0 < n % 7 && n % 7 < 7) {
//        return answer = Math.floor(n / 7) + 1;
//     } return answer = Math.floor(n/7);
    
     // 간단하게 몫을 반올림처리 하면 코드가 훨씬 간결해짐!
    return Math.ceil(n / 7)
}