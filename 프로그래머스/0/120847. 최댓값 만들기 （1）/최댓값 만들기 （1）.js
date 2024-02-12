const solution = (numbers) => {
    // numbers 배열을 내림차순 (or 오름차순) 정렬.
    // 0번째 인덱스 요소, 1번째 인덱스 요소 곱한 값 리턴
    const sortedNumbers = numbers.sort((a, b) => b - a);
    return sortedNumbers[0] * sortedNumbers[1]
}