<template>
	<section class="mb-4">
		<header class="d-flex align-items-center mb-4">
			<h2 class="font-weight-bold mb-0">
				<a class="text-body" href="https://liteapks.com/type/editors-choice">
					{{ type.name_type }}
				</a>
			</h2>
			<a
				class="btn btn-primary ml-auto"
				href="https://liteapks.com/type/editors-choice"
				>View all</a
			>
		</header>
		<div class="row">
			<GameView
				v-for="game in games.filter((game) => game.type == type.id_type)"
				:key="game.id_game"
				:item="game" />
		</div>
	</section>
</template>
<script>
	import GameView from "./GameView.vue";
	export default {
		name: "BoxContent",
		props: {
			type: Object,
			games: Array,
		},
		components: {
			GameView,
		},
	};
</script>
