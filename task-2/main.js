const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  let n = result.input;
  let arr = n.split(' ');
  let res = true;
  let count = 0;
  
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      count++
    }
      
  }
  if (count == 0) {
    console.log("Yes");
  }
  else{
    console.log("No");
  }
  
});
