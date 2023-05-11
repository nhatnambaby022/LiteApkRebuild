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
						<li
							class="breadcrumb-item home"
							v-if="this.data.data[0].isApp == 1">
							<router-link to="/apps/1">
								<span itemprop="name">Apps</span>
							</router-link>
						</li>
						<li
							class="breadcrumb-item home"
							v-if="this.data.data[0].isApp == 0">
							<router-link to="/games/1">
								<span itemprop="name">Games</span>
							</router-link>
						</li>
						<li class="breadcrumb-item active">
							<span> {{ this.data.data[0].name_tag }} </span>
						</li>
					</ul>
				</div>
			</div>
			<div class="container">
				<div class="row" style="height: auto !important">
					<main id="primary" class="content-area">
						<BoxContentPage
							:title="this.title"
							:data="this.data"
							:type="this.id" />
					</main>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import BoxContentPage from "@/components/BoxContentPage.vue";
	export default {
		name: "GamesOfTagBox",
		computed: {},
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
