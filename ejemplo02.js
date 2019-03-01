function example(persona) {
    return "Hola," + persona.nombre + " " + persona.apellido;
}
var user = { nombre: "Gabriel", apellido: "Garcia" };
document.body.innerHTML = example(user);
