var Estudiante = /** @class */ (function () {
    function Estudiante(Nombre, Apellido) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.nombreCompleto = Nombre + " " + Apellido;
    }
    return Estudiante;
}());
function example(persona) {
    return "Hola," + persona.nombre + " " + persona.apellido;
}
var user = { nombre: "Gabriel", apellido: "Garcia" };
document.body.innerHTML = example(user);
