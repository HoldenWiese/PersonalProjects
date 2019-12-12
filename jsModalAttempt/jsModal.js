// function customAlert() {
//     let customAlertDiv = document.createElement('div');
//     customAlertDiv.setAttribute('id', 'customAlertDiv');
//     customAlertDiv.
//     customAlertDiv;
//     console.log("that should have worked.");
// }



function createAlert(message) {
    let modalDiv = document.createElement('div');
    modalDiv.setAttribute('id', 'modalDiv');
    
    let modalContentDiv = document.createElement('div');
    modalContentDiv.setAttribute('id', 'modalContentDiv');
    modalDiv.appendChild(modalContentDiv);

    let closeButtonSpan = document.createElement('span');
    closeButtonSpan.setAttribute('id', 'closeButtonSpan');
    modalContentDiv.appendChild(closeButtonSpan);

    let modalText = document.createElement('h1');
    modalText.setAttribute('id', 'modalText');
    modalContentDiv.appendChild(modalText);

    document.body.appendChild(modalDiv);

    function fillAlert(message) {
        document.getElementById('closeButtonSpan').innerHTML = "&times;"
        document.getElementById('modalText').innerHTML = message;
    }
    fillAlert(message);

}


var trigger = document.querySelector("#trigger");
var closeButton = document.querySelector("#closeButtonSpan");

function toggleModal() {
    var modal = document.querySelector("#modalDiv");
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal());
closeButton.addEventListener("click", toggleModal());
window.addEventListener("click", windowOnClick());

