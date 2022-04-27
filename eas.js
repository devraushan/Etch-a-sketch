const container = document.getElementById("container");
const box=[];
const widthOfScreen = window.innerWidth;
for(i=0;i<16;i++){
    box.push(document.createElement("div"));
    box[i].setAttribute("class",`box box${i+1}`)
    container.appendChild(box[i]);
    

    


};


