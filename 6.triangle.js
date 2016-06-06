console.log(solution([10, 2, 5, 1, 8, 20]))
console.log(solution([10, 50, 5, 1]))

function solution(A) {
  A.sort(function(a, b) {
    return a - b;
  })

  for(var i = 0; i < A.length; i++) {
    var P = i
    var Q = i+1
    var R = i+2
    if(A[P] + A[Q] > A[R] && A[Q] + A[R] > A[P] && A[R] + A[P] > A[Q]) return 1
  }
  
  return 0
}
