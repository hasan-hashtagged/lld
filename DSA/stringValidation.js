/*
* Amazon Assesment
*
*/

function run(configuration) {
  const invalidConf = ["Invalid configuration"];
  const res = configuration.split("|");
  const mp = new Map();
  for (let p = 0; p < res.length; p++) {
    if (res[p].length !== 14) {
      console.log(res[p].length, res[p])
      return invalidConf;
    }
    let ordinal = res[p].substring(0, 4);
    let conf = res[p].substring(4);
    if (!ordinal.match(/^\d{4}$/) || ordinal === '0000') {
      console.log("a;dslf")
      return invalidConf;
    }
    if (!conf.match(/^[0-9a-zA-z]{10}$/)) {
      console.log(conf);
      return invalidConf;
    }
    if(mp.has(ordinal)) {
      console.log('hello');
      return invalidConf;
    }
    console.log(ordinal.padStart(4, '0'));
    mp.set(ordinal, conf);
  }


  let len = mp.size;
  for (let i = 1; i <= len; i++) {
    let str = i.toString().padStart(4, '0');
    // console.log(str)
    if (!mp.has(str)) {
      return invalidConf;
    }
  }
  return res;
}

function tester() {
  const s = "0002asdfghjkl1|0001asdfghjkl2|9999asdfghjkl3";
  let str = run(s);
  console.log(str);
}

tester();