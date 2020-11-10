import { Flex, Button } from '@chakra-ui/core'
import React from 'react'
import { useAuth } from 'services/auth/hooks'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [{ user }] = useAuth()

  return (
    <Flex
      width="100%"
      height={16}
      background="white"
      alignItems="center"
      boxShadow="md"
      justifyContent="center"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        marginX={{ base: 'auto', md: 4 }}
        maxWidth="1140px"
      >
        <p>Nav items here</p>
        {user ? (
          <p>{user.userName}</p>
        ) : (
          <Link to="/login">
            <Button background="teal.500">Login</Button>
          </Link>
        )}
      </Flex>
    </Flex>
  )
}

export default Nav
