function EvenOdd(arr){
    var out = []
    var out1 = []
for(var i = 0; i < arr.length; i++){
    if(arr[i]%2===0){
        out.push(arr[i])
    }
    else{
        out1.push(arr[i])
    }
}
console.log(out,out1)
for(var j = 0; j < out1.length; j++){
    out.push(out1[j])
}
console.log(out)
}
console.log(EvenOdd([3,6,8,2,3]))