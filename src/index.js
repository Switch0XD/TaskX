const express = require('express');
const router = express.Router();

const { taskCreateController } = require("./controllers/tasks");
const {
  userCreateController,
  findUserController,
  exportDataIntoSheetController,
  downloadSheetController
} = require("./controllers/users");


router.get('/export', exportDataIntoSheetController);

router.post('/createUser', userCreateController);

router.get('/download', downloadSheetController);

router.post('/createTask', taskCreateController);

router.get('/', findUserController);





module.exports = router;
