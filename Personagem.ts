export default class Jogador {

        protected _nome: string;
        protected _team: string;
        protected _posicao: string;
        protected _stamina: number;
        protected _desgaste: number;
        protected _velocidade: number;
        protected _ataque: number;
        protected _precisao: number;
        protected _arremesso: number;
        protected _pontos: number;
    
        constructor(nome: string, team: string, posicao: string, stamina: number, desgaste: number, 
            velocidade: number, ataque: number, precisao: number, arremesso: number, pontos: number) {
                this._nome = nome ;
                this._team = team ;
                this._posicao = posicao;
                this._stamina = stamina;
                this._desgaste = desgaste;
                this._velocidade = velocidade;
                this._ataque = ataque;
                this._precisao = precisao;
                this._arremesso = arremesso;
                this._pontos = pontos;

        }

    //  TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARAMETRO
    //  TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE, USE RETORNO

    public get nome(): string {
        return this._nome;
    }
    public set nome(nome: string) {
        this._nome = nome;
    }
    public get desgaste(): number {
        return this._desgaste;
    }
    public set desgaste(desgaste: number) {
        this._desgaste = desgaste;
    }

    public get stamina(): number {
        return this._stamina;
    }
    public set stamina(stamina: number) {
        this._stamina = stamina;
    }

    public get posicao(): string {
        return this._posicao;
    }

    public set posicao(posicao: string) {
        this._posicao = posicao;
    }

    public get team(): string {
        return this._team;
    }

    public set team(team: string) {
        this._team = team;
    }

    public get pontos(): number {
        return this._pontos;
    }

    public set pontos(pontos: number) {
        this._pontos = pontos;
    }

    public status(): string {
        return (
            "\nNome: " +
            this.nome +
            "\nTime: " + 
            this.team +
            ("\nPosição: " + this.posicao) + 
            ("\nVelocidade: " + this._velocidade.toFixed(1)) +
            ("\nAtaque: " + this._ataque.toFixed(1)) +
            ("\nPrecisão: " + this._precisao.toFixed(1)) +
            ("\nStamina: " + this._stamina)
        );
    }

    public treinarAtacar(): void {
        this._ataque += this.randomizar(7);
        this._stamina -= this.randomizar(5);
        if (this._ataque > 100) {
            this._ataque = 0;
        }
        
    }

    //ARREMESSO DOIS PONTOS

    public twoPoints(): number {
        this._desgaste -=this.randomizar(5);
        console.log(`\n${this.nome} está com a bola`);

        let twoPoints: number = this._arremesso + this._ataque / this.randomizar(13);
        if (twoPoints > 55) {
            this._pontos += 2;
            this._stamina -= this.randomizar(3);
            console.log(`Cesta! Total de pontos: ${this._pontos} `);
        }
        else {
            console.log(`Quase! Total de pontos: ${this._pontos} `)
        };


        if (this._stamina < 0) {   
            console.log(`Acabou o jogo! Você marcou: ${this._pontos} de pontos. `);  
            this.gameOver();
        } else{
            console.log(`Cuide de sua energia! Energia restante: ${this._stamina}`);
        }
        return twoPoints;

    }

    // ARREMESSO DE TRÊS PONTOS //

    public threePoints(): number {
        this._stamina -=this.randomizar(5);
        console.log(`\n${this.nome} está com a bola`);

        let threePoints: number = this._arremesso / this.randomizar(15);
        if (threePoints > 65) {
            this._pontos += 3;
            this._stamina -= this.randomizar(3);
            console.log(`Cesta! Total de pontos: ${this._pontos} `);
        }
        else {
            console.log(`Quase! Total de pontos: ${this._pontos} `)
        };


        if (this._stamina < 0) {   
            console.log(`Acabou o jogo! Você marcou: ${this._pontos} de pontos. `);  
            this.gameOver();
        } else{
            console.log(`Cuide de sua energia! Energia restante: ${this._stamina}`);
        };

        return threePoints;

    }


    // ARREMESSO LANCE LIVRE //


    public shot(): number {
        this._stamina -=this.randomizar(5);
        console.log(`\n${this.nome} está com a bola`);

        let shot: number = this._arremesso / this.randomizar(10);
        if (shot > 55) {
            this._pontos += 1;
            this._stamina -= this.randomizar(3);
            console.log(`Cesta! Total de pontos: ${this._pontos} `);
        }
        else {
            console.log(`Quase! Total de pontos: ${this._pontos} `)
        };


        if (this._stamina < 0) {   
            console.log(`Acabou o jogo! Você marcou: ${this._pontos} de pontos. `);  
        } else{
            console.log(`Cuide de sua energia! Energia restante: ${this._stamina}`);
        }
        return shot;

    }


    public dunk(): number {
        this._stamina -=this.randomizar(8);
        console.log(`\n${this.nome} está com a bola`);

        let dunk: number = this._arremesso / this.randomizar(10);
        if (dunk > 60) {
            this._pontos += 2;
            this._stamina -= this.randomizar(3);
            console.log(`Cesta! Total de pontos: ${this._pontos} `);
        }
        else {
            console.log(`Quase! Total de pontos: ${this._pontos} `)
        };


        if (this._stamina < 0) {   
            console.log(`Acabou o jogo! Você marcou: ${this._pontos} de pontos. `);  
            this.gameOver();
        } else{
            console.log(`Cuide de sua energia! Energia restante: ${this._stamina}`);
        }

        return dunk;

    }



    public treinarPrecisao(): void {
        this._precisao += this.randomizar(5);
        this._stamina -= this.randomizar(10);
        if (this._precisao > 100) {
            this._precisao = 0;
        }
    }
    public descansar(hour: number): void {
        this._stamina += hour * this.randomizar(10);
        if (this._stamina > 100) {
            this._stamina = 100;
        }
    }
   

    public changeTeamBulls() {
        let bulls: string = this._team;
        this._team = bulls.replace(this._team, "Chicago Bulls");
        console.log(`Time alterado com sucesso! Seu novo time é ${this._team}`)
        
        return bulls;
         
    }
   

    public changeTeamCeltics() {
        let celtics: string = this._team;
        this._team = celtics.replace(this._team, "Celtics");
        console.log(`Time alterado com sucesso! Seu novo time é ${this._team}`)
        
        return celtics;
         
    }
   

    public changeTeamLakers() {
        let lakers: string = this._team;
        this._team = lakers.replace(this._team, "LA Lakers");
        console.log(`Time alterado com sucesso! Seu novo time é ${this._team}`);
        return lakers;
         
    }
   

    public changeTeamDallas() {
        let dallas: string = this._team;
        this._team = dallas.replace(this._team, "Maverick Dallas");
        console.log(`Time alterado com sucesso! Seu novo time é ${this._team}`)
        
        return dallas;
         
    }



    public posicaoPivo() {
        let pivo: string = this._posicao;
        this._posicao = pivo.replace(this._posicao, "Pivô");
        this._ataque = 60;
        this._precisao = 40;
        this._velocidade = 50;
        this._stamina = 50;
        console.log(`Posição alterada com sucesso! Sua nova Posição é ${this._posicao}`)
        
        return pivo;
         
    }

    public posicaoAlaPivo() {
        let alaPivo: string = this._posicao;
        this._posicao = alaPivo.replace(this._posicao, "Ala Pivô");
        this._ataque = 30;
        this._precisao = 70;
        this._velocidade = 60;
        this._stamina = 40;
        console.log(`Posição alterada com sucesso! Sua nova Posição é ${this._posicao}`)
        
        return alaPivo;
         
    }



    public posicaoAlaArmador() {
        let alaArmador: string = this._posicao;
        this._posicao = alaArmador.replace(this._posicao, "Ala Armador");
        this._ataque = 40;
        this._precisao = 70;
        this._velocidade = 50;
        this._stamina = 50;
        console.log(`Posição alterada com sucesso! Sua nova Posição é ${this._posicao}`)
        
        return alaArmador;
         
    }


    public posicaoArmador() {
        let armador: string = this._posicao;
        this._posicao = armador.replace(this._posicao, "Armador");
        this._ataque = 30;
        this._precisao = 80;
        this._velocidade = 50;
        this._stamina = 30;
        console.log(`Posição alterada com sucesso! Sua nova Posição é ${this._posicao}`)
        
        return armador;
         
    }



    public gameOver(): boolean {
        return this._stamina < 0;
    }

    private randomizar(fator: number): number {
        return Math.random() * fator;
    }
}
