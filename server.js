const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // folder z plikiem HTML

app.post('/order', (req, res) => {
    const order = req.body;
    console.log('Nowe zamówienie:', order);

    // Tutaj możesz dodać integrację z bazą danych, płatnościami, serwerem Minecraft itp.

    res.json({ status: 'success', message: 'Zamówienie przyjęte' });
});

app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
