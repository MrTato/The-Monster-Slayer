new Vue({
    el: "#app",
    data() {
        return {
            actions: [],
            gameStarted: false,
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
        },
        attack() {
            this.YOUattack();
            this.MONSTERAttack();
        },
        YOUattack() {
            if (this.healthMONSTER) {
                this.healthMONSTER -= Math.round((Math.random() * 10) + 1);
                this.checkWinYOU();
            }
        },
        MONSTERAttack() {
            if (this.healthYOU >= 0) {
                this.healthYOU -= Math.round((Math.random() * 10) + 1);
                this.checkWinMONSTER();
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