const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const bcrypt = require('bcrypt');

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
    }, async (email, password, done) => {
        try {
            const user = await User.findOne({ email });
            if (!user) { return done(null, false, { message: 'User not found' }); }

            const validate = await bcrypt.compare(password, user.password);
            if (!validate) { return done(null, false, { message: 'Wrong Password' }); 
        }
        return done(null, user, { message: 'Logged in Successfully' });
        }
        catch (error) {
            return done(error);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    module.exports = passport;