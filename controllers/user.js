import generateToken from '../utils/generateToken.js'
import User from '../models/User.js'

const authUser = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: 'Invalid Login Data'
    })
  }

  const user = await User.findOne({ username })
  if (user && (await user.validPassword(password))) {
    res.json({
      _id: user._id,
      username: username,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password'
    })
  }
}

const registerUser = async (req, res) => {
  const { username, email, password } = req.body
  console.log('registerUser req.body: ', req.body)
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: 'Invalid User Data'
    })
  }

  const userExists = await User.findOne({ email })
  console.log('userExists: ', userExists)

  if (userExists) {
    return res.status(400).json({
      success: false,
      message: 'User already exists'
    })
  }
  
  const user = new User({
    username,
    email,
  })
  user.setPassword(password)
  await user.save()

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    return res.status(400).json({
      success: false,
      message: 'Invalid user data'
    })
  }
}


export {
  authUser,
  registerUser
}