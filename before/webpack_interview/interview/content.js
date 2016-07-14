module.exports = "";
var index = 0;
var imgs = document.getElementsByTagName('img');
  var prev = document.getElementById('prev');
      prev.addEventListener('click', function(){
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
      })
      var next = document.getElementById('next');
          next.addEventListener('click', function(){
              var imgs = document.getElementsByTagName('img');
              if (index ==0) {
                console.log("next성공");
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
          })
