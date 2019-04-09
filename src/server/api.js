import express from 'express';
const router = express.Router();

function* abGenerator(arr) {
  const pageTypes = ['a', 'b'];
  let current = 0;

  while (true) {
    yield arr[current];
    current = (current + 1) % arr.length;
  }
}

const twoTest = abGenerator(['red', 'blue']);
const threeTest = abGenerator(['white', 'green', 'purple']);
const fiveTest = abGenerator(['yellow', 'green', 'red', 'orange', 'black']);

router.use((req, res, next) => {
  // if (!req.session.tests) {
  req.session.tests = {
    top: twoTest.next().value,
    middle: threeTest.next().value,
    bottom: fiveTest.next().value
  };
  // }
  next();
});

router.get('/abtest', (req, res, next) => {
  res.json(req.session.tests);
});

export default router;
