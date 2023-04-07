var obj = {
    a:10,
    b:20,
    a:30
}
console.log(obj)


function palindrome(str){
    var out = ""
    for(var i = str.length-1; i>= 0; i--){
        out+=str[i]
      
    }
    console.log(str,out)
    if(str === out){
        return true;
    }
    else{
        return false;
    }
}

console.log(palindrome("malayalam"))