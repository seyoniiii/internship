var index = 0;
var imgs = document.getElementsByTagName('img');

function Prev() {
    const prev_btn = document.getElementById('prev');
    prev_btn.addEventListener('click', () => {
        console.log('prev');
        // this.handleClick(); // lexical `this`
        if (index ==0) {
                   alert('No Picture');
                   console.log("성공1");
               }
               else if (index ==1) {
                   index--;
                   imgs[0].classList.add('hidden');
                   imgs[1].classList.add('hidden');
                   imgs[3].classList.add('hidden');
               }
               else if (index ==2) {
                   index--;
                   imgs[0].classList.add('hidden');
                   imgs[1].classList.add('hidden');
                   imgs[2].classList.add('hidden');
               }
               else if (index ==3) {
                   index--;
                   imgs[0].classList.add('hidden');
                   imgs[1].classList.add('hidden');
                   imgs[3].classList.add('hidden');

               }
               imgs[index].classList.remove('hidden');
    });
}

function Next() {
    const next_btn = document.getElementById('next');
    next_btn.addEventListener('click', () => {
        console.log('next');
        // this.handleClick(); // lexical `this`
        if (index ==0) {
                    index++;
                    imgs[0].classList.add('hidden');
                    imgs[2].classList.add('hidden');
                    imgs[3].classList.add('hidden');
                }
                else if (index ==1) {
                    index++;
                    imgs[0].classList.add('hidden');
                    imgs[1].classList.add('hidden');
                    imgs[3].classList.add('hidden');
                }
                else if (index ==2) {
                    index++;
                    imgs[0].classList.add('hidden');
                    imgs[1].classList.add('hidden');
                    imgs[2].classList.add('hidden');
                }
                else if (index ==3) {
                    alert('No Picture');
                }
               imgs[index].classList.remove('hidden');
    });
}

export {Prev, Next};
