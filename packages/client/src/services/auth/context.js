import React, { useState, useCallback } from 'react'
import * as authFunctions from './utils'

const INITIAL_STATE = {
  user: null,
  loading: false,
}

export const AuthContext = React.createContext([INITIAL_STATE, {}])

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE)

  const handleUpdate = useCallback(
    (newState) => setState((oldState) => ({ ...oldState, ...newState })),
    []
  )

  return (
    <AuthContext.Provider
      value={[state, { update: handleUpdate, ...authFunctions }]}
    >
      {children}
    </AuthContext.Provider>
  )
}
