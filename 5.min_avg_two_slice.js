console.log(solution([4, 2, 2, 5, 1, 5, 8]))
function solution(A) {
  var minAvg = 100000;
  var index=0;

 if(A.length<=2) {
   return 0;
 }

  for(var i=0;i<A.length-2;i++) {
   if((A[i]+A[i+1])/2.0<minAvg) {
     minAvg=(A[i]+A[i+1])/2.0;
     index=i;
   }

   if((A[i]+A[i+1]+A[i+2])/3.0<minAvg)  {
     minAvg=(A[i]+A[i+1]+A[i+2])/3.0;
     index=i;
   }
  }

  var aMax = A.length-2;
  if((A[aMax]+A[aMax+1])/2.0<minAvg) {
    minAvg=(A[aMax]+A[aMax+1])/2.0;
    index=aMax;
  }

  return index;
}
