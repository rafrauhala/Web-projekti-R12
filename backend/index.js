import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors()) // sallii reactin pyynnöt
app.use(express.json()) // ottaa vastaan jsondataa

// testi localhost:3000
app.get('/', (req, res) => {
  res.send('Backend toimii')
})

// testi localhost:3000/users
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'testi 1' },
    { id: 2, name: 'testi 2' }
  ])
})

app.listen(PORT, () => {
  console.log('käynnissä portissa ${PORT}')
})
