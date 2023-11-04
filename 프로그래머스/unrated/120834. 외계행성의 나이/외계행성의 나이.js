function solution(age) {
    // Number.prototype.toString() 메서드를 이용하여 age를 문자열화 한다.
    // 문자열화 한 age를 String.prototype.split('') 메서드를 이용하여 배열화 한다.
    // Array.prototype.map() 메서드를 이용하며 0 ~ 9 숫자에 대응되는 문자열로 새로운 배열을 만든다.
    // Array.prototyp.join() 메서드를 이용하여 배열을 문자열로 바꿔 리턴한다.
    const ageStr = age.toString();
    let result = '';
    return ageStr.split('').map((el) => el === '0' ? result = 'a' : 
                                el === '1' ? result = 'b' : 
                                    el === '2' ? result = 'c' :
                                        el === '3' ? result = 'd' :
                                            el === '4' ? result = 'e' :
                                                el === '5' ? result = 'f' :
                                                    el === '6' ? result = 'g' :
                                                        el === '7' ? result = 'h' :
                                                            el === '8' ? result = 'i' : result = 'j'
                     ).join('')
    // 그런데 이렇게 쓰고 보니 < 10 까지 도는 for문으로 설정하고 index를 이용하면 더 짧은 코드가 나왔으려나? 하는 생각이 들어 다시 풀어보기로 했다.
}