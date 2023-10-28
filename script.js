const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const container  = document.getElementById("container");

for(let i=0;i<800;i++){
    const box = document.createElement("div");
    box.classList.add("square");

    box.addEventListener("mouseover",()=> setColor(box));
    box.addEventListener("mouseout",()=> removeColor(box));

    container.appendChild(box);
}

function setColor(event){
    const color = randomColor();
    event.style.background = color;
    event.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event){
    event.style.background = "#1d1d1d";
    event.style.boxShadow = "0 0 2px #000";
}
function randomColor(){
    const index = Math.floor(Math.random()*colors.length);
    return colors[index];
}