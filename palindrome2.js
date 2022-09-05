function palindrome(str,n){
    var temp = {}
    for(var i = 0; i < n; i++){
        var item = str[i]
        if(temp[item] === undefined){
            temp[item] = 1
        }
        else{
            var prev = temp[item]
            temp[item] = prev+1
        }
    }
    // console.log(temp)
    var count = 0
    for(key in temp){
        // console.log(key+" "+temp[key])
        if(temp[key]%2 ===1){
            count++;
        }
        
    }
    if(count > 1){
        console.log("Not Possible!")
        }
        else{
            console.log("Possible!")
        }
    }