
	function BACKSPC(){
	var a = document.calcul.result.value;
	document.calcul.result.value = a.substr(0, a.length-1);
	}

	function number(value){
	document.calcul.result.value += value;
	}

	function remv(){
	document.calcul.result.value=" ";
	}

	function equal(){
	document.calcul.result.value=eval(document.calcul.result.value);
  }