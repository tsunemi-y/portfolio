import express, { Application, Request, Response } from 'express'
import * as reservationController from './src/presentation/controller/reservationController'
import app from './src/presentation/routes'

const PORT = 8080

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}