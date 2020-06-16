/**
 Functional FizzBuzz. 
 Numbers divisible by 3 are fizz
 Numbers Divisible by 5 ar buzz
 Numbers not divisible by either are just their number
 */

const countTo = 8390;

const fizzBuzz = (number: number, acc = 1): void => {
  if (acc > number) return;

  let result = "";

  if (acc % 3 === 0) result = result.concat("Fizz");

  if (acc % 5 === 0) result = result.concat("Buzz");

  if (result === "") result = `${acc}`;

  //   console.log(result);
  fizzBuzz(number, acc + 1);
};

console.time(`Recursive to ${countTo}`);
fizzBuzz(countTo);
console.timeEnd(`Recursive to ${countTo}`);

//Imperative version
console.time(`For Loop to ${countTo}`);
for (let i = 1; i <= countTo; i++) {
  let result = "";

  if (i % 3 === 0) result = result.concat("Fizz");

  if (i % 5 === 0) result = result.concat("Buzz");

  if (result === "") result = `${i}`;

  //   console.log(result);
}
console.timeEnd(`For Loop to ${countTo}`);

//Map vs for

const numArr = [];

const numberOfElements = 5000;

for (let i = 1; i <= numberOfElements; i++) {
  numArr.push(i);
}

console.time(`map() for ${numberOfElements} elements`);
numArr.map((num) => num * 2);
console.timeEnd(`map() for ${numberOfElements} elements`);

let times2result = [];
console.time(`for(of) for ${numberOfElements} elements`);
for (let num of numArr) {
  times2result.push(num * 2);
}
console.timeEnd(`for(of) for ${numberOfElements} elements`);

times2result = [];
console.time(`for(length) for ${numberOfElements} elements`);
for (let i = 0; i < numArr.length; i++) {
  times2result.push(numArr[i] * 2);
}
console.timeEnd(`for(length) for ${numberOfElements} elements`);

//Reduce example
console.time(`reduce() for ${numberOfElements} elements sum`);
numArr.reduce((acc, curr) => acc + curr);
console.timeEnd(`reduce() for ${numberOfElements} elements sum`);

let addUpResult = 0;
console.time(`for(of) for ${numberOfElements} elements sum`);
for (let num of numArr) {
  addUpResult += num;
}
console.timeEnd(`for(of) for ${numberOfElements} elements sum`);

console.time(`for(length) for ${numberOfElements} elements sum`);
for (let i = 0; i < numArr.length; i++) {
  addUpResult += numArr[i];
}
console.timeEnd(`for(length) for ${numberOfElements} elements sum`);

//Data Transformation

const SHOP_DATA = [
  {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 18,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
];

type ShopData = typeof SHOP_DATA;

/*
[routeName]: {
   id: number;
      title: string;
      routeName: string;
      items: {
         id: number;
         name: string;
         imageUrl: string;
         price: number;
      }[];
}
*/

interface NoramlizedData {
  [collection: string]: typeof SHOP_DATA[number];
}

const createNode = (data: ShopData, keyName: keyof ShopData[number]) => {
  const nodes: NoramlizedData = {};
  data.forEach((data) => (nodes[`${data[keyName]}`] = data));
  return nodes;
};

console.time("Normalizing data");
const normalizedData = createNode(SHOP_DATA, "routeName");
console.timeEnd("Normalizing data");

console.log(normalizedData);
