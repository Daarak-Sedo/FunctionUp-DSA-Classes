// recursion:=> function calls itself
// recusive stack
// stack overflow

function rec(i,n){
   //base case
   if(i>n) return;
   // recursive
   console.log(i) 
   rec(i+1,n)
}
rec(1,4)

// function fibo(n){
//   if(n == 0 ) return 0
//   if(n<=2) return 1
//   return fibo(n-1) + fibo (n-2)
// }
// let result = fibo(8)
// console.log(result)

//=======================================================>>>
 

// let n = [8,1,5];
// let len = n.length
// let i = 0
// let mul = 1
// function fibo(n,i){
//   console.log(i)
// //  i++
//   mul *= n[i]*n[i+1]   
//   if(i == len-2) return mul
//   return fibo(n,++i)
// }

// let result = fibo(n,i)
// console.log(result)


//=======================================================>>>

// let n = [3,5,2,8]
// function fibo(n){
//   if(n.length == 0) return 1
//   console.log(n)
//   return n[0]*fibo(n.splice(1))
//   //splice har bar ek index ko delete karta jayega 
// }
// let result = fibo(n)
// console.log(result)

//=======================================================>>>
 

// is function me power function ka kam  se kar rahe he
// function pow(b,exp){
//   if(exp== 0) return 1
//   console.log(b,exp)
//   return b * pow(b,exp-1)
// }
// let result = pow(2,2)
// console.log(result)

//=======================================================>>>

function isPowerOftwo(number){
    if(number==1) return true
    if(number%2==0){
      return isPowerOftwo(number/2)
    }else{
       return false
    }
 }
 
 isPowerOftwo(12)
 




