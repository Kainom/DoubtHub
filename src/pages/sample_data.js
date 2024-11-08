const questions = [
    {
        id: 1,
        answered: true,
        title: "How to center a div?",
        description: "I'm trying to center a div in my web app, but it doesn't work. Can someone help me, for God's sake?",
        tags: ['html', 'css'],
        timestamp: 'Oct. 11, 2024 at 10:50',
        user: 'zea_neen_gen'
    },
    {
        id: 2,
        answered: false,
        title: "How to create a responsive navigation bar?",
        description: "I'm trying to create a responsive navigation bar for my web app, but I can't figure out how to make it work. Here's the code I'm using:",
        tags: ['html', 'css', 'javascript'],
        timestamp: 'Nov. 04, 2024 at 16:46',
        user: 'foolano_di_tall'
    }
]

const answers = [
    {
        id: 1,
        questionId: 1,
        text: "Here's how you can center a div: Just add the following CSS code to your stylesheet",
        timestamp: 'Oct. 12, 2024 at 11:30',
        user: 'zea_neen_gen'
    },
    {
        id: 2,
        questionId: 1,
        text: "stop being dumb lol",
        timestamp: 'Oct. 12, 2024 at 11:30',
        user: 'pigSlayer8000'
    },
    {
        id: 3,
        questionId: 2,
        text: "use media queries.",
        timestamp: 'Oct. 12, 2024 at 11:30',
        user: 'pigSlayer8000'
    }
]

export { questions, answers }