/* 
    DEFINIENDO ENUMERADOS
    Typescript nos permite crear enumerados, que podríamos definir como un
    listado de constantes. Veamos un ejemplo

    Puedes saber más en: https://www.typescriptlang.org/docs/handbook/enums.html

    --- Resultado esperado por consola
    Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco
*/

enum Personaje {
  Bueno,
  Feo,
  Malo,
}

// Modifica el código bajo esta línea

function getNamePersonaje(personaje: Personaje): string {
  if (personaje === Personaje.Bueno) {
    return 'Rubio';
  } else if (personaje === Personaje.Feo) {
    return 'Tuco';
  } else {
    return 'Sentencia'; //Clausula de guarda
  }
}

// Modifica el código sobre esta línea

console.log(
  `Al bueno lo llamaban ${getNamePersonaje(Personaje.Bueno)}, al malo ${getNamePersonaje(
    Personaje.Malo
  )} y, al feo, ${getNamePersonaje(Personaje.Feo)}`
);
