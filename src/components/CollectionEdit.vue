<template>
    <div class="wp-collection-edit">
        <wwEditorFormRow label="Query" required>
            <template slot="append-label" v-if="plugin.settings.privateData.url">
                <a class="wp-collection-edit__link" :href="graphqlUrl" target="_blank"> Construct query here </a>
            </template>
            <wwCodeEditor :value="query.query" @input="setProp('query', $event)" language="graphql" large />
        </wwEditorFormRow>
    </div>
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        config: { type: Object, required: true },
    },
    watch: {
        isSetup: {
            immediate: true,
            handler(value) {
                this.$emit('update-is-valid', value);
            },
        },
    },
    computed: {
        isSetup() {
            return !!this.query.query;
        },
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
    methods: {
        setProp(key, value) {
            this.$emit('update-config', { ...this.query, [key]: value });
        },
    },
    mounted() {
        this.$emit('update-config', this.query);
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
