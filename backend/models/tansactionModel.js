import mongoose  from 'mongoose';

const transactionSchema = mongoose.Schema(
    {
        member: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Member',
          },
          book: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Book',
          },
          status:{
              type: {in: ['return', 'borrow']},
              required:true
          }


    },
    { timestamps: true }

)

const Transaction = mongoose.model('Transaction', transactionSchema)
export default Transaction ;