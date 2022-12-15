console.log('this is a log message')

// get acess of all the required elements
const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

// click on yes btn will execute this
yesBtn.addEventListener('click', () => {
  question.innerHTML = 'ohh my god u said yes🤩🤗!!!great';
  noBtn.style.display = 'none';
  yesBtn.style.display = 'none';

  document.body.style.backgroundImage = "url('jerry-innocent.gif')"
  wrapper.style.opacity = '0.9';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundSize = 'cover';
})


// click in no btn will execute this
noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * 
            (wrapperRect.width - noBtnRect.width)) + 1;

  const j = Math.floor(Math.random() * 
            (wrapperRect.height - noBtnRect.height)) + 1;

  noBtn.style.left = i+'px';
  noBtn.style.top = j+'px';
  noBtn.style.transition = '0.7s';

  document.body.style.backgroundImage = "url('jerry-laugh.gif')"
  wrapper.style.opacity = '0.9';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundSize = 'cover';
})

noBtn.addEventListener('click', () => {
  const i = Math.floor(Math.random() * 
            (wrapperRect.width - noBtnRect.width)) + 1;

  const j = Math.floor(Math.random() * 
            (wrapperRect.height - noBtnRect.height)) + 1;

  noBtn.style.left = i+'px';
  noBtn.style.top = j+'px';
  noBtn.style.transition = '0.7s';

  // background-image: url(jerry-laugh.gif);
  document.style.backgroundImage = "url(jerry-laugh.gif)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundSize = 'cover';

})