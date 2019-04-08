var pictures = document.querySelectorAll('.pictures');

var template = document.querySelector('#picture-template').content.querySelector('.picture');


blockMass_push(pictureElemensCount);

for( var i = 0; i < pictureElemensCount; i++){
    //копируем шаблон с содержимым
    var element = template.cloneNode(true);
    element.children[0].src = blockMass[i].url;
    pictures[0].appendChild(element);
}
