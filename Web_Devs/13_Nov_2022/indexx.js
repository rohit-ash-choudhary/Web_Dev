var name='Rohit'
var classs='there'
const obj={
    name : 'rohitash',
    classs : 'css',
    arr :[3,5,6,3,7,3,6,8,3,7,3],
    myfunction  : function()
    {
        return `${this.name} + ${this.classs}`
    },
    arrowfunction : () =>
    {
        return  `${this.name} + ${this.classs}`
    },
    ar:
    {
        key1: 'value1',
        key2 : 'value2'
    }
}

console.log(obj.myfunction())
console.log(obj.arrowfunction())

obj.address='delhi'
obj.ar.key3='value3'

console.log(obj)

console.table(obj)

var obj2={
    name :'ashhh',
    class :'choudhar'
}

 const copiedObject=Object.assign(obj2)
// copiedObject.sex='Male'
// console.log(obj2)
// console.log(copiedObject)

// console.log(Object.keys(copiedObject))

console.log(Object.entries(copiedObject))

console.log(Object.values(copiedObject))

console.log(obj2.hasOwnProperty(name))
const pie=Math.PI
console.log(Math.round(pie))

console.log(Math.ceil(3.4))
console.log(Math.floor(3.4))

console.log(Math.min(343,5,2,5,6,2,6,2,6,-1,53,-1))
console.log(Math.max(343,5,2,5,6,2,6,2,6,-1,53,-1))
console.log(Math.round(Math.random()*100))

console.log(Math.abs(-10))

console.log(Math.sqrt(101))

console.log(Math.pow(3,40))

console.log(Math.E)

console.log(Math.log(Math.E))

console.log(Math.sin(30))


const date1=new Date();
const date2= Date()

console.log(date2)
console.log(date1)

