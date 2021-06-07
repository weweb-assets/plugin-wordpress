<template>
    <div class="wp-settings-edit">
        <wwEditorFormRow required label="URL">
            <wwEditorFormInput
                type="text"
                name="url"
                placeholder="https://my-wordpress-url.com"
                :value="settings.privateData.url"
                @input="setPrivateProp('url', $event)"
                v-on:keyup.native.enter="$emit('save')"
                large
            />
        </wwEditorFormRow>
        <wwEditorFormRow label="Admin endpoint">
            <wwEditorFormInput
                type="text"
                name="admin-endpoint"
                placeholder="wp-admin"
                :value="settings.privateData.adminEndpoint"
                @input="setPrivateProp('adminEndpoint', $event)"
                v-on:keyup.native.enter="$emit('save')"
                large
            />
        </wwEditorFormRow>
        <wwEditorFormRow label="GraphQL endpoint">
            <wwEditorFormInput
                type="text"
                name="graphql-endpoint"
                placeholder="graphql"
                :value="settings.privateData.graphqlEndpoint"
                @input="setPrivateProp('graphqlEndpoint', $event)"
                v-on:keyup.native.enter="$emit('save')"
                large
            />
        </wwEditorFormRow>
    </div>
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        settings: { type: Object, required: true },
    },
    watch: {
        isValid: {
            immediate: true,
            handler(value) {
                this.$emit('update-is-valid', value);
            },
        },
    },
    computed: {
        isValid() {
            return !!this.settings.privateData.url;
        },
    },
    methods: {
        setPrivateProp(key, value) {
            this.$emit('update-settings', {
                ...this.settings,
                privateData: { ...this.settings.privateData, [key]: value },
            });
        },
    },
    mounted() {
        if (!this.settings.adminEndpoint && !this.settings.graphqlEndpoint)
            this.$emit('update-settings', {
                ...this.settings,
                privateData: { ...this.settings.privateData, adminEndpoint: 'wp-admin', graphqlEndpoint: 'graphql' },
            });
    },
};
</script>
