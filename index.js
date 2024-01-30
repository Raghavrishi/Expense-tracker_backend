const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 8000
const Expense = require('./models/expense')
mongoose.connect('mongodb+srv://RishiRaghavG:rishi2004@cluster0.uhzidmj.mongodb.net/student?retryWrites=true&w=majority')
.then(()=>{console.log("db")});
app.get('/', async (req, res) => {
    const result = await Expense.find({});
    res.send(result);
})
app.get('/expense/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Expense.findById(id);
        if (result)
            res.end(result);
        else
            res.send('No Expense');
    } catch (err) {
        res.send(err);
    }
});

app.delete('/expense/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Expense.findByIdAndDelete(id);
        if (result)
            res.end("deleted");
        else
            res.send('No Expense with that id');
    } catch (err) {
        res.send(err);
    }
})
app.post('/expense',(req, res) => {
    res.send('<h1>Dream well</h1>')
})

// app.put('/expense/:id', async(req,res)=>{
//     const id = req.params.id;
//     // const updateObject = req.body;
//     // const updateObject = await Expense.findByInAndUpdate(id,
//         {$set: updateObject},{
//             new: true
//         })
//         res.send(updateObject);
// })
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})