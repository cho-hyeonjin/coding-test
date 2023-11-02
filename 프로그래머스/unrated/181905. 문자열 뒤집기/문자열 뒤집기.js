function solution(my_string, s, e) {
    
    let reversedFragment = my_string.split('').slice(s, e+1).reverse().join('');
    let front = my_string.substring(0, s);
    let end = my_string.slice(e+1)
    
    return front + reversedFragment + end
    
}