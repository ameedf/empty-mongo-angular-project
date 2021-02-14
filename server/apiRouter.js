const MyEntityModel = require('./model/myModel');
const MyEntity = require('./model/myModel');
const apiRouter = require('express').Router();

apiRouter.get('/', async (req, res) => {
  try {
    const list = await MyEntity.find();
    console.log(list.length);
    res.json(list);
  } catch (error) {
    res.status(500).json({ error });
  }
});

apiRouter.post('/', (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = apiRouter;
