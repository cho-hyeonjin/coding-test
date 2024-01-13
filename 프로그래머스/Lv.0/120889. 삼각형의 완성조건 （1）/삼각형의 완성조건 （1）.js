const solution = (sides) => {
    // // Math.max()로 최대값을 찾아서 해결해보기
    // let longest = Math.max(...sides)
    // // longest를 제외한 두 수를 찾고
    // // 그 다음에 reduce
    // // side가 longest와 같지 않다면이 아니라, longest보다 크지 않다면 === 작거나 같다면
    // let rests = sides.filter((side) => side !== longest)
    // let sumRests = rests.reduce((acc, curr) => acc + curr, 0)
    // // longest(가장 긴 변)은 sumRests(다른 두 변의 길이의 합)보다 작아야 1을 리턴할 수 있다.
    // return longest < sumRests ? 1 : 2
    sides.sort((a, b) => b - a);
    return sides[0] < sides[1] + sides[2] ? 1 : 2    
}