try {
  console.log(x);
} catch (e) {}

try {
  console.log(y);
} catch (e) {
  console.error("----Error: ", e.message);
}

try {
  console.log(z);
} catch (e) {
} finally {
  console.log("z finally block.");
}

console.log("Continue running and ignore x,y,z errors....");

try {
    throw new Error('Custom error just for test');
  } catch (e) {
    console.error("----Error: ", e.message);
  }