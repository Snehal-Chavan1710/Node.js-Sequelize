const express=require('express')
const router=express.Router()
const {getAuthor, getAuthorById, createAuthor, updateAuthor, deleteAuthor}=require('../services/author')

router.get('/author',getAuthor)
router.get('/author/:id',getAuthorById)
router.post('/author',createAuthor)
router.put('/author/:id',updateAuthor)
router.delete('/author/:id',deleteAuthor)

module.exports=router