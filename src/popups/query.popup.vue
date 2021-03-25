<template>
    <div class="ww-popup-wordpress-query">
        <label class="wordpress-query__label caption-s" for="name-wordpress">
            Name
            <div class="wordpress-query__label-required">required</div>
        </label>
        <input
            type="text"
            name="name-wordpress"
            class="wordpress-query__input caption-m ww-editor-input -large"
            placeholder="Posts"
            v-model="query.name"
            autofocus
        />
        <label class="wordpress-query__label caption-s" for="query-wordpress">
            Query
            <a class="wordpress-query__link" :href="graphiqlUrl" target="_blank"> Construct query here </a>
            <div class="wordpress-query__label-required">required</div>
        </label>
        <textarea
            name="query-wordpress"
            class="wordpress-query__input caption-m ww-editor-input -textarea -large"
            rows="11"
            :placeholder="`query MyQuery {
    posts {
        nodes {
            title
        }
    }
}`"
            v-model="query.query"
        />
        <label class="wordpress-query__label caption-s" for="display-by-wordpress">
            Display by
            <div class="wordpress-query__label-required">optional</div>
        </label>
        <input
            type="text"
            name="display-by-wordpress"
            class="wordpress-query__input caption-m ww-editor-input -large"
            placeholder="Title"
            v-model="query.displayBy"
        />
    </div>
</template>

<script>
export default {
    name: 'QueryPopup',
    props: {
        options: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {
            url: '',
            adminEndpoint: 'wp-admin',
            query: {
                id: wwLib.wwUtils.getUid(),
                name: undefined,
                query: undefined,
                displayBy: undefined,
            },
        };
    },
    watch: {
        isSetup() {
            this.options.setButtonState('SAVE', this.isSetup ? 'ok' : 'disabled');
        },
    },
    computed: {
        isSetup() {
            return !!this.query.name && !!this.query.name.length && !!this.query.query && !!this.query.query.length;
        },
        graphiqlUrl() {
            return `${this.url}/${this.adminEndpoint}/admin?page=graphiql-ide`;
        },
    },
    created() {
        this.query = this.options.data.query || this.query;
        this.url = this.options.data.url || this.url;
        this.adminEndpoint = this.options.data.adminEndpoint || this.adminEndpoint;
        this.options.result.query = this.query;
        this.options.setButtonState('SAVE', this.isSetup ? 'ok' : 'disabled');
    },
};
</script>

<style scoped lang="scss">
.ww-popup-wordpress-query {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: var(--ww-spacing-03) 0;
    .wordpress-query {
        &__label {
            display: flex;
            align-items: center;
            font-weight: 500;
            color: var(--ww-color-dark-500);
            margin-bottom: var(--ww-spacing-01);
            &-required {
                margin-left: auto;
                color: var(--ww-color-dark-400);
            }
        }
        &__link {
            color: var(--ww-color-blue-500);
            margin-left: var(--ww-spacing-02);
        }
        &__input {
            margin-bottom: var(--ww-spacing-03);
        }
        &__select {
            min-width: 65px;
            margin-left: var(--ww-spacing-02);
        }
        &__row {
            display: flex;
            align-items: center;
            &.-space-between {
                justify-content: space-between;
                // padding: 0 var(--ww-spacing-05);
            }
            &-item {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-right: var(--ww-spacing-02);
                &:last-child {
                    margin-right: 0;
                    margin-left: var(--ww-spacing-02);
                }
            }
        }
        &__button-delete {
            margin-right: var(--ww-spacing-03);
            cursor: pointer;
            transition: color 0.3s ease;
            &:hover {
                color: var(--ww-color-red-500);
            }
        }
    }
    .m-auto-left {
        margin-left: auto;
    }
}
</style>
