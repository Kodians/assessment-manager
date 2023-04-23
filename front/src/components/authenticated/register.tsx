import React, { useState } from 'react'

import { useAuth } from '@hooks'
import { Button, Link, List, ListItem, TextField, Typography } from '@mui/material'

import { getError } from '../../utils/error'
import Form from './form'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import { Controller, useForm } from 'react-hook-form'

export const Register: React.FC = () => {
  document.title = 'Register - ProjectName'

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const { enqueueSnackbar } = useSnackbar()

  const submitHandler = async ({ login, password, firstname, lastname, confirmPassword }: any) => {
    if (password !== confirmPassword) {
      enqueueSnackbar('Les mots de passe ne correspondent pas', {
        variant: 'error',
      })
      return
    }
    try {
      await axios.post('http://localhost:2000/api/user', {
        login,
        password,
        firstname,
        lastname,
        role: 'teacher',
        classId: 1,
      })
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' })
    }
  }

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <Typography component="h1" variant="h1">
        Inscription
      </Typography>
      <List>
        <ListItem>
          <Controller
            name="firstname"
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
                id="firstname"
                label="Prénom"
                inputProps={{ type: 'name' }}
                error={Boolean(errors.firstname)}
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
            name="lastname"
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
                id="lastname"
                label="Nom"
                inputProps={{ type: 'name' }}
                error={Boolean(errors.lastname)}
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
          <Controller
            name="confirmPassword"
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
                id="confirmPassword"
                label="confirmation mot de passe"
                inputProps={{ type: 'password' }}
                error={Boolean(errors.confirmPassword)}
                helperText={
                  errors.confirmPassword
                    ? errors.confirmPassword.type === 'minLength'
                      ? 'Le mot doit avoir 8 caractères minimum'
                      : 'Ce champ est requis'
                    : ''
                }
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>
        <ListItem>
          <Button variant="contained" type="submit" fullWidth color="primary">
            Inscription
          </Button>
        </ListItem>
        <ListItem>
          Vous avez déjà un compte? <Link href="/login">Connexion</Link>
        </ListItem>
      </List>
    </Form>
  )
}
