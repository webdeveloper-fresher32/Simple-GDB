const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const compiler = require('compilex');
const bodyParser = require('body-parser');

const PORT = 8080;
const options = { stats: true };

// Initialize compiler
compiler.init(options);

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname))); // Serve static files from current directory

// Routes
app.get('/', (req, res) => {
    res.sendFile((__dirname + '/index.html'));
});

// Handle POST requests for compiling code
app.post('/compilecode', (req, res) => {
    const code = req.body.code;
    const input = req.body.input;
    const inputRadio = req.body.inputRadio;
    const lang = req.body.lang;

    if (lang === 'C'|| lang === 'C++') {
        const envData = { OS: "windows", cmd: "g++", options: { timeout: 3000 } };

        if (inputRadio === 'true') {
            compiler.compileCPPWithInput(envData, code, input, (data) => {
                if (data.error) {
                    res.send(data.error);
                    console.log(data.error);
                } else {
                    res.send(data.output);
                }
            });
        }
        else{
            compiler.compileCPP(envData, code, (data) => {
                if (data.error) {
                    res.send(data.error);
                }else{
                    res.send(data.output);
                }
            })
        }
    } else if (lang === 'Python') {
        const envData = { OS: "windows", cmd: "python", options: { timeout: 3000 } };

        if (inputRadio === 'true') {
            compiler.compilePythonWithInput(envData, code, input, (data) => {
                if (data.error) {
                    res.send(data.error);
                    console.log(data.error);
                } else {
                    res.send(data.output);
                }
            });
        } else {
            compiler.compilePython(envData, code, (data) => {
                if (data.error) {
                    res.send(data.error);
                    console.log(data.error);
                } else {
                    res.send(data.output);
                }
            });
        }
    }
});

app.get('/fullstat', (req, res) => {
    compiler.fullStat(function(data){
        res.send(data)
    })
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Flush compiler
compiler.flush(() => {
    console.log("All files are flushed");
});
