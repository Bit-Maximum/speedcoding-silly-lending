const modalControler = ({modal, btnOpen, btnClose, time = 300}) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);

    modalElem.style.cssText = `
        display: block;
        visibility: hidden;
        opacity: 0;
        transition: opacity ${time}ms ease-in-out;
    `;

    const closeModal = event => {
        const target = event.target;
        if (target === modalElem ||
            (btnClose && target.closest(btnClose)) ||
            event.code === "Escape") {
            modalElem.style.opacity = "0";
            setTimeout(() => {
                modalElem.style.visibility = "hidden";
            }, time);

            window.removeEventListener('keydown', closeModal);
        }
    };

    const openModal = () => {
        modalElem.style.visibility = "visible";
        modalElem.style.opacity = "1";
        window.addEventListener('keydown', closeModal)
    };

    buttonElems.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalElem.addEventListener('click', closeModal);
}

modalControler({
    modal: '.modal1',
    btnOpen: '.modal_btn1',
    btnClose: '.modal__close'
});

modalControler({
    modal: '.modal2',
    btnOpen: '.modal_btn2',
    btnClose: '.modal__close'
});

modalControler({
    modal: '.modal3',
    btnOpen: '.modal_btn3',
    btnClose: '.modal__close'
});