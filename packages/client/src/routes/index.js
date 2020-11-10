import React, { useEffect } from 'react'
import { useAuth } from 'services/auth/hooks'
import { Spinner } from '@chakra-ui/core'
import Core from './Core'
import Login from './Auth/Login'
import Register from './Auth/Register'
import { Switch, Route } from 'react-router-dom'

const Routes = () => {
  const [{ loading }, { update, fetchUser }] = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      update({ loading: true })

      const [user, error] = await fetchUser()

      update({ loading: false, user: !error && user })
    }

    fetchData()
  }, [fetchUser, update])

  return (
    <Core>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      )}
    </Core>
  )
}

export default Routes
