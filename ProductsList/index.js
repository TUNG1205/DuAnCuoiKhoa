const list = [
  {
    name: "Tai nghe bluetooth chống ồn V5.0",
    price: 290000,
    type: "earphone",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/90/55/ea/340eb77f1170e4c381c866c275138a82.jpg.webp",
  },
  {
    name: "Tai nghe JBL C150SI",
    price: 235000,
    type: "earphone",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/37/f0/49/fc18ee8fbf3a5f8b76b1b374c0db8851.jpg.webp",
  },
  {
    name: "Chuột không dây Logitech M220 Silent",
    price: 219000,
    type: "mouse",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/33/82/18/5b3a94d00db81dcc6a7a2a8bd62cad04.jpg.webp",
  },
  {
    name: "Chuột chơi game G5",
    price: 509000,
    type: "mouse",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/aa/e7/92/f6767d13b63b70c89e2e39360cff84c0.jpg.webp",
  },
  {
    name: "Bàn phím gấp 3 ZAGG Universal Keyboards",
    price: 1520000,
    type: "keyboards",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/a1/40/36/80c26fdf3f02e2f61f711030ace3bc74.png.webp",
  },
  {
    name: "Samsung Galaxy S20 FE",
    price: 8790000,
    type: "smartphone",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/98/28/4a/7ec6ad5943179c4b2ad5ae8b79798599.jpeg.webp",
  },
  {
    name: "Apple iphone 14 pro max",
    price: 33490000,
    type: "smartphone",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/0c/dd/e7/e6431984901119a1f8166cc4e579da93.png.webp",
  },
  {
    name: "Điện thoại Oppo A55",
    price: 3750000,
    type: "smartphone",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/6f/b1/16/2a0e5c3f718d20d998cd13ccc84864b0.jpg.webp",
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
            <div class="product-img"><img src="${element.image}"></div>
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
    case "earphone":
      filteredProducts = products.filter(function (element) {
        if (element.type == "earphone") {
          return true;
        } else {
          return false;
        }
      });
      break;

    case "mouse":
      filteredProducts = products.filter(function (element) {
        if (element.type == "mouse") {
          return true;
        } else {
          return false;
        }
      });
      break;

      case "keyboards":
      filteredProducts = products.filter(function (element) {
        if (element.type == "keyboards") {
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
