console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]))

function solution(X, A) {
  var leaves = {}
  var leftLeaves = X
  for(var i = 0; i < A.length; i++) {
      if(!leaves[A[i]-1]) {
          leaves[A[i]-1] = true
          if(A[i] <= X) leftLeaves--
      }

      if(leftLeaves === 0) return i
  }

  return -1
}
