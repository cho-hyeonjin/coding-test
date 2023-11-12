# [level unrated] 진료 순서 정하기 - 120835 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120835) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2023년 11월 0일 23:59:43

### 문제 설명

<p speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 <code speechify-initial-font-family="Hack, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif" speechify-initial-font-size="14px">emergency</code>가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.</p>

<hr speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">

<h5 speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="15px">제한사항</h5>

<ul speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">
<li speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">중복된 원소는 없습니다.</li>
<li speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">1 ≤ <code speechify-initial-font-family="Hack, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif" speechify-initial-font-size="14px">emergency</code>의 길이 ≤ 10</li>
<li speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">1 ≤ <code speechify-initial-font-family="Hack, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif" speechify-initial-font-size="14px">emergency</code>의 원소 ≤ 100</li>
</ul>

<hr speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">

<h5 speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="15px">입출력 예</h5>
<table class="table" speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">
        <thead speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px"><tr speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">
<th speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">emergency</th>
<th speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">result</th>
</tr>
</thead>
        <tbody speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px"><tr speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">
<td speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">[3, 76, 24]</td>
<td speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">[3, 1, 2]</td>
</tr>
<tr speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">
<td speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">[1, 2, 3, 4, 5, 6, 7]</td>
<td speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">[7, 6, 5, 4, 3, 2, 1]</td>
</tr>
<tr speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">
<td speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">[30, 10, 23, 6, 100]</td>
<td speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">[2, 4, 3, 5, 1]</td>
</tr>
</tbody>
      </table>
<hr speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">

<h5 speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="15px">입출력 예 설명</h5>

<p speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">입출력 예 #1</p>

<ul speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">
<li speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px"><code speechify-initial-font-family="Hack, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif" speechify-initial-font-size="14px">emergency</code>가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.</li>
</ul>

<p speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">입출력 예 #2</p>

<ul speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">
<li speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px"><code speechify-initial-font-family="Hack, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif" speechify-initial-font-size="14px">emergency</code>가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.</li>
</ul>

<p speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">입출력 예 #3</p>

<ul speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px">
<li speechify-initial-font-family="Inter, NotoSansKR, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Noto Color Emoji&quot;" speechify-initial-font-size="16px"><code speechify-initial-font-family="Hack, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace, &quot;맑은 고딕&quot;, &quot;malgun gothic&quot;, 돋움, Dotum, sans-serif" speechify-initial-font-size="14px">emergency</code>가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges