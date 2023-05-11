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
							<span> {{ this.title }} </span>
						</li>
					</ul>
				</div>
			</div>
			<div class="container">
				<div class="row" style="height: auto !important">
					<main id="primary" class="content-areacol-12 col-lg-9 content-area">
						<BoxContentPage
							:title="this.title"
							:data="this.data"
							:type="this.id" />
					</main>
					<aside id="secondary" class="col-12 col-lg-3 widget-area">
						<section
							class="bg-white border rounded shadow-sm pt-3 px-2 px-md-3 mb-3">
							<header class="d-flex align-items-end mb-3">
								<h2 class="h5 font-weight-semibold mb-0">
									<router-link class="text-body" to="/games/1">
										Games
									</router-link>
								</h2>
								<router-link
									class="btn btn-primary btn-sm ml-auto"
									to="/games/1">
									View More
								</router-link>
							</header>
							<div class="row">
								<div
									class="col-6 mb-3"
									v-for="tag in this.tags.filter((tag) => tag.isApp == 0)"
									:key="tag.id_tag">
									<router-link
										class="small text-truncate d-flex"
										:to="`/tag/${tag.id_tag}/1`"
										title="Action">
										{{ tag.name_tag }}
									</router-link>
								</div>
							</div>
						</section>
						<section
							class="bg-white border rounded shadow-sm pt-3 px-2 px-md-3 mb-3">
							<header class="d-flex align-items-end mb-3">
								<h2 class="h5 font-weight-semibold mb-0">
									<router-link class="text-body" to="/apps/1">
										Apps
									</router-link>
								</h2>
								<router-link
									class="btn btn-primary btn-sm ml-auto"
									to="/apps/1">
									View More
								</router-link>
							</header>
							<div class="row">
								<div
									class="col-6 mb-3"
									v-for="tag in this.tags.filter((tag) => tag.isApp == 1)"
									:key="tag.id_tag">
									<router-link
										class="small text-truncate d-flex"
										:to="`/tag/${tag.id_tag}/1`"
										title="Action">
										{{ tag.name_tag }}
									</router-link>
								</div>
							</div>
						</section>
					</aside>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import BoxContentPage from "@/components/BoxContentPage.vue";
	import {mapGetters} from "vuex";
	export default {
		name: "GamesOfTypeBox",
		computed: {
			...mapGetters(["tags"]),
		},
		components: {
			BoxContentPage,
		},
		props: {
			data: Object,
			title: String,
			id: String,
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
