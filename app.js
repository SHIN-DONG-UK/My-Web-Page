const content = "안녕하세요, \n ";
const text = document.querySelector(".section-1 > .text-wrapper > .text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if( i > content.length){
        text.textContent = "";
        i=0;
    }
}
setInterval(typing, 200);

const cardElOne = document.querySelector(".card-wrapper > .content-wrapper");
