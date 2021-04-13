/* wwEditor:start */
import './popups';
const defaultValue = [
    {
        id: wwLib.wwUtils.getUid(),
        name: 'Posts',
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
    },
    {
        id: wwLib.wwUtils.getUid(),
        name: 'Pages',
        query: `query MyQuery {
    pages {
        nodes {
            title
            slug
            content(format: RENDERED)
            date
        }
    }
}`,
    },
];
/* wwEditor:end */

export default {
    /* wwEditor:start */
    /*=============================================m_ÔÔ_m=============================================\
        Data
    \================================================================================================*/
    settings: {
        data: {},
        privateData: {
            url: '',
            adminEndpoint: '',
            graphqlEndpoint: '',
            queries: [],
        },
    },
    /* wwEditor:end */
    /*=============================================m_ÔÔ_m=============================================\
        Init
    \================================================================================================*/
    async init() {
        /* wwEditor:start */
        const plugin = wwLib.wwPlugins.pluginWordpress;
        if (plugin.id) plugin.settings = (await wwLib.wwPlugin.getSettings(plugin.id)) || this.settings;
        if (!plugin.settings.privateData.url) plugin.settings.privateData.url = '';
        if (!plugin.settings.privateData.adminEndpoint) plugin.settings.privateData.adminEndpoint = 'wp-admin';
        if (!plugin.settings.privateData.graphqlEndpoint) plugin.settings.privateData.graphqlEndpoint = 'graphql';
        if (!plugin.settings.privateData.queries) plugin.settings.privateData.queries = defaultValue;
        if (plugin.isNew && !plugin.settings.privateData.url.length) {
            this.sidebarButton();
        }
        /* wwEditor:end */
    },
    /* wwEditor:start */
    /*=============================================m_ÔÔ_m=============================================\
        SYNCHRONIZE
    \================================================================================================*/
    async sync(query) {
        try {
            await wwLib.wwPlugin.saveCmsDataSet(this.settings.id, query.id, query.name, query.displayBy, 'WordPress');

            wwLib.wwNotification.open({
                text: {
                    en: `Query "${query.name}" succesfully fetched`,
                },
                color: 'green',
            });
        } catch (err) {
            wwLib.wwNotification.open({
                text: {
                    en: 'An error occured, please try again later.',
                    fr: 'Une erreur est survenue. Veuillez réessayer plus tard.',
                },
                color: 'red',
            });
            wwLib.wwLog.error(err);
        }
    },
    async syncAll() {
        for (const query of this.settings.privateData.queries) await this.sync(query);
    },
    /*=============================================m_ÔÔ_m=============================================\
        SIDEBAR POPUP
    \================================================================================================*/
    async sidebarButton() {
        try {
            const { id, settings } = wwLib.wwPlugins.pluginWordpress;
            const isSetup = !!settings.privateData.url.length;
            const isFirstTime = !isSetup;
            await wwLib.wwPopups.open({
                firstPage: isSetup ? 'WORDPRESS_POPUP' : 'WORDPRESS_CONFIGURATION_POPUP',
                data: {
                    isFirstTime,
                    pluginId: id,
                    settings,
                },
            });
        } catch (err) {
            wwLib.wwLog.error(err);
        }
    },
    /* wwEditor:end */
};
