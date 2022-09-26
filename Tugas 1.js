//toString()
//Mengubah number menjadi string
let num = 1;
let text = num.toString();
console.log(typeof text);

//length
//Mereturn jumlah dari karakter yang terdapat didalam string
x = 'test';
console.log(x.length);

//replace
//Mengganti kata specific yang terdapat dalam sebuah string menjadi string yang ditentukan
let text1 = "test 123";
let result = text1.replace("test","check");
console.log(result);

//search()
//Mencari string untuk value yang ditentukan dan mereturn posisi string yang pertama kali ditemukan
let position = text1.search("123");
console.log(position);

//slice()
//Mengambil bagian dari string yang ditentukan dan mereturn bagian yang diambil
let text2 = "Hello World!";
let result1 = text2.slice(0,5);
console.log (result1);