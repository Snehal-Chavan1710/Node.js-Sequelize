const express=require('express')
const router=express.Router()
const {getBooks, getBookById, createBook, updateBook, deleteBook,getAuthorBookById}=require('../services/book')

router.get('/books',getBooks)
router.get('/books/:id',getBookById)
router.post('/books',createBook)
router.put('/books/:id',updateBook)
router.delete('/books/:id',deleteBook)

router.get('/author/:author_id/books',getAuthorBookById)

module.exports=router