    function printPictureBoxes() {
        var pictures = document.querySelectorAll('.pictures');
        var template = document.querySelector('#picture-template').content.querySelector('.picture');

        //отрисовка блоков с картинками на главной
        for (let i = 0; i < pictureElemensCount; i++) {
            //копируем шаблон с содержимым
            var element = template.cloneNode(true);
            element.children[0].src = blockMass[i].url;
            pictures[0].appendChild(element);
        }

        var pictureBlock = document.querySelectorAll('.picture');
        pictureBlock.forEach(function (elem) {
            elem.addEventListener('click',function (evt) {
                evt.preventDefault();
                gallery_overlay_write (elem);
            })
        })

    }

    //заполнить данными всплывающее окно
    function gallery_overlay_write (elem) {
        var gallery_overlay = document.querySelector('.gallery-overlay');
        gallery_overlay.classList.remove('hidden');

        //находим в массиве элемент с этим url
        var aSrc = elem.querySelector('img').src;
        aSrc = aSrc.substring(aSrc.lastIndexOf("/")+1);

        for(let i = 0; i < blockMass.length; i++) {
            //обрезаем img/ из записанного пути block.url
            var subUrl = blockMass[i].url.substring(4);
            if(subUrl == aSrc) {
                console.log("find!!!!");
                var currentBlock = i;
                break;
            }
        }

    //для данного блока заполнение данными всплывающего окна
        var img = gallery_overlay.querySelector('.gallery-overlay-image');
        img.src = blockMass[currentBlock].url;

        var likes = gallery_overlay.querySelector('.likes-count');
        likes.textContent = blockMass[currentBlock].likes;

        var comments = gallery_overlay.querySelector('.comments-count');
        comments.textContent = blockMass[currentBlock].comments.length;

        var social__comments = document.querySelectorAll('.social__comments ul');
        var template = document.querySelector('#comments-template').content.querySelector('.social__comment');

        $(social__comments).empty();

        for (let i = 0; i < blockMass[currentBlock].comments.length; i++) {
            element = template.cloneNode(true);
            element.children[1].textContent = blockMass[currentBlock].comments[i];
            social__comments[0].appendChild(element);
        }

        //задание стилей комментариям под кортинкой
        social__comments[0].style.cssText = "padding-right: 20px;";
        massPushElement(pictureMass, pictureElemensCount);

        img.onload = function() {
            var img_width = img.offsetWidth;
            var li = document.querySelectorAll('.social__comments li');
            var img_element = document.querySelectorAll('.social__picture');
            var p_elements = document.querySelectorAll('.social__text');

            for (let i = 0; i < p_elements.length; i++) {
                li[i].style.cssText = "max-width: " + (img_width - 60) + "px;";
                img_element[i].src = "img/" + getRandomImgUrl(window.pictureMass) + ".jpg";
                p_elements[i].style.cssText = "max-width: " + (img_width - 60) + "px;"
            }
        };
    }


    /* вызов ф-ий*/
    massPushElement(pictureMass, pictureElemensCount);
    blockMass_push(pictureElemensCount);
    printPictureBoxes();




