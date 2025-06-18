// Свързване с базата данни boutique_shop
use('boutique_shop');

//
// ===================== READ ОПЕРАЦИИ =====================
//

// Извличане на всички продукти
db.products.find();

// Филтриране на продукти по категория "Accessories"
db.products.find({ category: "Accessories" });

// Филтриране на продукти по категория и марка
// Пример: продукти от категория "Tops" и марка "Eleganza"
db.products.find({ category: "Tops", brand: "Eleganza" });

// Извличане на всички клиенти
db.customers.find();

// Клиенти от град Sofia
db.customers.find({ "address.city": "Sofia" });

// Клиенти с повече от 100 точки за лоялност
db.customers.find({ loyaltyPoints: { $gt: 100 } });

//
// ===================== UPDATE ОПЕРАЦИИ =====================
//

// Актуализиране на цена на продукт с име "Silk Blouse"
// Пример: променяме цената на "Silk Blouse" от 120.0 на 125.0
db.products.updateOne(
  { name: "Silk Blouse" },
  { $set: { price: 125.0 } }
);

// Актуализиране на телефонен номер на клиент по имейл
// Пример: актуализиране на телефон за "anna@example.com"
db.customers.updateOne(
  { email: "anna@example.com" },
  { $set: { phone: "0888999999" } }
);

// Добавяне на нов продукт към доставчика
// Пример: добавяне на "Eco Scarf" към доставчика "FashionImports Ltd"
db.suppliers.updateOne(
  { name: "FashionImports Ltd" },
  { $addToSet: { suppliedProducts: "Eco Scarf" } }
);

//
// ===================== DELETE ОПЕРАЦИИ =====================
//

// Изтриване на продукт с име "Leather Handbag"
db.products.deleteOne({ name: "Leather Handbag" });

// Изтриване на клиент с конкретен имейл
// Пример: изтриване на клиент с имейл "petya@example.com"
db.customers.deleteOne({ email: "petya@example.com" });

// Изтриване на служител с име "Todor Zlatev"
db.employees.deleteOne({ name: "Todor Zlatev" });

//
// ===================== AGGREGATE PIPELINE =====================
//

// Групиране на продукти по категория и изчисляване на средна цена и общ брой артикули на склад
db.products.aggregate([
  { $group: {
      _id: "$category",
      avgPrice: { $avg: "$price" },
      totalStock: { $sum: "$stock" }
    }
  }
]);

// Броене на клиенти по град
db.customers.aggregate([
  { $group: {
      _id: "$address.city",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
]);

// Сумиране на стойности на поръчки по клиент
// Групира по customerId, като се изчислява общата сума и брой поръчки за всеки клиент
db.orders.aggregate([
  { $group: {
      _id: "$customerId",
      totalSpent: { $sum: "$total" },
      orderCount: { $sum: 1 }
    }
  },
  { $sort: { totalSpent: -1 } }
]);

// Извличане на служители със заплата над 1500, сортирани по заплата в низходящ ред
db.employees.aggregate([
  { $match: { salary: { $gt: 1500 } } },
  { $sort: { salary: -1 } }
]);
