console.log(solution([-2, -1, 1, 3, 60]))

function solution(A) {
    A.sort(function(a,b) { return b-a })
    return Math.max(A[0]*A[1]*A[2], A[0]*A[A.length-1]*A[A.length-2])
}
