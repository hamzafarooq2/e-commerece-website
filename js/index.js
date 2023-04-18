$('#mainCarousel').carousel({
    interval: 9000
});

let carousel=document.querySelectorAll('carousel1');
for(let i=0;i<carousel.length;i++){
    carousel[i].addEventListener('mouseout', function(e){carousel[i].pause()})
}