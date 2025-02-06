var _var = 10;
let _let = 20;
const _const = 30;

// console.log(_var, _let, _const);

function scopeTest() {
  var _var_2 = 100;
  let _let_2 = 200;
  const _const_2 = 300;

  if (true) {
    var _var_3 = "one";
    let _let_3 = "two";
    const _const_3 = "three";

    // console.log(_var_3, _let_3, _const_3 );
  }

  console.log(_var_3, _let_3, _const_3 );
  console.log(_var_2, _let_2, _const_2);
}

scopeTest();