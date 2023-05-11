<template>
	<section class="mb-4">
		<header class="d-flex align-items-center mb-4">
			<h2 class="font-weight-bold mb-0">
				<router-link class="text-body" :to="`/type/${this.type.id_type}/1`">
					{{ type.name_type }}
				</router-link>
			</h2>
			<router-link
				class="btn btn-primary ml-auto"
				:to="`/type/${this.type.id_type}/1`">
				View all
			</router-link>
		</header>
		<div class="row">
			<GameViewBox
				v-for="game in games.filter(
					function (game) {
						if (game.type == type.id_type && this.count < 10) {
							this.count++;
							return true;
						} else {
							return false;
						}
					},
					{count: 0}
				)"
				:key="game.id_game"
				:item="game" />
		</div>
	</section>
</template>
<script>
	import GameViewBox from "./GameViewBox.vue";
	export default {
		name: "BoxContent",

		props: {
			type: Object,
			games: Array,
		},
		components: {
			GameViewBox,
		},
	};
</script>
