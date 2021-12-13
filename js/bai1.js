const A = 2;
const B = 1;
const C = 0.5;
const DT1 = 2.5;
const DT2 = 1.5;
const DT3 = 1;



function tinhDiemThi(){
    var diemChuan = Number(document.getElementById("inpDiemChuan").value);
    var diemToan = Number(document.getElementById("inpDiemToan").value);
    var diemLy = Number(document.getElementById("inpDiemLy").value);
    var diemHoa = Number(document.getElementById("inpDiemHoa").value);
    var tongDiem = Number(diemToan + diemLy + diemHoa + diemKhuVuc(A, B, C) + diemDoiTuong(DT1, DT2, DT3));
    if (diemToan <= 0 || diemLy <= 0 || diemHoa <= 0) {
        document.getElementById("txtKetQua").innerHTML = "Bạn đã rớt do có môn 0 điểm. ";
    }else if (tongDiem < diemChuan) {
        document.getElementById("txtKetQua").innerHTML = "Bạn đã rớt. " + "Tổng điêm: " + tongDiem;
    }else {
        document.getElementById("txtKetQua").innerHTML = "Bạn đã đậu. " + "Tổng điêm: " + tongDiem;
    }
}

function diemKhuVuc(){
    var khuVuc = document.getElementById("inpKhuVuc").value;
    switch (khuVuc) {
        case "a":
            return A;
        case "b":
            return B;
        case "c":
            return C;
        default:
    }
}

function diemDoiTuong(){
    var doiTuong = document.getElementById("inpDoiTuong").value;
    switch (doiTuong) {
        case "dt1":
            return DT1;
        case "dt2":
            return DT2;
        case "dt3":
            return DT3;
        default:
    }
}

document.getElementById("btnTinh").onclick = tinhDiemThi;

