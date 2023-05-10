<template>
	<div class="col-4 col-md-3 col-lg-2 col-xl-2 mb-3">
		<router-link
			class="h6 font-weight-semibold text-truncate text-center text-body bg-white border rounded shadow-sm d-block p-2 mb-0"
			to="/apps/1">
			{{ tagName }}
		</router-link>
	</div>
</template>
<script>
	export default {
		name: "TagView",
		props: {
			tagName: String,
		},
	};
</script>
