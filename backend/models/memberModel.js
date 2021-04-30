import mongoose  from 'mongoose';

const memberSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        telephone:{
            type: Number,
            required: true
        },
        totalRent:{
            type: Number
        },
        PaidRent:{
            type: Number,
        }
    }

)

const Member = mongoose.model('Member', memberSchema)
export default Member;