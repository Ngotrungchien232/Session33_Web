// Lấy các phần tử từ để chỉnh sửa
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("icon");

// Thêm sự kiện click cho biểu tượng con mắt
icon.addEventListener("click", function () {
  // Kiểm tra type của input
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Thay đổi biểu tượng con mắt (fa-eye: hiện, fa-eye-slash: ẩn)
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});

// các yei cầu
