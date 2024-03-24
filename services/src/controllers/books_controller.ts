const { db } = require("../firebase/admin");
const { v4: uuidv4 } = require('uuid');

import { Request, Response }  from "express";
import { doc, setDoc, DocumentData, QuerySnapshot, QueryDocumentSnapshot } from"firebase/firestore";

type BookDocument = QueryDocumentSnapshot<DocumentData>;
type BookSnapshot = QuerySnapshot<DocumentData>



class BooksController{
    
    async getAllBooks(req : Request, res : Response){
        
        const bookReference = db.collection('books-collection');
        
        try{

            bookReference.get().then((snapshot : BookSnapshot) => {
                
                if(!snapshot.empty){
                    const data = snapshot.docs.map((doc : BookDocument) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                    return res.status(200).json(data);
                }
                return res.status(501).json({message : "No books registered!"});            
                
            });
        }
        catch(ExceptError){
            return res.status(500).json({general : "Something went wrong, please try again."});
        };

    }

    async getBookById(req : Request, res : Response){

        const { id } = req.params;        
        const bookReference = db.collection('books-collection').doc(id);

        bookReference.get().then((doc: BookDocument) => {
            
            if (doc.exists) {
                const data = doc.data();
                return res.status(200).json(data);
            } 

            return res.status(404).json({ message: "Document not found" });

        }).catch((error: any) => {
            console.error("Error getting document:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        });      
    }

    async createNewBook(req : Request, res : Response){

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

    async updateBook(req : Request, res : Response){
        try{               
            const bodyData = req.body;

            const { id } = req.params;        
            const bookReference = db.collection('books-collection').doc(id);
    
            bookReference.get().then(async (doc: BookDocument) => {
                
                if (doc.exists) {
                    await bookReference.update(bodyData);        
                    return res.status(201).json({message : "Success! Book Updated."})
                } 
    
                return res.status(404).json({ message: "Document not found" });
                
            }).catch((error: any) => {
                console.error("Error getting document:", error);
                return res.status(500).json({ error: "Internal Server Error" });
            }); 
        }
        catch(ExceptError){
            console.log(ExceptError);
            return res.status(500).json({message : "Something went wrong, please try again."});
        }

    }  
    
    async deleteBook(req : Request, res : Response){
      
        const { id } = req.params;
        const bookReference = db.collection('books-collection').doc(id);

        bookReference.get().then(async (doc: BookDocument) => {
                
            if (doc.exists) {
                await bookReference.delete();        
                return res.status(201).json({message : "Success! Book Deleted."})
            } 

            return res.status(404).json({ message: "Document not found" });
            
        }).catch((error: any) => {
            console.error("Error getting document:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }); 

    }
    
}

const bookscontroller = new BooksController;

module.exports = { bookscontroller };