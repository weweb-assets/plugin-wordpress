export default {
    editor: {
        settings: {
            edit: () => import('./src/components/SettingsEdit.vue'),
            summary: () => import('./src/components/SettingsSummary.vue'),
            getIsValid(settings) {
                return !!settings.privateData.url;
            },
            /* wwEditor:start */
            copilot: {
                description: 'Configure WordPress connection settings',
                returns: 'object',
                schema: {
                    url: {
                        type: 'string',
                        description: 'WordPress site URL',
                        bindable: false
                    },
                    adminEndpoint: {
                        type: 'string',
                        description: 'WordPress admin endpoint path',
                        bindable: false
                    },
                    graphqlEndpoint: {
                        type: 'string',
                        description: 'WordPress GraphQL endpoint path',
                        bindable: false
                    }
                }
            }
            /* wwEditor:end */
        },
        collection: {
            edit: () => import('./src/components/CollectionEdit.vue'),
            summary: () => import('./src/components/CollectionSummary.vue'),
            getIsValid(config) {
                return !!config.query;
            },
            /* wwEditor:start */
            copilot: {
                description: 'Fetch data from WordPress using GraphQL queries',
                returns: 'array',
                schema: {
                    query: {
                        type: 'string',
                        description: 'GraphQL query to fetch WordPress data',
                        bindable: false
                    }
                }
            }
            /* wwEditor:end */
        },
    },
};