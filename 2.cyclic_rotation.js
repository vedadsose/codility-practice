console.log(solution([1000, 10], 5));

function solution(A, K) {
  if (K > 0) {
    A.unshift(A[A.length-1])
    A.pop()
    return solution(A, K-1);
  } else {
    return A
  }
}
