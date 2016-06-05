console.log([4, 1, 3, 2])

function solution(A) {
  var totalNumbers = A.length
  var checkedNumbers = []

  for(var i = 0; i < A.length; i++) {
    if(A[i] <= A.length && !checkedNumbers[A[i]-1]) {
      checkedNumbers[A[i]-1] = true
      totalNumbers--
    }
  }

  return totalNumbers === 0 ? 1 : 0
}
