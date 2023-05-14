
// Реализуйте асинхронную загрузку 10-и изображений и выведите их в DOM в
// соответствующем порядке. Если при загрузке каких-то изображений произошла
// ошибка, то на месте этой картинки выведите сообщение об ошибке.


function loadImage(url) {
    return new Promise(function (resolve, reject) {
        let image = new Image()
        image.src = url
        image.onload = () => resolve(image)
        image.onerror = () => reject(new Error("Cannot load image" + url))
    })
}

images = ['image/image1.png', 'image/image2.png', 'image/image3.png',
    'image/image4.png', 'image/image5.png', 'image/image6.png',
    'image/image7.png', 'image/image8.png']


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