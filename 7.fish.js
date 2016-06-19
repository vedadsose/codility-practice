console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]))

function solution(A, B) {
  var s = []
  for(var i = 0; i < A.length; i++){
    var size = A[i];
    var direction = B[i];

    if(s.length === 0){
      s.push(i);
    } else {
      while(s.length !== 0 && direction - B[s[s.length-1]] == -1 && A[s[s.length-1]] < size){
        s.pop();
      }

      if(s.length !== 0){
        if(direction - B[s[s.length-1]] !== -1) s.push(i);
      } else { s.push(i) }
    }
  }
  return s.length;
}
