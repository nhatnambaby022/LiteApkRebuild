<template>
	<div class="col-12 col-sm-6 col-lg-4 mb-4">
		<a
			class="embed-responsive embed-responsive-16by9 bg-cover shadow-sm d-block"
			:style="{backgroundImage: `url(${item.image})`}"
			href="https://liteapks.com/looter-shooter-arena-breakout-opened-test-servers-to-everyone.html">
			<div
				class="d-flex align-items-end p-3 position-absolute"
				:style="{
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				}">
				<h3 class="h6 font-weight-bold text-white mb-0">
					{{ item.title }}
				</h3>
			</div>
		</a>
	</div>
</template>
<script>
	export default {
		name: "NewsView",
		props: {
			item: Object,
		},
	};
</script>
<style></style>
