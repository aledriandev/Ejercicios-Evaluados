function convertirFahrenheit(){
	var celsius=document.getElementById("celsius").value;
	var _fahrenheit=document.getElementById("fahrenheit");
	var fahrenheit = celsius*9/5+32;
	_fahrenheit.innerHTML = fahrenheit;
}