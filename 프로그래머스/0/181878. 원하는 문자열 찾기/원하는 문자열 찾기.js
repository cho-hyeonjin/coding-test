// 🏝️ Solving in PhuQuoc 🏖️✨
const solution = (myString, pat) => {
    // toUpperCase 또는 toLowerCase 로 일괄 처리 하고
    // String.prototype.includes()로 myString에 pat이 포함되어 있으면 1, 아니면 0 리턴
    const upperMyStr = myString.toUpperCase()
    return upperMyStr.includes(pat.toUpperCase()) ? 1 : 0
}