const texts = {
    header: {
        title: 'Quizzzy'
    },
    footer: {
        title: 'Quizzzy 2018',
        author: 'HÉTIC WP2020',
        service: 'Powered by jService'
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
        title: 'Welcome on Quizzzy',
        desc: 'Choose a quiz among the categories below',
        footer: 'Swipe to see all the categories'
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