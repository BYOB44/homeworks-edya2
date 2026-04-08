export class NaryNode<T> {
    value: T;
    children: NaryNode<T>[];

    constructor(value: T) {
        this.value = value;
        this.children = [];
    }

    addChild(node: NaryNode<T>): void {
        this.children.push(node);
    }
}