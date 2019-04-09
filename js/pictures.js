
var blockMass = [];
//кол-во фотографий
var pictureElemensCount = 26;
var pictureMass = [];

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

//заполнение массива числами от 1 .. elementCount
function massPushElement(mass, elementCount) {
    for(var i = 1; i<= elementCount; i++){
        mass.push(i);
    }
}

//получение рандомного элемента из массива c удалением
function getRandomImgUrl(mass) {
    var rand = mass[Math.floor(Math.random() * mass.length)];
    mass.splice(mass.indexOf(rand),1);
    return rand;
}

//получение рандомного кол-ва лайков
function getRandomLikes(min, max) {
    return rand = Math.floor(Math.random() * (max - min + 1)+min);
}

//получение рандомного(-ых) комментариев без удаления
function commentsGenerate(mass){
    //кол-во комментариев(1 или 2)
    var commentsCount = Math.floor(Math.random()*2+1);
    return generator(commentsCount,mass);
}

function generator(Count, mass) {
    var generatedMass=[];
    for(var i = 0; i < Count; i++){
        var rand = Math.floor(Math.random()*(mass.length));
        generatedMass.push(mass[rand]);
    }
    return generatedMass;
}

//создание массива блоков
function blockMass_push(elementCount) {
    for(var i = 0; i < elementCount; i++){
        var block = [];
        block.url = "img/" + getRandomImgUrl(window.pictureMass)+ ".jpg";
        block.likes = getRandomLikes(15, 200);
        block.decksiption = generator(1,window.descriptionMass);
        block.comments = commentsGenerate(window.commentsMass);

        window.blockMass.push(block);
    }
}
