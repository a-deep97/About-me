
const skills=['C++','Javascript','C#','Java','Python','SQL','NodeJS','Express','socket.io','passport','jquery','Bootstrap','React', 'MongoDB' , 'HTML-CSS','Unity','Babylonjs','Phaser','Blender','Photoshop','Git', 'Github', 'VS code', 'Visual studio' ,'android studio', '.NET', 'Heroku'];

const skillContainer=document.getElementById('skill-container');
function makeSkills(){

    for(var i=0;i<skills.length;i++){
        const skillElement=document.createElement('div');
        skillElement.className='skill-element';
        skillElement.innerHTML=skills[i];

        skillContainer.appendChild(skillElement);
    }
}
makeSkills();