console.log(solution(6, 11, 2))

function solution(A, B, K) {
  var rangeStart = (A % K === 0) ? A/K-1 : Math.floor(A/K)
  var rangeEnd = Math.floor(B/K)
  return rangeEnd-rangeStart
}
