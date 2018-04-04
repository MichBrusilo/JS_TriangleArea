/* skrypt do obliczania
pola trójkąta*/
var a = prompt("Podaj wartość a");
var h = prompt("Podaj wartość h");
var triangleArea = a*h/2;
document.getElementById("triangleArea").innerHTML =('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
console.log(triangleArea);