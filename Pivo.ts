export default class Jogador {
    constructor(

        private _nome: string,
        private _stamina: number,
        private _velocidade: number,
        private _ataque: number,
        private _precisao: number
    ) {}

    //  TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARAMETRO
    //  TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE, USE RETORNO

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public status(): string {
        return (
            "Pivô: \n" +
            "\nNome: " +
            this.nome +
            ("\nVelocidade: " + this._velocidade.toFixed(1)) +
            ("\nAtaque: " + this._ataque.toFixed(1)) +
            ("\nPrecisão: " + this._precisao.toFixed(1))
        );
    }
    public treinarAtacar(): void {
        this._ataque += this.randomizar(10);
        this._stamina -= this.randomizar(5);
        if (this._ataque > 100) {
            this._ataque = 0;
        }
    }
    public treinarPrecisao(): void {
        this._precisao += this.randomizar(4);
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
    public jogar(): number {
        let desgaste: number = this.randomizar(15);
        this._stamina -= desgaste;
        return desgaste;
    }
    public gameOver(): boolean {
        return this._stamina < 0;
    }

    private randomizar(fator: number): number {
        return Math.random() * fator;
    }
}
