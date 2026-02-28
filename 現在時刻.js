let date = new Date();
let Allweek = ["日","月","火","水","木","金","土"];

//時間更新
function updateTime(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let week = date.getDay();
    let hour = date.getHours();
    let minute = date. getMinutes();
    let second = date.getSeconds();
    let time = document.querySelector("#time");
    time.textContent = year + "年 " + month + "月" + day + "日 " + Allweek[week] + "曜日";
    let time2 = document.querySelector("#time2");
    time2.textContent = hour + "時" + minute + "分" + second + "秒";
}

setInterval(updateTime, 1000);