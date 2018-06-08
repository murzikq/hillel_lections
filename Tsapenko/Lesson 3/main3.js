a = +prompt('введите a')
b = +prompt('введите b')
while (a != b){
    number = a * a;
    if (a > 0)
        console.log(number)
    else 
        console.log(-number)
    a++;
}