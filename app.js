new Vue({
    el: "#app",
    data() {
        return {
            actions: [],
            gameStarted: false,
            gameOver: false,
            healthYOU: 100,
            healthMONSTER: 100,
        }
    },
    methods: {
        win(winner) {
            switch (winner) {
                case 'YOU':
                    if (confirm("You win! Do you want to play again?")) {
                        this.startGame();
                        this.gameOver = true;
                    } else {
                        this.gameStarted = false;
                    }
                    break;
                case 'MONSTER':
                    if (confirm("You lose! Do you want to play again?")) {
                        this.startGame();
                    } else {
                        this.gameStarted = false;
                    }
                    break;
            }
        },
        startGame() {
            this.gameStarted = true;
            this.healthYOU = 100;
            console.log(`Start Game: ${this.healthYOU}`);
            this.healthMONSTER = 100;
        },
        attack() {
            this.playTurn();
        },
        specialAttack() {
            this.playTurn("SPECIAL");
        },
        heal() {
            this.playTurn("HEAL");
        },
        playTurn(attackType) {
            switch (attackType) {
                case "SPECIAL":
                    this.YOUattack(10);
                    break;
                case "HEAL":
                    this.YOUheal(0);
                    break;
                default:
                    this.YOUattack(0);
                    break;
            }
            this.checkWinYOU();
            if (!this.gameOver) {
                this.MONSTERAttack();
                this.checkWinMONSTER();
                console.log(`Game: ${this.healthYOU}`);
            } else {
                this.gameOver = false;
            }
        },
        YOUattack(enhancement) {
            if (this.healthMONSTER >= 0) {
                this.healthMONSTER -= Math.round((Math.random() * 10) + 1 + enhancement);
            }
        },
        YOUheal(enhancement) {
            if (this.healthYOU < 100) {
                this.healthYOU += Math.round((Math.random() * 10) + 1 + enhancement);
                if (this.healthYOU > 100) {
                    this.healthYOU = 100;
                }
            }
        },
        MONSTERAttack() {
            if (this.healthYOU >= 0) {
                this.healthYOU -= Math.round((Math.random() * 10) + 1);
            }
        },
        checkWinYOU() {
            if (this.healthMONSTER <= 0) {
                this.healthMONSTER = 0;
                this.win('YOU');
            }
        },
        checkWinMONSTER() {
            if (this.healthYOU <= 0) {
                this.healthYOU = 0;
                this.win('MONSTER');
            }
        }
    }
});