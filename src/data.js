const texts = {
    header: {
        title: 'Quizzzy'
    },
    footer: {
        author: 'Hetic W2',
        service: {
            by: 'Powered by',
            name: 'jService',
        }
    },
    categories: [
        {
            name: 'World Capitals',
            url: 'http://jservice.io/api/category?id=78',
            index: 0
        },
        {
            name: 'Brand Name',
            url: 'http://jservice.io/api/category?id=2537',
            index: 1
        },
        {
            name: 'Movies',
            url: 'http://jservice.io/api/category?id=21',
            index: 2
        }
    ],
    category: {
        title: {
            welcome: 'Welcome on',
            name: 'Quizzzy'
        },
        desc: 'Choose a quiz among the categories below',
        footer: 'Click on the tile to begin'
    },
    result: {
        win: 'Your\'re a winner !',
        mid: 'You can do better !',
        loose: 'You lost !',
        another: 'Come on !',
        again: 'Let\'s see how good you are !'
    }
}

export default texts;