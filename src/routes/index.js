import { Router } from 'express'

const router = Router()


router.get('/', (req, res) => res.render('index.ejs', { title: 'Primer sitio web con node' }))

router.get('/about', (req, res) => res.render('about.ejs', { title: 'Acerca de mi' }))

router.get('/contact', (req, res) => res.render('contact.ejs', { title: 'Contacta me' }))

export default router