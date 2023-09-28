const API = "https://api.github.com/users/";

const app = Vue.createApp({
    data() {
        return {
            message: "Holis",
        };
    },
});

const mountedApp = app.mount("#app");
