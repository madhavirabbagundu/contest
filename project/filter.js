const data = [
    {
        name:"madhavi",
        age:20,
    },
    {
        name:"chaithu",
        age:21,
    },
    {
        name:"mouni",
        age:25,
    }
]

const data1 = data.map((item)=>{
    return item
})
console.log(data1)

const data2 = data.filter((item)=>{
    return item.age>20
})
console.log(data2)