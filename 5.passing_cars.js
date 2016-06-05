console.log(solution([0, 1, 0, 1, 1]))

function solution(A) {
    var pairs = 0
    var counter = 0

    for(var i = 0; i < A.length; i++) {
        if(A[i] === 0) {
            counter++
        }
        else if(A[i] === 1) {
            pairs += counter
        }
    }

    return pairs <= 1000000000 ? pairs : -1
}
