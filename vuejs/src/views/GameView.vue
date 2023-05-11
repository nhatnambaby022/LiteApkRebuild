<template>
	<GameBox />
</template>

<script>
	// @ is an alias to /src
	//import {getGameOfType} from "@/api";
	import GameBox from "@/components/GameBox.vue";
	export default {
		name: "GameOfType",
		// data() {
		// 	return {
		// 		id: this.$route.params.id,
		// 		page: this.$route.params.page,
		// 		data: {
		// 			data: [],
		// 		},
		// 	};
		// },
		// created() {
		// 	this.getGameOfTypeFunc(this.id, this.page);
		// },
		// methods: {
		// 	async getGameOfTypeFunc(id, page) {
		// 		const response = await getGameOfType({id, page});
		// 		if (response.request.statusText == "OK") {
		// 			this.data = response.data;
		// 		}
		// 	},
		// },
		// beforeRouteUpdate(to, from, next) {
		// 	this.getGameOfTypeFunc(to.params.id, to.params.page);
		// 	next();
		// },
		components: {GameBox},
	};
</script>
<style>
	.bg-primary {
		background-color: #7bbf3a !important;
	}
	.btn-primary,
	.btn-primary:not(:disabled):not(.disabled):active:focus {
		color: #fff;
		background-color: #7bbf3a;
		border-color: #7bbf3a;
	}
	.btn-primary:hover {
		color: #fff;
		background-color: #63aa1f;
		border-color: #63aa1f;
	}
	.py-2 {
		padding-bottom: 0px !important;
	}
</style>
