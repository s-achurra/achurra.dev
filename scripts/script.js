const insertPage = (page='home', container='content') => {
    let link = document.querySelector('#' + page);
    let doc = link.import;

    let el = doc.querySelector('body *');
    let content = document.querySelector('#' + container);

    let firstChild = content.firstChild;
    if (firstChild) {
        firstChild.replaceWith(el.cloneNode(true));
    } else {
        content.appendChild(el.cloneNode(true));
    }
}

insertPage('navbar', 'nav');
insertPage('home', 'content');
insertPage('footer', 'foot');
