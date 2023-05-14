// Паттерн строитель
class OrderAuto {
    body;
    color;
    constructor(body, color) {
        this.body = body;
        this.color = color;
    }
    bodycar() {
        console.log(`Создаем ${this.body}`);
    }
    colorup() {
        console.log(`Красим в ${this.color}`);
    }
}
class AutoFabric {
    order;
    constructor(order) {
        this.order = order;
    }
    create() {
        this.order.bodycar();
        this.order.colorup();
    }
}
class OrderMoto {
    body;
    color;
    constructor(body, color) {
        this.body = body;
        this.color = color;
    }
    bodycar() {
        console.log(`Создаем ${this.body}`);
    }
    colorup() {
        console.log(`Красим в ${this.color}`);
    }
}
class MotoFabric {
    order;
    constructor(order) {
        this.order = order;
    }
    create() {
        this.order.bodycar();
        this.order.colorup();
    }
}
function builder(fabric) {
    fabric.create();
}
let orderauto = new OrderAuto('sedan', 'black');
let fabric = new AutoFabric(orderauto);
let auto = builder(fabric);
console.log(auto);
