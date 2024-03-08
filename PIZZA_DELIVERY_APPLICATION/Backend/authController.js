const User = require('./modelSchema').User;
const { sendVerificationEmail, sendResetPasswordEmail } = require('./modelSchema').EmailService;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();



//Register new user

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

  //Login a user

exports.login = async (req, res) => {
    let user;
    try {
        user = await User.findOne({
            email: req.body.email, 
        });
        if (!user) {
            return res.status(400).json('User not found');
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json('Invalid password');
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user });
    }
    catch (error) {
        res.status(500).json(error);
}

// verify email

exports.verifyEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            res.status(400).json('Email already exists');
        }
        res.status(200).json('Email is available');
    }
    catch (error) {
        res.status(500).json(error);
    }
  
}

// forgot password

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json('User not found');
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_RESET_PASSWORD, { expiresIn: '10m' });
        sendResetPasswordEmail(email, token);
        res.status(200).json('Reset password link sent to email');
    }
    catch (error) {
        res.status(500).json(error);
    }
};

// reset password

exports.resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        const decoded = jwt.verify(token, process.env.JWT_RESET_PASSWORD);
        const user = await User.findById(decoded._id);
        if (!user) {
            res.status(404).json('User not found');
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json('Password reset successful');
    }
    catch (error) {
        res.status(500).json(error);
    };
};

// get user

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json(error);
    };
};

// update user

exports.updateUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate(req.user.id, {
            username,
            email,
            password: hashedPassword,
        });
        res.status(200).json('User has been updated');
    }
    catch (error) {
        res.status(500).json(error);
    }
};
}


// delete user

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.id);
        res.status(200).json('User has been deleted');
    }
    catch (error) {
        res.status(500).json(error);
    }
};
