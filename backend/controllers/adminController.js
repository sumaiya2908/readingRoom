import Admin  from '../models/adminModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateTokens.js';

const authAdmin = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
  
    //user authentication
    if (admin && (await admin.matchPassword(password))) {
      res.json({

        username: admin.username,
        token: generateToken(username), // User authorization
      });
    } else {
      res.status(401); //401 - Unauthorized
      throw new Error('Invalid username or password');
    }
  });

  const getAdminById = asyncHandler(async (req, res) => {
    const Admin = await Admin.findById(req.params.id).select('-password');
    res.json(Admin);
  });
  export {authAdmin , getAdminById};