const solution = (sides) => {
    let longest = Math.max(...sides);
    // (기존)
    // let rests = sides.filter((side) => side !== longest);
    // let sumRests = rests.reduce((acc, curr) => acc + curr, 0);
    // --> 기존 방식처럼 원본 배열에서 최대값을 제거한 배열을 구해서 해당 배열의 모든 요소를 누산하는 방식이 아니라.
    // --> 원본 배열의 모든 값을 누산한 뒤 최대값을 빼주는 방식으로 수정
    let sumRests = sides.reduce((acc, curr) => acc + curr, 0) - longest; 
    
    return longest < sumRests ? 1 : 2
    
    // 또 다른 풀이
    // sides.sort((a, b) => b - a);
    // return sides[0] < sides[1] + sides[2] ? 1 : 2    
}