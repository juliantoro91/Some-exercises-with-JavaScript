class Persona {
    constructor (nombre, salario) {
        if (nombre && salario) {
            this.nombre = nombre;
            this.salario = salario;
        }
    }
}

class Personas {
    constructor() {
        this.length = 0;
        this.data = [];
    }
    addPersona(nombre, salario) {
        const persona = new Persona(nombre, salario);

        if (persona) {
            this.data.push(persona);
            this.length++;
            return true;
        } else {
            return false;
        }
    }
    getSalarios() {
        return this.data.map((persona) => persona.salario);
    }
    imprimir() {
        let mensaje = "";
        this.data.forEach((datos) => mensaje += datos.nombre + ": $ " + datos.salario + "<br />");
        return mensaje;
    }
}

let personas = new Personas();

personas.addPersona("Camila", 500);
personas.addPersona("Nath", 1500);
personas.addPersona("Luisa", 1800);
personas.addPersona("Laura", 1000);
personas.addPersona("Daniela", 2200);
personas.addPersona("Esperancita", 200);
personas.addPersona("Carla", 500);
personas.addPersona("Antonieta", 1500);
personas.addPersona("Alicia", 1300);
personas.addPersona("Ana", 2400);
personas.addPersona("Julia", 3400);
personas.addPersona("Rosa", 400);
personas.addPersona("Angélica", 400);
personas.addPersona("Tatiana", 400);
personas.addPersona("Lorena", 600);
personas.addPersona("Carolina", 1600);
personas.addPersona("Fernanda", 2600);
personas.addPersona("Nora", 1000);
personas.addPersona("Gisselle", 2000);
personas.addPersona("Bill Gates", 100000000);