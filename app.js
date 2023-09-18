const express = require('express');
const ExpressError = require('./expressError')
const {findMean, findMedian, findMode, convertAndValidateNums} = require('./helpers');
const app = express();


app.get('/mean', function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('A query key of nums with a comma-separated list of numbers is required.', 400)
  }

  let numsToValidate = req.query.nums.split(',');
  let nums = convertAndValidateNums(numsToValidate);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let mean = findMean(nums);

  let result = {
    operation: "mean",
    value: mean
  }

  return res.send(result);
});


app.get('/median', function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('A query key of nums with a comma-separated list of numbers is required.', 400)
  }

  let numsToValidate = req.query.nums.split(',');
  let nums = convertAndValidateNums(numsToValidate);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let median = findMedian(nums);

  let result = {
    operation: "median",
    value: median
  }

  return res.send(result);
});


app.get('/mode', function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('A query key of nums with a comma-separated list of numbers is required.', 400)
  }

  let numsToValidate = req.query.nums.split(',');
  console.log('mode numsToValidate', numsToValidate);
  let nums = convertAndValidateNums(numsToValidate);
  console.log('mode nums', nums);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let mode = findMode(nums);
  console.log('mode', mode);

  let result = {
    operation: "mode",
    value: mode
  }

  return res.send(result);
});



app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found", 404)
  next(e)
})


app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    msg: err.msg
  });
});


app.listen(3001, function () {
  console.log('App on port 3001');
});

