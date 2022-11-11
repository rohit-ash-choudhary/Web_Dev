var arr=[4,5,3,6,7,3,76]
console.log(arr.join("      "))
console.log(typeof(arr))
console.log(typeof(arr.join()))

var arr_str=['ashhs', 'choduhary']
console.log(arr_str.join("$"))
console.log(typeof(arr_str))
console.log(typeof(arr_str.join()))

var arr1=[1,2,4,5,70,7,7,8]
console.log(arr1.slice())
console.log(arr1.slice(2))
console.log(arr1.slice(2,4))

console.log(arr1.slice(-5))


console.log(arr1.splice(7,9))
arr1.push(1000)
arr1.push({name:'rohit',address:{city: 'dehli',pincode:1234} }),
console.log(arr1[1].name)
console.table(arr1)

arr1.pop()
console.log(arr1)
arr1.shift()
console.log(arr1)
arr1.unshift(100)
console.log(arr1)
arr1.sort()
console.log(arr1.reverse())