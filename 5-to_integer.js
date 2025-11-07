const arg = process.argv[2];
const myNumber = parseInt(arg);

if(Number.isNaN(myNumber)) {
  console.log("Not a number");
} else {
  console.log("My number: " + myNumber);
}