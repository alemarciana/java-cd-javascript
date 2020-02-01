////// Ejercicio 1
function grande(a){
	for (i=0;i<a.length;i++){
		if (a[i]>0){
			a[i]="grande";
		}
	}
	return a
}
console.log(grande([-1,3,5,-5]))
////// Ejercicio 2
function mm(a){
	sum = 0
	var min=a[0];
	var max=a[0];
	for (i=0; i<a.length; i++){
		if (a[i]>max){
			max=a[i];
		}
		if (a[i]<min){
			min=a[i];
		}
	}
	console.log(min)
	return max
}
console.log(mm([4,6,-10,-4]));
////// Ejercicio 3
function tres(a){
	odd=0
	for (i=0;i<a.length;i++){
		if (a[i]%2 != 0){
			odd=a[i]
			break
		}
	}
	console.log(odd)
	return a[a.length-2]
}
console.log(tres([2,4,6,7,3,4]))
///// Ejercicio 4
function doble(x){
	y=[]
	for (i=0;i<x.length;i++){
		y[i]=x[i]*2
	}
	return y
}
console.log(doble([2,3,5,4]))
///// Ejercicio 5
function positivos(x){
	cont=0
	for (i=0;i<x.length;i++){
		if (x[i]>0){
			cont++
		}
	}
	x[x.length-1]=cont
	return x
}
console.log(positivos([2,-1,-4,5,-3,3]))
//// Ejercicio 6
function oddeven(x){
	odd=0
	even=0
	c=[]
	for (i=0;i<x.length;i++){
		if (x[i]%2 == 0){
			even++
		}
		else{
			odd++
		}
		if (even==3){
			c.push("Es para bien")
			even=0
		}
		if (odd==3){
			c.push("Que Imparcial")
			odd=0
		}
	}
	return c
}
fn=oddeven([2,3,5,7,4,6,8,2,6,8])
for (i=0;i<fn.length;i++){
	console.log(fn[i])
}
//// Ejercicio 7
function add(x){
	for (i=1;i<x.length;i+=2){
		x[i]++;
	}
	return x;
}
arr=[1,2,3,4,5,6,7,8,9];
console.log(add(arr));
//// Ejercicio 8
function lo(x){
	l=[];
	for (i=0;i<x.length;i++){
		l.push(x[i].length);
	}
	for (y=1;y<x.length;y++)
		x[y]=l[y-1];
	return x;
}
console.log(lo(['hola','uwu','owo','jue']));
//// Ejercicio 9
function sum7(x){
	y=[];
	for (i=0;i<x.length;i++){
		y.push(x[i]+7);
	}
	return y
}
console.log(sum7([0,1,2,3]));
//// Ejercicio 10
function invertir(x){
	for (i=0;i<x.length/2;i++){
		a=x[i]
		x[i]=x[x.length-1-i]
		x[x.length-1-i]=a
	}
	return x;

}
console.log(invertir([1,2,3,4,5,6,7]));
//// Ejercicio 11
function neg(x){
	for (i=0;i<x.length;i++){
		if (x[i]>0){
			x[i]=x[i]*-1;
		}
	}
	return x
}
console.log(neg([1,-2,-3,4,5,6,-7]))
//// Ejercicio 12
function hungry(x){
	h=[];
	for (i=0;i<x.length;i++){
		if (x[i]=="comida"){
			h.push("yummy");
		}
	}
	if (h.length==0){
		return "Tengo Hambre"
	}
	else {
		return h
	}
}
console.log(hungry(["hola"]));
/// Ejercicio 13
function centro(x){
	for (i=0;i<x.length/2;i+=2){
		a=x[i];
		x[i]=x[x.length-1-i];
		x[x.length-1-i]=a
	}
	return x;
}
console.log(centro([1,2,3,4,5,6]));
/// Ejercicio 14
function escalar(a,b){
	for (i=0;i<b.length;i++){
		b[i]=b[i]*a;
	}
	return b;
}
console.log(escalar(3,[1,4,2,1]));
