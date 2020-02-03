//// Ejercicio 1
function sigma(num){
	sum=0;
	for (i=0;i<=num;i++){
		sum=sum+i;
	}
	return sum;
}
console.log(sigma(3));
//// Ejercicio 2
function factorial(num){
	p=1;
	for (i=1;i<=num;i++){
		p=p*i;
	}
	return p;
}
console.log(factorial(5));
//// Ejercicio 3
function fibonacci(n){
	if (n<0){
		return null
	}
	else{
		if (n==0){
			return 0;
		}
		if (n==1){
			return 1;
		}
		else {
			return fibonacci(n-1)+fibonacci(n-2);
		}
	}
}
console.log(fibonacci(5));
//// Ejercicio 4
function sl(x){
	if (x.length<2){
		return null;
	}
	else{
		return x[x.length-2];
	}
}
console.log(sl([1,2,3]));
//// Ejercicio 5
function nl(x,n){
	if (x.length<n){
		return null;
	}
	else {
		return x[x.length-n];
	}
}
console.log(nl([2,3,4],4));
//// Ejercicio 6
function ab(x){
	if (x.length<2){
		return null;
	}
	else {
		max=x[0];
		amax=max;
		for (i=1;i<x.length;i++){
			if (x[i]>max){
				amax=max;
				max=x[i];
			}
		}
		return amax;
	}
}
console.log(ab([-10,-2,5]));
//// Ejercicio 7
function db(x){
	y=[];
	for (i=0;i<x.length;i++){
		y.push(x[i]);
		y.push(x[i]);
	}
	return y
}
console.log(db([2,"holi"]));
