/*
 * @Description: js实现链表
 * @Author: zhaobin
 * @Date: 2023-11-24 14:32:09
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-11-24 14:32:14
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
  insert(element, item) {}
  remove(item) {} // 在单链表中删除一个节点
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
