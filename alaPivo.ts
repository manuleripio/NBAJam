import Jogador from "./Personagem";
import {Util} from "./Util";
export class alaPivo extends Jogador {
    constructor(nome: string, team: string, posicao: string, stamina: number, desgaste: number, 
        velocidade: number, ataque: number, precisao: number, arremesso: number, pontos: number) {
            super(nome, team, posicao, stamina, desgaste, velocidade, ataque, precisao, arremesso, pontos)
            this._stamina =  Util.randomizar(100, 1_000);
            this._desgaste =  Util.randomizar(100, 1_000);
            this._velocidade =  Util.randomizar(100, 1_000);
            this._ataque =  Util.randomizar(100, 1_000);
            this._precisao =  Util.randomizar(100, 1_000);
            this._arremesso =  Util.randomizar(100, 1_000);
            this._pontos = pontos;

    }

}