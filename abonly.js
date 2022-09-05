function general(arr){
    // console.log(arr)
    var out = []
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === "?"){
         if(arr[i-1] === "a" || arr[i+1] === "a"){
             arr[i] = "b"
             }
             else{
               arr[i] = "a"
            }
          }
          
     
            // console.log(out)

    }
    console.log(arr.join(""))
}