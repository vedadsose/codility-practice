console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]), '==>', [2, 4, 1])

function solution(S, P, Q) {
    var genoms = [[0], [0], [0]]

    for(var i = 0; i < S.length; i++) {
      var a = 0; var c = 0; var g = 0;
      if(S[i] === 'A') a++
      if(S[i] === 'C') c++
      if(S[i] === 'G') g++

      genoms[0][i+1] = genoms[0][i] + a;
      genoms[1][i+1] = genoms[1][i] + c;
      genoms[2][i+1] = genoms[2][i] + g;
    }

    var result = []
    for (var i=0; i<P.length; i++) {
        var fromIndex = P[i];
        var toIndex = Q[i]+1;

        if (genoms[0][toIndex] - genoms[0][fromIndex] > 0) {
            result[i] = 1;
        } else if (genoms[1][toIndex] - genoms[1][fromIndex] > 0) {
            result[i] = 2;
        } else if (genoms[2][toIndex] - genoms[2][fromIndex] > 0) {
            result[i] = 3;
        } else {
            result[i] = 4;
        }
    }

    return result;
}
