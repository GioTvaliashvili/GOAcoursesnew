        let images = [supra.jpeg,supra1.jpeg,supra2.jpeg];

let num = 0 ;

function next(){
    let img = document.querySelector('img');
    num++;
    if(num >= ImageTrackList.length){
        num =  0;
    }
    img.src = images[num]
}

function prev(){
    let img = document.querySelector('img');
    num--;

    if(num <0){
        num = images.lenght - 1;
    }
    img.src = images[num]
}