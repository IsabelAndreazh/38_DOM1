function validateForm(){
	var nombre, apellido, correo, contraseña, bici, twitter, recibirInformacion;
	nombre = document.getElementById("name").value;
	apellido = document.getElementById("lastname").value;
	correo = document.getElementById("input-email").value;
	contraseña = document.getElementById("input-password").value;
	bici = document.getElementsByClassName('form-control').value;
	twitter = document.getElementById("input-social").value;
	recibirInformacion = document.getElementsByTagName('span')[0].value;

	expresion = /[A-Z]/;

	if(nombre === "" || apellido === "" || correo === "" || contraseña === "" bici === ""){
		alert("Todos los campos son obligatorios");
		return false;
	}else if(!expresion(nombre && apellido)){
		alert("nombre o apellido no valido");
		return false;
	}

}