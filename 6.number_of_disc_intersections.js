console.log(solution([1, 5, 2, 1, 4, 0]))

function solution(A) {
  var start = []
  var end = []

  for(var i = 0; i < A.length; i++) {
    start.push(0)
    end.push(0)
  }

  for (var i = 0; i < A.length; i++) {
    if (i<A[i]) start[0]++
    else start[i-A[i]]++;

    if (i+A[i] >= A.length) end[A.length-1]++;
    else end[i+A[i]]++;
  }

  var active = 0
  var sum = 0
console.log(start, end)
  for (var i=0; i < A.length; i++) {
    console.log(sum, ' += ', active, '*', start[i], '+ ', (start[i]*(start[i]-1))/2, '=', active * start[i] + (start[i] * (start[i]-1))/2)
    sum += active * start[i] + (start[i] * (start[i]-1))/2;
    if (sum>10000000) return -1;
    active += start[i]-end[i];
  }
  return sum;
}
/*
uslov je c_i + r_i > c_j + r_j za c_i < c_j
i onda sortiras nizove c_i + r_i i c_i - r_i
i krenes od 0 bin pretragom za svaki treba logn da nadjes
*/
