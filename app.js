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
            this.healthMONSTER = 100;
            this.actions = [];
        },
        logAction(player, action, value) {
            switch(player) {
                case "YOU":
                    switch(action) {
                        case "ATTACK":
                        case "SPECIAL ATTACK":
                            this.actions.unshift({
                                log: `PLAYER HITS MONSTER FOR ${value}`,
                                class: "player-turn",
                            });
                            break;
                        case "HEAL":
                            this.actions.unshift({
                                log: `PLAYER HEALS HIMSELF FOR ${value}`,
                                class: "player-turn",
                            });
                            break;
                        default:
                            break;
                    }
                    break;
                case "MONSTER":
                    switch(action) {
                        case "ATTACK":
                        case "SPECIAL ATTACK":
                            this.actions.unshift({
                                log: `MONSTER HITS PLAYER FOR ${value}`,
                                class: "monster-turn",
                            });
                            break;
                        case "HEAL":
                            this.actions.unshift({
                                log: `MONSTER HEALS HIMSELF FOR ${value}`,
                                class: "monster-turn",
                            });
                            break;
                        default:
                            break;
                    }
                    break;
            }
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
                const value = Math.floor((Math.random() * 10) + 1 + enhancement);
                this.healthMONSTER -= value;
                this.logAction("YOU", "ATTACK", value);
            }
        },
        YOUheal(enhancement) {
            if (this.healthYOU <= 100) {
                const value = Math.floor((Math.random() * 10) + 1 + enhancement);
                this.healthYOU += value;
                this.logAction("YOU", "HEAL", value)
                if (this.healthYOU > 100) {
                    this.healthYOU = 100;
                }
            }
        },
        MONSTERAttack() {
            if (this.healthYOU >= 0) {
                const value = Math.floor((Math.random() * 10) + 1);
                this.healthYOU -= value;
                this.logAction("MONSTER", "ATTACK", value);
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