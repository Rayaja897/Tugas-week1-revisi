const mtk = 80
const bahasa = 80
const english = 95
const ipa = 70

//Untuk Menghitung Rata Rata
const grade = [mtk, bahasa, english, ipa]
let total = 0
for (let value = 0; value < grade.length; value++) {
    //untuk menjumlahkan nilai
    total += grade[value]
    average = total / grade.length
}
//menambahkan toFixed untuk menampilkan berapa angka di belakang koma
console.log(`you're average is : ${average.toFixed()}`);

//pengkondisian
if (average <= 59) {
    console.log('Grade : E');
} else if (average >= 60 && average <= 69) {
    console.log('Grade : D');
} else if (average >= 70 && average <= 79) {
    console.log('Grade : C');
} else if (average >= 80 && average <= 89) {
    console.log('Grade : B');
} else {
    console.log('Grade : A');
}