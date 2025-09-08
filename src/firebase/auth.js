import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from './exports.js'; // eslint-disable-line import/no-unresolved

import { app } from './config.js';

const provider = new GoogleAuthProvider(app);

export function loginUser(email, password) {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginGoogle() {
  const auth = getAuth(app);
  return signInWithPopup(auth, provider);
}

export async function newUser(email, password, name) {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => updateProfile(auth.currentUser, {
      displayName: name,
    }));
}

export async function logout() {
  const auth = getAuth(app);
  return signOut(auth);
}
export function getUser() {
  const auth = getAuth(app);
  return auth.currentUser;
}
