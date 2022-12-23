import  express  from 'express';
import fs from 'fs';
const app = express();
const sendFile = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.end('error')
            return
        }
        res.end(data.toString())
    })
}
 app.use(express.static("./assets/img"));
 app.use(express.static("./assets/CSS"));

app.get('/', (req, res) => {
    sendFile('./assets/index.html', res)
   
});
app.get('/about', (req, res) => {
    sendFile('./assets/about.html', res)
});
app.get('/contact', (req, res) => {
    sendFile('./assets/contact.html', res)
});
app.get('/faq', (req, res) => {
    sendFile('./assets/faq.html', res)
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
