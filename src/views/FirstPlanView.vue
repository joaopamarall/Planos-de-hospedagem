<template>
	<div class="firstPlan">
		<planos-title-component-vue />
		<div class="content">
			<FormData />
			<planos-component-vue tipo="Hospedagem 1" preco="0" />
		</div>
	</div>
</template>

<script>
import PlanosTitleComponentVue from "@/components/planos/PlanosTitleComponent.vue";
import PlanosComponentVue from "@/components/planos/PlanosComponent.vue";
import FormData from "@/components/FormData.vue";
export default {
	components: { PlanosTitleComponentVue, PlanosComponentVue, FormData },
};
</script>
<style>
.content {
	display: flex;
	justify-content: center;
	gap: 20px;
}
</style>
