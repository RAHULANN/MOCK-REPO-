
// let obj={
//     name:"rahul",
//     city
// :"panna"}


// let fun= function (ele){
//     console.log(this.name+" "+this.city+ele)
//     return function(){
//         console.log("rahul")
//     }
   
// }

// //call


// fun.apply(obj,["mp","slls"])
// fun.call(obj,"mp","slls")

// let val=fun.bind(obj,"mp")
// val()()


let arr=[2,4,6,8,8,9]

// 3=> 10

// 2,4,6.10,8,9

//arr.splice(3,0,10)
console.log(arr)


for(let i=arr.length-1;i>=0;i--){

    let end=i+1
    arr[end]=arr[i]
    if(i==3){
        arr[i]=10
        
    }
}
console.log(arr)