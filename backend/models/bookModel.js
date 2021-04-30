import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    category:{
      type: String,
      required: true
    },
    numInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;
