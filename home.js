const pomodoroTimerDiv = document.getElementById("pomodoroTimerDiv")
const timerDiv = document.getElementById("timerDiv")
const questionSaverDiv = document.getElementById("questionSaverDiv")
const todoListDiv = document.getElementById("todoListDiv")
const statsDiv = document.getElementById("statsDiv")
const googleClassroomDiv = document.getElementById("googleClasroomDiv")
function slide(div){
    div.scrollIntoView({ behavior: 'smooth' });
}
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });