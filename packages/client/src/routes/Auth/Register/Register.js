import React, { useState } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Input } from '@chakra-ui/core'
import * as Yup from 'yup'
import { useAuth } from 'services/auth/hooks'
import { Redirect } from 'react-router-dom'

const RegisterSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    "Passwords don't match"
  ),
})

const Register = () => {
  const [{ user }, { update, register }] = useAuth()
  const [errorMessage, setErrorMessage] = useState(null)

  if (user) return <Redirect to="/" />
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={RegisterSchema}
        onSubmit={async (values) => {
          const [user, error] = await register(values)
          if (error) return setErrorMessage(error)

          setErrorMessage(null)
          update({ user })
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="email">
              {({ field }) => <Input type="email" {...field} />}
            </Field>
            <ErrorMessage name="email" component="div" />
            <Field name="password">
              {({ field }) => <Input type="password" {...field} />}
            </Field>
            <Field name="confirmPassword">
              {({ field }) => <Input type="password" {...field} />}
            </Field>
            <ErrorMessage name="password" component="div" />
            {errorMessage && <p>{errorMessage}</p>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register
