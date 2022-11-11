

for(var i=0;i<5;i++)
{
    if(i==2)
    {
        continue
    }
  console.log('i inside',i);
}

//console.log('i outside',i)

var k=0;
while(k<5)
{
    if(k==3){
    continue
    
}
console.log(k);
k++
}
*/

var k=0
do{
    console.log('k value',k)
    k++
}while(k<6)
{
    
    console.log('last time excute in while loop')
}
