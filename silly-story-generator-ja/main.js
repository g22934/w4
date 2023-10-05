const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
//文字は''で囲む.最後は;つける
const storyText = '外の気温は94度だった。:insertx:は散歩にでかけた。:inserty:は突然恐怖の表情をした。:insertz:やほやほやっほー族伝統の踊りをした。 — :insertx:体重が300kgになったけど別に気にしない。
const insertX = ['桃太郎', '野比のび太', 'ひとみ'];
const insertY = ['原宿', 'マスカラ', '渋谷'];
const insertZ = ['パンダ', 'かぐや姫', 'アンミカ'];

randomize.addEventListener('click', result);

function result() {
//newStory という変数を作り、storyText の値を newStory 変数に格納します。
  let newStory =storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);
  
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("us").checked) {
    //const weight = Math.round(300);
    //const temperature =  Math.round(94);
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
