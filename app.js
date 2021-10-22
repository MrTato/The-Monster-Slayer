// while start new game button has not been clicked
    // the only button shown should be start new game
    // the game bars should be at 100

new Vue({
    el: "#app",
    data() {
        return {
            gameStarted: false
        }
    },
    methods: {
        startGame() {
            this.gameStarted = true;
        }
    }
});