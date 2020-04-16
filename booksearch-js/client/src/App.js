import React, { Component } from 'react';
import Search from './components/Search';
import Book from './components/Book';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }

    getSearchTerms = (searchTerms) => {
        this.callAPI(searchTerms);
    }

    callAPI(searchTerms) {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        const API_KEY = 'YOUR API KEY HERE';
        fetch(`${BASE_URL}${encodeURI(searchTerms)}&key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                var books = data.items.map(book => {
                    return [
                        book.volumeInfo.title,
                        book.volumeInfo.authors[0],
                        book.volumeInfo.description,
                        book.volumeInfo.pageCount,
                        book.volumeInfo.imageLinks.thumbnail,
                        book.volumeInfo.infoLink,
                        book.id
                    ]
                })
                this.setState({books: books})
            })
            .catch(err => err);
    }

    render() {
        let books = this.state.books.map(book => {
            return <Book title={book[0]}
                authors={book[1]}
                description={book[2]}
                pageCount={book[3]}
                thumbnail={book[4]}
                infoLink={book[5]}
                key={book[6]} />;
        });
        return (
            <div>
                <Search callbackFromParent={this.getSearchTerms} />
                {books}
            </div>
        );
    }
}

export default App;
