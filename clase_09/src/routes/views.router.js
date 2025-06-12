import express from 'express'

const router = express.Router();

const food = [
    { name: "Hamburguesa", price: 15000 },
    { name: "Pizza", price: 13000 },
    { name: "Empanadas", price: 50000 },
    { name: "Ensalada", price: 7000 },
    { name: "Cocacola", price: 3500 }
]


const userTest = {
    name: "Hilda",
    last_name: "Martinez",
    role: 'admin'
}


router.get('/', (req, res) => {
    console.log("iniciando renderizado de HBs");

    res.render("food", {
        user: userTest,
        isAdmin: userTest.role === "admin",
        food
    })
})


export default router;