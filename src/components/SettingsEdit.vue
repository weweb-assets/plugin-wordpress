<template>
    <div class="wp-settings-edit">
        <wwEditorFormRow required label="URL">
            <wwEditorFormInput
                type="text"
                name="url"
                placeholder="https://my-wordpress-url.com"
                :model-value="settings.privateData.url"
                large
                @update:modelValue="setPrivateProp('url', $event)"
            />
        </wwEditorFormRow>
        <wwEditorFormRow label="Admin endpoint">
            <wwEditorFormInput
                type="text"
                name="admin-endpoint"
                placeholder="wp-admin"
                :model-value="settings.privateData.adminEndpoint"
                large
                @update:modelValue="setPrivateProp('adminEndpoint', $event)"
            />
        </wwEditorFormRow>
        <wwEditorFormRow label="GraphQL endpoint">
            <wwEditorFormInput
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
        setPrivateProp(key, value) {
            this.$emit('update:settings', {
                ...this.settings,
                privateData: { ...this.settings.privateData, [key]: value },
            });
        },
    },
};
</script>
