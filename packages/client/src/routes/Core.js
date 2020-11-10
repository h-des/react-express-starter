import React from 'react'
import { Flex } from '@chakra-ui/core'
import Nav from 'containers/Nav'

const Core = ({ children }) => {
  return (
    <Flex bg="gray.100" width="100vw" height="100vh" flexDir="column">
      <Nav />
      <Flex flexDir="row" width="100%" marginX="auto" maxW="1140px">
        {children}
      </Flex>
    </Flex>
  )
}

export default Core
