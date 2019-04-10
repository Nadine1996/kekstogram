    /*отработка кнопки закрытия увеличенной фотографии*/
    var close_button = document.querySelector(".gallery-overlay-close");
    var gallery_overlay = document.querySelector('.gallery-overlay');

    close_button.addEventListener('click',function (evt) {
        evt.preventDefault();
        gallery_overlay.classList.add('hidden');
    });

    /*при добавлениии картинки - открытие окна редактирования*/
    var upload_file = document.querySelector("#upload-file");
    var upload_overlay = document.querySelector(".upload-overlay");

    upload_file.addEventListener('change',function (evt) {
        evt.preventDefault();
        upload_overlay.classList.remove('hidden');
    });

    /*отработка кнопки закрытия окна редактирования*/
    close_button = document.querySelector(".upload-form-cancel");

    close_button.addEventListener('click',function (evt) {
        evt.preventDefault();
        upload_overlay.classList.add('hidden');
        upload_file.value = null;
    });

    /*проверка валидности отправляемых данных формы upload-form*/
    var form =  document.querySelector(".upload-form");
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        var hashtagsDOM = document.querySelector(".upload-form-hashtags");
        var hashtagsSplit = hashtagsDOM.value.split("#");
        console.log(hashtagsSplit);
        var myRe = /\s/;
        hashtagsSplit.forEach(function (elem) {
            if(myRe.exec(elem)){
                console.log("has");
                /*TO DO: сделать валидацию */
            }
        })

    });