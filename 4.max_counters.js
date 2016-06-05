console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]))

function solution(N, A) {
  var solutions = []
  var max = 0
  var lastUpdate = 0

  for(var i = 0; i < A.length; i++) {
    if(1 <= A[i] && A[i] <= N) {
      if(!solutions[A[i]-1]) {
        solutions[A[i]-1] = lastUpdate
      }

      solutions[A[i]-1] = solutions[A[i]-1] > lastUpdate ? solutions[A[i]-1]+1 : lastUpdate+1
      if(solutions[A[i]-1] > max) max = solutions[A[i]-1]
    } else if(A[i] === N+1) {
      lastUpdate = max
    }
  }

  for(var i = 0; i < N; i++) {
    if(!solutions[i]) solutions[i] = 0
    if(solutions[i] < lastUpdate) solutions[i] = lastUpdate
  }

  return solutions
}
