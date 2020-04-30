async function datos() {
	
	let url = ("https://api.penguinrandomhouse.com/resources/works?search=" + document.getElementById("id_busqueda").value + "&start=0&max=15&expandLevel=1&key=9kjnk53qkh6qy6vrca7fsug4");
	let datos = await fetch(url);
	let Json = await datos.json();
	console.log(Json);
}

document.getElementById("botonDatos").addEventListener("click", datos);

