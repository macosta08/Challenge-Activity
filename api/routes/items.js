const { Router } = require('express');
const { items, item } = require('../controllers/items');

const router = Router();

router.get('/items', items);
router.get('/items/:id', item);

module.exports = router;
