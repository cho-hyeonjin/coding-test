// 🏝️ Solving in PhuQuoc 🏖️✨

const solution = (arr) => {
    let X = [];
    // 첫번째 풀이 - 이중 for문
    // // arr는 숫자 배열
    // // arr[i]를 순회하면서 i에 해당하는 회수만큼 X에 push
    // // 이중 반복문
    // // 우선 바깥쪽에서 arr.length-1 만큼 돌고,
    // for (let i = 0; i < arr.length; i++){
    //     // 내부에서 i만큼 돌면서 arr[i]를 X에 push --> X.push(arr[i])
    //     for (let j = 0; j < arr[i]; j++) {
    //         X.push(arr[i])
    //     }
    // }
    // return X;
    
    // 두번째 풀이 - map 메서드
    // arr.map((el) => {
    //     for(let i = 0; i < el; i++){
    //         X.push(el)
    //     }
    // })
    // return X;
    
    // 세번째 풀이 - reduce 메서드
    // 초기값은 빈배열, 누산기에 이전 순회에서 추가한 요소까지 추가되어 있는 배열, 현재값에 지금 순회에서 추가할 요소
    return arr.reduce((accumulator, currentValue) => [...accumulator, ...new Array(currentValue).fill(currentValue)], [])
}