// 🏝️ Solving in PhuQuoc 🏖️✨

const solution = (arr) => {
    let X = [];
    // arr는 숫자 배열
    // arr[i]를 순회하면서 i에 해당하는 회수만큼 X에 push
    // 이중 반복문
    // 우선 바깥쪽에서 arr.length-1 만큼 돌고,
    for (let i = 0; i < arr.length; i++){
        // 내부에서 i만큼 돌면서 arr[i]를 X에 push --> X.push(arr[i])
        for (let j=0; j<arr[i]; j++) {
            X.push(arr[i])
        }
    }
    return X
}