let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let box7 = document.querySelector(".box7");
let box8 = document.querySelector(".box8");
let box9 = document.querySelector(".box9");
let box10 = document.querySelector(".box10");
let box11 = document.querySelector(".box11");
let box12 = document.querySelector(".box12");
let box13 = document.querySelector(".box13");
let box14 = document.querySelector(".box14");
let box15 = document.querySelector(".box15");
let box16 = document.querySelector(".box16");


let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");
let item4 = document.querySelector(".item4");
let item5 = document.querySelector(".item5");
let item6 = document.querySelector(".item6");
let item7 = document.querySelector(".item7");
let item8 = document.querySelector(".item8");
let item9 = document.querySelector(".item9");
let item10 = document.querySelector(".item10");
let item11 = document.querySelector(".item11");
let item12 = document.querySelector(".item12");
let item13 = document.querySelector(".item13");
let item14 = document.querySelector(".item14");
let item15 = document.querySelector(".item15");
let item16 = document.querySelector(".item16");

let sonuch1 = document.querySelector(".sonuch1");



window.addEventListener("load", addimage);

let myArr = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16]
let newArr = [];
let BoxArr = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16]

function addimage() {

    

    
    for (let i = 0; i < 1000 ; i++) {
        let choose = myArr[Math.floor(Math.random()*myArr.length)];
        if(!newArr.includes(choose)) {
            newArr.push(choose)
        }
    }
   
    

    console.log()



    let image1 = document.createElement("img");
    image1.src = "./backround-image-pokemon/image1.png"
    image1.classList.add("pokemon1");
    image1.classList.add("pok1")
    newArr[0].appendChild(image1)
    
    let image2 = document.createElement("img");
    image2.src = "./backround-image-pokemon/image2.png";
    image2.classList.add("pokemon1");
    image2.classList.add("pok2")
    newArr[1].appendChild(image2)
    
    let image3 = document.createElement("img");
    image3.src = "./backround-image-pokemon/image3.png";
    image3.classList.add("pokemon1");
    image3.classList.add("pok3")
    newArr[2].appendChild(image3)

    let image4 = document.createElement("img");
    image4.src = "./backround-image-pokemon/image4.png";
    image4.classList.add("pokemon1");
    image4.classList.add("pok4")
    newArr[3].appendChild(image4)

    let image5 = document.createElement("img");
    image5.src = "./backround-image-pokemon/image5.png";
    image5.classList.add("pokemon1");
    image5.classList.add("pok5")
    newArr[4].appendChild(image5)

    let image6 = document.createElement("img");
    image6.src = "./backround-image-pokemon/image6.png";
    image6.classList.add("pokemon1");
    image6.classList.add("pok6")
    newArr[5].appendChild(image6)
   
    let image7 = document.createElement("img");
    image7.src = "./backround-image-pokemon/image7.png";
    image7.classList.add("pokemon1");
    image7.classList.add("pok7")
    newArr[6].appendChild(image7)

    let image8 = document.createElement("img");
    image8.src = "./backround-image-pokemon/image8.png";
    image8.classList.add("pokemon1");
    image8.classList.add("pok8")
    newArr[7].appendChild(image8)


    let image9 = document.createElement("img");
    image9.src = "./backround-image-pokemon/image1.png"
    image9.classList.add("pokemon1");
    image9.classList.add("pok1")
    newArr[8].appendChild(image9)
    
    let image10 = document.createElement("img");
    image10.src = "./backround-image-pokemon/image2.png";
    image10.classList.add("pokemon1");
    image10.classList.add("pok2")
    newArr[9].appendChild(image10)
    
    let image11 = document.createElement("img");
    image11.src = "./backround-image-pokemon/image3.png";
    image11.classList.add("pokemon1");
    image11.classList.add("pok3")
    newArr[10].appendChild(image11)

    let image12 = document.createElement("img");
    image12.src = "./backround-image-pokemon/image4.png";
    image12.classList.add("pokemon1");
    image12.classList.add("pok4")
    newArr[11].appendChild(image12)

    let image13 = document.createElement("img");
    image13.src = "./backround-image-pokemon/image5.png";
    image13.classList.add("pokemon1");
    image13.classList.add("pok5")
    newArr[12].appendChild(image13)

    let image14 = document.createElement("img");
    image14.src = "./backround-image-pokemon/image6.png";
    image14.classList.add("pokemon1");
    image14.classList.add("pok6")
    newArr[13].appendChild(image14)
   
    let image15 = document.createElement("img");
    image15.src = "./backround-image-pokemon/image7.png";
    image15.classList.add("pokemon1");
    image15.classList.add("pok7")
    newArr[14].appendChild(image15)

    let image16 = document.createElement("img");
    image16.src = "./backround-image-pokemon/image8.png";
    image16.classList.add("pokemon1");
    image16.classList.add("pok8")
    newArr[15].appendChild(image16)

    
}

let counter = 0;
let pokarray = []

box1.addEventListener("click", open1);
    
function open1() {
    if(pokarray.length < 2 ) {
        box1.classList.add("opening");
        
    }
    
    if(pokarray.length < 2){
       let firstClass = item1.firstChild.classList[1];
       pokarray.push(firstClass)
       
    }
    
    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }

       
      
}
        




box2.addEventListener("click", open2);

function open2() {
    if(pokarray.length < 2 ) {
        box2.classList.add("opening");
        
    }

    if(pokarray.length < 2){
        let firstClass = item2.firstChild.classList[1];
        pokarray.push(firstClass)
        
    } 

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening")
                    console.log(pokarray)
                    pokarray = [];
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }

    
       
}


box3.addEventListener("click", open3);

function open3() {
    if(pokarray.length < 2 ) {
        box3.classList.add("opening");
        
    }

    if(pokarray.length < 2){
        let firstClass = item3.firstChild.classList[1];
        pokarray.push(firstClass)
        
    } 

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = [];
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }

    
}

box4.addEventListener("click", open4);

function open4() {
    if(pokarray.length < 2 ) {
        box4.classList.add("opening");
        
    }

    if(pokarray.length < 2){
        let firstClass = item4.firstChild.classList[1];
        pokarray.push(firstClass)
        
    } 

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
       
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }
    
}

box5.addEventListener("click", open5);

function open5() {
    if(pokarray.length < 2 ) {
        box5.classList.add("opening");
        
    }

    if(pokarray.length < 2){
        let firstClass = item5.firstChild.classList[1];
        pokarray.push(firstClass)
        
    } 

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }

    
}


box6.addEventListener("click", open6);

function open6() {
    if(pokarray.length < 2 ) {
        box6.classList.add("opening");
        
    }

    if(pokarray.length < 2){
        let firstClass = item6.firstChild.classList[1];
        pokarray.push(firstClass)
        
    } 
    
    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }
    
}


box7.addEventListener("click", open7);

function open7() {
    if(pokarray.length < 2 ) {
        box7.classList.add("opening");
        
    }

    if(pokarray.length < 2){
        let firstClass = item7.firstChild.classList[1];
        pokarray.push(firstClass)
        
    }
    
    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }

    
}

box8.addEventListener("click", open8);

function open8() {
    if(pokarray.length < 2 ) {
        box8.classList.add("opening");
        
    }

    if(pokarray.length < 2){
        let firstClass = item8.firstChild.classList[1];
        pokarray.push(firstClass)
        
    } 

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray);
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray);
                 pokarray = [];
            }
        }
    }
    
}


box9.addEventListener("click", open9);

function open9() {
    if(pokarray.length < 2 ) {
        box9.classList.add("opening");
        
    }

    if(pokarray.length < 2){
        let firstClass = item9.firstChild.classList[1];
        pokarray.push(firstClass)
        
    } 

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }
    
}


box10.addEventListener("click", open10);

function open10() {
    if(pokarray.length < 2 ) {
        box10.classList.add("opening");
        
    }

    if(pokarray.length < 2){
        let firstClass = item10.firstChild.classList[1];
        pokarray.push(firstClass)
        
    } 

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }
    
}

box11.addEventListener("click", open11);

function open11() {
    if(pokarray.length < 2 ) {
        box11.classList.add("opening");
        
    }

    if(pokarray.length < 2){
        let firstClass = item11.firstChild.classList[1];
        pokarray.push(firstClass)
        
    }

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }
    
}

box12.addEventListener("click", open12);

function open12() {
    if(pokarray.length < 2 ) {
        box12.classList.add("opening");
        
    }

    if(pokarray.length < 2){
        let firstClass = item12.firstChild.classList[1];
        pokarray.push(firstClass)
        
    } 

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }
    
}

box13.addEventListener("click", open13);

function open13() {
    if(pokarray.length < 2 ) {
        box13.classList.add("opening");
        
    }

    if(pokarray.length < 2){
        let firstClass = item13.firstChild.classList[1];
        pokarray.push(firstClass)
        
    } 

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }

    
}

box14.addEventListener("click", open14);

function open14() {
    if(pokarray.length < 2 ) {
        box14.classList.add("opening");
        
    }
    let firstClass = item14.firstChild.classList[1];
    if(pokarray.length < 2){
        
        pokarray.push(firstClass)
        
    }

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }
    
    
}

box15.addEventListener("click", open15);

function open15() {
    if(pokarray.length < 2 ) {
        box15.classList.add("opening");
        
    }
    let firstClass = item15.firstChild.classList[1];
    if(pokarray.length < 2){
        pokarray.push(firstClass)
        
    } 

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                 pokarray = [];
            }
        }
    }
    
    
}

box16.addEventListener("click", open16);

function open16() {
    if(pokarray.length < 2 ) {
        box16.classList.add("opening");
        
    }
    let firstClass = item16.firstChild.classList[1];
    if(pokarray.length < 2){
        pokarray.push(firstClass)
        
    }

    if(pokarray.length == 2 && pokarray[0] != pokarray[1]) {
        setTimeout(() => {
            for(let i = 0; i < BoxArr.length; i++) {
                if(BoxArr[i].classList[2] == "opening") {
                    BoxArr[i].classList.remove("opening");
                    console.log(pokarray)
                    pokarray = []; 
                    
                }
            }
        },1500);
    }else if(pokarray[0] == pokarray[1]) {
        
        console.log(pokarray)
        
        for (let i = 0; i < BoxArr.length; i++) {
            if(BoxArr[i].classList[2] == "opening") {
                BoxArr[i].classList.add("nothing");
                console.log(pokarray)
                pokarray = [];
            }
        }
        
    }

    
    
}