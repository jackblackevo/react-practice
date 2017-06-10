import uuid from 'uuid/v1'

function pLangs(state = {}, action) {
  let pLangUUID, pLangName
  let updatedPLang, updatedPLangs

  switch (action.type) {
    case 'UPDATE_COUNT':
      pLangUUID = action.pLangUUID

      updatedPLang = Object.assign({},
        state[pLangUUID], {
        count: ++state[pLangUUID].count
      })
      updatedPLangs = Object.assign({}, state, {[pLangUUID]: updatedPLang})

      return updatedPLangs
    case 'ADD_LANG':
      pLangName = action.pLangName

      updatedPLangs = Object.assign({},
        state, {
          [uuid()]: {
            name: pLangName,
            count: 0
          }
        })

      return updatedPLangs
    case 'DELETE_LANG':
      pLangUUID = action.pLangUUID

      delete state[pLangUUID]

      return state
    default:
      return state
  }
}

export default pLangs