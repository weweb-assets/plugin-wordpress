import settingsPopup from './settings.popup.vue';
import configurationPopup from './configuration.popup.vue';
import queriesPopup from './queries.popup.vue';
import queryPopup from './query.popup.vue';
import synchronizationPopup from './synchronization.popup.vue';
import webhooksPopup from './webhooks.popup.vue';

wwLib.wwPopups.addPopup('wordpressSettingsPopup', settingsPopup);
wwLib.wwPopups.addPopup('wordpressConfigurationPopup', configurationPopup);
wwLib.wwPopups.addPopup('wordpressQueriesPopup', queriesPopup);
wwLib.wwPopups.addPopup('wordpressQueryPopup', queryPopup);
wwLib.wwPopups.addPopup('wordpressSynchronizationPopup', synchronizationPopup);
wwLib.wwPopups.addPopup('wordpressWebhooksPopup', webhooksPopup);

wwLib.wwPopups.addStory('WORDPRESS_POPUP', {
    title: {
        en: 'Wordpress',
        fr: 'Wordpress',
    },
    type: 'wordpressSettingsPopup',
    size: wwLib.wwPopups.SIZES.MEDIUM,
});

wwLib.wwPopups.addStory('WORDPRESS_CONFIGURATION_POPUP', {
    title: {
        en: 'Wordpress - Configuration',
        fr: 'Wordpress - Configuration',
    },
    type: 'wordpressConfigurationPopup',
    size: wwLib.wwPopups.SIZES.MEDIUM,
    buttons: {
        SAVE: {
            text: {
                en: 'Save configuration',
                fr: 'Enregistrer la configuration',
            },
            next: 'WORDPRESS_QUERIES_POPUP',
        },
    },
});

wwLib.wwPopups.addStory('WORDPRESS_QUERIES_POPUP', {
    title: {
        en: 'Wordpress - Queries',
        fr: 'Wordpress - Queries',
    },
    type: 'wordpressQueriesPopup',
    size: wwLib.wwPopups.SIZES.MEDIUM,
    buttons: {
        SAVE: {
            text: {
                en: 'Save queries',
                fr: 'Enregistrer les queries',
            },
            next: 'WORDPRESS_SYNCHRONIZATION_POPUP',
        },
    },
});

wwLib.wwPopups.addStory('WORDPRESS_ADD_QUERY_POPUP', {
    title: {
        en: 'Wordpress - Add query',
        fr: 'Wordpress - Ajouter une query',
    },
    type: 'wordpressQueryPopup',
    size: wwLib.wwPopups.SIZES.MEDIUM,
    buttons: {
        SAVE: {
            text: {
                en: 'Add query',
                fr: 'Ajouter une query',
            },
        },
    },
});

wwLib.wwPopups.addStory('WORDPRESS_EDIT_QUERY_POPUP', {
    title: {
        en: 'Wordpress - Edit query',
        fr: 'Wordpress - Editer la query',
    },
    type: 'wordpressQueryPopup',
    size: wwLib.wwPopups.SIZES.MEDIUM,
    buttons: {
        SAVE: {
            text: {
                en: 'Edit query',
                fr: 'Editer la query',
            },
        },
    },
});

wwLib.wwPopups.addStory('WORDPRESS_WEBHOOKS_POPUP', {
    title: {
        en: 'Wordpress - Webhooks',
        fr: 'Wordpress - Webhooks',
    },
    type: 'wordpressWebhooksPopup',
    size: wwLib.wwPopups.SIZES.MEDIUM,
    buttons: {
        DONE: {
            text: {
                en: 'Done',
                fr: 'Done',
            },
        },
    },
});

wwLib.wwPopups.addStory('WORDPRESS_SYNCHRONIZATION_POPUP', {
    title: {
        en: 'Wordpress - Synchronization',
        fr: 'Wordpress - Synchronization',
    },
    type: 'wordpressSynchronizationPopup',
    size: wwLib.wwPopups.SIZES.MEDIUM,
    buttons: {
        DONE: {
            text: {
                en: 'Done',
                fr: 'Done',
            },
        },
    },
});
