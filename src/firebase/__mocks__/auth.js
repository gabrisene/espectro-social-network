export const loginUser = jest.fn(() => Promise.resolve({}));
export const loginGoogle = jest.fn(() => Promise.resolve({}));
export const newUser = jest.fn(() => Promise.resolve({}));
export const logout = jest.fn(() => Promise.resolve({}));
export const getAuth = jest.fn(() => (
  {
    currentUser: {
      displayName: 'gabriela',
    },
  })
);
export const getUser = jest.fn(() => {
  return {
    displayName: 'gabriella',
    uid: 'testeuid',
  }
}
)
