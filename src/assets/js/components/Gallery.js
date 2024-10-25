import portfolio from './../../../datas/portfolio.json';
export default function Gallery() {
    return {
        images: [],

        init() {
            this.images = portfolio.slice(0, 8);
        },
    }
}
