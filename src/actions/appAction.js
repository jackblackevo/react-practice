const UPDATE_COUNT = 'UPDATE_COUNT'
const ADD_LANG = 'ADD_LANG'
const DELETE_LANG = 'DELETE_LANG'

export const updateCount = pLangUUID => ({
  type: UPDATE_COUNT,
  pLangUUID
})

export const addLang = pLangName => ({
  type: ADD_LANG,
  pLangName
})

export const deleteLang = pLangUUID => ({
  type: DELETE_LANG,
  pLangUUID
})