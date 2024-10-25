import portfolio from './../../../datas/portfolio.json';

export default function Gallery() {
    return {
        images: [],
        tags: [],
        filterList: [],
        availableTags: new Set(),
        selectedImage: null,

        init: function() {
            this.tags = this.getUniqueCategories(portfolio);
            this.images = portfolio.slice(0, 8);
            this.availableTags = new Set(this.tags);
        },

        addOrRemoveFilter: function(tag) {
            if (!this.isTagAvailable(tag)) return;

            // Toggle the filterList
            if (this.isTagSelected(tag)) {
                this.filterList = this.filterList.filter(filter => filter !== tag);
            } else {
                this.filterList.push(tag);
            }
            this.filterImages();
            this.updateAvailableTags();
        },

        isZoomActive() {
            return this.selectedImage !== null;
        },

        closeZoom() {
            this.selectedImage = null;
        },

        zoomImg(img) {
            this.selectedImage = img;
        },

        isTagSelected: function(tag) {
            return this.filterList.includes(tag);
        },

        isTagAvailable: function(tag) {
            return this.availableTags.has(tag); // Use Set.has() for O(1) lookup
        },

        getUniqueCategories: function(imageList) {
            const categories = new Set();
            imageList.forEach(image => {
                if (image.category) {
                    image.category.forEach(category => categories.add(category));
                }
            });
            return Array.from(categories);
        },

        filterImages: function() {
            this.images = portfolio.filter(image => {
                if (this.filterList.length === 0) return true;
                const imageCategories = new Set(image.category);
                return this.filterList.every(tag => imageCategories.has(tag));
            });
        },

        updateAvailableTags: function() {
            this.availableTags = new Set(this.getUniqueCategories(this.images));
        },
    };
}
