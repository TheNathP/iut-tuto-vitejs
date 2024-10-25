export default function Slider(images) {
    return {
        currentSlide: 0,
        images: [],

        init() {
            for (let i = 0; i < images.length; i++) {
                this.images = images.map((image, index) => ({
                    ...image,
                    id: index
                }));
            }
        },

        next() {
            if (this.isLast()) {
                this.currentSlide = 0;
                return;
            }
            this.currentSlide++;
        },

        prev() {
            if (this.isFirst()) {
                this.currentSlide = this.images.length - 1;
                return;
            }
            this.currentSlide--;
        },

        isFirst() {
            return this.currentSlide === 0;
        },

        isLast() {
            return this.currentSlide === this.images.length - 1;
        }
    }
}
