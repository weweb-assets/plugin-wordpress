<template>
    <div class="wp-collection-summary">
        <div class="wp-collection-summary__elem caption-s">Query: {{ config.query || '-' }}</div>
    </div>
</template>

<script>
export default {
    props: {
        config: { type: Object, required: true },
    },
};
</script>

<style lang="scss" scoped>
.wp-collection-summary {
    &__elem {
        margin-bottom: var(--ww-spacing-01);
    }
}
</style>
