function showTab(tabId) {

    const contents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });



    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
}