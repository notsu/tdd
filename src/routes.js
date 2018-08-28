import { Router } from 'express'

const router = Router()

router.get('/', (_, res) => res.end('Hello, world'))

export default router
