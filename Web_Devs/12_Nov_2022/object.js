console.log(4)

const a={}
console.log(a)
console.log(typeof(a))
const obj={name: 'rohit', 
            address : 'delhi',
            pincode :110045,
            name: 'ashhh',
            pincode :110049

         }
// console.log(obj)
// console.table(obj)
// [] - empty array , {}- empty object ,()- empty function

const obj2={
    name: {
        first_name:'rohit',
        last_name:'choudhary'
    },
            address : 'delhi',
            pincode :110045,
            education : {
                collage : 'abc  university',
                pass_year: "2016-2020",
                location : 'Jaipur',
                first_name:'ashhh',

            },
            arr : [1,2,3,4,5,6],
            arrayofobject :
            [
             { arr1 : [ {
                    name :'value1',
                    skills : 'value2'
                }
            ],
            arr2 : [ {
                name :'value3',
                skills : 'value4'
               }
              ] 
            },
            

            { arr3 : [ {
                name :'value5',
                skills : 'value6'
            }
        ],
        arr4 : [ {
            name :'class',
            skills : 'java'
           }
          ] 
        }
            ],
            // arrayofobject :
            // [
            //    1,2,
            //    {
            //     name : 'rohit',
            //     branch :'cse'
            //    } ,
            //    {
            //     name : 'rohit',
            //     branch :'cse'
            //    } 
            //    ,
            //    {
            //     name : 'rohit',
            //     branch :'cse'
            //    } 
            // ]
            
}

// console.log(obj2)
// console.table(obj2)
// console.log(obj2.education.collage)

// for(let len=0;len<obj2.arrayofobject.length;len++)
// {
//     var el=obj2.arrayofobject[len];
//     console.log(el.skills)
// }

for(let i=0;i<obj2.arrayofobject.length;i++)
{
    var el=obj2.arrayofobject[i];
    console.log(el)

}

