console.log('TEST RUN');
window.onload = function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');
    const logo = document.querySelector('.navbar-brand');
    menuToggle.onclick = () => {
        console.log('TEST CLICK');
            navigation.classList.toggle('open');
            logo.classList.toggle('open');
    }

    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
        item.onclick = () => {
            console.log('TEST CLICK 2');
            listItems.forEach(item =>
                item.classList.remove('active'));
            item.classList.add('active');
        }
    })
}











function expandMenu() {
    var margin = document.querySelector(".navbar");
    console.log(margin.getBoundingClientRect());
    document.querySelector(".navbar").style.marginLeft = "180px"
}
function minimiseMenu() {
    document.querySelector(".navbar").style.marginLeft = "50px"
}