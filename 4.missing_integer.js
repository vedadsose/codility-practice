console.log(solution([1, 3, 6, 4, 1, 2]))

function solution(A) {
  var max = 0
  var been = []
  for(var i = 0; i < A.length; i++) {
    if(!been[A[i]-1]) {
        been[A[i]-1] = true;
        if(A[i] > max) max = A[i]
    }
  }

  for(var i = 0; i <= max; i++) {
    if(!been[i]) return i+1
  }

  return 1
}
