// Свързване с базата данни
use('boutique_shop');

//////////////////////////////////////////////////////
// ============ ИЗВЛИЧАНЕ НА ДАННИ (READ) ============
//////////////////////////////////////////////////////

// --- PRODUCTS ---
// Всички продукти
db.products.find();

// Продукти от категория "Clothing"
db.products.find({ category: "Clothing" });

// Продукти с цена над 50 и налични
db.products.find({ price: { $gt: 50 }, stock: { $gt: 0 } });


// --- CUSTOMERS ---
// Всички клиенти
db.customers.find();

// Клиенти от град "Plovdiv"
db.customers.find({ "address.city": "Plovdiv" });

// Клиенти с повече от 5 поръчки
db.customers.find({ totalOrders: { $gt: 5 } });


// --- SUPPLIERS ---
// Всички доставчици
db.suppliers.find();

// Доставчици от "Italy"
db.suppliers.find({ country: "Italy" });

// Доставчици, които доставят "Dress"
db.suppliers.find({ suppliedProducts: "Dress" });


// --- ORDERS ---
// Всички поръчки
db.orders.find();

// Поръчки с обща сума над 200
db.orders.find({ total: { $gt: 200 } });

// Поръчки от клиент със специфично ID
db.orders.find({ customerId: ObjectId("665f2207aa7a4eb9ef8cb1ac") });


// --- EMPLOYEES ---
// Всички служители
db.employees.find();

// Служители с позиция "Manager"
db.employees.find({ position: "Manager" });

// Служители с над 3 години стаж и заплата над 2000
db.employees.find({ experience: { $gt: 3 }, salary: { $gt: 2000 } });

//////////////////////////////////////////////////////
// ============ АКТУАЛИЗАЦИЯ (UPDATE) ===============
//////////////////////////////////////////////////////

// --- PRODUCTS ---
db.products.updateOne(
  { name: "Leather Jacket" },
  { $set: { price: 199.99 } }
);

// --- CUSTOMERS ---
db.customers.updateOne(
  { email: "maria@example.com" },
  { $set: { phone: "0888123456" } }
);

// --- SUPPLIERS ---
db.suppliers.updateOne(
  { name: "Moda Italia" },
  { $addToSet: { suppliedProducts: "Handbag" } }
);

// --- ORDERS ---
db.orders.updateOne(
  { total: { $gt: 300 } },
  { $set: { status: "shipped" } }
);

// --- EMPLOYEES ---
db.employees.updateOne(
  { name: "Elena Dimitrova" },
  { $set: { salary: 2300 } }
);

//////////////////////////////////////////////////////
// ================ ИЗТРИВАНЕ (DELETE) ==============
//////////////////////////////////////////////////////

// --- PRODUCTS ---
db.products.deleteOne({ name: "Summer Hat" });

// --- CUSTOMERS ---
db.customers.deleteOne({ email: "oldcustomer@example.com" });

// --- SUPPLIERS ---
db.suppliers.deleteOne({ name: "Old Textiles" });

// --- ORDERS ---
db.orders.deleteOne({ total: { $lt: 30 } });

// --- EMPLOYEES ---
db.employees.deleteOne({ name: "Petar Ivanov" });

//////////////////////////////////////////////////////
// ================= АГРЕГИРАНЕ (AGGREGATE) =========
//////////////////////////////////////////////////////

// --- PRODUCTS ---
// 1. Средна цена и обща наличност по категория
db.products.aggregate([
  {
    $group: {
      _id: "$category",
      avgPrice: { $avg: "$price" },
      totalStock: { $sum: "$stock" }
    }
  },
  { $sort: { avgPrice: -1 } }
]);

// 2. Брой продукти по марка
db.products.aggregate([
  {
    $group: {
      _id: "$brand",
      productCount: { $sum: 1 }
    }
  },
  { $sort: { productCount: -1 } }
]);

// --- CUSTOMERS ---
// 1. Брой клиенти по град
db.customers.aggregate([
  {
    $group: {
      _id: "$address.city",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
]);

// 2. Среден брой поръчки по възрастова група
db.customers.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [18, 30, 45, 60, 100],
      default: "Other",
      output: {
        avgOrders: { $avg: "$totalOrders" },
        count: { $sum: 1 }
      }
    }
  }
]);

// --- SUPPLIERS ---
// 1. Групиране на доставчици по държава с брой доставени продукти
db.suppliers.aggregate([
  {
    $project: {
      name: 1,
      country: 1,
      productCount: { $size: "$suppliedProducts" }
    }
  },
  {
    $group: {
      _id: "$country",
      totalProducts: { $sum: "$productCount" },
      suppliers: { $push: "$name" }
    }
  },
  { $sort: { totalProducts: -1 } }
]);

// 2. Брой доставчици по държава
db.suppliers.aggregate([
  {
    $group: {
      _id: "$country",
      supplierCount: { $sum: 1 }
    }
  },
  { $sort: { supplierCount: -1 } }
]);

// --- ORDERS ---
// 1. Общо похарчено и брой поръчки по клиент
db.orders.aggregate([
  {
    $group: {
      _id: "$customerId",
      totalSpent: { $sum: "$total" },
      orderCount: { $sum: 1 }
    }
  },
  { $sort: { totalSpent: -1 } }
]);

// 2. Брой поръчки по статус
db.orders.aggregate([
  {
    $group: {
      _id: "$status",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
]);

// --- EMPLOYEES ---
// 1. Средна заплата и брой служители по позиция
db.employees.aggregate([
  {
    $group: {
      _id: "$position",
      avgSalary: { $avg: "$salary" },
      count: { $sum: 1 }
    }
  },
  { $sort: { avgSalary: -1 } }
]);

// 2. Брой служители по град
db.employees.aggregate([
  {
    $group: {
      _id: "$address.city",
      employeeCount: { $sum: 1 }
    }
  },
  { $sort: { employeeCount: -1 } }
]);
