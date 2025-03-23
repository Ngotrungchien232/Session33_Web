// lấy dữ liệu từ html ra
const button = document.getElementById(`tinhSoKiTu`);
const hienThi = document.getElementById(`soKiTu`);
const input = document.getElementById(`nhapChuoi`);
let soKiTu = 0;
button.addEventListener(`click`, function () {
  const nhapChuoi = input.value;
  soKiTu = nhapChuoi.length;
  hienThi.textContent = soKiTu;
});
