var mobil = {
    merk: "Toyota",
    model: "Camry",
    tahun: 2022,
    warna: "Putih",

    hidupkanMesin: function(){
        console.log("Mesin dinyalakan!")
    }
}

console.log("Merk Mobil: ", mobil.merk);
console.log("Merk Produksi: ", mobil.tahun);
mobil.hidupkanMesin()

var orang = {
    nama: "John",
    usia: 30,
    sapa: function(){
        console.log("はじめまして、私の名前は"+ this.nama + this.usia + "さいです")
    }
}

orang.sapa()

// konstruktor
function Mahasiswa(nama, jurusan){
    this.nama = nama;
    this.jurusan = jurusan;
    this.sapa = function() {
        console.log("Halo, nama saya "+this.nama+" dari jurusan "+this.jurusan)
    };
}

var mahasiswa1 = new Mahasiswa("alice", "informatika")

mahasiswa1.sapa()