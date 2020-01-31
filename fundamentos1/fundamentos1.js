/////// Ejercicio 1
function array(){
    var array = [];
    for (var i=1; i<256; i++){
        array.push(i);
    }
    return array
}
console.log(array())
/////// Ejercicio 2
function sumpares(){
    var sum = 0
    for (var i=0; i<=1000; i+=2){
        sum = sum + i
    }
    return sum
}
console.log(sumpares())
/////// Ejercicio 3
function sumimpares(){
    var sum = 0
    for (var i=1; i<=5000; i+=2){
        sum = sum + i
    }
    return sum
}
console.log(sumimpares())
/////// Ejercicio 4
function itarray(a){
    var sum = 0
    for (var i=0; i < a.length; i++){
        sum = sum + a[i]
    }
    return sum
}
a = [2,3,4,5]
console.log(itarray(a))
/////// Ejercicio 5
function max(a){
    m = Math.max.apply(Math, a);
    return m
}
a = [-10,-2,-32]
console.log(max(a))
/////// Ejercicio 6
function avg(a){
    sum = 0;
    for (i = 0; i<a.length; i++){
        sum = sum + a[i];
    }
    avg= sum/a.length;
    return avg;
}
a = [2,4];
console.log(avg(a));
/////// Ejercicio 7
function oddarray(){
    arr = [];
    for (i = 1; i<=50; i+=2){
        arr.push(i);
    }
    return arr
}
console.log(oddarray())
/////// Ejercicio 8
function mayorq(a,b){
    arr = [];
    for (i = 0; i<b.length; i++){
        if (b[i]>a){
            arr.push(b[i]);
        }
    }
    return arr.length
}
console.log(mayorq(6,[2,3,4,5,6,7]))
/////// Ejercicio 9
function sqrt(a){
    for (i=0;i<a.length;i++){
        a[i]=(a[i]*a[i]);
    }
    return a
}
console.log(sqrt([1,2,3,-10]));
/////// Ejercicio 10
function neg(a){
    for (i=0;i<a.length;i++){
        if (a[i]<0){
            a[i]=0;
        }
    }
    return a
}
console.log(neg([2,3,-4,6,-10]));
/////// Ejercicio 11
function mma(a){
    max=0
    min=0
    sum=0
    for (i=0;i<a.length;i++){
        if (a[i]>max){
            max=a[i];
        }
        if (a[i]<min){
            min=a[i];
        }
        sum = sum + a[i];
    }
    avg = sum / a.length;
    return [max,min,avg]
}
console.log(mma([1,5,10,-2]))
////// Ejercicio 12
function sw(a){
    x=a[0];
    y=a[a.length-1];
    a[0]=y;
    a[a.length-1]=x;
    return a
}
console.log(sw([2,3,3,3,10]))
////// Ejercicio 13
function str(a){
    for (i=0;i<a.length;i++){
        if (a[i]<0){
            a[i]="Dojo"
        }
    }
    return a;
}
console.log(str([2,-3,-4,5]));