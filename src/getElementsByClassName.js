// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, currentNode, matches) {
  var elem = currentNode || document.body;
  var matchElems = matchElems || [];

  if (elem.nodeType === 1) {
  	if (elem.classList.contains(className)) {
  	  matchElems.push(elem);
  	  // console.log(matchElems);
  		// return matchElems;
  	}
  }

  else {
  	// console.log('made it to else');
  	// console.log(matchElems);
  	return matchElems;
  }

  for (var i = 0; i < elem.childNodes.length; i++) {
  	if (elem.childNodes.length !== 0) {
  		var child = elem.childNodes[i];
  		getElementsByClassName(className, child, matchElems);
  	}
  }
  // return matchElems;

};
