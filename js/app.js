(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        let c = document.getElementById('current-time');
        let dd = document.querySelector('.label');

      {
        const updateTime = ()=> {
            let d = new Date(),
            year = d.getFullYear(),
                hour = d.getHours(),
                minute = d.getMinutes(),
                month = formatMonth(d.getMonth()),
                date = d.getDate(),
                second = d.getSeconds(), 
                ampm = '';

                if (hour > 12) {
                    hour -= 12;
                }

                if (ampm ==='') {
                    ampm = 'PM';
                } else if (ampm !== '') {
                    ampm = 'AM';
                }

            if (second < 10) {
                second  = '0' + second;
            }

            let sepClass = '';

            if (d.getSeconds() % 2 === 1) sepClass = 'trans';

            let sepObj = {
                sep: ` 
                <span class="' + ${sepClass} + '">:</span>
                `
            }
            
            c.innerHTML = '0' + '' + hour + sepObj.sep + d.getMinutes() + sepObj.sep + d.getSeconds() + ' ' + ampm;
            dd.textContent = month + ' ' + date + ' ' + year;
        }
        setInterval(updateTime, 1000);
      }

        let formatMonth = (m)=> {
            m = parseInt(m, 10);

            if (this.m < 0) {
                m = 0;
            } else if (m > 11) {
                m = 11;
            }
            let monthNames = [
                'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
            ];
 
            return monthNames[m];  
        }
    });

}) ();

let texts = ['Food', 'Book', 'Sport', 'Game'],
typing = document.querySelector('.typing'),
count = 0,
index = 0,
currentText = '',
letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    typing.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 400);
})();

let key = document.querySelector('#intro span').nextElementSibling;
key.addEventListener('keypress', function(press) {
    let num = press.charCode,
    theLetter = String.fromCharCode(num);
    press.target.value = press.target.value.toUpperCase();
    
})

let ul = document.querySelector('#ul_list');
ul.addEventListener('click', function(e) {
    if(e.target.className == 'delete') {
        let li = e.target.parentElement;
        ul.removeChild(li);
    }
})

let form = document.querySelector('button').parentElement;
form.addEventListener('submit', submitForm, true);

function submitForm(ev) {
    ev.preventDefault();
    let childNode = form.children[1].value;
    let lis = document.createElement('li'),
    span1 = document.createElement('span'),
    span2 = document.createElement('span'),
    span3 = document.createElement('span');

    lis.setAttribute('class', 'reading');

    span2.textContent = childNode;

    span3.setAttribute('class', 'delete');
    span3.textContent = 'x';

    lis.appendChild(span1);
    lis.appendChild(span2);
    lis.appendChild(span3);

    ul.appendChild(lis);
}

let hidebox = document.forms[0].elements[0];
hidebox.addEventListener('change', function(changeBox) {
    changeBox.preventDefault();
    let change = changeBox.target;
    changeBox.preventDefault();
    if (change.checked) {
        ul.style.display = 'none';
   } else {
   ul.style.display = 'block';
  }
});





