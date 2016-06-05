console.log(solution([9,3,9,3,9,7,9]))

function solution(A) {
  var cn = {}
  for (i = 0; i < A.length; i++) {
    cn[A[i]] = cn[A[i]] ? cn[A[i]]+1 : 1
  }

  for (n in cn) {
    if (cn[n] % 2 == 1) return parseInt(n)
  }
}
