/**
 * 发布-订阅主体
 * bin 2020/3/13
 */

const officeAccounts = {
    //订阅者
    subscribers: {
        /**
         * any: 业务类型
         * []: 该业务类型下所有订阅者fn
         */
        any: []
    },
    //订阅
    subscribe: function(type, fn) {
        //如果没有当前业务，添加一种
        if (!Object.prototype.hasOwnProperty.call(this.subscribers, type)) {
            this.subscribers[type] = [];
        }
        //将订阅者的fn存在当前业务数组中
        this.subscribers[type].push(fn);
    },
    //取消订阅
    unSubscribe: function(type, fn) {
        let index = this.subscribers[type].indexOf(fn);
        if (index != -1) this.subscribers[type].splice(index, 1);
    },
    //发布
    publish: function(type, ...args) {
        //找到对应的业务类型,执行所有的订阅者fn
        if (Object.prototype.hasOwnProperty.call(this.subscribers, type)) {
            this.subscribers[type].forEach(fn => {
                fn(...args);
            });
        }
    }
};

/**
 * 订阅着的回调函数
 * @param {*} data 发布时接收的数据
 */
function fn(data){
    console.log(`我收到了${data}`)
}

/**
 * 订阅
 */
officeAccounts.subscribe("北京晚报",fn);

/**
 * 取消订阅
 */
officeAccounts.unSubscribe("北京晚报", fn);

/**
 * 发布
 */
officeAccounts.publish("北京晚报", "北京晚报消息体");
