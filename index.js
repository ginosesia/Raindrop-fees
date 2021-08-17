const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())

app.get('/calculate-fee/:fee', (req, res) => {
    calculatePensionFees(res, req);
});

function calculatePensionFees(res, req) {
    let fee = parseInt(req.params.fee)
    if (fee > 100000) {
        let x = fee - 100000;
        let value = (((x / 10000)*4.67)+62.5).toFixed(2);
        return res.json({fee: value});
    } else {
        fee = (0.000625*fee).toFixed(2);
        return res.json({fee: fee});
    }
}

// PORT
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`listening on port ${port}...`));