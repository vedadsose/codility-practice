console.log(solution([2,3,1,5]))

function solution(A) {
  var sum = 0;
  var min = null;
  var max = 0;

  for (i = 0; i < A.length; i++) {
    sum += A[i]
    min = min === null || min > A[i] ? A[i] : min
    max = max < A[i] ? A[i] : max
  }

  var drsum = 0
  for (i = min; i <= max; i++) {
    drsum += i
  }

  return drsum-sum
}
