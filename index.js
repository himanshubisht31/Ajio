function slideShow_1() {
    const arr_1 = [
        "https://www.linkpicture.com/q/21072021-d-unisex-topcarousel-p2-wfh-starting499_3.webp",
        "https://www.linkpicture.com/q/21072021-d-unisex-topcarousel-p3-superdry-30to50_1.webp",
        "https://www.linkpicture.com/q/21072021-d-unisex-topcarousel-p4-home-upto80.webp",
        "https://www.linkpicture.com/q/21072021-d-unisex-topcarousel-p5-sportsshoes-under2299.jpg"
    ]

    if (localStorage.getItem('Ajio_slide_1') == null) localStorage.setItem('Ajio_slide_1', JSON.stringify(arr_1));

    var slider_1 = document.getElementById('slider_1');
    var image = document.createElement('img');

    var i = 0;
    setInterval(function () {
        i = i % JSON.parse(localStorage.getItem('Ajio_slide_1')).length;

        image.src = JSON.parse(localStorage.getItem('Ajio_slide_1'))[i];

        slider_1.append(image);
        i++;

    }, 2000)

}

slideShow_1();


function slideShow_2() {
    const arr_2 = [
        "https://www.linkpicture.com/q/15072021-d-unisex-secondcarousel-newseason-upto50.webp",
        "https://www.linkpicture.com/q/15072021-d-unisex-secondcarousel-ajiogold-upto70.webp",
        "https://www.linkpicture.com/q/15072021-d-unisex-secondcarousel-brands-min30.jpg",
        "https://www.linkpicture.com/q/15072021-d-unisex-secondcarousel-brands-clearance-flat65.webp"
    ]

    if (localStorage.getItem('Ajio_slide_2') == null) localStorage.setItem('Ajio_slide_2', JSON.stringify(arr_2));

    var slider_2 = document.getElementById('slider_2');
    var image = document.createElement('img');

    var i = 0;
    setInterval(function () {
        i = i % JSON.parse(localStorage.getItem('Ajio_slide_2')).length;

        image.src = JSON.parse(localStorage.getItem('Ajio_slide_2'))[i];

        slider_2.append(image);
        i++;

    }, 2000)

}

slideShow_2();


// Slider 3 with button

const arr_3 = [
    'https://assets.ajio.com/medias/sys_master/images/images/h50/h45/33893047336990/15072021-d-unisex-brands-stevemadden-30to60.jpg',
    "https://assets.ajio.com/medias/sys_master/images/images/he1/hd1/33893047271454/15072021-d-unisex-brands-skechers-upto40.jpg",
    "https://assets.ajio.com/medias/sys_master/images/images/h1c/hbc/33893047238686/15072021-d-unisex-brands-newbalance-upto50.jpg",
    "https://assets.ajio.com/medias/sys_master/images/images/hde/h00/33893047533598/01072021-d-unisex-brands-gap-flat50.jpg",
    "https://assets.ajio.com/medias/sys_master/images/images/he6/h94/33893047664670/15072021-d-unisex-brands-tommyhilfiger-30to50.jpg"
]

if (localStorage.getItem('Ajio_slide_3') == null) localStorage.setItem('Ajio_slide_3', JSON.stringify(arr_3));


function buttonSlider() {

    var slider_3 = document.getElementById('slider_3');
    slider_3.innerHTML = null;
    var arr = JSON.parse(localStorage.getItem('Ajio_slide_3'));
    
    
    // i = i % JSON.parse(localStorage.getItem('Ajio_slide_3')).length;
    
    for (i = 0; i < arr.length-1; i++) {
        var div = document.createElement('div');
        var image = document.createElement('img');
        image.src = arr[i];
        div.append(image);
        slider_3.append(div);
    }      

}

buttonSlider();



// Left Button

function shiftLeft() {
    
    btn1 = document.getElementById('left');
    btn2 = document.getElementById('right');
    btn1.style.display = 'none';
    btn2.style.display = 'block';

    var slider_3 = document.getElementById('slider_3');
    slider_3.innerHTML = null;
    var arr = JSON.parse(localStorage.getItem('Ajio_slide_3'));

    for (i = 0; i < arr.length-1 ; i++) {
        var div = document.createElement('div');
        var image = document.createElement('img');
        image.src = arr[i];
        div.append(image);
        slider_3.append(div);
    }


}
function shiftRight() {
    
    btn1 = document.getElementById('left');
    btn2 = document.getElementById('right');
    btn1.style.display = 'block';
    btn2.style.display = 'none';
    
    var slider_3 = document.getElementById('slider_3');
    slider_3.innerHTML = null;
    var arr = JSON.parse(localStorage.getItem('Ajio_slide_3'));

    for (i = 1; i < arr.length ; i++) {
        var div = document.createElement('div');
        var image = document.createElement('img');
        image.src = arr[i];
        div.append(image);
        slider_3.append(div);
    }


}