export default {
    id: '1',
    users: [{
        id: 'u1',
        name: 'Eugeny',
        imageUri: 'https://avatars.githubusercontent.com/u/55189944?s=60&v=4',
    }, {
        id: 'u2',
        name: 'Julia',
        imageUri: 'https://sun4-17.userapi.com/s/v1/ig2/Xe0wDxl_j3mm3p1hltu_0e3i9H8VscexrXw8DbLwGD1CSYJk5-qPdvpFpVBm4Wi0xKc3wNLxUqWpro5F-7bPT_9a.jpg?size=50x0&quality=96&crop=0,185,750,750&ava=1',
    }],
    messages: [{
        id: 'm1',
        content: 'How are you, Julia!',
        createdAt: '2020-10-10',
        user: {
            id: 'u1',
            name: 'Eugeny',
        },
    }, {
        id: 'm2',
        content: 'I am good, good',
        createdAt: '2020-10-03',
        user: {
            id: 'u2',
            name: 'Julia',
        },
    }, {
        id: 'm3',
        content: 'What about you?',
        createdAt: '2020-10-03',
        user: {
            id: 'u2',
            name: 'Julia',
        },
    }, {
        id: 'm4',
        content: 'Good as well, preparing for the stream now.',
        createdAt: '2020-10-03',
        user: {
            id: 'u1',
            name: 'Eugeny',
        },
    }, {
        id: 'm5',
        content: 'How is your uni going?',
        createdAt: '2020-10-03',
        user: {
            id: 'u1',
            name: 'Eugeny',
        },
    }, {
        id: 'm6',
        content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
        createdAt: '2020-10-03',
        user: {
            id: 'u2',
            name: 'Julia',
        },
    }, {
        id: 'm7',
        content: 'Big Data is really interesting. Cannot wait to go through all the material.',
        createdAt: '2020-10-03',
        user: {
            id: 'u1',
            name: 'Eugeny',
        },
    }]
}
