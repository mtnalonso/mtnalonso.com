
i18next.use(i18nextXHRBackend).use(i18nextBrowserLanguageDetector).init({
    fallbackLng: 'en',
    //debug: true,
    load: 'languageOnly',
    backend: {
        loadPath: '/locales/{{lng}}.json',
        crossDomain: false
    }
}, function(err, t) {
    updateContent();
});

function updateContent() {
    var trnLabels = document.querySelectorAll('.trn');
    for (var i = 0; i < trnLabels.length; i+=1) {
        var trnLabel = trnLabels[i];
        var trnLabelInfo = trnLabel.className.split(' ');
        var trnLabelKey = trnLabelInfo[1];
        var trnLabelStr = i18next.t(trnLabelKey);

        if (trnLabelInfo.includes('up')) {
            trnLabelStr = trnLabelStr.charAt(0).toUpperCase() + trnLabelStr.slice(1);
        }

        trnLabel.innerHTML = trnLabelStr;
    }
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


