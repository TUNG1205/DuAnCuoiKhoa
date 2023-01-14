const list = [
  {
    name: "Hoa mai giảo lá gai",
    price: 215000,
    type: "flower",
    image:
      "../assets/hoa mai giảo lá gai.jpg",
  },
  {
    name: "Bình xịt bóng lá",
    price: 149000,
    type: "accessories",
    image:
      "../assets/bình xịt bóng lá.png",
  },
  {
    name: "Hoa đào Nhật Tân",
    price: 500000,
    type: "flower",
    image:
      "../assets/hoa đào Nhật Tân.jpg",
  },
  {
    name: "Lọ hoa gốm phong cách châu Âu",
    price: 349000,
    type: "vase",
    image:
      "../assets/lọ hoa gốm phong cách châu Âu.jpg",
  },
  {
    name: "Cành cây tuyết dẻo trắng",
    price: 509000,
    type: "accessories",
    image:
      "../assets/cành cây tuyết dẻo trắng.png",
  },
  {
    name: "Hoa đồng tiền",
    price: 800000,
    type: "flower",
    image:
      "../assets/hoa đồng tiền.png",
  },
  {
    name: "Lọ hoa thủy tinh cao cấp",
    price: 43000,
    type: "vase",
    image:
      "../assets/lọ hoa thủy tinh cao cấp.jpg",
  },
  {
    name: "Ruy băng",
    price: 20000,
    type: "accessories",
    image:
      "../assets/ruy băng.jpg",
  },
  {
    name: "Lan hồ điệp",
    price: 200000,
    type: "flower",
    image:
      "../assets/lan hồ điệp.png",
  },
  {
    name: "Chậu hoa tròn",
    price: 80000,
    type: "vase",
    image:
      "../assets/chậu hoa tròn.jpg",
  },
  {
    name: "Mút cắm hoa",
    price: 20000,
    type: "accessories",
    image:
      "../assets/mút cắm hoa.jpg",
  },
  {
    name: "Lọ hoa cao xanh biển",
    price: 200000,
    type: "vase",
    image:
      "../assets/lọ hoa cao xanh biển.jpg",
  },
];
localStorage.setItem("products", JSON.stringify(list));

const products = JSON.parse(localStorage.getItem("products"));
const productsListElement = document.getElementById("products-list");

/**
 * Hàm chuyên dùng để render danh sách sản phẩm ra HTML
 *
 * @param {array} productsList Mảng chứa danh sách sản phẩm
 */
function render(productsList) {
  // Xóa hết các thẻ li cũ
  productsListElement.innerHTML = "";

  // forEach giống map() nhưng khác là chỉ duyệt chứ ko trả về
  productsList.forEach(function (element) {
    productsListElement.insertAdjacentHTML(
      // Vị trí chèn
      "beforeend",
      // Nội dung chèn
      `
          <li class="product">
            <div class="product-img overflow-hidden"><img src="${element.image}"></div>
            <span class="product-name">${element.name}</span>
            <span class="product-price">${element.price}đ</span>
          </li>
      `
    );
  });
}
render(products);

const ascBtn = document.getElementById("asc");
const descBtn = document.getElementById("desc");

// onclick là thuộc tính của thẻ button, chứ ko phải hàm
// Onclick được gán bằng 1 function, fucntion này sẽ chỉ có 1 tham số duy nahát đại diện cho sự kiện xảy ra
ascBtn.onclick = function () {
  // Sắp xếp thứ tự giá tăng dần
  const sortedProducts = products.sort(function (a, b) {
    // Nếu giá tiền bằng nhau thì không cần đổi chỗ a và b => return 0
    if (a.price == b.price) {
      return 0;
    } else if (a.price > b.price) {
      // Nếu giá tiền của a lớn hơn b, thì đổi chỗ a và b (trả về một số lớn hơn 0) => return 1
      return 1;
    } else {
      // Nếu giá tiền của a nhỏ hơn b, thì đổi chỗ a và b => return -1 (sắp xếp a đứng trước b)
      return -1;
    }
  });

  //   Sau khi sắp xếp xong, render lại danh sách sản phẩm
  render(sortedProducts);
};

descBtn.onclick = function () {
  // Sắp xếp thứ tự giá tăng dần
  const sortedProducts = products.sort(function (a, b) {
    // Nếu giá tiền bằng nhau thì không cần đổi chỗ a và b => return 0
    if (a.price == b.price) {
      return 0;
    } else if (a.price > b.price) {
      // Nếu giá tiền của a lớn hơn b, thì đổi chỗ a và b (trả về một số nhỏ hơn 0) => return -1
      return -1;
    } else {
      // Nếu giá tiền của a nhỏ hơn b, thì đổi chỗ a và b => return 1 (sắp xếp a đứng sau b)
      return 1;
    }
  });

  //   Sau khi sắp xếp xong, render lại danh sách sản phẩm
  render(sortedProducts);
};

// Lọc sản phẩm theo thể loại
const filterSelect = document.getElementById("filter");
filterSelect.onchange = function () {
  const typeSelected = filterSelect.value;
  let filteredProducts = [];
  switch (typeSelected) {
    case "flower":
      filteredProducts = products.filter(function (element) {
        if (element.type == "flower") {
          return true;
        } else {
          return false;
        }
      });
      break;

    case "vase":
      filteredProducts = products.filter(function (element) {
        if (element.type == "vase") {
          return true;
        } else {
          return false;
        }
      });
      break;

      case "accessories":
      filteredProducts = products.filter(function (element) {
        if (element.type == "accessories") {
          return true;
        } else {
          return false;
        }
      });
      break;

      case "smartphone":
        filteredProducts = products.filter(function (element) {
          if (element.type == "smartphone") {
            return true;
          } else {
            return false;
          }
        });
        break;

    default:
      filteredProducts = products;
      break;
  }
  render(filteredProducts);
};
