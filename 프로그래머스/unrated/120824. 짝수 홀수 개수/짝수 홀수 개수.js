function solution(num_list) {
    // 카운팅 정보를 담는 변수 2개를 선언하여
    // 반복문을 돌며 % 2 연산을 해줬을 때 나머지가 0이면 짝수변수에 ++1, 그게 아니면(1이면) 홀수 변수에 ++1
    // return [짝수변수, 홀수변수] 해준다
    let evenNumCnt = 0, oddNumCnt = 0
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){
            evenNumCnt++
        } 
        else if (num_list[i] % 2 === 1){
            oddNumCnt++
        }
    }
    return [evenNumCnt, oddNumCnt]
}