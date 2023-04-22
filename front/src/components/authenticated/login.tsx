import React, { useState } from 'react'

import { useAuth } from '@hooks'
import { Button, Link, List, ListItem, TextField, Typography } from '@mui/material'

import { getError } from '../../utils/error'
import Form from './form'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import { Controller, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

export const Login: React.FC = () => {
  document.title = 'Register - ProjectName'

  const { register } = useAuth()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmation, setConfirmation] = useState<string>('')
  const [error, setError] = useState<string | null>()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await register(username, password, confirmation)

    if (response && !response.success) {
      setError(response.error)
    }
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const { enqueueSnackbar } = useSnackbar()

  const submitHandler = async ({ login, password }: any) => {
    try {
      const { data } = await axios.post('http://localhost:2000/api/user/login', {
        login,
        password,
      })

      console.log('user====', data)
      navigate('/teacher')
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' })
    }
  }

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <Typography component="h1" variant="h3">
        Connexion
      </Typography>
      <List>
        <ListItem>
          <Controller
            name="login"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              minLength: 2,
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="login"
                label="Nom d'utilisateur"
                inputProps={{ type: 'name' }}
                error={Boolean(errors.login)}
                helperText={
                  errors.name
                    ? errors.name.type === 'minLength'
                      ? 'Nom doit être supérieur à un caractère'
                      : 'Nom est requis'
                    : ''
                }
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>
        <ListItem>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              minLength: 8,
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Mot de passe"
                inputProps={{ type: 'password' }}
                error={Boolean(errors.password)}
                helperText={
                  errors.password
                    ? errors.password.type === 'minLength'
                      ? 'Le mot doit avoir 8 caractères minimum'
                      : 'Le mot de passe est requis'
                    : ''
                }
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>
        <ListItem>
          <Button variant="contained" type="submit" fullWidth color="primary">
            Connexion
          </Button>
        </ListItem>
        <ListItem>
          Pas de compte? <Link href="/register">Inscription</Link>
        </ListItem>
      </List>
    </Form>
  )
}
