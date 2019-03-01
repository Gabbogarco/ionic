interface Persona{
	nombre:string;
	apellido: string;

}

function example(persona:Persona)
{
	return "Hola,"+ persona.nombre+" "+ persona.apellido
}
let user = {nombre: "Gabriel",apellido:"Garcia"};

document.body.innerHTML=example(user);