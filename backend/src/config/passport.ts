import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import authenticationService from '../app/service/authenticationService'

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: false,
  }, function (req, username, password, done) {
    process.nextTick(async function () {
        const user = await authenticationService.findForLogin(username, password)
      if (user) {
        return done(null, user)
      } else {
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