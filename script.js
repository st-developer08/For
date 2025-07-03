for(;;){
    let number = +prompt('Введите число больше 100:')
    if(number >= 100){
        alert('гуд')
        break;
    }
   
}




let arr = [4,16,19,22,11,144,967,19124]
console.log(arr);

let even = []
let odd = []

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        even.push(arr[i])
    }else{
        odd.push(arr[i])
    }
   
}
console.log(`Четные числа;${even} и Нечетные числа;${odd}`);

           
