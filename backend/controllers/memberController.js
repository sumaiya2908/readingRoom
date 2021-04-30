import Member from '../models/memberModel.js';
import asyncHandler from 'express-async-handler';

const getMembers = asyncHandler(async (req, res) => {
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
  const memberCount = await Member.countDocuments({...keyword });
  const members = await Member.find({...keyword})
    .limit(pageSize)
    .skip(pageSize * (selectedPage - 1));

  res.json({ books, selectedPage, totalPages: Math.ceil(bookCount / pageSize) });
});

const getMemberById = asyncHandler(async (req, res) => {
  const book = await Member.findById(req.params.id);

  if (book) {
    res.json(book);
  } else {
    res.status(404);
    throw new Error('Product not found');
    // 404 - not found
  }
});

const updateMemberById = asyncHandler(async (req, res) => {
  const book = await Member.findById(req.params.id);

  if (book) {
    book.name = req.body.name || book.name;
    book.authorName = req.body.authorName || book.authorName
    book.category = req.body.category || book.category;
    book.numInStock = req.body.numInStock || book.numInStock;

    const updatedMember = await member.save();
    res.json({
      _id: updatedMember._id,
      name: updatedMember.name,
      age: updatedMember.age,
      telephone: updatedMember.telephone
    });
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

const deleteMemberById = asyncHandler(async (req, res) => {
  const memberDeleted = await Member.findByIdAndDelete(req.params.id);

  if (memberDeleted) {
    res.json({
      message: 'Member removed',
    });
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

// @desc Create a product
// @route POST /api/products/:id
// @acess Private/Admin
const createMember = asyncHandler(async (req, res) => {
  const member = new Member({
    member: req.member._id,
    name: ' ',
    age:0,
    telephone: 0,
  });

  if (member) {
    const newMember = await member.save();
    res.status(201).json(newMember);
  }
});

export {getMembers,updateMemberById,deleteMemberById,createMember,getMemberById};