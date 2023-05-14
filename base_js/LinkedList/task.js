class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = { data: data, next: null }
        if (this.tail) {
            this.tail.next = node
        }
        if (!this.head) {
            this.head = node
        }
        this.tail = node
    }
    
    find(element) {
        if (!this.head) {
            console.log('List is empty')
            return
        }

        let curr_element = this.head
        while (curr_element) {
            if (curr_element.data == element) {
                return curr_element
            }
            curr_element = curr_element.next
        }
        console.log('Not found')
    }

    prepand(data) {
        const node = { data: data, next: null }
        if (this.head) {
            node.next = this.head
        }

        this.head = node
        if (!this.tail) {
            this.tail = node
        }
    }

    remove(data) {
        if (!this.head) {
            console.log('List is empty')
            return
        }

        while (this.head.data === data) {
            this.head = this.head.next
        }

        let curr_element = this.head
        while (curr_element.next) {
            if (curr_element.next.data === data) {
                curr_element.next = curr_element.next.next
            } else {
                curr_element = curr_element.next
            }
        }


    }

    toArray() {
        const output = []
        let current = this.head
        while (current) {
            output.push(current)
            current = current.next
        }
        return output
    }
}

const list = new LinkedList()
list.append('Friend')
list.append('My')
list.prepand('Hello')
list.prepand('Hello')
list.remove('Hello')
console.log(list.toArray())