import { writable } from 'svelte/store';
const PollStore = writable([
    {
        id: 1,
        question: 'Python or JavaScript?',
        answerA: 'Python',
        answerB: 'Javascript',
        votesA: 9,
        votesB: 13,
    },
]);

export default PollStore;
