import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import { AppPaths, SECRETS } from "@app/constants";
import { User, UserService } from "@app/models";
import config from "config";

const GoogleStrategy = passportGoogle.Strategy;
const callbackURL = `http://localhost:5000${AppPaths.api}${AppPaths.auth}${AppPaths.google}${AppPaths.redirect}`;

passport.serializeUser((user, done) => {
  done(null, (user as User).id);
});

passport.deserializeUser((id, done) => {
  const userService = new UserService(config.postgres.client);

  userService.get(id as string).then((user) => {
    done(null, user as User);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: SECRETS.GOOGLE_CLIENT_ID,
      clientSecret: SECRETS.GOOGLE_CLIENT_SECRET,
      callbackURL,
    },
    (accessToken, refreshToken, profile, done) => {
      const userService = new UserService(config.postgres.client);
      userService.searchOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          done(null, currentUser);
        } else {
          // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
          const { given_name, family_name, email, sub } = profile._json;

          userService
            .create({
              googleId: sub,
              firstName: given_name,
              lastName: family_name,
              email,
            })
            .then((newUser) => {
              done(null, newUser as User);
            });
        }
      });
    },
  ),
);
// {
//   id: '118151428668553027184',
//   displayName: 'P K',
//   name: { familyName: 'K', givenName: 'P' },
//   emails: [ { value: 'aimanptz@gmail.com', verified: true } ],
//   photos: [
//     {
//       value: 'https://lh3.googleusercontent.com/a/ACg8ocLwD2N47gWkRpA_dbgu5rvm7i9K6EjrsLA5Ig-_xtaaSN8=s96-c'
//     }
//   ],
//   provider: 'google',
//   _raw: '{\n' +
//     '  "sub": "118151428668553027184",\n' +
//     '  "name": "P K",\n' +
//     '  "given_name": "P",\n' +
//     '  "family_name": "K",\n' +
//     '  "picture": "https://lh3.googleusercontent.com/a/ACg8ocLwD2N47gWkRpA_dbgu5rvm7i9K6EjrsLA5Ig-_xtaaSN8\\u003ds96-c",\n' +
//     '  "email": "aimanptz@gmail.com",\n' +
//     '  "email_verified": true,\n' +
//     '  "locale": "en"\n' +
//     '}',
//   _json: {
//     sub: '118151428668553027184',
//     name: 'P K',
//     given_name: 'P',
//     family_name: 'K',
//     picture: 'https://lh3.googleusercontent.com/a/ACg8ocLwD2N47gWkRpA_dbgu5rvm7i9K6EjrsLA5Ig-_xtaaSN8=s96-c',
//     email: 'aimanptz@gmail.com',
//     email_verified: true,
//     locale: 'en'
//   }
// }
