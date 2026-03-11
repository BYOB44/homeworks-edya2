export interface IBook {
    name: string;
    isbn: number;
    author: string;
    editorial: string; 
}

export class Book{
    private stack: IBook [] = []

    push(book: IBook){
        this.stack.push(book)
    }
    pop(){
        return this.stack.pop()
    }
    getBooks(){
        return this.stack
    }
}
