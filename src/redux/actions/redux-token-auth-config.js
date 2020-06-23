import { generateAuthActions } from 'redux-token-auth';

const config = {
//   authUrl: 'http://fbnib.azurewebsites.net/api/users/register',
  authUrl: 'http://fbnib.azurewebsites.net/api/users/login'
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}