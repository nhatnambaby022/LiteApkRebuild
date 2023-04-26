<template>
	<div id="page" class="bg-light site">
		<NavBar />
		<router-view />
		<FooterVue />
	</div>
</template>

<script>
	import "primevue/resources/themes/lara-light-indigo/theme.css";
	import "primevue/resources/primevue.min.css";
	import "primeicons/primeicons.css";
	import "bootstrap/dist/css/bootstrap.min.css";

	import NavBar from "./components/Nav.vue";
	import FooterVue from "./components/Footer.vue";
	import {mapActions} from "vuex";
	export default {
		components: {
			NavBar,
			FooterVue,
		},
		created() {
			this.getAllGameState();
			this.getAllTypeState();
			this.getAllNewState();
		},
		methods: {
			...mapActions(["getAllGameState", "getAllTypeState", "getAllNewState"]),
		},
	};
</script>

<style>
	#app {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
			"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	nav {
		padding: 30px;
	}

	nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	nav a.router-link-exact-active {
		color: #42b983;
	}
	a {
		text-decoration: none;
	}
</style>
