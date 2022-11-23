export default [
       {
        vars: {
            "x": Math.floor(Math.random() * 10),
            "y": Math.floor(Math.random() * 10),
        },
        
        question: `what is 2 + 2`,
        answers: [
            Math.floor(Math.random() * 10),
            '4',
            '5',
            '2'
        ],
        correct: 2
    },
    {
        question: 'What is 3+3?',
        answers: [
            '7',
            '9',
            '6',
            '8'
        ],
        correct: 3
    },    
    {
        question: 'What is 5+4?',
        answers: [
            '5',
            '10', 
            '2', 
            '9'
        ],
        correct: 4
    },
    {
        question: 'What is 6+4?',
        answers: [
            '9',
            '11', 
            '7', 
            '10'
        ],
        correct: 4
    },
    {
        question: 'What is 3+11?',
        answers: [
            '12',
            '14', 
            '10', 
            '19'
        ],
        correct: 2
    },
    {
        question: 'What is 9+3?',
        answers: [
            '15',
            '10', 
            '12', 
            '9'
        ],
        correct: 3
    }
]