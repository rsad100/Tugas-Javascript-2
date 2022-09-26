function seleksiNilai (nilaiAwal, nilaiAkhir, dataArray) {
    let dataArrayBaru = [];
    if (nilaiAwal < nilaiAkhir){
        if ( dataArray.length >= 5 ){
            for ( i=0; i<=dataArray.length;i++ ) {
                if ( dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir){
                    dataArrayBaru.push(dataArray[i])
                }
            }
        }
        else
        return "Jumlah angka dalam dataArray harus lebih dari 5"
    }
    else {
        return "Nilai akhir harus lebih besar dari nilai awal";
    }
    dataArrayBaru.sort(function(a,b){return a - b});
    return dataArrayBaru
}

console.log(seleksiNilai(5,20,[2,25,4,14,17,30,8]))