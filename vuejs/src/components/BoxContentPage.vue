<template>
	<section class="mb-4">
		<header class="d-flex align-items-center mb-4">
			<h2 class="font-weight-bold mb-0">
				{{ title }}
			</h2>
		</header>
		<div class="row">
			<GameView v-for="game in data.data" :key="game.id_game" :item="game" />
		</div>
		<nav class="nav-pagination">
			<ul class="pagination">
				<li class="page-item">
					<router-link
						class="page-link"
						:to="`/${current_path}/1`"
						v-if="data.current_page > 1">
						<img
							style="height: 16px"
							:src="require('../assets/firstPage.svg')" />
					</router-link>
				</li>
				<li class="page-item" v-if="data.current_page > 1">
					<router-link
						class="page-link"
						aria-label="Previous"
						:to="`/${current_path}/${Number(data.current_page) - 1}`">
						<img
							style="height: 16px"
							:src="require('../assets/previousPage.svg')" />
					</router-link>
				</li>
				<li class="page-item active">
					<router-link class="page-link" to="#">{{
						data.current_page
					}}</router-link>
				</li>
				<li class="page-item" v-if="data.current_page < data.last_page">
					<router-link
						class="page-link"
						aria-label="Next"
						:to="`/${current_path}/${Number(data.current_page) + 1}`">
						<img
							style="height: 16px"
							:src="require('../assets/nextPage.svg')" />
					</router-link>
				</li>
				<li class="page-item" v-if="data.current_page < data.last_page">
					<router-link
						class="page-link"
						:to="`/${current_path}/${data.last_page}`">
						<img
							style="height: 16px"
							:src="require('../assets/lastPage.svg')" />
					</router-link>
				</li>
			</ul>
		</nav>
	</section>
</template>
<script>
	import GameView from "./GameView.vue";
	export default {
		name: "BoxContentPage",
		props: {
			title: String,
			data: Object,
			type: String,
		},
		data() {
			return {
				current_path:
					this.$route.path.split("/")[1] +
					(this.type == "" ? this.type : "/" + this.type),
			};
		},

		components: {
			GameView,
		},
	};
</script>
