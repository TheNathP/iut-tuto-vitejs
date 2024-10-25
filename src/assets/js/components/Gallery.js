import portfolio from './../../../datas/portfolio.json';
/**
 * Gallery component for displaying and filtering images.
 * @returns {Object} An object containing methods for initializing the gallery and adding/removing filters.
 */
export default function Gallery() {
    return {
        images: [],
        tags: [],
        filterList: [],

        /**
         * Initializes the gallery by setting the tags and images.
         * @returns {void}
         */
        init: function() {
            this.tags = this.getUniqueCategories();
            this.images = portfolio.slice(0, 8);
        },

        /**
         * Adds or removes a filter based on the provided tag.
         * @param {string} tag - The tag to add or remove from the filter list.
         * @returns {void}
         */
        addOrRemoveFilter: function(tag) {
            if (this.isTagSelected(tag)) {
                this.filterList = this.filterList.filter(filter => filter !== tag);
                return;
            }
            this.filterList.push(tag);

        },

        isTagSelected: function(tag) {
            return this.filterList.includes(tag);
        },

        /**
         * Retrieves unique categories from the portfolio data.
         * @returns {Array} An array of unique categories.
         */
        getUniqueCategories: function() {
            const categories = new Set();
            portfolio.forEach(image => {
                if (!image.category) {return; }

                image.category.forEach(category => {
                    categories.add(category);
                });
            });
            return Array.from(categories);
        },
    }
}
