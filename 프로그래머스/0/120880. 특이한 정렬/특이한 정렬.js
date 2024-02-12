const solution = (numlist, n) => 
  // Array.prototype.sort([callback]) 메서드를 이용해서 numlist를 정렬한다.
    // callback에 전달되는 인수는 정렬 함수.
    // 콜백에 들어오는 정렬 함수는?
    // 두 개의 인수를 비교 → 배열로 리턴하는 역할.
    // compareFunction (a, b) {
    //   a, b 비교 후 정렬하여 리턴하는 로직 
    //     ( a - b 가 양수면 a > b ∴ a가 b보다 앞에 정렬된 배열 리턴
    //       a - b 가 0이면 a = b ∴ a와 b 순서 변경 없이 그대로 리턴
    //       a - b 가 음수면 a < b ∴ a가 b보다 뒤에 정렬되어 리턴 )
    //   → 이 부분의 평가 결과가 양수면 ? return [a, b]
    //   →         평가 결과가 0이면 ? return [a, b 전달된 순서대로]
    //   →         평가 결과가 음수면 ? return [b, a]
    // }
 numlist.sort((a, b) => {  
     // callback 비교 정렬 로직 작성부, 
     // n과의 거리는 절대값으로 처리
     // (거리는 음수 개념이 없으므로 왼쪽 방향(음수)/오른쪽 방향(양수) 모두 양수로 치환)
     // → aDistance는 n으로부터 a까지의 거리, bDistance는 n으로부터 b까지의 거리.
    const [aDistance, bDistance] = [Math.abs(n-a), Math.abs(n-b)]
    // 두 요소 모두 n으로의부터의 거리가 동일한 경우
    // aDistance - bDistance === 0 == 두 요소 모두 n으로부터의 거리가 같다.
    if(aDistance === bDistance)
    // a, b 중 큰 값 → 작은 값 순서로 내림차순 정렬
        return b - a  
    // 두 요소 각각이 n으로부터 떨어진 거리가 다르다면,
    // 거리가 작은 요소 → 거리가 큰 요소 순으로 오름차순 정렬
    return aDistance - bDistance
    }
  )    
