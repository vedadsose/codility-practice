console.log(solution('(()(())())'), 1)
console.log(solution('())'), 0)

function solution(S) {
  var s = []

  for(var i = 0; i < S.length; i++) {
    if(S[i] === '(') s.push(i)
    else if(S[i] === ')') {
      if(s.length === 0) return 0
      else s.pop()
    }
  }

  return s.length === 0 ? 1 : 0
}
