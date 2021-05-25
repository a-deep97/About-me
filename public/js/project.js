

const projects=[{
    name: 'The World',
    desc:'A RESTful Nodejs encyclopedia web application.Application contains information about the countries and other graphical representation including google maps (api)with edit accessibility to the database with a complete authentication system. Application is made with NodeJs and express for backend , MongoDb for database storage,passport-bcrypt for authentication and HTML-CSS-JS and other graphics libraries for front-end.',
    link: 'https://the-world-application.herokuapp.com/',
    category: 'cat1'
},
{
    name: 'Maze nest',
    desc: ' A realtime multiplayer video game for web made with Nodejs. Multiplayers try to escape the maze and whoever does it first wins. Each game is being run in its own room. The application is made with the use of express framework for backend, Socket.io for bidirectional realtime event based communication, HTML-CSS-JS for the front end and Phaser as the game engine.',
    link: 'https://maze-nest.herokuapp.com/',
    category: 'cat1'
},
{
    name: 'Cheem chat',
    desc: ' real time group communication application made with Nodejs and express , real time bidirectional communication library, Socket.io and HTML-CSS-JS, P5js library for interactive chat UI. ',
    link: 'http://cheem-chat.herokuapp.com/',
    category: 'cat1'
},
{
    name: 'Trappy ocean',
    desc: 'Standalone single player Android/Web game made in unity with c#. Objective of the game is pass the fish through the ocean avoiding obstacles.(similar to flappy bird)',
    link: 'https://a-deep97.github.io/trappy-ocean-web/',
    category: 'cat2'
},
{
    name: 'tower of hanoi',
    desc: 'Famous Tower Of Hanoi standalone game made in android',
    link: 'https://play.google.com/store/apps/details?id=com.nautilus.towerofhanoi',
    category: 'cat2'
},
{
    name: 'word counter',
    desc: 'Utility single page app to calculate word and character counts in a paraghraph',
    link: 'https://a-deep97.github.io/word-counter/',
    category: 'cat3'
},
{
    name: 'Web speech',
    desc: 'Implementaion of Web Speech API. A demo of speech to text and vice versa which could be helpgull to people with disability',
    link: 'https://a-deep97.github.io/T4SNE-project/',
    category: 'cat3'
},
{
    name: 'web pages',
    desc: 'Static web page designs made with html css jss and other graphic libs.',
    link: 'https://github.com/a-deep97/web-page-designs',
    category: 'cat3'
}
];

const projectContainer=document.getElementById('project-container');
function makeProjects(){
    for(var i=0;i<projects.length;i++){
        
        const projectElement=document.createElement('div');
        projectElement.className='project-element';
        const link=projects[i].link;
        projectElement.onclick=function(){
            location.href=link;
        }
/*
        if(projects[i].category=='cat1'){
            projectElement.style.height='200px';
        }
        else if(projects[i].category=='cat2'){
            projectElement.style.minheight='100px';
        }
*/
        const projectName=document.createElement('div');
        projectName.className='project-name';
        projectName.innerHTML=projects[i].name;

        const projectDesc=document.createElement('div');
        projectDesc.className='project-desc';
        projectDesc.innerHTML=projects[i].desc;

        projectElement.appendChild(projectName);
        projectElement.appendChild(projectDesc);

        projectContainer.appendChild(projectElement);
    }
}
makeProjects();