// string이 가지는 자연어 의미를 이용해서 number타입으로 추론을 어떻게 해야 하나 생각하니 어렵게 느껴졌다.
// 자연어같은 과정으로 생각하지 말고 string을 이용해서 number값을 도출해내는 과정을 고민해보았다.
// 0 : 'zero' 와 같이 대응시켜주면 된다.
// 0~9까지 해봤자 10개의 값이니까 노가다스럽게 느껴지더라도 갑을 하나하나 지정해주기로 했다.
// 유사배열 객체를 이용하여 for...in문으로 순회할 때마다 객체 key를 값으로 가지는 특성으로 numbers를 numbers[key] 하는 방식을 시도해봤으나,
// 이는 잘못된 생각이었다. numbers는 "onetwothreefourfivesixseveneightnine" 형식이다.
// 유사배열 객체를 적용해보고 싶었던 시도였는데 아직 익숙치 않은 관계로 그냥 객체를 이용하기로 했다.
// 1. const wordsObj = {zero: 0, one: 1, ... nine: 9}; 로 객체를 만들어 둔다.
// 2. 결과값이 될 변수 result = 0; 으로 초기화 해둔다.
// 3. wordsObj를 forEach로 순회하며 String.prototype.replace() 메서드를 이용하여 순회하는 당시의 요소에 해당하는 string과 같은 부분을 wordsObj[el] 값으로 바꿔 result에 재할당해 준다.
// > 4. 잠깐...wordsObj가 객체면 forEach를 쓸 수 없는데 다시 유사배열 객체?...
// > 5. 그냥 wordsObj를 배열로 바꿔 다시 시도
function solution (numbers) {
    let wordsArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    wordsArr.forEach((el, idx) => {
        numbers = numbers.replaceAll(el, idx);
        // numbers는 string인 상태!!! 형변환 해줘야 됨
    });
    return Number(numbers);
}