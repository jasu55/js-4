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
  let heavyProducts = products.map((product) => {
    return {
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      brand: product.brand,
      rating: product.rating,
      isDiscounted: product.isDiscounted,
      discountPercent: product.discountPercent,
      supplier: product.supplier,
      weight: product.weight,
      isHeavy: product.weight > 1,
    };
  });
  return heavyProducts;
};
let resultHeavyProducts = addIsHeavyFlag(data);
console.log("6", resultHeavyProducts);

//7 bvh bvteegdehvvnii vned 10% nemdeg function bich

const increasePriceByTenPercent = (products) => {
  let increasedPriceByTenPercent = products.map((product) => {
    return {
      name: product.name,
      category: product.category,
      price: product.price * 1.1,
      stock: product.stock,
      brand: product.brand,
      rating: product.rating,
      isDiscounted: product.isDiscounted,
      discountPercent: product.discountPercent,
      supplier: product.supplier,
      weight: product.weight,
    };
  });
  return increasedPriceByTenPercent;
};
let resultIncreasePriceByTenPercent = increasePriceByTenPercent(data);
console.log("7", resultIncreasePriceByTenPercent);
