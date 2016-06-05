console.log(solution([3,1,2,4,3]))

function solution(A) {
  var a = 0;
  var b = 0;
  var sumsA = []
  var sumsB = []

  for (i = 0; i < A.length-1; i++) {
    a += A[i]
    b += A[A.length-i-1]

    sumsA[i] = a
    sumsB[A.length-i-2] = b
  }

  var minDiff = null
  for (i = 0; i < A.length-1; i++) {
    var diff = Math.abs(sumsA[i]-sumsB[i])
    minDiff = minDiff === null || minDiff > diff ? diff : minDiff
  }

  return minDiff
}
