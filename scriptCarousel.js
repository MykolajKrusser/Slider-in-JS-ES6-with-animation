let images = [ // an array with links and pictures description, it can be written in separate json file and use ajax request
    {
        "url": "img/1.jpg",
        "text": "Beautiful pic"
    },
    {
        "url": "img/2.jpg",
        "text": "nice place"
    },
    {
        "url": "img/3.jpg",
        "text": "Wow"
    },
    {
        "url": "img/4.jpg",
        "text": "I like it!!"
    },
    {
        "url": "img/5.jpg",
        "text": "Love picture!!"
    }
];
let num = 0; // the number of pictures position in array
let nextBtn = document.getElementById("next"); //next button
let prevBtn = document.getElementById("prev"); //prev button
let slideText = document.getElementById("slideText"); //slides text block
let slideNum = document.getElementById("slideNum"); // text with number of pictures
let dotsParent = document.getElementById("dots"); //block which contains dots elements
let dotsActive = document.getElementsByClassName("dot"); //dot element
let slide = document.getElementById("img"); //pictures element
let timer = 1000; //time for setInterval method to control time animation and removing style classes, must be equal to animation time in css
nextBtn.onclick = function next() { //function for "next" button to change links in img element
    num++;
    if(num >= images.length){ //condition to change the links in img element
        num = 0;
    }
    slide.src = images[num].url; //change link
    let picNumber = num + 1;//picture number

    slideText.innerHTML = images[num].text; //change and display picture text
    slideNum.innerHTML =  picNumber + "/" + images.length;//display picture number

    for (let i = 0; i < dotsActive.length; i++) {    //loop for change dots style on empty class
        dotsActive[i].className = dotsActive[i].className.replace(" active", "");
    }
    dotsActive[num].className += " active"; // insert style class to active dots

    fade() //call animation function
};

prevBtn.onclick = function prev() { //same function for prev button to change links in img element
    num--;
    if(num < 0){
        num = images.length - 1;
    }
    slide.src = images[num].url;
    let picNumber = num + 1;

    slideText.innerHTML = images[num].text;
    slideNum.innerHTML =  picNumber + "/" + images.length;

    for (let i = 0; i < dotsActive.length; i++) {
        dotsActive[i].className = dotsActive[i].className.replace(" active", "");
    }
    dotsActive[num].className += " active";

    fade()
};

function dots() { // function count quantity of pictures and create equal number of dots
    for(let i = 0; i < images.length; i++){ //loop for create new span element
        let dotsChild = document.createElement("span");
        dotsChild.className = "dot"; //add style class
        dotsParent.appendChild(dotsChild); //add new element to parent div
    }
}
dots(); //start to create dots

dotsParent.onclick = function (e) { //function change picture link by click on dots
    let target = e.target; // target clicked element
    for(let i = 0; i < dotsParent.children.length; i++) { //fore all dots
        if(dotsParent.children[i] === target){ //which was clicked
            slide.src = images[i].url;//change picture link, number text and describe text
            let picNumber = i + 1;
            slideText.innerHTML = images[i].text;
            slideNum.innerHTML =  picNumber + "/" + images.length;
            fade() //use animation function
        }
    }
};

function fade() { //animation function to manage styles classes
    slide.classList.add("fade"); //to picture add animation class
    let asynchronously = setInterval(function () { //asynchronously remove styles and stop animation
        clearInterval(asynchronously);
        slide.classList.remove("fade");
    },timer);
}