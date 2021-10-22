// while start new game button has not been clicked
    // the only button shown should be start new game
    // the game bars should be at 100
        // the healthbar width should be at 100%
        // the healthbar text should be at 100

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
        }
    },
    methods: {
        startGame() {
            this.gameStarted = true;
        }
    }
});