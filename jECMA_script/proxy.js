let obj = {
    x: 2,
    y: 1
}
// Только x,y,z
let op = new Proxy(obj, {
    get: (obj, prop) => {
        if(prop == 'z' || prop == 'y' || prop == 'x') {
            if(obj[prop] == undefined) {
                return 0;
            } else {
                return obj[prop];
            }
        } else {
            console.log('Можно использовать только x, y, z');
            return new Error('no');
        }
    }
});

// любое несуществующее свойство 0
let realObj = new Proxy(obj, {
    get: (obj, prop) => (prop in obj ? obj[prop] : 0)
})

// Wrapper - обёртка c default value
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    });
}
const position = withDefaultValue(obj, 0);

// Приватные поля
const withHandlerProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
        ownKeys: (obj) => Reflect.ownKeys(obj)
            .filter(obj => !obj.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0
    })
}

const point = withHandlerProps({
    name: 'Vladimir',
    age: 34,
    _uid: Date.now()
});

const arr = [
    {id: 11, name: 'Vladimir'},
    {id: 44, name: 'Victor'},
    {id: 23, name: 'Ilya'},
]

const indexingArray = new Proxy(Array , {
    construct(target, [args] ) {
        let index = {};
        args.forEach(item => (index[item.id] = item))
        return new Proxy(new target(...args), {
            get: (arr, prop) => {
                switch (prop) {
                    case 'push': return item => {
                        arr[item.id] = item;
                        arr[prop].call(arr, item);
                    }
                    case 'findById': return id => index[id]
                    default:
                        return arr[prop]
                 }
            }
        })
    }
})

const indexing = new indexingArray(arr);