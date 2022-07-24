const time = document.getElementById('time');
const day = '01-04-2020';
const dateNow = new Date(day);
const numberFormatter = new Intl.NumberFormat('en-US');

setInterval(() => {
    const now = new Date();
    const distance = Math.floor(
        (now.getTime() - dateNow.getTime())
    );

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

  document.getElementById('time').innerHTML = days + 'd ' + hours + 'h '
  + minutes + 'm ' + seconds + 's ';
    // time.innerText = numberFormatter.format(difference);
}, 1000);