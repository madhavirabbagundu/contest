var str = "abc"
var str1 = "abh"
var out = ""
if(str.length!==str1.length){
    console.log(false)
}
 str = str.trim().split("").sort()
 str1 = str1.trim().split("").sort()
 console.log(str,str1)
for(var i = 0; i < str.length; i++){
if(str[i] === str1[i]){
    out = true
}
else{
    out = false
}
}
console.log(out)