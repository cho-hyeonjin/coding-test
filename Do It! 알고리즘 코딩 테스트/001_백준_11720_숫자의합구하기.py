# 백준 온라인 저지 11720번: 숫자의 합 🔗https://www.acmicpc.net/problem/11720
# 
# 문제 
# > 'N개의 숫자가 공백 없이 써 있다. 이 숫자를 모두 합해 출력하는 프로그램을 작성하시오.
# 
# 입력
# > 1번째 줄에 숫자의 개수 N(1 <= N <= 100), 2번째 줄에 숫자 N개가 공백 없이 주어진다.
# 
# 출력
# > 입력으로 주어진 숫자 N개의 합을 출력한다.

# 예제 입력
# > 5
# > 54321
# 
# 예제 출력
# > 15

# * 1단계: 문제 분석 
# *
# * 파이썬 리스트 자료구조를 통해 쉽게 해결할 수 있는 문제이다.
# * 주어진 숫자를 리스트 형태로 저장한 뒤
# * 해당 리스트를 index를 이용해 탐색하면서 각 자릿수의 값을 더하면 된다.
# * 자릿수를 더할 때는 정수형으로 변환하여 더한다.
# ***************************************************************************
# * 2단계: 손으로 풀어보기
# * 
# * 1. 숫자의 개수만큼 입력받은 값을 리스트 형태로 저장한다.
# *    numbers = '10987654321'
# * 2. numbers 리스트를 탐색하며 각 값을 정수형(int)으로 변환하며 결괏값에 더하여 누적한다.
# ! 파이썬에서 list는 배열의 특징을 모두 가지고 있기 때문에 index로 접근할 수 있다.
# ! 파이썬에서는 숫자가 정수형,
# ***************************************************************************
# * 3단계: 수도코드 작성
# *    
# * 1. n값 입력 받기
# * 2. numbers 변수에 list 함수를 이용하여 숫자를 한 자리씩 나누어 받기
# * 3. sum변수 선언
# * 4. for numbers 탐색: 
# *        sum 변수에 numbers에 있는 각 자릿수를 가져와 더하기
# * 5. 출력
# ***************************************************************************
# * 4단계: 코드 구현하기 
n = input()
numbers = list(inout())
sum = 0

for i in numbers:
  sum = sum + int(i) # numbers 리스트의 각 자리 수 가져와서 더하기
  
print(sum)
# ***************************************************************************
