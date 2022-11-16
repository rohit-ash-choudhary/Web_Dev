// setTimeout(() => {
//     console.log("set timeout")
// },5000)

// setInterval(() => {
//     console.log("set timeout -set interval")
// },5000)

// function x(y)
// {
//     console.log("x function")
//     console.log(y)
//     y()
// }

// x(y)
// function y(){
//     console.log("y function")
    
// }


const HigherOrder=(n) =>{
    const a= (m) =>
    {
        const b= (o)=>
        {
            return n*m*o;
        }
            return b
    }
    return a

}

// const r=HigherOrder(3)(4)(3)
// console.log(r)

const arr=[3,5,2,5,2,5,2,2,5,2,52]
const arr2=['adhfd','Rohit','Monday','South Ex']
arr.forEach((element,index, array) =>
{
   
    console.log(index,element,array)
})


arr.map((el)=>{
        console.log(el)
})


arr2.filter((element)=>
{
   console.log(element.includes('o'))
})

const arr3=[4,3,5,3,6,12,2]

const sum=arr3.reduce((accu, curr)=>
{
        return accu+curr;
})

console.log(sum)

console.log("Every Function")

const arr5= ["Stirng","rerer","ERerer"]

const re=arr5.every((element)=>
{
        return typeof(element)===String;
})

console.log(re)