const slideImages = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
]

let imgIndex = 0;

const img = document.getElementById('img-slide')

setInterval(() => {
    if(imgIndex === slideImages.length){
        imgIndex = 0
    }
    const imgLink = slideImages[imgIndex]
    img.setAttribute('src', imgLink)
    // console.log('Now it working')
    imgIndex++;
}, 1000)