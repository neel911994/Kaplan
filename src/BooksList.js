import React, {useState, useEffect} from 'react'
import {useGlobalContext} from './context'

export default function BookList(){

    const{ loading, books } = useGlobalContext()
    
    if(loading){
        console.log(loading);
        return(
            
            <h3>Loading...</h3>
        )
    }else{
        console.log(books);
        return(
            <section>
                <h1 className='sub-header'>All Books</h1>
                <div className='booklist'>
                {
                        books.map((book)=>{
                            const details= book.volumeInfo;
                            const{title,publisher,publishedDate,authors}=details;
                            return(
                                <div className='book'>
                                    <h3>{title}</h3>
                                    <p>Authors: {authors}</p>
                                    <p>Publisher: {publisher}</p>
                                    <p>Published Date: {publishedDate}</p>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </section>
        );
    }
}

