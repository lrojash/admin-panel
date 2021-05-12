const bcrypt = require('bcrypt');
require('dotenv').config()
const saltRounds = parseInt(process.env.SALT_ROUNDS);

// generates the hashed password that is being stored in database
const generatePassword = async (password) => {
    const password_digest = await bcrypt.hash(password, saltRounds);
    return password_digest;
}

// will check passwords for a match
const checkPassword = async (sentPassword, storedPassword) => {
    const passwordValid = await bcrypt.compare(sentPassword, storedPassword);
    return passwordValid
}

module.exports = {
    generatePassword,
    checkPassword,
}