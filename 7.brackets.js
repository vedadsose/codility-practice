console.log(solution('{[()()]}'))
console.log(solution('([)()]'))

function solution(S) {
  var s = []

  for (var i = 0; i < S.length; i++) {
    if(S[i] === ')' && S[s[s.length-1]] === '(') { s.pop(); continue; }
    if(S[i] === ']' && S[s[s.length-1]] === '[') { s.pop(); continue; }
    if(S[i] === '}' && S[s[s.length-1]] === '{') { s.pop(); continue; }

    s.push(i)
  }

  return s.length === 0 ? 1 : 0
}
