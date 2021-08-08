const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); // 1초마다 반복 실행

// "1".padStart(2, "0")
// 문자열의 길이가 2가 되지 않을 경우 문자열의 앞을 0으로 채운다.

// "1".padEnd(2, "0")
// 문자열의 길이가 2가 되지 않을 경우 문자열의 뒤를 0으로 채운다.
