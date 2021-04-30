import Book from '../models/bookModel.js';
import asyncHandler from 'express-async-handler';


const getBooks = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const selectedPage = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};
  const bookCount = await Book.countDocuments({...keyword });
  const books = await Book.find({...keyword})
    .limit(pageSize)
    .skip(pageSize * (selectedPage - 1));

  res.json({ books, selectedPage, totalPages: Math.ceil(bookCount / pageSize) });
});


const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    res.json(book);
  } else {
    res.status(404);
    throw new Error('Product not found');
    // 404 - not found
  }
});

const updateBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    book.name = req.body.name || book.name;
    book.authorName = req.body.authorName || book.authorName
    book.category = req.body.category || book.category;
    book.numInStock = req.body.numInStock || book.numInStock;

    const updatedBook = await book.save();
    res.json({
      _id: updatedBook._id,
      name: updatedBook.name,
      authorName: updateBookById.authorName,
      category: updatedBook.category,
      numInStock: updatedBook.numInStock,
    });
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

const deleteBookById = asyncHandler(async (req, res) => {
  const bookDeleted = await Book.findByIdAndDelete(req.params.id);

  if (bookDeleted) {
    res.json({
      message: 'Book removed',
    });
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

const createBook = asyncHandler(async (req, res) => {
  const book = new Book({
    user: req.user._id,
    name: ' ',
    authorName:'',
    category: ' ',
    numInStock: 0,
  });

  if (book) {
    const newBook = await book.save();
    res.status(201).json(newBook);
  }
});

export {getBookById, getBooks, updateBookById, deleteBookById,createBook }