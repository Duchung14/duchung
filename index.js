const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/calculate', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const result = calculatePrimeSum(a, b);
    res.json({ result });
});

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function calculatePrimeSum(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
