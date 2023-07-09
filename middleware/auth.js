import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import config from "../config/index.js";

const protect = async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, config.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      // console.log(req.user)
      next()
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        success: false,
        message: 'Not authorized, token failed'
      })
    }
  }
  if (!token) {
    return res.status(400).json({
      success: false,
      message: 'Not authorized, no token'
    })
  }
}

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    return res.status(400).json({
      success: false,
      message: 'Not authorized as an admin!'
    })
  }
}

export { protect, admin }