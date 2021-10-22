// while start new game button has not been clicked
    // the only button shown should be start new game
    // the game bars should be at 100
        // the healthbar width should be at 100%
        // the healthbar text should be at 100
// when start new game is clicked
    // the start new game button should be hidden
    // the player control buttons should be shown
// while no actions have been performed, the action log should be empty

new Vue({
    el: "#app",
    data() {
        return {
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
        startGame() {
            this.gameStarted = true;
        }
    }
});