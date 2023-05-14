function loadImage(url) {
    return new Promise(function (resolve, reject) {
        let image = new Image()
        image.src = url
        image.onload = () => resolve(image)
        image.onerror = () => reject(new Error("Cannot load image" + url))
    })
}

images = ['account.png', 'bell.png', 'docs.pn']


Promise.allSettled(images.map(loadImage)).then(
    images => {
        for (let image of images) {
            document.body.appendChild(image.value)
        }
    }
).catch(
    error => {
        let div = document.createElement('div');
        div.innerHTML = `${error}`;
        document.body.appendChild(div);
        
    }
)