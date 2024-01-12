const solution = (dot) => 
    // dot은 배열 [-3, 2] 와 같은 형식
    // dot[0]이 양수인 case
    // > dot[1]이 양수 --> 1사분면
    // > dot[1]이 음수 --> 4사분면
    // dot[0]이 음수인 case
    // > dot[1]이 양수 --> 2사분면
    // > dot[1]이 음수 --> 3사분면
    // let result = 0;
    //     if(dot[0] > 0) {
    //         dot[1] > 0 ? result = 1 : result = 4
    //     } else if (dot[0] < 0) {
    //         dot[1] > 0 ? result = 2 : result = 3
    //     }
    // return result
    // }
   dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3

