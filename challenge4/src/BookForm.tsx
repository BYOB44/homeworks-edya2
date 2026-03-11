import {useState} from 'react';
import {type IBook} from './BookStack';

interface Props {
    addBook: (book: IBook) => void;

}

function BookForm({addBook}: Props) {

    const [name, setName] = useState('');
    const [isbn, setIsbn] = useState(0);
    const [author, setAuthor] = useState('');
    const [editorial, setEditorial] = useState('');

    const handLeSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const newBook: IBook = {
            name,
            isbn,
            author,
            editorial
        };

        addBook(newBook);
        setName('');
        setIsbn(0);
        setAuthor('');
        setEditorial('');
    }
    return(
        <form onSubmit ={handLeSubmit}>
            <h2> Agrega un libro</h2>

            <input 
                type="text"
                value= {name}
                onChange= {(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder='ISBN'
                value={isbn}
                onChange={(e) => setIsbn(Number(e.target.value))}
            />

            

            <input
                placeholder='Author'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />

            <input
                placeholder='Editorial'
                value={editorial}
                onChange={(e) => setEditorial(e.target.value)}
            />

            <button type="submit">Agregar libro</button>
        </form>

            
    )
}

export default BookForm;