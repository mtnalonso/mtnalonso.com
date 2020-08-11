
function updateContent() {

}

function expandContainer(containerButton) {
    var topContainer = containerButton.parentElement;
    var parentContainer = topContainer.parentElement;
    var bottomContainer = parentContainer.lastElementChild;

    if (bottomContainer.style.display === 'none') {
        bottomContainer.style.display = 'block';
        containerButton.textContent = '-';
    } else {
        bottomContainer.style.display = 'none';
        containerButton.textContent = '+';
    }
}


