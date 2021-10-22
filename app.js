// while start new game button has not been clicked
// the only button shown should be start new game
// the game bars should be at 100
// the healthbar width should be at 100%
// the healthbar text should be at 100
// when start new game is clicked
// the start new game button should be hidden
// the player control buttons should be shown
// while no actions have been performed, the action log should be empty
// when the action button is clicked
// the monster's hp should be diminished by a value between 1 and 10
// the player's hp should be diminished by a value between 1 and 10
// both logs should be included in the action log

new Vue({
    el: "#app",
    data() {
        return {
            actions: [],
            gameStarted: false,
            healthYOU: 100,
            healthbarYOU: {
                backgroundColor: "green",
                margin: 0,
                color: "white",
                width: `100%`,
            },
            healthMONSTER: 100,
            healthbarMONSTER: {
                backgroundColor: "green",
                margin: 0,
                color: "white",
                width: `100%`,
            },
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
            if (this.healthMONSTER >= 0 && this.healthYOU >= 0) {
                this.healthMONSTER -= Math.round((Math.random() * 10) + 1);
                this.healthYOU -= Math.round((Math.random() * 10) + 1);
                if (this.healthMONSTER < 0) {
                    this.healthMONSTER = 0;
                    this.win('YOU');
                }
                if (this.healthYOU < 0) {
                    this.healthYOU = 0;
                    this.win('MONSTER');
                }
                this.healthbarMONSTER.width = `${this.healthMONSTER}%`;
                this.healthbarYOU.width = `${this.healthYOU}%`;
            }
        }
    }
});