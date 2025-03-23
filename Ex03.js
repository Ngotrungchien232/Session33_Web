// Danh sách sản phẩm
const products = [
  { name: "Rau sạch", category: "Đồ ăn" },
  { name: "Thịt lợn", category: "Đồ ăn" },
  { name: "Pepsi không calo", category: "Nước" },
  { name: "Cocacola", category: "Nước" },
  { name: "Cờ lê", category: "Dụng cụ" },
  { name: "Tua vít", category: "Dụng cụ" },
];

// Lấy phần tử HTML
const categorySelect = document.getElementById("categorySelect");
const productList = document.getElementById("productList");

// Hiển thị tất cả sản phẩm ban đầu
showProducts(products);

// Khi chọn danh mục
categorySelect.addEventListener("change", () => {
  const category = categorySelect.value;
  if (category) {
    const filtered = products.filter(
      (product) => product.category === category
    );
    showProducts(filtered);
  } else {
    showProducts(products);
  }
});

// Hàm hiển thị sản phẩm
function showProducts(products) {
  // Xóa hết nội dung cũ
  productList.innerHTML = "";

  // Nếu không có sản phẩm
  if (products.length == 0) {
    let text = document.createTextNode("Không có sản phẩm nào.");
    productList.appendChild(text);
  }
  // Nếu có sản phẩm
  else {
    for (let i = 0; i < products.length; i++) {
      let text = document.createTextNode(products[i].name);
      productList.appendChild(text);
      productList.appendChild(document.createElement("br"));
    }
  }
}
