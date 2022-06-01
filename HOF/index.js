
// map The map() method creates a new array populated with the results 
//of calling a provided function on every element in the calling array.


let arr =[1,3,5,7,8,9]

let dd=arr.map((e)=>e*2)

console.log(dd)



// filter 

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// it siply filter the data and it itret on every element and than return a new arr with passed data
// it not modifined the main arr make it copy and than filter 

let filterarr=arr.filter((e)=>e>4)
//console.log(arr)
console.log(filterarr)


//  reducer

// reducer itereat on every element of arr and return a single value of the arr if we want to make a sum of all element of the arr
// element than it itreat and the return the sum 
// it thakes two parameter accumulater , and current  if we want to give some inisial value for accumulater we can pass as asecont aurgument of reduce function 



let result=arr.reduce((acc,curent)=>{
    return acc+curent
},0)


console.log(result)


// max in arr

let max=arr.reduce((acc,current)=>{
    if(acc<current){
        acc=current
    }
    return acc
},null)

console.log(max)




//   find method 

//  fint will find first element which will mach the condition  and return a  single value 

let finddata=arr.find((e)=>e>6)
console.log(finddata)

// splice 


// splice take three val fist is=> starting index of arr 
// second=> count of element which we want to delete from arr 
// thered==> it takes a value which we want to push in arr at that position 

// and retun a same arr 

let splicearr=arr.splice(2,1,15)// start will index 2 and remove one elemnt from the arr and then push 15 in index 2 
// it return a removed value from the arr 
// it will change the orignal arr 

console.log(arr)



/// slice


//  it return a shallow copy of new arr and it cont modifay the oraginal arr  
// it takes two value first => starting index it will include 
// second => end endex => it will not inclued 
// if we pass only single parameter then it will take as starting and it assume that last index is length of the arr 

// if we pass - (negating) value then it count from end of the arr 


let slicearr =arr.slice(2,4)
console.log(slicearr)// 15,7

let sarr=arr.slice(4)
console.log(sarr)// 8,9

let narr=arr.slice(-2) // if langth is 7 then it will start from 5 and till the end of the arr 

console.log(narr)// 8,9




// sort 


let str=["low","high","good","bad"]

let sortdata=str.sort()
console.log(sortdata)


const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

// if we want to sort this we can make some changes 

let arr1data=array1.sort((a,b)=>a-b)
console.log(arr1data)// 1,4,21,30,100000

let arr1daa=array1.sort((a,b)=>b-a)
console.log(arr1daa)// 100000,30,21,4,1




// flat 



// flat method create a new arr with all sub arr element in a single arr 
// if we specified depth of flat then it will only flat that arr 
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]






// forEach


// it executes a provided function once for each arry element 


let earr=["a","b","c"]

earr.forEach((e,i)=>console.log(e,i))