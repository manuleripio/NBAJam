
import Jogador from "./Personagem";
import prompt from "prompt-sync";

let person: Jogador = new Jogador("Michael Angelo", "", "", 30, 30, 60, 60, 60, 80, 0);

let teclado = prompt();
let option: number = 0;

while (option != 9 || person.gameOver()) {
    console.log (`  _   _ ____    _          _   _    __  __ `);
    console.log (` | \ | | __ )  / |        | | / |  |  \/  |`);
    console.log (` |  || |  _ \ / _ |    _  | |/ _ | | |\/| |`);
    console.log (` | |\  | |_) / ___ |  | |_| / ___ || |  | |`);
    console.log (` |_| \_|____/_/   |_|  \___/_/   |_|_|  |_|`);
    console.log (`                                           `);

    console.log(`\n+========= Personagem ${person.nome}=============`);
    console.log("|1. Treinar ataque                               |");
    console.log("|2. Treinar precisão                             |");
    console.log("|3. Descansar                                    |");
    console.log("|4. Iniciar Jogo                                 |");
    console.log("|5. Total de Pontos                              |");
    console.log("|6. Escolher Posição                             |");
    console.log("|7. Escolher Time                                |");
    console.log("|8. Imprimir atributos                           |");
    console.log("|9. Sair                                         |");
    console.log("+================================================+");

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
        case 4: let option4: number = 0;
        while (option4 != 9 || person.gameOver())  {
            console.log(`+================ Arremessos ====================+`);
            console.log("|1. Arremesso de Dois pontos                     |");
            console.log("|2. Arremesso de Três pontos                     |");
            console.log("|3. Arremesso Lance Livre                        |");
            console.log("|4. Enterrada                                    |");
            console.log("|9. Sair                                         |");
            console.log("+===============================================+");
        
            option4 = +teclado("Escolha uma ação: ");

            switch (option4) {
                case 1:
                    person.twoPoints(); 
                    break;
                case 2:
                    person.threePoints(); 
                    break;
                case 3:
                    person.shot(); 
                    break;

                case 4:
                    person.dunk(); 
                    break;
            };
        
        };
            console.log("Obrigado por jogar! Até a proxima");
            console.log(`\nParabéns pela partida! Você marcou: ${person.pontos} pontos!`)
            break;

        case 5:
            console.log(`Você já fez ${person.pontos} pontos em partidas.`);
        break;

        case 6:     
        
        let option2: number = 0;
        while (option2 != 9 || person.gameOver()) {
            console.log(`+========= Escolher Posição======================+`);
            console.log("|1. Pivô                                         |");
            console.log("|2. Ala Pivô                                     |");
            console.log("|3. Ala Armador                                  |");
            console.log("|4. Armador                                      |");
            console.log("|9. Sair                                         |");
            console.log("+===============================================+");
        
            option2 = +teclado("Escolha uma ação: ");

            switch (option2) {
                case 1:
                    person.posicaoPivo();
                    break;
                case 2:
                    person.posicaoAlaPivo();
                    break;

                case 3:
                    person.posicaoAlaArmador();
                    break;

                    case 4:
                        person.posicaoArmador();
    
                        break;

            };
        
        };
       
            break;

        case 7:     
        
            let option3: number = 0;
            while (option3 != 9 || person.gameOver()) {
                console.log(`+========= Escolher Time --======================+`);
                console.log("|1. Chicago Bulls                                |");
                console.log("|2. Boston Celtics                               |");
                console.log("|3. LA Lakers                                    |");
                console.log("|4. Dallas Mavericks                             |");
                console.log("|9. Sair                                         |");
                console.log("+===============================================+");
            
                option3 = +teclado("Escolha uma ação: ");
    
                switch (option3) {
                    case 1:
                        person.changeTeamBulls();
                        break;
                    case 2:
                       person.changeTeamCeltics();    
                        break;
    
                    case 3:
                        person.changeTeamLakers();
                        break;
    
                        case 4:
                            person.changeTeamDallas();
                            break;
    
                };
            
            };
           
                break;

        case 8:
            console.log(person.status());
            break;
        default:
            break;
    }
}
console.log("Obrigado por jogar! Até a proxima");
