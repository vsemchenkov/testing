// Dependency inversion principle

class Fetch {
    get(url) {
        return `Get -- Fetch: ${url}`;
    };
    set(url, data) {
        return `Set -- Fetch: ${url}, ${data}`;
    };
}
class LocalStorage {
    get(key) {
        return `Get -- LS: ${key}`;
    };
    set(key, value) {
        return `Set -- LS: ${key}, ${value}`;
    };
}

class FetchClient {
    constructor(fetch) {
        this.fetch = new Fetch();
    }
    clientGet(url) {
        return this.fetch.get(url);
    }
    clientSet(url, data) {
        return this.fetch.set(url, data);
    }
}

class LocalStorageClient {
    constructor(localStorage) {
        this.localStorage = new LocalStorage();
    }
    clientGet(key) {
        return this.localStorage.get(key);
    }
    clientSet(key, value) {
        return this.localStorage.set(key, value);
    }
}

class Database {
    constructor(client) {
        this.client = client;
    }
    getData(source) {
        return this.client.clientGet(source);
    }
    setData(source, value) {
        return this.client.clientSet(source, value);
    }
}

const dbF = new Database(new FetchClient());
const dbLS = new Database(new LocalStorageClient());

console.log(dbF.getData('http://google.com'));
console.log(dbLS.getData('access_token'));