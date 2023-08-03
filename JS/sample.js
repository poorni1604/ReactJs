var a = 120;
console.log("This is the value declared for var  before altering type :",a);
{
    var a = 7
    console.log("This is after altering the type :",a)
}
console.log("the value after altering: ",a)

let b = 128;
{
    let b =7
    console.log("the value inside the block: ",b)
}
console.log("This is the value declared in the let type: ",b);
const r = 20;
console.log("This is the value declared in the const type: ",r)

a = 0
if(a === 0){
    console.log("the number is zero and we are adding one to it",a)
    a = a + 1
}
if(a > 0){
    console.log("the number is positive",a)
}
/* else{
    console.log("the number is negative")
} */
//while loop
i = 0
while(i< a){
    console.log(i)
    i++
}
//for loop
a=10
for(i=0;i<a;i++){
    console.log(i)
} 

 i = 0
 a = 10 
 while(i< a){
    console.log(i)
    i++
 }
 //for loop
 a=10
for(i=0;i<a;i++){
    console.log(i)
}
//array
/* array=[10,20]
array.forEach(element => console.log(element)) */

//Array

const array = [10,20,"KSP",23.08,Date()]
console.log("Before change :")
for (var ele in array){
    console.log(array[ele])
}
console.log("After change :")
array.push("3rd year")

for (var ele of array){
    console.log(ele)
}
array.pop()
array.pop()
array.pop()
if(array.length>0){
    console.log("elements are present")
    for (var ele of array){
        console.log(ele)
    }
}
else{
    console.log("no elements left!")

}
//Objects

a = {
    car:"Audi",
    model: "ABC",
    airbags : b,
    wheels : 5,
    color : "blue"

}
console.log(a['color'])
console.log(a.airbags)
var some = 'model'
console.log("Value of some"+a[some])
console.log(a)
/* a.sunroof = "Yes"
console.log(a) 
a.sunroof = {isPresent: "Yes",Shape: "Rectangle"}
console.log(a)
console.log(a.sunroof.isPresent) */

//function
function fun_name(a,b){
    console.log(a+b+5+"ksp"+5+5)
}
fun_name(5,5)



