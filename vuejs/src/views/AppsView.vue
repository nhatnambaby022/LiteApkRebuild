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
							<span> Apps </span>
						</li>
					</ul>
				</div>
			</div>
			<div class="container">
				<main id="primary" class="content-area">
					<BoxContentPage
						title="Apps - Latest Updates"
						:data="this.data"
						type="" />

					<section class="mb-4">
						<div class="row">
							<TagView
								v-for="tag in this.tags.filter((tag) => tag.isApp == 1)"
								:key="tag.id"
								:tagName="tag.name_tag"
								:id="tag.id_tag" />
						</div>
					</section>
				</main>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import {getAppPage} from "@/api";
	import BoxContentPage from "@/components/BoxContentPage.vue";
	import TagView from "@/components/TagView.vue";
	import {mapGetters} from "vuex";
	export default {
		name: "AppsView",
		data() {
			return {
				page: this.$route.params.page,
				data: [],
			};
		},
		computed: {
			...mapGetters(["types", "news", "tags"]),
		},
		components: {
			BoxContentPage,
			TagView,
		},
		created() {
			this.getAppPageFunc(this.page);
		},
		methods: {
			async getAppPageFunc(page) {
				const response = await getAppPage({page});
				if (response.request.statusText == "OK") {
					this.data = response.data;
				}
			},
		},
		beforeRouteUpdate(to, from, next) {
			this.getAppPageFunc(to.params.page);
			next();
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
	.py-2 {
		padding-bottom: 0px !important;
	}
</style>
