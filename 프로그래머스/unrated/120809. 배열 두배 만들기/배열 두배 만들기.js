function solution(numbers) {
    // 일단 map으로 풀면 간단히 풀릴 문제일 것 같다.
    // 하지만, reduce 사용 연습을 위해 map으로 푼 뒤 reduce를 사용해 다시 풀어보자.
    // reduce의 콜백함수의 첫번째 매개변수는 누산기, 두번째 매개변수는 현재 인덱스의 값이다.
    
    // map
    return result = numbers.map((el) => el * 2)
}