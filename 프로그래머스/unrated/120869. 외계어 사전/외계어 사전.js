// 당장 떠오르는 아이디어)
// dic for문 안에서 spll for문 돌리기
//     el.includes(spell[i]) => 미리 만들어둔 빈배열에 결과 push.
//     if 그 결과의 요소가 모두 true인 배열 되는 순간 1리턴하고 탈출
// else if dic for문 다 돌아도 탈출 못하면
// 2 리턴하고 탈출

function solution(spell, dic) {
    const answerArr = [];
    let answer = false;
    
    dic.forEach((dicItem, dicIdx) => {
        const result = [];
        spell.forEach((spellItem, spellIdx) => {
            result.push(dic[dicIdx].includes(spell[spellIdx]))
        })
        answerArr.push(result);
    })
    return answerArr.filter((answerItem) => !answerItem.includes(false)).length > 0 ? 1 : 2;
}