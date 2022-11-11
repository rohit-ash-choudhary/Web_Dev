console.log(arr);
var arr= [4,5,3,6,3,6];
console.log(arr);
{
    let arr1=[4,5,6,3,3,6,6,3]
    console.log(arr1)
}

const arr3=Array(5,3,2,5,6,2)
console.log(arr)
arr3.push(34)
arr3.push(100)
arr3.pop(3)

console.log(arr3)

console.log(typeof(arr))

console.log(typeof(arr3))

var ar=function add(a,b)
{
    return a+b;
}


console.log(typeof(ar))

var arr5=['Rohitash', 25, 'SGNR',
          {company: 'amdocs',tech: 'java'},
          {location:'pune', state:'MH'},
     
          110045,
          [345,3445,34,35,34,35]
     ]

console.log(arr5[4].location)

var hey='rohit choudhary'

console.log(hey.split(" "))

var fil=[3,6,3,3,5,6,3]
fil.fill('t',-2)
console.log(fil)

var final_arr=arr.concat(fil)
// arr.add(fil)
console.log(final_arr)
console.log(arr)
