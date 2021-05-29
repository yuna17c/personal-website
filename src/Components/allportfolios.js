import port1 from '../img/recipro.png';
import port2 from '../img/nom.png';
import port3 from '../img/spendix.png';
import port4 from '../img/portImages/port3.jpg';
import port6 from '../img/portImages/port5.jpg';
import port7 from '../img/portImages/port6.jpg';

const portfolios = [
    {
        id: 1,
        category: 'Mobile App',
        link1: 'https://github.com/yuna17c/recipro',
        link2: 'recipro',
        icon1: 'Github',
        icon2: 'Details',
        image: port1,
        title: 'Recipro',
        desc:"A mobile app focused on the concept of reciprocity and enhancing the connectivity within communities by providing opportunities for acts of kindness in neighbourhoods."
    },
    {
        id: 2,
        category: 'Mobile App',
        link1: 'https://github.com/SongRe/Nom-v2.0',
        link2: 'nom',
        icon1: 'Github',
        icon2: 'Details',
        image: port2,
        title: 'Nom.',
        desc: "A mobile app that helps you manage your fridge by keeping track of fresh produce and planning your meals."
    },
    {
        id: 3,
        category: 'Chrome extension',
        link1: 'https://github.com/yuna17c/expense-tracker',
        link2: 'spendix',
        icon1: 'Github',
        icon2: 'Details',
        image: port3,
        title: 'Expense Tracker',
        desc:"A chrome extension to keep track of money you spend online."
    },
    {
        id: 4,
        category: 'Game',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port3,
        title: 'Cyber Bugs',
        desc:"2D wave clear adventure game. Clear the viruses using various items, potions, and portals."
    },
    {
        id: 5,
        category: 'Game',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port4,
        title: 'Rack-O',
        desc:"A web implementation of the card game Rack-O."
    },
]

export default portfolios;