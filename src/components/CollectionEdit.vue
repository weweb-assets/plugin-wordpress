<template>
    <div class="wp-collection-edit">
        <wwEditorFormRow label="Query" required>
            <template v-if="plugin.settings.privateData.url" #append-label>
                <a class="wp-collection-edit__link" :href="graphqlUrl" target="_blank"> Construct query here </a>
            </template>
            <wwEditorInputCode
                :model-value="query.query"
                language="graphql"
                large
                @update:modelValue="setProp('query', $event)"
            />
        </wwEditorFormRow>
    </div>
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        config: { type: Object, required: true },
    },
    emits: ['update:config'],
    computed: {
        query() {
            return {
                query: `query MyQuery {
    posts {
        nodes {
            title
            slug
            content(format: RENDERED)
            excerpt
            date
            featuredImage {
                node {
                    altText
                    link
                }
            }
        }
    }
}`,
                ...this.config,
            };
        },
        graphqlUrl() {
            return `${this.plugin.settings.privateData.url}/${this.plugin.settings.privateData.adminEndpoint}/admin.php?page=graphiql-ide`;
        },
    },
    mounted() {
        this.$emit('update:config', this.query);
    },
    methods: {
        setProp(key, value) {
            this.$emit('update:config', { ...this.query, [key]: value });
        },
    },
};
</script>

<style scoped lang="scss">
.wp-collection-edit {
    display: flex;
    flex-direction: column;
    &__link {
        color: var(--ww-color-blue-500);
        margin-left: var(--ww-spacing-02);
    }
}
</style>
