console.log(solution([2, 1, 1, 2, 3, 1]))

function solution(A) {
  if(A.length === 0) return 0

  A.sort(function(a, b) {
    return a - b;
  })

  var counter = 1
  for(var i = 1; i < A.length; i++) {
    if(A[i-1] !== A[i]){
        counter++
    }
  }

  return counter
}
