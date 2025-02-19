//Membuat hitung gaji 
let gajipokok = 5000000;
let bonus = 500000;
let fullhadir = 200000;
let i = 0;

// jumalah kehadiran dia 21 hari
for (let i = 0; i < 21; i++){
   var gajitotal = gajipokok + fullhadir * i;
    console.log(gajitotal);  
}
console.log(`Tambahan gaji jika hadir lebih dari 20 hari adalah  ${i + bonus}`);

let gajiTotalKeseluruhan = gajitotal + bonus;
console.log('SUBTOTAL KESELURUHAN');

console.log('Jadi Gaji pokok + Bonus anda di bulan ini adalah Rp ' + gajiTotalKeseluruhan);


