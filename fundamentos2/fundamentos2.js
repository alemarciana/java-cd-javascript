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
		sum=sum+a[i];
	}
	return [max,min,sum/a.length]
}
console.log(mm([4,6,-10,-4]))

