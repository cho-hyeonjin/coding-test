// before의 알파벳 종류와 갯수가 after를 구성하는 그것과 일치해야 함.
// 어렵게 느껴질수록 단순하게 생각하기
// Array.prototype.sort() 메서드를 써보자.
// before.split('').sort() 하면 알파벳순으로 정렬
// after.split('').sort() 한 것과 같으면 1 다르면 0 리턴
function solution(before, after) {
    let sortedBefore = before.split('').sort();
    let sortedAfter= after.split('').sort()
    
    let answer = 0;
    sortedBefore.join('') === sortedAfter.join('') ? answer = 1 : answer = 0;
    
    console.log(sortedBefore, sortedAfter, answer)
    // 왜 틀리는지 생각해보니, sortedBefore과 sortedAfter는 참조형 데이터여서 false가 나온다고 생각되었다.
    // join메서드로 String으로 변경하여 진행해보기로 했다.
    return answer
}