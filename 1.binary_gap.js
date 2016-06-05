console.log(solution(51712));

function solution(N) {
  var binary = (N >>> 0).toString(2);
  var counter = 0;
  var maxCount = 0;

  for (i = 0; i < binary.length; i++) {
    if (binary[i] == '0') {
      counter++;
    } else {
      maxCount = counter > maxCount ? counter : maxCount;
      counter = 0;
    }
  }
  return maxCount;
}
