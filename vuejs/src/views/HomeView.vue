<template>
	<div id="page" class="bg-light">
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
						v-for="type in this.types"
						:key="type.id_type"
						:type="type"
						:games="this.games" />

					<section class="mb-4">
						<header class="d-flex align-items-center mb-4">
							<h2 class="font-weight-bold mb-0">
								<router-link class="text-body" to="/games/1">
									Games - Categories
								</router-link>
							</h2>
							<router-link class="btn btn-primary ml-auto" to="/games/1">
								View all
							</router-link>
						</header>
						<div class="row">
							<TagView
								v-for="tag in this.tags.filter((tag) => tag.isApp == 0)"
								:v-if="tag.isApp == 0"
								:key="tag.id"
								:tagName="tag.name_tag" />
						</div>
					</section>
					<section class="mb-4">
						<header class="d-flex align-items-center mb-4">
							<h2 class="font-weight-bold mb-0">
								<router-link class="text-body" to="/apps/1">
									Apps - Categories
								</router-link>
							</h2>
							<router-link class="btn btn-primary ml-auto" to="/apps/1">
								View all
							</router-link>
						</header>
						<div class="row">
							<TagView
								v-for="tag in this.tags.filter((tag) => tag.isApp == 1)"
								:key="tag.id"
								:tagName="tag.name_tag" />
						</div>
					</section>
				</main>
			</div>
		</div>
	</div>
</template>
<script>
	import BoxContent from "@/components/BoxContent.vue";
	import NewsView from "@/components/NewsView.vue";
	import TagView from "@/components/TagView.vue";
	import {mapGetters} from "vuex";
	export default {
		name: "HomeView",
		computed: {
			...mapGetters(["games", "types", "news", "tags"]),
		},
		components: {
			NewsView,
			BoxContent,
			TagView,
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
