const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
   let n = result.input; 
  let i = n.split(',')[0]
  let b = n.split(',')[1]
  let hasil = 1;
  for (  i  ; i <= b; i++) {
    hasil = hasil * i;
  }

  if (hasil > 0) {
    console.log("1");
  }
  else{
    console.log("0");
  }
  
});
