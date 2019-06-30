const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const ProductMdl = require('./src/models/ProductMdl');

const classes = {
  products: ProductMdl,
};

router.post('/:modelName', async (req, res) => {
  let result;

  try {
    result = await classes[req.params.modelName].add(
      req.body
    );
  } catch (e) {
    result = e.message;
  }

  res.status(result.status).json(result.body);
});

router.put('/:modelName/:id', async (req, res) => {
  let result;

  try {
    result = await classes[req.params.modelName].update(
      req.body,
      req.params.id
    );
  } catch (e) {
    result = e.message;
  }

  res.json(result);
});

router.delete('/:modelName/:id', async (req, res) => {
  let result;

  try {
    result = await classes[req.params.modelName].delete(
      req.body,
      req.params.id
    );
  } catch (e) {
    result = e.message;
  }

  res.json(result);
});

router.get('/:modelName', async (req, res) => {
  let result;

  try {
    result = await classes[req.params.modelName].getList();
  } catch (e) {
    result = e.message;
  }

  res.json(result);
});

app.use(bodyParser.json());
app.use('/api/v1', router);

app.listen(process.env.PORT, () => {
  console.log(
    `[${Date.now()}][${process.env.ENV}:${process.env.NAME}] [LISTENING:${
      process.env.PORT
    }]`,
  );
});
