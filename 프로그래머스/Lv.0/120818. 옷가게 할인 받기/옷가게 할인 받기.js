const solution = (price) => price >= 500000 ? Math.trunc(price - (price * 0.2)) : 
                                price >= 300000 ? Math.trunc(price - (price * 0.1)) :
                                    price >= 100000 ? Math.trunc(price - (price * 0.05)) : price
