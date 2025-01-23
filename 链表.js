/*
 * @Description: js实现链表
 * @Author: zhaobin
 * @Date: 2023-11-24 14:32:09
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-11-24 14:32:14
 */

/**
  链表是一种基本的数据结构，用于存储一系列元素。与数组不同，链表的元素在内存中不需要连续存储。
  链表由一系列节点组成，每个节点包含数据和指向下一个节点的指针（或引用）。以下是链表的一些关键概念：

  1. 节点（Node）
  每个链表节点通常包含两个部分：
  数据部分：存储节点的值或数据。
  指针部分：指向链表中下一个节点的指针（在双向链表中，还会有指向前一个节点的指针）。

  2. 链表的类型
  单向链表（Singly Linked List）：
  每个节点只包含一个指向下一个节点的指针。
  只能从头到尾遍历链表。

  双向链表（Doubly Linked List）：
  每个节点包含两个指针，一个指向下一个节点，一个指向前一个节点。
  可以双向遍历链表。
  
  循环链表（Circular Linked List）：
  最后一个节点的指针指向链表的头节点，形成一个环。
  可以是单向或双向的。
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// [head-> 1-> 3]
class NodeList {
  constructor() {
    this.head = new Node("head");
    this.size = 0;
  }
  // 在单链表中寻找item元素
  find(item) {
    let currentNode = this.head;
    while (currentNode && currentNode.value != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  // 在指定元素后向单链表中插入元素
  insert(element, item) {
    let currentNode = this.find(item);
    if (currentNode) {
      let newNode = new Node(element);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.size++;
    }
  }
  // 在单链表中删除一个节点
  remove(item) {
    let currentNode = this.find(item);
    if (currentNode) {
      currentNode.next = currentNode.next.next;
      this.size--;
    }
  }
  // 在单链表的尾部添加元素
  append(item) {
    let lastNode = this.findLast();
    lastNode.next = new Node(item);
    this.size++;
  }
  // 获取单链表的最后一个节点
  findLast() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  // 判断单链表是否为空
  isEmpty() {
    return this.size === 0;
  }
  // 获取单链表的长度
  getLength() {
    return this.size;
  }
  // 单链表的遍历显示
  display() {
    let currentNode = this.head;
    let result = currentNode.value;
    while (currentNode.next) {
      currentNode = currentNode.next;
      result += `->${currentNode.value}`;
    }
    return result;
  }
  // 清空单链表
  clear() {
    this.head.next = null;
    this.size = 0;
  }
}

const list = new NodeList();
const array = [1, 0, "c", 4, "a", "b"];
for (let i = 0; i < array.length; i++) {
  list.append(array[i]);
}
console.log(list.display());
