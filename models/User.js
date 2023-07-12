import mongoose from 'mongoose'
import crypto from 'crypto'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: { type: String, required: false },
    passwordSalt: { type: String, required: false },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.setPassword = function (password) {
  this.passwordSalt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto
    .pbkdf2Sync(password, this.passwordSalt, 1000, 64, `sha512`)
    .toString(`hex`);
};
userSchema.methods.validPassword = function (password) {
  var passwordHash = crypto
    .pbkdf2Sync(password, this.passwordSalt, 1000, 64, `sha512`)
    .toString(`hex`);
  return this.passwordHash === passwordHash;
};

const User = mongoose.model('User', userSchema)
export default User