function rpnCalc(input) {
	input = input.replace(/^\s*|\s*$/g, "");
  input = input.length > 0 ? input.split( /\s+/ ) : [];

  let stack = [];

	for (var i = 0; i < input.length; ++i) {
    let token = input[i];

    if ( /^[+-]?(\.\d+|\d+(\.\d*)?)$/.test( token ) ) {
      var num = Number(token);
    } else {
			if (token.length > 1 || "+-*/".indexOf(token) !== -1 && stack.length < 2)
				break;
			let val1 = stack.pop();
			let val2 = stack.pop();
			num = eval(val1 + " " + token + " " + val2);
		}
		stack.push(num);
  }

	return i < input.length || stack.length > 4
		? "error"
		: stack.length == 1
		? stack.pop()
		: "";
}