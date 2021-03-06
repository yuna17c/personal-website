import port1 from '../img/recipro.png';
import port2 from '../img/nom.png';
import port3 from '../img/spendix.png';
import port4 from '../img/portImages/port4.jpg';
import port5 from '../img/cyber1.PNG';
import port7 from '../img/frig.png';
import port8 from '../img/jobasket.png';

const portfolios = [
    {
        id: 1,
        category: 'Mobile App',
        link1: 'https://github.com/yuna17c/recipro',
        link2: 'recipro',
        image: port1,
        title: 'Recipro',
        desc:"A mobile app focused on the concept of reciprocity and enhancing the connectivity within communities by providing opportunities for acts of kindness in neighbourhoods."
    },
    {
        id: 2,
        category: 'Web App',
        link1: 'https://devpost.com/software/job-basket',
        link2: '',
        image: port8,
        title: 'Job Basket',
        desc:"A web application that matches resumes with web-scraped job postings using NLP."
        
    },
    {
        id: 3,
        category: 'Web App',
        link1: 'https://github.com/yuna17c/reci.py',
        link2: 'recipy',
        image: port7,
        title: 'reci.py',
        desc:"A web app to help find recipes using ingredients in your fridge."
    },
    {
        id: 4,
        category: 'Python App',
        link1: 'https://github.com/yuna17c/expense-tracker-chrome',
        link2: 'tracker',
        image: port3,
        title: 'Expense Tracker',
        desc:"A chrome extension to keep track of money you spend online."
    },
    {
        id: 5,
        category: 'Game',
        link1: 'https://github.com/yuna17c/Cyber-Bugs',
        link2: 'cyberbug',
        image: port5,
        title: 'Cyber Bugs',
        desc:"2D wave clear adventure game. Clear the viruses using various items, potions, and portals."
    },
    {
        id: 6,
        category: 'Mobile App',
        link1: 'https://github.com/SongRe/Nom-v2.0',
        link2: 'nom',
        image: port2,
        title: 'Nom.',
        desc: "A mobile app that helps you manage your fridge by keeping track of fresh produce and planning your meals."
    },
    {
        id: 7,
        category: 'Chrome extension',
        link1: 'https://github.com/yuna17c/expense-tracker',
        link2: 'finance',
        image: port3,
        title: 'Financial Analysis App',
        desc:"A user interface application for personal finance analysis such as spending habits and budgeting."
    },
    {
        id: 8,
        category: 'Game',
        link1: 'https://github.com/yuna17c/Rack-O',
        link2: 'racko',
        image: port4,
        title: 'Rack-O',
        desc:"A web implementation of the card game Rack-O."
    }
]

export default portfolios;