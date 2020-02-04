users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
document.write(users[1].age+"<br>");
document.write(users[0].name+"<br>");
for (i=0;i in users;i++){
	document.write(users[i].name+" - "+users[i].age+"<br>")
}
//console.log(users[0].name);
