var pictures = document.querySelectorAll('.pictures');
var template = document.querySelector('#picture-template').content.querySelector('.picture');

massPushElement(pictureMass,pictureElemensCount);
blockMass_push(pictureElemensCount);

//отрисовка блоков с картинками на главной
for(let i = 0; i < pictureElemensCount; i++){
    //копируем шаблон с содержимым
    var element = template.cloneNode(true);
    element.children[0].src = blockMass[i].url;
    pictures[0].appendChild(element);
}

var gallery_overlay = document.querySelector('.gallery-overlay');
gallery_overlay.classList.remove('hidden');
var img = gallery_overlay.querySelector('.gallery-overlay-image');
img.src = blockMass[0].url;


var likes = gallery_overlay.querySelector('.likes-count');
likes.textContent = blockMass[0].likes;

var comments = gallery_overlay.querySelector('.comments-count');
comments.textContent = blockMass[0].comments.length;

var social__comments = document.querySelectorAll('.social__comments ul');
template = document.querySelector('#comments-template').content.querySelector('.social__comment');



//для 0-го блока заполнение данными всплывающего окна
for(let i = 0; i < blockMass[0].comments.length; i++){
    element = template.cloneNode(true);
    element.children[1].textContent = blockMass[0].comments[i];
    social__comments[0].appendChild(element);
}


//задание стилей комментариям под кортинкой
social__comments[0].style.cssText = "padding-right: 20px;";
massPushElement(pictureMass,pictureElemensCount);

var img_width = img.offsetWidth;
var li = document.querySelectorAll('.social__comments li');
var img_element = document.querySelectorAll('.social__picture');
var p_elements = document.querySelectorAll('.social__text');

for(let i = 0; i < p_elements.length; i++){
    li[i].style.cssText =
        "display: flex;" +
        "max-width: "+ (img_width-60) +"px;" +
        "min-width: 350px;";

    img_element[i].style.cssText =
        "margin: 10px;" +
        "font-size: 0;" +
        "border-radius: 50%;";
    img_element[i].src = "img/" + getRandomImgUrl(window.pictureMass)+ ".jpg";

    p_elements[i].style.cssText =
        "word-wrap: break-word; " +
        "max-width: "+ (img_width-60) +"px;" +
        " min-width: 350px;" +
        "color: #000;" +
        "text-align: left;";
}


