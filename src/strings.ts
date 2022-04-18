(()=>{

  let title = 'my amazing product'; //es de tipo string no dejará que le coloquen un valor de otro tipo
  title = 'another title';
  console.log(title);

  //title = 123;

  const description = "hello I'am a description "+ title;
  let numberTest = 12;

  const summary = `
  title: ${title}
  description: ${description}
  age: ${numberTest}
  `;
  console.log(summary);


})();
