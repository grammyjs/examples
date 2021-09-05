import { SessionData } from './SessionData'
import type { Context, SessionFlavor } from 'grammy'

type CustomContext = Context & SessionFlavor<SessionData>

export type { CustomContext }
