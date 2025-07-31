// neg l products array deer ajillana
let data = [
  {
    name: "iPhone 13",
    category: "electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "mobicom",
    weight: 0.3,
  },
  {
    name: "Samsung galaxy",
    category: "electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "unitel",
    weight: 0.28,
  },
  {
    name: "dell xps 13",
    category: "computers",
    price: 2800000,
    stock: 3,
    brand: "dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "pcmall",
    weight: 1.2,
  },
  {
    name: "mouse logitech m590",
    category: "accessories",
    price: 85000,
    stock: 20,
    brand: "logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "pcmall",
    weight: 0.1,
  },
  {
    name: "macbook air m2",
    category: "computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "mobicom",
    weight: 1.1,
  },
];
//1 hymdraltai bvteegdehvvnvvdiig shvvj butsaadag function bich

const getDiscountedProducts = (products) => {
  let discountedProducts = products.filter((product) => {
    return product.isDiscounted == true;
  });
  return discountedProducts;
};
let resultDiscountedProducts = getDiscountedProducts(data);
console.log(resultDiscountedProducts);

// 2 noots duussan (stock===0) bvteegdehvvnvvdiig butsaadag function bich

const getOutOfStockProducts = (products) => {
  let outOfStockProducts = products.filter((product) => {
    return product.stock === 0;
  });
  return outOfStockProducts;
};
let resultOutOfStockProducts = getOutOfStockProducts(data);
console.log("2", resultOutOfStockProducts);

//3 vne ni 1 say tugruguus deesh bvteegdehvvnvvdiig butsaadag function bich

const getExpensiveProducts = (products) => {
  let expensiveProducts = products.filter((product) => {
    return product.price > 1000000;
  });
  return expensiveProducts;
};
let resultExpensiveProducts = getExpensiveProducts(data);
console.log("3", resultExpensiveProducts);

//4 "computers" kategoriin bvteegdehvvnvvdiig butsaadag function bich

const getComputers = (products) => {
  let computers = products.filter((product) => {
    return product.category == "computers";
  });
  return computers;
};
let resultComputers = getComputers(data);
console.log("4", resultComputers);

//5 tuhain brandiin nereer bvteegdehvvnvvdiig shvvdeg function bich

const filterByBrand = (products, brandName) => {
  let filteredByBrand = products.filter((product) => {
    return product.brand == brandName;
  });
  return filteredByBrand;
};
let resultFilterByBrand = filterByBrand(data, "Apple");
console.log("5", resultFilterByBrand);

//6  bvh bvteegdehvvn deer 'isHeavy:true/false' gesen tailbar nemdeg function bich (jin 1kg-s ih bol)

const addIsHeavyFlag = (products) => {
  products.map((product) => {
    if (product.weight > 1) {
      product.isheavy = true;
    } else {
      product.isheavy = false;
    }
  });

  return products;
};
let resultHeavyProducts = addIsHeavyFlag(data);
console.log("6", resultHeavyProducts);

//7 bvh bvteegdehvvnii vned 10% nemdeg function bich

const increasePriceByTenPercent = (products) => {
  let a = products.map((product) => {
    // product.price = parseInt(product.price * 1.1);
    return { ...product, price: parseInt(product.price * 1.1) };
  });
  return a;
};
let resultIncreasePriceByTenPercent = increasePriceByTenPercent(data);
console.log("7", resultIncreasePriceByTenPercent);

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.

const getFinalPrice = (products) => {
  products.map((product) => {
    product.getFinalPrice =
      (product.price * (100 - product.discountPercent)) / 100;
  });
  return products;
};
let resultFinalPrice = getFinalPrice(data);
console.log(resultFinalPrice);

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
// function getTopRatedProduct(products) {

const getTopRatedProduct = (products) => {
  // let topRatedProduct=products.filter((product)=>{
  //   return product
  // })
  let topRatedProduct = products[0];

  products.map((product) => {
    if (product.rating > topRatedProduct.rating) {
      topRatedProduct = product;
    }
  });

  // for (i = 0; i < products.length; i++) {
  //   if (products[0].rating < products[i].rating) {
  //     topRatedProduct = products[i];
  //   }
  // }
  return topRatedProduct;
};
console.log("10", getTopRatedProduct(data));

// // 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
// function getCheapestProduct(products) {
//   // ...
// }

const getCheapestProduct = (products) => {
  let cheapestProduct = products[0];
  products.map((product) => {
    if (product.price < cheapestProduct.price) {
      cheapestProduct = product;
    }
  });
  return cheapestProduct;
};
let resultCheapestProduct = getCheapestProduct(data);
console.log("10", resultCheapestProduct);

// // 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
// function getTotalStock(products) {
//   // ...
// }

const getTotalStock = (products) => {
  let totalStock = 0;
  products.map((product) => {
    totalStock += product.stock;
  });
  return totalStock;
};
let resultTotalStock = getTotalStock(data);
console.log("11", resultTotalStock);

// // 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.
// function getTotalPrice(products) {
//   // ...
// }

const getTotalPrice = (products) => {
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += product.price;
  });
  return totalPrice;
};
let resultTotalPrice = getTotalPrice(data);
console.log("12", resultTotalPrice);

// // 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function filterBySupplier(products, supplierName) {
//   // ...
// }

const filterBySupplier = (products, supplierName) => {
  let filteredBySupplier = products.filter((product) => {
    return product.supplier == supplierName;
  });
  return filteredBySupplier;
};
let resultFilterBySupplier = filterBySupplier(data, "mobicom");
console.log("13", resultFilterBySupplier);

// // 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.
// function getProductNames(products) {
//   // ...
// }

const getProductNames = (products) => {
  let productNames = products.map((product) => {
    return product.name;
  });
  return productNames;
};
let resultProductNames = getProductNames(data);
console.log("14", resultProductNames);
// // 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
// function sortByPriceAscending(products) {
//   // ...
// }

const sortByPriceAscending = (products) => {
  let sortedByPriceAscending = products.sort((product2, product1) => {
    if (product2.price > product1.price) {
      return 1;
    } else {
      return -1;
    }
  });
  return sortedByPriceAscending;
};
let resultSortByPriceAscending = sortByPriceAscending(data);
console.log("15", resultSortByPriceAscending);
// // 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
// function getLowStockProducts(products) {
//   // ...
// }

const getLowStockProducts = (products) => {
  let lowStockProducts = products.filter((product) => {
    return product.stock <= 5;
  });
  return lowStockProducts;
};
let resultLowStockProducts = getLowStockProducts(data);
console.log("16", resultLowStockProducts);
// // 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
// function getUniqueSuppliers(products) {
//   // ...
// }

// const getUniqueSuppliers = (products) => {
//   const uniqueSuppliers = [];
//   products.forEach((product) => {
//     if (!uniqueSuppliers.includes(product.supplier)) {
//       uniqueSuppliers.push(product.supplier);
//     }
//   });
//   return uniqueSuppliers;
// };
// let resultUniqueSuppliers = getUniqueSuppliers(data);
// console.log("17", resultUniqueSuppliers);

const getUniqueSuppliers = (products) => {
  const suppliers = products.map((product) => {
    return product.supplier;
  });
  const uniqueSuppliers = {};
  suppliers.forEach((supplier) => {
    uniqueSuppliers[supplier] = true;
  });
  const keysOfUniqueSuppliers = Object.keys(uniqueSuppliers);
  return keysOfUniqueSuppliers;
};
let resultUniqueSuppliers = getUniqueSuppliers(data);
console.log("17", resultUniqueSuppliers);

// // 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
// function getNameAndPriceList(products) {
//   // ...
// }

const getNameAndPriceList = (products) => {
  const nameAndPriceList = products.map((product) => {
    return { name: product.name, price: product.price };
  });
  return nameAndPriceList;
};
let resultNameAndPriceList = getNameAndPriceList(data);
console.log("18", resultNameAndPriceList);

// // 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function getHighlyRatedProducts(products) {
//   // ...
// }

const getHighlyRatedProducts = (products) => {
  let highlyRatedProducts = products.filter((product) => {
    return product.rating > 4.5;
  });
  return highlyRatedProducts;
};
let resultHighlyRatedProducts = getHighlyRatedProducts(data);
console.log("19", resultHighlyRatedProducts);
// // 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).
// function addIdToProducts(products) {
//   // ...

const addIdToProducts = (products) => {
  products.forEach((product, i) => {
    product.id = i + 1;
  });
  return products;
};
let resultAddIdToProducts = addIdToProducts(data);
console.log("20", resultAddIdToProducts);
