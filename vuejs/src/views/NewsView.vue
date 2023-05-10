<template>
	<div id="page" class="bg-light">
		<div id="content" class="site-content">
			<div class="py-2">
				<div class="container">
					<ul id="breadcrumb" class="breadcrumb">
						<li class="breadcrumb-item home">
							<router-link to="/">
								<span itemprop="name">Home</span>
							</router-link>
						</li>
						<li class="breadcrumb-item active">
							<span> News </span>
						</li>
					</ul>
				</div>
			</div>
			<div class="container pt-5">
				<main id="primary" class="content-area">
					<section class="mb-4">
						<header class="d-flex align-items-end mb-4">
							<h2 class="font-weight-bold mb-0">
								<span> News </span>
							</h2>
						</header>
						<div class="row">
							<NewsView v-for="item in this.news" :item="item" :key="item.id" />
						</div>
					</section>
				</main>
			</div>
		</div>
	</div>
</template>
<script>
	import NewsView from "@/components/NewsView.vue";
	import {mapGetters} from "vuex";
	export default {
		name: "NewListView",
		computed: {
			...mapGetters(["news"]),
		},
		components: {
			NewsView,
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
