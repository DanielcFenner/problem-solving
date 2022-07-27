function isTriangle(a,b,c)
{
   let arr = [a, b, c]
   arr.sort((a,b) => b-a)
   if (arr[1] + arr[2] > arr[0]) {
    return true
   } else {
    return false
   }
}

isTriangle(5, 10, 9)                                                                