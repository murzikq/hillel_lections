x = prompt('введите число x');
y = prompt('введите число y');
while (isNaN(x) || isNaN(y))    {
    x = prompt('вы ввели не число, введите число x');
    y = prompt('вы ввели не число, введите число y');
}
while (x != y)  {
    if (x <= y && x % 2 != 0){
    odd = x;
    sum = x + odd;
    x--;
    }
    else if (x > y && x % 2 == 0){
    even = x;
    sum = x + even;
    x++;
    }
console.log(sum)
}



