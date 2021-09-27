<template>
    <div class="wp-settings-edit">
        <wwEditorFormRow required label="URL">
            <wwEditorInputText
                type="text"
                name="url"
                placeholder="https://my-wordpress-url.com"
                :model-value="settings.privateData.url"
                large
                @update:modelValue="saveUrl"
            />
        </wwEditorFormRow>
        <wwEditorFormRow label="Admin endpoint">
            <wwEditorInputText
                type="text"
                name="admin-endpoint"
                placeholder="wp-admin"
                :model-value="settings.privateData.adminEndpoint"
                large
                @update:modelValue="setPrivateProp('adminEndpoint', $event)"
            />
        </wwEditorFormRow>
        <wwEditorFormRow label="GraphQL endpoint">
            <wwEditorInputText
                type="text"
                name="graphql-endpoint"
                placeholder="graphql"
                :model-value="settings.privateData.graphqlEndpoint"
                large
                @update:modelValue="setPrivateProp('graphqlEndpoint', $event)"
            />
        </wwEditorFormRow>
    </div>
</template>

<script>
export default {
    props: {
        settings: { type: Object, required: true },
    },
    emits: ['update:settings'],
    mounted() {
        if (!this.settings.adminEndpoint && !this.settings.graphqlEndpoint)
            this.$emit('update:settings', {
                ...this.settings,
                privateData: { ...this.settings.privateData, adminEndpoint: 'wp-admin', graphqlEndpoint: 'graphql' },
            });
    },
    methods: {
        saveUrl(value) {
            this.setPrivateProp('url', value.trim().replace(/\/+$/g, ''));
        },
        setPrivateProp(key, value) {
            this.$emit('update:settings', {
                ...this.settings,
                privateData: { ...this.settings.privateData, [key]: value },
            });
        },
    },
};
</script>
