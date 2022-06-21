

const clock = document.getElementById("Clock");


const addZero = (num) => {
    if(num <10) {
        return `0${num}`
    }
    else {
        return num;
    }
}
const showTime = ()=> {
    const currentTime = new Date ();
let h = currentTime.getHours ();
let m = currentTime.getMinutes ();
let s = currentTime.getSeconds ();
clock.textContent = `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
}

setInterval(() => {
    showTime();

},1000)

const Author = document.getElementById("Author");

Author.onclick = () => {
    alert('Arkadiusz Makowski');
}

