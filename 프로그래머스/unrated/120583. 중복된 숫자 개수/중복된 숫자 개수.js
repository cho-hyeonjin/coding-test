function solution(array, n) {
    // 머쓱이 문제랑 비슷한 원리로 풀면 될 듯 하다.
    var result = array.filter(el => el === n)
    return result.length
}