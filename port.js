var changer = document.querySelector(".mcon-content .intro-con .intro-text-con #changer");
var ch = document.querySelector(".mcon-content .intro-con .intro-text-con .ch-con");
var my_pic = document.querySelector('.mcon-content .intro-con .intro-pic-con img');
var cursor = document.querySelector('#cursor');
var heds = document.querySelectorAll('.hed');
var doodle = document.querySelector('.mcon-content .intro-con .intro-pic-con .circle');
var sk_cards = document.querySelectorAll('.mcon-content .skill-conm .skill-con .skill-cards');
var mg_con = document.querySelector('.works-conm .img-con');
var wc = 1;
var img_illu = document.querySelector('.illustrator-con img');

img_illu.addEventListener('playing',()=>{
    console.log('animation_finished');
})

window.addEventListener('mousemove',(e)=>{
    cursor.style.top = `${e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;
})

setInterval(()=>{
    var scr = mg_con.clientWidth;
    if (wc >= (mg_con.children.length/2)){
        mg_con.scrollBy(-mg_con.children.length/2 * scr,0);
        wc = 1;
    }else{
        wc += 1;
        mg_con.scrollBy(scr,0);
    }
},3200)

heds.forEach((h)=>{
    h.addEventListener('mouseenter',()=>{
        cursor.classList.add('hover');
        cursor.style.transform = 'scale(5)';
    })
    h.addEventListener('mouseleave',()=>{
        cursor.classList.remove('hover');
        cursor.style.transform = 'scale(1)';
    })
})

function Typed(element,strings,downspeed,repeate='false'){
    if (strings.length > 0){
        var apd = 1;
        var random
        var word
        var num
        var max
        var wsp
        num = -1;
        setInterval(()=>{
            if(apd == 0){
                if (num >= 0){
                    num -= 1;
                    word = "";
                    for (let i = 0; i < num; i++) {
                        word = word + wsp[i];
                    }
                    element.innerText = `${word}`;
                } else{
                    num = -1;
                    apd = 1;
                }
            }
        },downspeed)
        setInterval(()=>{
            if (apd == 1){
                if(num == -1){
                    random = Math.floor(Math.random() * strings.length)
                    word = strings[random];
                    max = strings[random].length;
                    wsp = word.split("");
                    word = "";
                }
                if(num < max - 1){
                    num += 1;
                    word = word + wsp[num];
                    element.innerText = `${word}`;
                } else{
                    apd = 0;
                }
            }
        },downspeed)
    }
};

Typed(document.querySelector('.mcon-content .abus-con .ab'),['HELLO WORLD','GAMER','ARTIST'],600,'true');

setInterval(()=>{
    var scr = 50;
    if (ch.scrollTop >= (ch.children.length - 1) * scr){
        ch.scrollBy(0,-ch.children.length * scr);
    }else{
        ch.scrollBy(0,scr);
    }
},4800)