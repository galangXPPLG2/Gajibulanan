//Membuat hitung gaji 
let gajipokok = 5000000;
let bonus = 500000;
let fullhadir = 200000;
let hadir = 20;
let telat = 10;
let dendatelat = 200000;
let i = 0;

for (let i = 0; i<20 ; i++){
   var gajitotal = gajipokok + fullhadir*i;
    console.log(gajitotal + ' Hari ke ' + (i+1));  
}

let totaltelat = dendatelat * telat
    console.log('DENDA TELAT ANDA SEBESAR '+ totaltelat);
let gajiTotalKeseluruhan = gajitotal + bonus - totaltelat ;
console.log('SUBTOTAL KESELURUHAN :');
console.log('Jadi Gaji pokok + Bonus + Denda anda sebesar Rp' + gajiTotalKeseluruhan);



