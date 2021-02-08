import React, {useRef, useState} from 'react';
import {BiSearchAlt2} from 'react-icons/bi';
import { useGlobalContext } from './context';

function Search() {

    const searchValue= React.useRef();
    const {searchTerm, books, setSearchTerm, setBooks} = useGlobalContext()
    const results=[];

    const handleSubmit=(e)=>{
        e.preventDefault();
        for(var i=0; i< books.length; i++){
            if(searchTerm === books[i].volumeInfo.title || searchTerm === books[i].volumeInfo.authors[0] || searchTerm === books[i].volumeInfo.publisher){
                results.push(books[i])
            }
        }
        console.log(results);
        setBooks(results);
        console.log(books);
        return books;
    }
    const searchBook = ()=>{
        setSearchTerm(searchValue.current.value);
        
    }
    return(
        <div>
            <form className='search' onSubmit={handleSubmit}>  
                
            <BiSearchAlt2 /> <input type='text' className='form-input' placeholder="Search" ref={searchValue} onChange={searchBook}></input>
            </form>
        </div>
    )
}

export default Search;