// 1=========>write a ts program to print all natural numbers from 1 to n using while loop
// var n1:number=1
// let n=50
// while(n1<=n){
//     console.log(n1);
//     n1++
// }
// 2========>write a ts program to print all natural numbers from n to 1 in reverse using while loop
// var n1:number=1
// let n=50
// while(n>=n1){
//     console.log(n);
//     n--
// }
// 3==============>write a ts program to print all alphbets from a to z using while loop
// var a:number=65
// while(a>=65&&a<=90){
//     console.log(String.fromCharCode(a));
//     a++
//     
// }
// 4=============>. Write a ts program to print all even numbers between 1 to 100. - using while loop
// var num1:number=1
// while(num1<=100){
//     if(num1%2==0){
//         console.log(num1);
//     }
//     num1++
// }
// 5=============>. Write a ts program to print all odd numbers between 1 to 100. - using while loop
// var num1:number=1
// while(num1<=100){
//     if(num1%2!=0){
//         console.log(num1);
//     }
//     num1++
// }
// 6=========>. Write a ts program to find sum of all natural numbers between 1 to n
// var num:number=0
// for (let index = 1; index <=5 ; index++) {
//     console.log(index);
//     num= num+index 
// }
// console.log(num);
// 7=============>. Write a ts program to find sum of all even numbers between 1 to n
// var num1:number=0
// var num2:number=10
// for (let i = num1; i <=num2 ; i++) {
//   if(i%2==0){
// //    var num3= console.log(i);
// num1=num1+i
// }
// }
// console.log(num1);
// 8=============>. Write a ts program to find sum of all odd numbers between 1 to n
// var num1:number=0
// var num2:number=10
// for (let i = num1; i <=num2 ; i++) {
//   if(i%2!=0){
//     console.log(i);
// num1=num1+i
// }
// }
// console.log(num1);
// 9==========>. Write a ts program to print multiplication table of any number.
// var num:number=Number(prompt("type here a number"))
// for( let i=1;i<=10;i++){
//     console.log(num+"*"+i+"="+num*(i));
// }
// 10=========>. Write a ts program to count number of digits in a number
// var a:number=12345
// console.log(a.toString().length);
// 11==========>. Write a ts program to find first and last digit of a number
// var num:number=1589
//  var lastnumber:number=num%10
//  while(num>=10){
//     num=(num / 10);
//  }
// console.log("first number",Math.floor(num));
// console.log("last number",lastnumber);
// 12=================>. Write a ts program to find sum of first and last digit of a number.
// var num:number=1580
//  var lastnumber:number=num%10
//  while(num>=10){
//     num=parseInt(num / 10);
//  }
// var sum:number=num+lastnumber
// console.log(sum);
// 13==================>. Write a ts program to swap first and last digits of a number.
//////////////////////////confusion cleared////////////////////////////////////////////
// let num:number=123456788
// var a:string=num.toString()
// let z=a.split('')
// z.pop()
// z.shift()
// z.unshift(a.charAt(a.length-1))
// z.push(a.charAt(0))
// z.toString()
// var b=+z.join('')
// console.log(b)
// 14=================>. Write a ts program to calculate sum of digit of a number.
// var num:number=34809
// var sum:number=0
// while(num>=1){
//    sum=sum+Math.floor(num%10)
//    num=(num/10)
// }
//    console.log(sum);
// 15==========================>. Write a ts program to calculate product of digits of a number
// var num:number=123
// var multiplication:number=1
// while(num>=1){
//    multiplication*=Math.floor(num%10)
//    num=num/10
// }
// console.log(multiplication);
// 16==========================>. Write a ts program to enter a number and print its reverse.
//  var num:string="1234"
// var reverse=num.split("").reverse().join("")
// // while(num!=0){
// //    reverse=(reverse*10)+(num%10);
// //    num=num/10;
// // }
// console.log((reverse));
// 17===================>. Write a ts program to check whether a number is palindrome or not.
// var num:number=112
// var num1:string= num.toString()
// var num2=num1.split("").reverse().join("")
// if(num1==num2){
//    console.log("number is palindrome");
// }
// else{
//    console.log("number is not a palindrome");
// }
// 18==============>. Write a ts program to find frequency of each digit in a given integer.
// var num:number=1111
// var count1=0
// var count2=0
// var count3=0
// var count4=0
// var count5=0
// var count6=0
// var count7=0
// var count8=0
// var count9=0
// var count0=0
// while(num>=1){
// var modeules = num%10
// num=Math.floor(num/10)
// if(modeules==1){
//       count1+=1
// }
// else if(modeules==2){
//       count2+=1
// }
// else if(modeules==3){
//       count3+=1
// }else if(modeules==4){
//       count4+=1
// }else if(modeules==5){
//       count5+=1
// }else if(modeules==6){
//       count6+=1
// }else if(modeules==7){
//       count7+=1
// }else if(modeules==8){
//       count8+=1
// }else if(modeules==9){
//       count9+=1
// }
// else if(modeules==0){
//       count0+=1
// }
// }
// console.log("frequency of 0 is",count0);
// console.log("frequency of 1 is",count1);
// console.log("frequency of 2 is",count2);
// console.log("frequency of 3 is",count3);
// console.log("frequency of 4 is",count4);
// console.log("frequency of 5 is",count5);
// console.log("frequency of 6 is",count6);
// console.log("frequency of 7 is",count7);
// console.log("frequency of 8 is",count8);
// console.log("frequency of 9 is",count9);
// for(let i=0; i<10;i++){
//       console.log(`frequency of ${i} is`,count{i});
// }
// 19==============>. Write a ts program to print a number in words
///////////////////////////////// incomplete
// var num=12348
//  var b:string=num.toString()
//  var words=""
// for(let i=0;i<b.length;+i++){
//       if(b.charAt(0)=="1"){
//             words+=console.log("one");    
//       }
//       if(b.charAt(1)=="2"){
//             words+=console.log("two");    
//       }
//       if(b.charAt(2)=="3"){
//             words+=console.log("three");    
//       } if(b.charAt(3)=="4"){
//             words+=console.log("four");    
//       } if(b.charAt(4)=="5"){
//             words+=console.log("five");    
//       } if(b.charAt(5)=="6"){
//             words+=console.log("six");    
//       } if(b.charAt(6)=="7"){
//             words+=console.log("seven");    
//       } if(b.charAt(7)=="8"){
//             words+=console.log("eight");    
//       } if(b.charAt(8)=="9"){
//             words+=console.log("nine");    
//       }
// }
// console.log(words);
// 20==============>. Write a ts program to print all ASCII character with their values
// var a:number=1
// while(a>=1&&a<=128){
//    var character=(String.fromCharCode(a));
//    console.log(a++,character);
//     a++
// 21==================>. Write a ts program to find power of a number using for loop.
// var num:number=2;
// var exponent:number=5
// var num1=1
// for(let i=1;i<=exponent;i++){
//   num1=(num**i);
// }
// console.log(`${num}^${exponent}`,"=",num1);
// 22=====================>. Write a ts program to find all factors of a number
// var inputNum:number=36
// for(let i=1;i<inputNum;i++){
//    if(inputNum%i==0){
//       console.log(i,`is the foctor of ${inputNum}`);
//    }
// }
// 23===============>. Write a ts program to calculate factorial of a number
// var number:number=4
// var factorial:number=1
// for(let i=number;i>=1;i--){
//     factorial=factorial*i 
// }
// console.log(factorial);
// 24=======================. Write a ts program to find HCF (GCD) of two numbers
// var inputNum1:number=60
// var inputNum2:number=36
// var count=0
// var hcf=0
// for(let i=1;i<inputNum1&&inputNum2;i++){
//       if(inputNum1%i==0&&inputNum2%i==0){
//             hcf=i
//             console.log(i);
//       }
// }
// console.log("HCF is",hcf);
// 25===================>. Write a ts program to find LCM of two numbers.
// var inputNum1:number=20
// var inputNum2:number=30
// var count=0
// var hcf=0
// for(let i=1;i<inputNum1&&inputNum2;i++){
//       if(inputNum1%i==0&&inputNum2%i==0){
//             hcf=i
//             // console.log(i);
//       }
// }
// var lcm=(inputNum1*inputNum2)/hcf
// console.log("LCM is",lcm);
// 26==================>. Write a ts program to check whether a number is Prime number or not
// var num=4
// var result=true
// for(let i=2;i<num;i++){
//     if(num%i==0){
//         result=false
//     }
// }
//     if(result){
//         console.log("number is prime");  
//     }
//     else{console.log("number is not a prime");
//     }
// 27=====================>. Write a ts program to print all Prime numbers between 1 to n.
// for(let j=1;j<=20;j++){
//     var num=j
//     var result=true
// for(let i=2;i<num;i++){
//     if(num%i==0){
//         result=false
//     }
// }
//     if(result){
//         console.log(j);  
//     }
// }
// 28===================>. Write a ts program to find sum of all prime numbers between 1 to n
// var sum=0
// for(let j=1;j<=5;j++){
//         var num=j
//         var result=true
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             result=false
//         }
//     }
//         if(result){
//             // console.log(j);
//             sum=sum+j
//         }
//     }
//     console.log(sum);
// 29==================>. Write a ts program to find all prime factors of a number.
// var inputNum: number = 20
// for (let i = 2; i < inputNum; i++) {
//       if (inputNum % i == 0) {
//             var prime = true
//             for (let j = 2; j < i; j++) {
//                   if (i % j == 0) {
//                         prime = false
//                   }
//             }
//             if (prime) {
//                   console.log(i);
//             }
//       }
// }
// 30==================> Write a ts program to check whether a number is Armstrong number or not.
// var inputNum=371
// var num:number=inputNum
// var length=num.toString().length
// // console.log();
// var sum:number=0
// while(num>=1){
//    var moduel=num%10
//    sum+=moduel**length
//    num=Math.floor(num/10)
// }
// // console.log(sum);
// if(sum==inputNum){
//    console.log(inputNum,"number is palindrone");
// }else{
//    console.log(inputNum,"is not a palindrone");
// }
// 31======================>. Write a ts program to print all Armstrong numbers between 1 to n
// var inputNum=500
// for(let i=1;i<inputNum;i++){
//    var n=i
// var num:number=n
// var length=num.toString().length
// var sum:number=0
// while(num>=1){
//    var moduel=num%10
//    sum+=moduel**length
//    num=Math.floor(num/10)
//    var result=sum
// }
// if(n==sum){
// console.log(sum);
// }
// }
// 32====================>. Write a ts program to check whether a number is Perfect number or not.
//  var inputNum:number=496
//  var sum:number=0
// for(let i=1;i<inputNum;i++){
//    if(inputNum%i==0){
//       sum+=i
//    }
// }
// if(sum==inputNum){
// console.log("Number is perfect");}
// else{
//    console.log("number is not a perfect number");
// }
// 33============================. Write a ts program to print all Perfect numbers between 1 to n.
// var inputNum:number=28
// for(let j=1;j<=inputNum;j++){
//    var n:number=j
//  var sum:number=0
// for(let i=1;i<j;i++){
//    if(j%i==0){
//       sum+=i
//    } 
// }
// if(sum==j){
// console.log(sum)}
// }
// 34===================>. Write a ts program to check whether a number is Strong number or not
// var input:number=145
// var num:number=input
// var sum:number=0
// while(num>=1){
//    var modules=num%10
//    var number:number=modules
// var factorial:number=1
// for(let i=number;i>=1;i--){
//     factorial=factorial*i    
// }
// sum+=factorial
// num=Math.floor(num/10)
// }
// if(sum==input){
// console.log(input,"is a strong number")}
// else{
//    console.log(input,"number is not a strog number");
// }
// 35===================>. Write a ts program to print all Strong numbers between 1 to n.
// var input:number=500
// for(let j=1;j<=input;j++){
// var num:number=j
// var sum:number=0
// while(num>=1){
//    var modules=num%10
//    var number:number=modules
// var factorial:number=1
// for(let i=number;i>=1;i--){
//     factorial=factorial*i    
// }
// sum+=factorial
// num=Math.floor(num/10)
// }
// if(sum==j){
// console.log(j)}
// }
// 36=====================>. Write a ts program to print Fibonacci series up to n terms
// var n:number=5
// var a=0
// var b=1
// var c=0
// for(let i=0;i<=n;i++){
//    c=a+b
//    a=b
//    b=c
//    console.log(c);
// }
// 37====================>. Write a ts program to find one's complement of a binary number
/////////////////////bug if(first number is 0)/////////////////////////
// var num=""
// var input:number=1000
// while(input>=1){
//   var modules=input%10
//   if(modules==1){
//    modules=0
//   }
//   else if(modules==0){
//    modules=1
//   }else{
//    console.log("plz enter a valid number"); 
// }
// num+=modules
// input=Math.floor(input/10)
// }
// var num1=num.split('')
// var num2=num1.reverse()
// // num1.join
// // console.log(num1);
// var ans=num2.join('')
// console.log(ans);
// 38======================>. Write a ts program to find two's complement of a binary number.
// var num=""
// var input:number=10011
// while(input>=1){
//   var modules=input%10
//   if(modules==1){
//    modules=0
//   }
//   else if(modules==0){
//    modules=1
//   }else{
//    console.log("plz enter a valid number"); 
// }
// num+=modules
// input=Math.floor(input/10)
// }
// // console.log(num);
// var num1=num.split('')
// var num2=num1.reverse()
// // num1.join
// // console.log(num2);
// var ans=num2.join('').toString()
// // var final =parseFloat(ans)
// console.log(ans);
// console.log(num2.join(""));
// 39==============>. Write a ts program to convert Binary to Octal number system.
// var num:number=10010111
// var string=num.toString()
// var sum:number=0
// var newstring=""
// for(let i=0;i<=string.length;i++){
// var modules=num%10
// if(modules==1||modules==0){
// sum+=modules*(2**i)
// num=Math.floor(num/10)}
// else{
//    console.log("enter a binary number");
//    break
// }
// }
// console.log(sum);
// while(sum>=1){
// newstring+=sum%8
// sum=Math.floor(sum/8)}
// console.log(newstring.split("").reverse().join(""));
/////////////////////////////////////////////
// 40==================>. Write a ts program to convert Binary to Decimal number system.
// var num:number=1010
// var string=num.toString()
// var sum:number=0
// for(let i=0;i<=string.length;i++){
// var modules=num%10
// if(modules==1||modules==0){
// sum+=modules*(2**i)
// num=Math.floor(num/10)}
// else{
//    console.log("type a binary number");
//    break
// }
// }
// console.log(`decimal number of ${string} =>`,sum);
// 41====================>. Write a ts program to convert Binary to Hexadecimal number system.
/////////////////////////////////////not complete confusion////////////////////////////
// var num:number=1111100111001101
// var string=num.toString()
// var slice1=string.slice(0,4)
//  var slice1num=Number(slice1)
// var slice2=string.slice(4,8)
// var slice2num=Number(slice2)
// var slice3=string.slice(8,12)
// var slice3num=Number(slice3)
// var slice4=string.slice(12,16)
// var slice4num=Number(slice4)
// var sum1:number=0
// var newstring1=""
// var sum2:number=0
// var newstring2=""
// var sum3:number=0
// var newstring3=""
// var sum4:number=0
// var newstring4=""
// for(let i=0;i<=slice1.length;i++){
// var modules=slice1num%10
// sum1+=modules*(2**i)
// slice1num=Math.floor(slice1num/10)
// }
// console.log(sum1);
// for(let i=0;i<=slice2.length;i++){
//    var modules=slice2num%10
//    sum2+=modules*(2**i)
//    slice2num=Math.floor(slice2num/10)
//    }
//    console.log(sum2);
//    for(let i=0;i<=slice3.length;i++){
//       var modules=slice3num%10
//       sum3+=modules*(2**i)
//       slice3num=Math.floor(slice3num/10)
//       }
//       console.log(sum3);
//       for(let i=0;i<=slice4.length;i++){
//          var modules=slice4num%10
//          sum4+=modules*(2**i)
//          slice4num=Math.floor(slice4num/10)
//       }
//       console.log(sum4);
//       var final=[sum1,sum2,sum3,sum4]
//       console.log(final);
// while(sum>=1){
// newstring+=sum%16
// sum=Math.floor(sum/16)}
// console.log(newstring.split("").reverse().join(""));
// 42=====================>. Write a ts program to convert Octal to Binary number system
// var num = 20
// var b = ""
// while (num >= 1) {
//       b += num % 2
//       num = Math.floor(num / 2)
// }
// console.log(b.split('').reverse().join(''));
////////////////frequency wala code by sir///////////////////////////////
// let num = 4333882;
// let some  = num.toString();
// for(let item of some){
//     console.log(item + " repeated " + f(num, item) )
// }
// function f(array:any,value:any){
//     array = array.toString();
//     var n = 0;
//     for(i = 0; i < array.length; i++){
//         if(array[i] == value){n++}
//     }
//     return n;
// }
/////////////////////////////////factrization wala code//////////////////////////////////////////////////
// var num = 20
// var b = ","
// for (let i = 2; i <= num; i++) {
//       if (num % i == 0) {
//             num = num / i
//             console.log(i);
//             for (let j = 2; j <= num; j++) {
//                   if (num % j == 0) {
//                         num = num / j
//                         console.log(j);
//                         //   console.log(num);
//                         for (let k = 2; k <= num; k++) {
//                               if (num % k == 0) {
//                                     console.log(k);
//                                     num = num / k
//                                     for (let l = 2; l <= num; l++) {
//                                           if (num % k == 0) {
//                                                 console.log(l);
//                                                 num = num / l
//                                                 for (let m = 2; m <= num; m++) {
//                                                       if (num % m == 0) {
//                                                             console.log(m);
//                                                             num = num / m
//                                                             for (let n = 2; n <= num; n++) {
//                                                                   if (num % n == 0) {
//                                                                         console.log(n);
//                                                                         num = num / n
//                                                                         break
//                                                                   }
//                                                             }
//                                                       }
//                                                 }
//                                           }
//                                     }
//                               }
//                         }
//                   }
//             }
//       }
// }
