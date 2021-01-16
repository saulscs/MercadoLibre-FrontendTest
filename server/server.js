const express = require("express");
const cors = require("cors");

/*Enviorement */

require("dotenv").config();

/*App*/

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => res.send('API Running'));


/*Middlware */
app.use(cors());

app.use(express.json());


/*Define Routes*/
app.use('/items', require('./routes/items'));



/*Server */
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
