const { db } = require("../firebase/admin");

const { doc, setDoc } = require("firebase/firestore");
const { v4: uuidv4 } = require('uuid');


class BooksController{
    
    async getAllBooks(req, res){
        
        const bookReference = db.collection('books-collection');
        
        try{

            bookReference.get().then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                
                return res.status(201).json(data);
            });
        }
        catch(ExceptError){
            return res.status(500).json({general : "Something went wrong, please try again."});
        };

    }

    async getBookById(req, res){

        const { id } = req.params;        
        const bookReference = db.collection('books-collection').doc(id);

        if(bookReference !== null){
            return res.status(201).json((await bookReference.get()).data());
        }
        return res.status(501).json({message : "This Book Dont Exists!"});            
    }

    async createNewBook(req, res){

        try{
            const uuid = uuidv4();

            const bookReference = db.collection('books-collection');
            const bodyData = req.body;
    
            const newBook = {
                "book_title" : bodyData.book_title,
                "isbn" :  bodyData.isbn,
                "pages" :  bodyData.pages,    
            }
    
            await bookReference.doc(uuid).set(newBook);
    
        
            return res.status(201).json({message : "Success! Book Created."})
        }
        catch(ExceptError){
            console.log(ExceptError);
            return res.status(500).json({message : "Something went wrong, please try again."});
        }

    }

    async updateBook(req, res){

        try{               
            const bodyData = req.body;
            const { id } = req.params;

            const bookReference = db.collection('books-collection').doc(id);

            if(bookReference !== null){
                await bookReference.update(bodyData);        
                return res.status(201).json({message : "Success! Book Updated."})
            }
            return res.status(500).json({message : "This Book Dont Exists!"});            
        }
        catch(ExceptError){
            console.log(ExceptError);
            return res.status(500).json({message : "Something went wrong, please try again."});
        }

    }  
    
    async deleteBook(req, res){
      
        const { id } = req.params;
        const bookReference = db.collection('books-collection').doc(id);
        
        
        if(bookReference !== null){
            await bookReference.delete();        
            return res.status(201).json({message : "Success! Book Deleted."})
        }
        return res.status(500).json({message : "This Book Dont Exists!"});            
    }
    
}

const bookscontroller = new BooksController;

module.exports = { bookscontroller };