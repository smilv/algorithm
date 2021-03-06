/**
 * 提供一个 VDOM 对象，写一个 render 函数来让他变成一颗 DOM 树
 * bin 2020/3/19
 */

var vdom = {
    type: "div",
    props: {
        class: "div-1",
        style: "width:100px"
    },
    content: "1",
    children: [
        {
            type: "h1",
            attrs: {
                class: "h1-1",
                style: "background:#f3f3f3"
            },
            content: "1-1",
            children: [
                {
                    type: "h3",
                    attrs: {
                        class: "h1-2",
                        style: "background:#f3f3f3"
                    },
                    content: "1-1",
                    children: []
                }
            ]
        },
        {
            type: "h2",
            attrs: {
                class: "h2-1",
                style: "background:#f3f3f3"
            },
            content: "1-2",
            children: []
        }
    ]
};

function render(vdom) {
    let dom = document.createElement(vdom.type);
    for (name in vdom.attrs) {
        dom.setAttribute(name, vdom.attrs[name]);
    }
    dom.innerText = vdom.content;
    if (vdom.children.length > 0) {
        for (let i = 0; i < vdom.children.length; i++) {
            dom.appendChild(render(vdom.children[i]));
        }
    }
    return dom;
}

document.body.appendChild(render(vdom));
