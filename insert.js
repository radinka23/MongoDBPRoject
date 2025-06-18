// Свързване с база данни boutique_shop
use('boutique_shop');

// Вмъкване на документи в колекция products
db.products.insertMany([
  {
    name: "Silk Blouse",
    brand: "Eleganza",
    price: 120.0,
    stock: 25,
    category: "Tops",
    specs: { material: "Silk", size: "M", color: "Ivory" },
    availableSizes: ["S", "M", "L"]
  },
  {
    name: "Denim Jeans",
    brand: "UrbanStyle",
    price: 90.0,
    stock: 40,
    category: "Bottoms",
    specs: { material: "Denim", size: "32", color: "Blue" },
    availableSizes: ["30", "32", "34"]
  },
  {
    name: "Leather Handbag",
    brand: "LuxeBag",
    price: 250.0,
    stock: 15,
    category: "Accessories",
    specs: { material: "Leather", color: "Black" },
    availableSizes: []
  },
  {
    name: "Floral Dress",
    brand: "SpringMuse",
    price: 180.0,
    stock: 20,
    category: "Dresses",
    specs: { material: "Cotton", size: "M", color: "Floral" },
    availableSizes: ["S", "M", "L"]
  },
  {
    name: "Wool Coat",
    brand: "WinterGlow",
    price: 300.0,
    stock: 10,
    category: "Outerwear",
    specs: { material: "Wool", size: "L", color: "Camel" },
    availableSizes: ["M", "L", "XL"]
  },
  {
    name: "Sneakers",
    brand: "StepUp",
    price: 110.0,
    stock: 35,
    category: "Footwear",
    specs: { material: "Textile", size: "42", color: "White" },
    availableSizes: ["40", "41", "42", "43"]
  },
  {
    name: "Cashmere Scarf",
    brand: "SoftTouch",
    price: 85.0,
    stock: 50,
    category: "Accessories",
    specs: { material: "Cashmere", color: "Gray" },
    availableSizes: []
  },
  {
    name: "Pencil Skirt",
    brand: "ChicLine",
    price: 95.0,
    stock: 30,
    category: "Bottoms",
    specs: { material: "Wool Blend", size: "M", color: "Black" },
    availableSizes: ["S", "M", "L"]
  },
  {
    name: "Sunglasses",
    brand: "ShadeLux",
    price: 70.0,
    stock: 45,
    category: "Accessories",
    specs: { material: "Plastic", color: "Brown" },
    availableSizes: []
  },
  {
    name: "Linen Shirt",
    brand: "BreezeWear",
    price: 105.0,
    stock: 28,
    category: "Tops",
    specs: { material: "Linen", size: "L", color: "Beige" },
    availableSizes: ["M", "L", "XL"]
  }
]);

// Вмъкване на документи в колекция customers
db.customers.insertMany([
  {
    name: "Anna Petrova",
    email: "anna@example.com",
    phone: "0888123456",
    address: { city: "Sofia", street: "Vitosha Blvd 12" },
    loyaltyPoints: 150
  },
  {
    name: "Borislav Ivanov",
    email: "borislav@example.com",
    phone: "0888234567",
    address: { city: "Plovdiv", street: "Kapana 8" },
    loyaltyPoints: 85
  },
  {
    name: "Ivana Georgieva",
    email: "ivana@example.com",
    phone: "0888345678",
    address: { city: "Varna", street: "Primorski Blvd 3" },
    loyaltyPoints: 120
  },
  {
    name: "Elitsa Stoyanova",
    email: "elitsa@example.com",
    phone: "0888456789",
    address: { city: "Burgas", street: "Aleksandrovska 33" },
    loyaltyPoints: 95
  },
  {
    name: "Petya Dimitrova",
    email: "petya@example.com",
    phone: "0888567890",
    address: { city: "Ruse", street: "Baba Tonka 5" },
    loyaltyPoints: 60
  },
  {
    name: "Raya Todorova",
    email: "raya@example.com",
    phone: "0888678901",
    address: { city: "Sofia", street: "Cherni Vrah 88" },
    loyaltyPoints: 70
  },
  {
    name: "Kristina Koleva",
    email: "kristi@example.com",
    phone: "0888789012",
    address: { city: "Plovdiv", street: "6-ti Septemvri 11" },
    loyaltyPoints: 110
  },
  {
    name: "Tanya Marinova",
    email: "tanya@example.com",
    phone: "0888890123",
    address: { city: "Varna", street: "Slivnitsa 7" },
    loyaltyPoints: 130
  },
  {
    name: "Silvia Hristova",
    email: "silvia@example.com",
    phone: "0888901234",
    address: { city: "Burgas", street: "Troikata 9" },
    loyaltyPoints: 90
  },
  {
    name: "Dimitar Iliev",
    email: "dimitar@example.com",
    phone: "0888012345",
    address: { city: "Ruse", street: "Levski 22" },
    loyaltyPoints: 100
  }
]);

// Вмъкване на документи в колекция suppliers
db.suppliers.insertMany([
  {
    name: "FashionImports Ltd",
    contact: { phone: "029999999", email: "info@fashionimports.com" },
    country: "Italy",
    suppliedProducts: ["Silk Blouse", "Floral Dress"]
  },
  {
    name: "StyleWarehouse",
    contact: { phone: "028888888", email: "orders@stylewh.com" },
    country: "France",
    suppliedProducts: ["Leather Handbag", "Cashmere Scarf"]
  },
  {
    name: "ChicTrade",
    contact: { phone: "027777777", email: "sales@chictrade.eu" },
    country: "Germany",
    suppliedProducts: ["Denim Jeans", "Sneakers"]
  },
  {
    name: "BG Fashion Co",
    contact: { phone: "026666666", email: "office@bgfashion.bg" },
    country: "Bulgaria",
    suppliedProducts: ["Wool Coat", "Linen Shirt"]
  },
  {
    name: "EleganceHub",
    contact: { phone: "025555555", email: "contact@elegancehub.com" },
    country: "UK",
    suppliedProducts: ["Pencil Skirt", "Sunglasses"]
  },
  {
    name: "ModernoTextile",
    contact: { phone: "024444444", email: "textile@moderno.eu" },
    country: "Spain",
    suppliedProducts: ["Silk Blouse", "Wool Coat"]
  },
  {
    name: "FashionWorld",
    contact: { phone: "023333333", email: "support@fashionworld.net" },
    country: "Netherlands",
    suppliedProducts: ["Sneakers", "Denim Jeans"]
  },
  {
    name: "TrendDesign",
    contact: { phone: "022222222", email: "hello@trenddesign.pl" },
    country: "Poland",
    suppliedProducts: ["Floral Dress", "Pencil Skirt"]
  },
  {
    name: "AsiaStyle",
    contact: { phone: "021111111", email: "asia@style.com" },
    country: "Japan",
    suppliedProducts: ["Sunglasses", "Cashmere Scarf"]
  },
  {
    name: "ScandiFashion",
    contact: { phone: "020000000", email: "contact@scandifashion.se" },
    country: "Sweden",
    suppliedProducts: ["Linen Shirt", "Leather Handbag"]
  }
]);

// Вмъкване на документи в колекция orders
db.orders.insertMany([
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a1"),
    date: ISODate("2025-06-10"),
    items: [
      { product: "Silk Blouse", quantity: 1, price: 120.0 },
      { product: "Denim Jeans", quantity: 1, price: 90.0 }
    ],
    total: 210.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a2"),
    date: ISODate("2025-06-11"),
    items: [
      { product: "Cashmere Scarf", quantity: 2, price: 85.0 }
    ],
    total: 170.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a3"),
    date: ISODate("2025-06-12"),
    items: [
      { product: "Leather Handbag", quantity: 1, price: 250.0 }
    ],
    total: 250.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a4"),
    date: ISODate("2025-06-13"),
    items: [
      { product: "Floral Dress", quantity: 1, price: 180.0 }
    ],
    total: 180.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a5"),
    date: ISODate("2025-06-14"),
    items: [
      { product: "Sneakers", quantity: 1, price: 110.0 }
    ],
    total: 110.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a6"),
    date: ISODate("2025-06-15"),
    items: [
      { product: "Wool Coat", quantity: 1, price: 300.0 }
    ],
    total: 300.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a7"),
    date: ISODate("2025-06-16"),
    items: [
      { product: "Sunglasses", quantity: 1, price: 70.0 }
    ],
    total: 70.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a8"),
    date: ISODate("2025-06-17"),
    items: [
      { product: "Pencil Skirt", quantity: 1, price: 95.0 }
    ],
    total: 95.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a9"),
    date: ISODate("2025-06-18"),
    items: [
      { product: "Linen Shirt", quantity: 1, price: 105.0 }
    ],
    total: 105.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a1"),
    date: ISODate("2025-06-19"),
    items: [
      { product: "Cashmere Scarf", quantity: 1, price: 85.0 }
    ],
    total: 85.0
  }
]);

// Вмъкване на документи в колекция employees
db.employees.insertMany([
  {
    name: "Maria Dimitrova",
    position: "Sales Assistant",
    hireDate: ISODate("2023-03-01"),
    salary: 1300,
    skills: ["Customer Service", "POS", "Inventory"]
  },
  {
    name: "Ivan Stanchev",
    position: "Tailor",
    hireDate: ISODate("2022-07-15"),
    salary: 1700,
    skills: ["Fitting", "Repair", "Sewing"]
  },
  {
    name: "Tanya Petrova",
    position: "Cashier",
    hireDate: ISODate("2024-01-10"),
    salary: 1100,
    skills: ["POS", "Customer Service"]
  },
  {
    name: "Kiril Ivanov",
    position: "Inventory Manager",
    hireDate: ISODate("2021-05-20"),
    salary: 1900,
    skills: ["Stock", "Ordering", "Logistics"]
  },
  {
    name: "Desislava Koleva",
    position: "HR Specialist",
    hireDate: ISODate("2023-09-01"),
    salary: 1500,
    skills: ["Recruiting", "Payroll"]
  },
  {
    name: "Petar Georgiev",
    position: "Visual Merchandiser",
    hireDate: ISODate("2020-02-15"),
    salary: 1600,
    skills: ["Design", "Store Layout"]
  },
  {
    name: "Viktoria Nedeva",
    position: "Marketing Assistant",
    hireDate: ISODate("2024-04-01"),
    salary: 1400,
    skills: ["Social Media", "Campaigns"]
  },
  {
    name: "Nikolay Hristov",
    position: "Logistics Coordinator",
    hireDate: ISODate("2022-08-12"),
    salary: 1800,
    skills: ["Delivery", "Stock Planning"]
  },
  {
    name: "Stanislava Mihailova",
    position: "Accountant",
    hireDate: ISODate("2021-11-30"),
    salary: 2000,
    skills: ["Accounting", "Invoicing"]
  },
  {
    name: "Todor Zlatev",
    position: "Store Manager",
    hireDate: ISODate("2019-06-05"),
    salary: 2500,
    skills: ["Management", "Sales", "Strategy"]
  }
]);
