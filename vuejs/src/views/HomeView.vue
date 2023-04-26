<template>
	<div id="page" class="bg-light">
		<a class="skip-link sr-only" href="#content">Skip to content</a>
		<div id="content" class="site-content">
			<div class="container pt-5">
				<main id="primary" class="content-area">
					<section class="mb-4">
						<header class="d-flex align-items-end mb-4">
							<h2 class="font-weight-bold mb-0">
								<a class="text-body" href="https://liteapks.com/news"> News </a>
							</h2>
							<a
								class="btn btn-primary ml-auto"
								href="https://liteapks.com/news"
								>View all</a
							>
						</header>
						<div class="row">
							<NewsView v-for="item in this.news" :item="item" :key="item.id" />
						</div>
					</section>
					<BoxContent
						v-for="type in types"
						:key="type"
						:type="type"
						:games="this.games" />

					<section class="mb-4">
						<header class="d-flex align-items-center mb-4">
							<h2 class="font-weight-bold mb-0">
								<a class="text-body" href="https://liteapks.com/category/games">
									Games - Categories
								</a>
							</h2>
							<a
								class="btn btn-primary ml-auto"
								href="https://liteapks.com/category/games"
								>View all</a
							>
						</header>
						<div class="row">
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/action">
									Action
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/adventure">
									Adventure
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/arcade">
									Arcade
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/board">
									Board
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/card">
									Card
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/casino">
									Casino
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/casual">
									Casual
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/educational">
									Educational
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/music">
									Music
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/nsfw">
									NSFW
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/puzzle">
									Puzzle
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/racing">
									Racing
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/role-playing">
									Role Playing
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/simulation">
									Simulation
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/sports">
									Sports
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/strategy">
									Strategy
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/trivia">
									Trivia
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/games/word">
									Word
								</a>
							</div>
						</div>
					</section>
					<section class="mb-4">
						<header class="d-flex align-items-center mb-4">
							<h2 class="font-weight-bold mb-0">
								<a class="text-body" href="https://liteapks.com/category/apps">
									Apps - Categories
								</a>
							</h2>
							<a
								class="btn btn-primary ml-auto"
								href="https://liteapks.com/category/apps"
								>View all</a
							>
						</header>
						<div class="row">
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/art-design">
									Art &amp; Design
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/auto-vehicles">
									Auto &amp; Vehicles
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/books-reference">
									Books &amp; Reference
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/business">
									Business
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/comics">
									Comics
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/communication">
									Communication
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/dating-apps">
									Dating
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/education">
									Education
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/emulator">
									Emulator
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/entertainment">
									Entertainment
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/finance">
									Finance
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/food-drink-apps">
									Food &amp; Drink
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/health-fitness">
									Health &amp; Fitness
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/lifestyle">
									Lifestyle
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/maps-navigation">
									Maps &amp; Navigation
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/medical">
									Medical
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/music-apps">
									Music
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/music-audio">
									Music &amp; Audio
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/news-magazines">
									News &amp; Magazines
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/personalization">
									Personalization
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/photography">
									Photography
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/productivity">
									Productivity
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/shopping">
									Shopping
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/social">
									Social
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/sport">
									Sport
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/tools">
									Tools
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/travel-local">
									Travel &amp; Local
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/video-players-editors">
									Video Players &amp; Editors
								</a>
							</div>
							<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
								<a
									class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
									href="https://liteapks.com/category/apps/weather">
									Weather
								</a>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import BoxContent from "@/components/BoxContent.vue";
	import NewsView from "@/components/NewsView.vue";
	import {mapGetters} from "vuex";
	export default {
		name: "HomeView",
		computed: {
			...mapGetters(["games", "types", "news"]),
		},
		components: {
			NewsView,
			BoxContent,
		},
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
</style>
