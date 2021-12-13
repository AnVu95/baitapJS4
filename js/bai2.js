const gia_50kw_Dau = 500;
const gia_50kw_Ke = 650;
const gia_100kw_Ke = 850;
const gia_150kw_Ke = 1100;
const gia_ConLai = 1300;





function tinhTienDien(){
    var hoTen = document.getElementById("inpHoTen").value;
    var soKw = Number(document.getElementById("inpKwDien").value);
    var tienDien = tinhSoKw(soKw, gia_50kw_Dau, gia_50kw_Ke, gia_100kw_Ke, gia_150kw_Ke, gia_ConLai);
    document.getElementById("txtTinh").innerHTML = "Họ Tên: " + hoTen + "." + " Tiền điện: " + tienDien;
}


function tinhSoKw(soKw, gia_50_Dau, gia_50_Ke, gia_100_Ke, gia_150_Ke, gia_conlai){
    if (soKw > 0 && soKw <= 50) {
        return soKw * gia_50_Dau;
    }else if (soKw > 50 && soKw <= 100) {
        return (50 * gia_50_Dau) + (soKw - 50) * gia_50_Ke;
    }else if (soKw > 100 && soKw <= 200) {
        return (50 * gia_50_Dau) + (50 * gia_50_Ke) + (soKw - 100) * gia_100_Ke;
    }else if (soKw > 200 && soKw <= 350) {
        return (50 * gia_50_Dau) + (50 * gia_50_Ke) + (100 * gia_100_Ke) + (soKw - 200) * gia_150_Ke;
    }else if (soKw > 350) {
        return (50 * gia_50_Dau) + (50 * gia_50_Ke) + (100 * gia_100_Ke) + (150 * gia_150_Ke) + (soKw - 350) * gia_conlai;
    }
}





document.getElementById("btnTinhTienDien").onclick = tinhTienDien;