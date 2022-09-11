import app from '../presentation/routes';
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: false,
  }, function (req, username, password, done) {
    process.nextTick(function () {
      if (username === "test" && password === "test") {
        return done(null, username)
      } else {
        console.log("login error")
        return done(null, false, { message: 'パスワードが正しくありません。' })
      }
    })
}));

passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
passport.deserializeUser<Express.User>(function (user, done) {
  done(null, user);
});

export default passport