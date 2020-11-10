import request from 'lib/request'

export const fetchUser = async () =>
  request({
    url: '/current-user',
  })

export const login = async (data) =>
  request({
    url: '/auth/login',
    method: 'POST',
    body: data,
  })

export const register = async (data) =>
  request({
    url: '/auth/register',
    method: 'POST',
    body: data,
  })
