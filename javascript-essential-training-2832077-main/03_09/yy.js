//Latihan method

const sepatu = {
    warna : "hitam",
    merk : "Adidas",
    labelHarga : {
    ukuran : 40,
    harga : 45000,
    },

    hitung : function(jumlah){
        return this.labelHarga.harga = jumlah * this.labelHarga.harga;
    },
}

sepatu.hitung(2);

document.getElementById("jwbn1").innerHTML = sepatu.merk;
document.getElementById("jwbn2").innerHTML = sepatu.warna;
document.getElementById("jwbn3").innerHTML = sepatu.labelHarga["ukuran"];
document.getElementById("jwbn4").innerHTML = sepatu.labelHarga["harga"];

