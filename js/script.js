window.onload = function () {
    let block = document.querySelectorAll('.block');

    block.forEach(item => {
        item.addEventListener('click', el => {
            if (!el.target.classList.contains('active')) {
                block.forEach(block => block.classList.remove('active'));
                el.target.classList.add('active');
            }
        })
    })
};
