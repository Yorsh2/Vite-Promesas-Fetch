

let img1 = document.getElementById("IdImg1");
let img2 = document.getElementById("IdImg2");

fetch('src/images/mazinger_1.png') 
    .then(resp => resp.blob()) 
    .then(image => { 
        console.log(image); 
        let imgPath = URL.createObjectURL(image);
        img1.src = imgPath;
    }); 
    
fetch('src/images/mazinger_2.png') 
    .then(resp => { 
        return resp.blob(); 
    }) 
    .then(image => { 
        console.log(image); 
        let imgPath = URL.createObjectURL(image);
        img2.src = imgPath;
    });
 
    
