const express = require("express");
const app = express();

const routes = require("./src/routes/routes")

const PORT = process.env.PORT || 5050

app.use(express.json());
app.use(routes);

app.get('/',(req, res) => {
    res.send('This API is Online on PORT 5050, Set a Existent Route!');
});

app.listen(PORT, ()=> console.log('Server Started at Port 5050'));