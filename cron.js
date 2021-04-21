"use strict"
console.log("Cronometro");
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; //Quantos miléssimos valem 1 segundo.
var cron;

//
function start() {
    cron = setInterval(() => { timer() }, tempo);
}
//
function pause() {
    clearInterval(cron);
}
//
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:000';
}
//
function timer(){
    ss++;
    if(ss == 60) { 
       ss==0;
       mm++;}

     if(mm == 60){
        mm = 0;
        hh++;
        }

        let horas = (hh < 10 ? '0' + hh : hh)
        let minutos = (mm < 10 ? '0' + mm : mm)
        let segundos = (ss < 10 ? '0'+ ss : ss)

    var format = horas + ":" + minutos + ":" + segundos
    document.getElementById('counter').innerText = format;
}