// Single responsibility Principle

class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }

    update(title, text) {
        this.title = title;
        this.text = text;
    }
}

class NewsRender {
    constructor(news) {
        this.news = news;
    };

    html () {
        return `
        <header>${this.news.title}</header>
        <section>${this.news.text}</section>
        `
    };

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text
        }, null, 2)
    }

    xml() {
        return `
        <news>
            <title>${this.news.title}</title>
            <text>${this.news.text}</text>
        </news>
        `
    }
}

const news = new News('ok', 'okey');
console.log(new NewsRender(news).html(), new NewsRender(news).json(), new NewsRender(news).xml());