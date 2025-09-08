import {
  loginUser, loginGoogle, newUser, logout, getUser,
} from '../../src/firebase/auth.js';

import {
  signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, signOut,
} from '../../src/firebase/exports.js';

jest.mock('../../src/firebase/exports.js');

describe('loginUser', () => {
  it('should be a function', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('should call another function one time', () => {
    loginUser('email', 'password');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'email', 'password');
  });
});

describe('loginGoogle', () => {
  it('should be a function', () => {
    expect(typeof loginGoogle).toBe('function');
  });
  it('should call another function one time', () => {
    loginGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
    expect(signInWithPopup).toHaveBeenCalledWith(undefined, {});
  });
});

describe('newUser', () => {
  it('should be a function', () => {
    expect(typeof newUser).toBe('function');
  });
  it('should call another function one time', () => {
    newUser('email', 'password', 'name');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith({
      currentUser: {
        displayName: 'gabriela',
      },
    }, email, password,);
  });
});

describe('logout', () => {
  it('should be a function', () => {
    expect(typeof logout).toBe('function');
  });
  it('should call another function one time', () => {
    logout();
    expect(signOut).toHaveBeenCalledTimes(1);
    expect(signOut).toHaveBeenCalledWith(undefined);
  });
});

describe('getUser', () => {
  it('should be a function', () => {
    expect(typeof getUser).toBe('function');
  });
  it('should call another function one time', () => {
    getUser();
    expect(auth.currentUser).toHaveBeenCalledTimes(1);
    expect(auth.currentUser).toHaveBeenCalledWith(undefined);
  });
});
