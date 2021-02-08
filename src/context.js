import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [books, setBooks] = useState([])
    const url = 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep'
  
    const fetchBooks = useCallback(async () => {
      setLoading(true)
      try {

            console.log('inside fetch')
            setLoading(false);
            const response = await fetch(url)
            const data = await response.json()
           
            //console.log(data);
            const my_arr =data.items
            //console.log(my_arr);
            setBooks(my_arr);
        
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    },[searchTerm, books])
    useEffect(() => {
      fetchBooks()
    }, [searchTerm])
    return (
      <AppContext.Provider
        value={ {loading, books, searchTerm, setSearchTerm, setBooks} }
      >
        {children}
      </AppContext.Provider>
    )
  }

  export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }