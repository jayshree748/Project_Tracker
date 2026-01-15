const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const { generateToken } = require("../utils/token.util");

class AuthService {
  async signup(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({ email, password: hashedPassword });
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    return generateToken(user._id);
  }
}

module.exports = new AuthService();
