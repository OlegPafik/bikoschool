/*
    Hemos copiado y pegado un código que teníamos en Javascript y queremos 
    migrarlo a TypeScript. ¿Nos ayudas a conseguirlo? Aprovecha para probar
    todo lo que quieras sobre este lenguaje de programación
*/

interface Pokemon {
  nombre: string;
  numero: number;
  ataques: string[];
  ataque: (numero: number) => void;
}
class MyPokemon implements Pokemon {
  constructor(public nombre: string, public numero: number, public ataques: string[]) {}

  ataque(numero: number) {
    if (this.ataques.length >= numero && 0 < numero) {
      console.log(this.nombre + " utiliza el ataque " + this.ataques[numero - 1]);
    } else {
    console.log("Inserte un valor de ataque valido (valor entre 1 y " + this.ataques.length + ")");
    }
  }
}
const pokemon = new MyPokemon("Pikachu", 25, ["placaje", "rayo", "gruñido"])

pokemon.ataque(2)