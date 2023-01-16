const carouselImages = document.querySelectorAll('.imageInCarousel');

function getCurrentIndex()
{
    for(let i = 0; i < carouselImages.length; ++i)
    {
        if(!carouselImages[i].classList.contains('hiddenImage'))
        {
            return i;
        }
    }
    return -1;
}

function moveLeft()
{
    
    let currentPosition = getCurrentIndex();
    if(currentPosition == -1)
    {
        console.log("Error finding Current Index");
    }
    carouselImages[currentPosition].classList.add('hiddenImage');
        --currentPosition;
        if(currentPosition < 0)
        {
            currentPosition = carouselImages.length - 1;
        }
    carouselImages[currentPosition].classList.remove('hiddenImage');
}

function moveRight()
{
    let currentPosition = getCurrentIndex();
    if(currentPosition == -1)
    {
        console.log("Error finding Current Index");
    }
    carouselImages[currentPosition].classList.add('hiddenImage');
        ++currentPosition;
        if(currentPosition >= carouselImages.length)
        {
            currentPosition = 0;
        }
    carouselImages[currentPosition].classList.remove('hiddenImage');
}

