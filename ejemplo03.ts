class Estudiante{
	nombreCompleto:string;
	constructor(public Nombre:string,public Apellido:string){
	this.nombreCompleto=Nombre + " "+Apellido;
}
}
interface Persona{
nombre:string;
apellido:string;	
}


function example(persona:Persona)
{
	return "Hola," + persona.nombre+" "+ persona.apellido;
}
let user = {nombre: "Gabriel", apellido: "Garcia" };

document.body.innerHTML=example(user);