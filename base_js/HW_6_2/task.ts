// Паттерн строитель

interface IOrder{
    body:string
    color:string
    bodycar():void
    colorup():void
}


interface IFabric{
    order: OrderAuto | OrderMoto
    create():void

}


class OrderAuto implements IOrder{
    body: string
    color: string

    constructor(body: 'sedan' | 'pikap', color: string) {
        this.body = body
        this.color = color
    }

    bodycar(): void {
        console.log(`Создаем ${this.body}`)
    }

    colorup(): void {
        console.log(`Красим в ${this.color}`)
    }

}

class AutoFabric implements IFabric{
    order: OrderAuto
    constructor(order: OrderAuto) {
        this.order = order
    }

    create(): void {
        this.order.bodycar()
        this.order.colorup()
    }
}


class OrderMoto implements IOrder{
    body: string
    color: string

    constructor(body: 'sport' | 'urban', color: string) {
        this.body = body
        this.color = color
    }
    bodycar(): void {
        console.log(`Создаем ${this.body}`)
    }

    colorup(): void {
        console.log(`Красим в ${this.color}`)
    }
}

class MotoFabric implements IFabric{
    order: OrderMoto
    constructor(order: OrderMoto) {
        this.order = order
    }

    create(): void {
        this.order.bodycar()
        this.order.colorup()

    }
}


function builder(fabric: AutoFabric | MotoFabric): void {
    fabric.create()

}



let orderauto = new OrderAuto('sedan', 'black')
let fabric = new AutoFabric(orderauto)
let auto = builder(fabric)
console.log(auto)