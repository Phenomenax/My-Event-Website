const changeCardHeights = () => {
    let maxHeight = 0;

    const cards = Array.from(document.getElementsByClassName('card'));

    cards.forEach(card => card.style.height = 'auto');

    cards.forEach(card =>{
        if (card.offsetHeight > maxHeight) {
            maxHeight = card.offsetHeight
        }
    });

    cards.forEach(card => card.style.height = maxHeight + "px");
}

window.addEventListener('load', changeCardHeights);
window.addEventListener('resize', changeCardHeights);s