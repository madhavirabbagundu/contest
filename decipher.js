var str = "a2b3n2"
function decipher(arr,n){
    var out = ""
    for(var i = 0; i < n; i++){
        if(arr[i+1] >=0 && arr[i+1] < 10){
            var num = arr[i+1]
            var str = arr[i]
            for(var j = 0; j < num; j++){
                out+=str
            }
        }
    }
    // console.log(out)
    console.log(out)
}
decipher("a2n3l2",6)