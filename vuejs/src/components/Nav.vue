<template>
	<header id="masthead" class="bg-primary fixed-top site-header">
		<div class="container d-flex align-items-center">
			<button
				class="bg-transparent border-0 d-lg-none px-0 mr-2 site-nav-toggler"
				style="padding-top: 0.625rem; padding-bottom: 0.625rem"
				type="button">
				<svg
					class="svg-4 svg-white"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512">
					<path
						d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" />
				</svg>
			</button>
			<h1 class="h2 font-weight-bold mb-0 mr-2 mr-lg-0 site-logo">
				<a class="text-white" href="https://liteapks.com/" rel="home">
					LITEAPKS.COM
				</a>
			</h1>
			<nav class="mx-auto site-nav">
				<div class="d-flex d-lg-none justify-content-end">
					<button
						class="bg-transparent border-0 py-1 px-2 site-nav-closer"
						type="button">
						<svg
							class="svg-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 320 512">
							<path
								d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />
						</svg>
					</button>
				</div>
				<ul id="menu-site-navigation" class="menu">
					<li
						id="menu-item-9"
						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-9 text-start">
						<a href="https://liteapks.com/" aria-current="page">Home</a>
					</li>
					<li
						id="menu-item-10"
						class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10 text-start">
						<a href="https://liteapks.com/category/apps">Apps</a>
					</li>
					<li
						id="menu-item-11"
						class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11 text-start">
						<a href="https://liteapks.com/category/games">Games</a>
					</li>
					<li
						id="menu-item-12"
						class="menu-item menu-item-type-taxonomy menu-item-object-tip_cat menu-item-12 text-start">
						<a href="https://liteapks.com/news">News</a>
					</li>
				</ul>
			</nav>
			<div class="ml-auto ml-lg-0 mw-100" style="width: 300px">
				<form class="form-search" method="GET" action="https://liteapks.com">
					<div class="input-group">
						<input
							class="form-control border-white"
							type="text"
							name="s"
							placeholder="Search" />
						<div class="input-group-append">
							<button class="btn bg-white" type="submit">
								<svg
									class="svg-6"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512">
									<path
										d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" />
								</svg>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</header>
</template>

<script>
	import {ref} from "vue";
	export default {
		name: "NavBar",
		data() {
			return {
				items: ref([
					{
						label: "Home",
					},
					{
						label: "App",
					},
					{
						label: "Game",
					},
					{
						label: "New",
					},
				]),
			};
		},
	};
</script>

<style>
	nav {
		padding: 0px !important;
	}
	.logo {
		font-size: 24px;
		font-weight: bold;
		color: white;
	}
	.p-menubar {
		background-color: #7bbf3a;
	}
	.p-menuitem-text {
		color: white !important;
	}
	.p-menuitem-content {
		margin: 2px;
		background-color: #7bbf3a !important;
	}
	.p-menubar-button {
		color: white !important;
	}
</style>
1
