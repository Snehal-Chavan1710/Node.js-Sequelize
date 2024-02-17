const db=require('../models')

const getAuthor= async (req, res) => {

    try {
  
      let author = await db.Author.findAll();
      console.log("getAuthor")
  
      res.send(author);
  
    } catch (error) {
      console.log(error)
      res.json(error);
    }
}

const getAuthorById= async (req, res) => {
 
    try {
   
        let author = await db.Author.findOne({
          where: {
            id: req.params.id
          }
        })
   
        console.log("getAuthorById")
        if (!author) {
          res.send('Author not found');
        }
   
        res.send(author);
   
      } catch (error) {
        res.json(error);
      }
  };

  const createAuthor= async (req, res) => {
 
    try {
 
      await db.Author.create({
 
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
       
 
      });
      console.log("createAuthor")
 
      res.send('Author added');
 
    } catch (error) {
      res.json(error);
    }
 
  };
  
const updateAuthor= async (req, res) => {

    try {
  
      const author = await db.Author.findByPk(req.params.id);

      console.log("UpdateAuthor")

  
      if (!author) {
  
        res.send('Author not found');
      } else {
  
        await author.update({
  
          name: req.body.name,
          address: req.body.address,
          contact: req.body.contact,
         
        });
  
        res.send('Author Updated');
  
      }
    } catch (error) {
      res.json(error);
    }
  
  };

const deleteAuthor= async (req, res) => {

    try {
  
      const author = await db.Author.findByPk(req.params.id);
      console.log("delete Author")

  
      if (!author) {
  
        res.send('Author not found');
      } else {
  
        await author.destroy();
  
        res.send('Author Deleted');
  
      }
    } catch (error) {
      res.json(error);
    }
};

module.exports = {
    getAuthor,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
};