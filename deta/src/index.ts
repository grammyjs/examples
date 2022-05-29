import express from 'express'
import { webhookCallback } from 'grammy'
import { bot } from './bot'

const app = express()
app.use(express.json())

app.post('/' + process.env.TOKEN, webhookCallback(bot, 'express'))

export = app
