
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;

    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }

    return curr.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    const node = new ListNode(val);
    node.next = this.head;
    this.head = node;
    this.size++;
};

MyLinkedList.prototype.addAtTail = function(val) {
    const node = new ListNode(val);
    if (!this.head) {
        this.head = node;
    } else {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node;
    }
    this.size++;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) return;
    if (index <= 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.size) {
        this.addAtTail(val);
        return;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }

    const node = new ListNode(val);
    node.next = curr.next;
    curr.next = node;
    this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
        this.head = this.head.next;
    } else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }

    this.size--;
};