// 🏝️ Solving in Phu Quoc 🏖️✨
const solution = (n) => {
    // 순서쌍 = (a, b)
    // a * b = n
    // 인수분해
    // 인수는 a, b 두 개이다.
    // 1. 인수 a를 하나씩 증가시키면서 n을 나눠보고 나누어 떨어지는 경우를 찾는다.
    // 2. 나누어 떨어지는 경우 count +1한다.
    // 3. 2*50과 50*2는 중복 예외처리 할 필요 없다.
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            count ++
        }
    }
    return count;
}