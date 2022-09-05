function examination(n,m,arr){
    var count = 0;
    for(var i = 0; i < n; i++){
        if(arr[i] > m){
            count++
            if(count >= 2){
                return i-1
                break;
            }
        }
    }
    return n
}