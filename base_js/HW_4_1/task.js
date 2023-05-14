// Двусвязанный список

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        // Вставка значений в конец массива
        const node = { previous: null, data, next: null }

        if (this.tail) {
            // Присоединяем новый узел к концу связного списка.
            this.tail.next = node;
        }
        if (!this.head) {
            this.head = node
        }
        node.previous = this.tail
        this.tail = node
    }

    remove(element) {
        if (!this.head) {
            console.log('Список пуст')
            return
        }
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.data === element) {
                // Если элемент равен head
                if (currentNode === this.head) {
                    // переназначем head на следующий узел
                    this.head = this.head.next
                    if (this.head) {
                        this.head.previous = null
                    }
                    if (currentNode === this.tail) {
                        this.tail = null
                    }
                }

                // Если элемент равен tail
                else if (currentNode === this.tail) {
                    // Переназначаем tail предыдущему элементу
                    this.tail = this.tail.previous
                    this.tail.next = null
                }
                else {
                    let previous = currentNode.previous
                    let next = currentNode.next
                    previous.next = next
                    next.previous = previous
                }
            }
            currentNode = currentNode.next
        }
    }

    prepend(data) {
        // Вставка значений в начало массива
        const node = { previous: null, data, next: null }
        if (this.head) {
            this.head.previous = node
            node.next = this.head
            node.previous = node
        }
        this.head = node
        if (!this.tail) {
            this.tail = node
        }
        return this
    }

    toArray() {
        // Создание массива из узлов
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        // Возвращаем массив из всех узлов.
        console.log(nodes)
        return nodes;
    }

    find(element) {
        if (!this.head) {
            console.log('List is empty')
            return
        }
        let currentNode = this.head
        while (currentNode) {
            if (currentNode === this.head && currentNode.data === element) {
                console.log(currentNode)
                return
            }

            if (currentNode.data === element) {
                console.log(currentNode)
                return
            }
            currentNode = currentNode.next
        }
        console.log('Element not found')
    }
}



let list = new DoubleLinkedList()
list.append('hi')
list.append('my')
list.append('friend')
list.append('!')
list.find('!')