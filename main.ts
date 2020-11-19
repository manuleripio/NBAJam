import Personagem from "./Personagem";
import prompt from "prompt-sync";
import Ala from "./Ala";
import AlaPivo from "./alaPivo";
import Armador from "./Armador";
import Pivo from "./Pivo";

let person: Personagem = new Personagem("Michael Angelo", 100, 60, 60, 60);

let teclado = prompt();
let option: number = 0;

while (option != 9 || person.gameOver()) {
    console.log(`+========= Personagem ${person.nome}=============`);
    console.log("|1. Treinar ataque                 |");
    console.log("|2. Treinar precisão               |");
    console.log("|3. Descansar                      |");
    console.log("|4. Iniciar Jogo                   |");
    console.log("|8. Imprimir atributos             |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");

    option = +teclado("Escolha uma ação: ");

    switch (option) {
        case 1:
            person.treinarAtacar();

            console.log(person.status());
            break;
        case 2:
            person.treinarPrecisao();
            console.log(person.status());
            break;
        case 3:
            let horas: number = +teclado("Digite o número de horas: ");
            person.descansar(horas);
            console.log(person.status());
            break;
        case 4:
            let rest: number = person.jogar();
            console.log(`Este jogo custa ${rest} de stamina`);

            console.log(person.status());
            break;
        case 8:
            console.log(person.status());
            break;
        default:
            break;
    }
}
console.log("Ops! Acabou o jogo!");
