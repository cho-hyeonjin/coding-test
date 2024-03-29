const solution = (n) => {
    // 홀수 =< n
    // 0부터 n만큼 +1씩 커지면서 n이하까지 순회하는 반복문
    // 홀수인 경우 return할 배열에 push
    let result = [];
    for(let i = 0; i <= n ; i++){
        i % 2 ?  result.push(i) : result
    }
    return result
    // 하지만 문제에 "오름차순으로 정렬"이라는 조건을 명시해둔 것을 보면, sort 메서드를 사용한 코드가 더 좋은 것 같다.
    
    // let result = [];
    // for(let i = 1; i <= n; i+=2) result.push(i) // 반복문 조건 설정을 이용해서 푸는 방식도 생각해보자. 조건 설정을 습관적으로, 기계적으로 하지 말기~ 
    // return result;
}