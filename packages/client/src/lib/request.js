const request = async ({ url, body, method = 'GET' }) => {
  const response = await fetch(`/api${url}`, {
    method,
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })

  if (response.ok) {
    const data = await response.json()
    return [data, null]
  }

  return [null, response.statusText]
}

export default request
