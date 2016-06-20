console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]), ' => ', 7)
console.log(solution([1, 8, 8, 5, 7, 9, 8, 7, 4, 8]), ' => ', 8)
console.log(solution([1, 1, 1]), ' => ', 1)
console.log(solution([3, 3, 1, 2, 5, 2, 3, 9, 4]), ' => ', 7)

function solution(H) {
  var s = []
  var removed = 0

  for(var i = 0; i < H.length; i++) {
    var height = H[i]

    while(s.length > 0 && height < H[s[s.length-1]]) {
      s.pop()
      removed++
    }

    if(s.length === 0) {
      s.push(i)
    } else {
      if(H[s[s.length-1]] !== height) s.push(i)
    }
  }

  return removed+s.length
}
