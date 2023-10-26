function solution(array, height) {
    // array를 돌 때마다 heigth와의 대소비교를 한다.
    // height보다 큰 경우만 배열로 리턴하면 되기 때문에, filter나 forEach를 써도 괜찮을 것 같다.
    var answer = array.filter((el) => height < el )
    return answer.length;
}