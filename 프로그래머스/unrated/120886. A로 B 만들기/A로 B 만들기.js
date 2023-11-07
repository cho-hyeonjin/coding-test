// before의 알파벳 종류와 갯수가 after를 구성하는 그것과 일치해야 함.
// 어렵게 느껴질수록 단순하게 생각하기
// Array.prototype.sort() 메서드를 써보자.
// before.split('').sort() 하면 알파벳순으로 정렬
// after.split('').sort() 한 것과 같으면 1 다르면 0 리턴
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}