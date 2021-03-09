const args = process.argv
const argarray = args.splice(2).map(Number);
for (const element1 of argarray) {
  // let element1 = Number(element);
  if ((element1 > 0) && (typeof(element1) === 'number')) {
    console.log(element1);
    setTimeout(() => {
      process.stdout.write('.');
      console.log("");
    }, element1*1000)
  }
}


//timer1(argarray);
