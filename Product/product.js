const list = [
  {
    id: 1,
    name: "Hoa mai giảo lá gai",
    price: 215000,
    type: "flower",
    image: "../assets/hoa mai giảo lá gai.jpg",
    description:
      "There’s no doubt you’ve seen the “swiss cheese plant” all over Pinterest as they’re one of the most popular indoor plants going around right now. Their lush green leaves with distinctive holes make a stunning statement in any room and they can grow to fit any space. Monstera plants prefer a warm climate away from direct sunlight and they benefit from regular cleaning with a soft, damp cloth.",
  },
  {
    id: 2,
    name: "Bình xịt bóng lá",
    price: 149000,
    type: "accessories",
    image: "../assets/bình xịt bóng lá.png",
    description:
      "There’s no doubt you’ve seen the “swiss cheese plant” all over Pinterest as they’re one of the most popular indoor plants going around right now. Their lush green leaves with distinctive holes make a stunning statement in any room and they can grow to fit any space. Monstera plants prefer a warm climate away from direct sunlight and they benefit from regular cleaning with a soft, damp cloth.",
  },
  {
    id: 3,
    name: "Hoa đào Nhật Tân",
    price: 500000,
    type: "flower",
    image: "../assets/hoa đào Nhật Tân.jpg",
    description:
      "There’s no doubt you’ve seen the “swiss cheese plant” all over Pinterest as they’re one of the most popular indoor plants going around right now. Their lush green leaves with distinctive holes make a stunning statement in any room and they can grow to fit any space. Monstera plants prefer a warm climate away from direct sunlight and they benefit from regular cleaning with a soft, damp cloth.",
  },
  {
    id: 4,
    name: "Lọ hoa gốm phong cách châu Âu",
    price: 349000,
    type: "vase",
    image: "../assets/lọ hoa gốm phong cách châu Âu.jpg",
    description:
      "There’s no doubt you’ve seen the “swiss cheese plant” all over Pinterest as they’re one of the most popular indoor plants going around right now. Their lush green leaves with distinctive holes make a stunning statement in any room and they can grow to fit any space. Monstera plants prefer a warm climate away from direct sunlight and they benefit from regular cleaning with a soft, damp cloth.",
  },
  {
    id: 5,
    name: "Cành cây tuyết dẻo trắng",
    price: 509000,
    type: "accessories",
    image: "../assets/cành cây tuyết dẻo trắng.png",
    description:
      "There’s no doubt you’ve seen the “swiss cheese plant” all over Pinterest as they’re one of the most popular indoor plants going around right now. Their lush green leaves with distinctive holes make a stunning statement in any room and they can grow to fit any space. Monstera plants prefer a warm climate away from direct sunlight and they benefit from regular cleaning with a soft, damp cloth.",
  },
  {
    id: 6,
    name: "Hoa đồng tiền",
    price: 800000,
    type: "flower",
    image: "../assets/hoa đồng tiền.png",
    description:
      "There’s no doubt you’ve seen the “swiss cheese plant” all over Pinterest as they’re one of the most popular indoor plants going around right now. Their lush green leaves with distinctive holes make a stunning statement in any room and they can grow to fit any space. Monstera plants prefer a warm climate away from direct sunlight and they benefit from regular cleaning with a soft, damp cloth.",
  },
  {
    id: 7,
    name: "Lọ hoa thủy tinh cao cấp",
    price: 43000,
    type: "vase",
    image: "../assets/lọ hoa thủy tinh cao cấp.jpg",
    description:
      "There’s no doubt you’ve seen the “swiss cheese plant” all over Pinterest as they’re one of the most popular indoor plants going around right now. Their lush green leaves with distinctive holes make a stunning statement in any room and they can grow to fit any space. Monstera plants prefer a warm climate away from direct sunlight and they benefit from regular cleaning with a soft, damp cloth.",
  },
  {
    id: 8,
    name: "Ruy băng",
    price: 20000,
    type: "accessories",
    image: "../assets/ruy băng.jpg",
    description:
      "There’s no doubt you’ve seen the “swiss cheese plant” all over Pinterest as they’re one of the most popular indoor plants going around right now. Their lush green leaves with distinctive holes make a stunning statement in any room and they can grow to fit any space. Monstera plants prefer a warm climate away from direct sunlight and they benefit from regular cleaning with a soft, damp cloth.",
  },
  {
    id: 9,
    name: "Lan hồ điệp",
    price: 200000,
    type: "flower",
    image: "../assets/lan hồ điệp.png",
    description:
      "There’s no doubt you’ve seen the “swiss cheese plant” all over Pinterest as they’re one of the most popular indoor plants going around right now. Their lush green leaves with distinctive holes make a stunning statement in any room and they can grow to fit any space. Monstera plants prefer a warm climate away from direct sunlight and they benefit from regular cleaning with a soft, damp cloth.",
  },
  {
    id: 10,
    name: "Chậu hoa tròn",
    price: 80000,
    type: "vase",
    image: "../assets/chậu hoa tròn.jpg",
    description:
      "There’s no doubt you’ve seen the “swiss cheese plant” all over Pinterest as they’re one of the most popular indoor plants going around right now. Their lush green leaves with distinctive holes make a stunning statement in any room and they can grow to fit any space. Monstera plants prefer a warm climate away from direct sunlight and they benefit from regular cleaning with a soft, damp cloth.",
  },
  {
    id: 11,
    name: "Mút cắm hoa",
    price: 20000,
    type: "accessories",
    image: "../assets/mút cắm hoa.jpg",
    description:
      "There’s no doubt you’ve seen the “swiss cheese plant” all over Pinterest as they’re one of the most popular indoor plants going around right now. Their lush green leaves with distinctive holes make a stunning statement in any room and they can grow to fit any space. Monstera plants prefer a warm climate away from direct sunlight and they benefit from regular cleaning with a soft, damp cloth.",
  },
  {
    id: 12,
    name: "Lọ hoa cao xanh biển",
    price: 200000,
    type: "vase",
    image: "../assets/lọ hoa cao xanh biển.jpg",
    description:
      "There’s no doubt you’ve seen the “swiss cheese plant” all over Pinterest as they’re one of the most popular indoor plants going around right now. Their lush green leaves with distinctive holes make a stunning statement in any room and they can grow to fit any space. Monstera plants prefer a warm climate away from direct sunlight and they benefit from regular cleaning with a soft, damp cloth.",
  },
];
// Lưu vào localStorage
localStorage.setItem("list", JSON.stringify(list));

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const id = params.id;
const product = list[id];
if (product === undefined) {
  document.write("Product not found");
} else {
  document.write(`
        <h1 id="title">${product.name}</h1>
        <div class="d-flex justify-content-between">
            <img id="product-img" src="${product.image}" alt="${product.name}">
            <div class="summary">
                <p id="price" class="fs-3">${product.price}đ</p>
                <p>${product.description}</p>
                <button>Thêm vào giỏ hàng</button>
            </div>
        </div>
      `);
}

/**
 * Thêm chức năng thêm vào giỏ hàng
 */
// var muaBtns = document.querySelectorAll(".san-pham .mua button");
var giohang = document.querySelector("#gio-hang");
/**
 * Duyệt qua từng phần tử ở trong muaBtns, mỗi lần duyệt thì đem
 * button tương ứng đặt vào biến btn (do chúng ta đặt tên)
 */
muaBtns.forEach(function (btn) {
  btn.onclick = function (e) {
    var tenSP = btn.parentElement
    localStorage.setItem(JSON.stringify(tenSP),  )
  };
});
