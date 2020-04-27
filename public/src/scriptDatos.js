async function datos() {
	let url =
		"https://reststop.randomhouse.com/resources/works/?start=0&max=10&expandLevel=1&search=" +
		document.getElementById("id_busqueda").value;
	console.log(url);
	let datos = await fetch(url);
	console.log(datos);
	let resultadoJson = await datos.json();
	console.log(resultadosJson);

	//document.getElementById('temperatura').innerHTML = template({minima:minima,maxima:maxima})
}

document.getElementById("botonDatos").addEventListener("click", datos);
//document.load = datos()
