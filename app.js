const express = require("express");
const userRouter = require('./routes/userRoutes')
const path = require("node:path")   
const app = express();
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath))
const links = [
    { href: '/', text: "Home"},
    { href: '/about', text: "About"}
];

const users = ["Rose", "Cake", "Biff"]
const userInfo = [
    {name: 'Safalin', job: 'Buccaneer', level: '283'},
    {name: 'Jyrki', job: 'Luminous', level: '271'},
    {name: 'ReTerrorized', job: 'Demon Slayer', level: '285'}
]


app.set('views', path.join(__dirname, "views"))
app.set ("view engine", "ejs")

app.use(express.urlencoded({ extended: false}))

app.use((req, res, next) => {
    next();
})

app.use('/users', userRouter);

app.get("/", (req, res) =>{
    res.render("index", { links: links, users: users})
})
app.get('/about', (req, res) =>{
    res.render("about", {userInfo: userInfo, links: links })
})
const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
