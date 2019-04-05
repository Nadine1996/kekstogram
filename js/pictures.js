
var blockMass = [];
var commentsMass = [
    'Всё отлично! ',
    'В целом всё неплохо. Но не всё. ',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. ',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. ',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?! '
];

var descriptionMass = [
  'Тестим новую камеру! ',
  'Затусили с друзьями на море ',
  'Как же круто тут кормят ',
  'Отдыхаем... ',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами...... ',
  'Вот это тачка! '
];
//кол-во фотографий
var pictureElemensCount = 25;

var pictureMass = [];
massPushElement(pictureMass,pictureElemensCount);

//заполнение массива числами от 1 .. elementCount
function massPushElement(mass, elementCount) {
    for(i = 0; i< elementCount; i++){
        mass.push(i);
    }
}

//получение рандомного элемента из массива c удалением
function getRandomImgUrl(mass) {
    var rand = mass[Math.floor(Math.random() * mass.length)];
    mass.splice(mass.indexOf(rand),1);
    console.log(mass,rand);
    return rand;
}

//получение рандомного кол-ва лайков
function getRandomLikes(min, max) {
    return rand = Math.floor(Math.random() * (max - min + 1)+min);
}

//получение рандомного(-ых) комментариев без удаления
function commentsGenerate(commentsMass){
    var comments=[];
    var commentsCount = Math.floor(Math.random()*2+1);

    for(i = 0; i < commentsCount; i++){
        var rand = Math.floor(Math.random()*(commentsMass.length+1));
        comments.push(commentsMass[rand]);
    }
    return comments;
}



//создание массива блоков
function blockMass_push(elementCount) {
    for(i = 0; i < elementCount; i++){
        var block = {};
        block.url = "../photos" + getRandomImgUrl(pictureMass);
        block.likes = getRandomLikes(15, 200);
        block.comments = 'trtrtrtr';
        block.decksiption = 'rerggfd';
        blockMass.push(block);
    }

    for(i = 0; i < blockMass.length; i++){
        console.log(blockMass[i]);
    }
}
