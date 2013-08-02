// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var elem = document.body;
  var matchElems = [];

  if (elem.childNodes.length !== 0) {
  	var child = elem.firstChild;
  	// console.log(child);
  	while(child) {
  		if (child.nodeType === 1) {
  			if (child.classList.contains(className)) {
  				matchElems.push(child);
  			}
  			child.getElementsByClassName(className);
  			child = child.nextSibling;
  		}
  		else {
  			child = child.nextSibling;
  		}
  		console.log(child);
  	}
  }
  else {
  	// return array
  	console.log('made it to else')
  	console.log(matchElems);
  }
  
  

/*
  if (elem.childNodes.length!==0) {
  	// change this to 0 -- need to figure out how to get rid of #text
    for (var i = 0; i < elem.childNodes.length; i++) {
      console.log(elem.childNodes[i].classList.contains(className));
   	  if (elem.childNodes[i].classList.contains(className)) {
  		matchElems.push(elem.childNodes[i].classList);
  	  }
  	  if (elem.childNodes[i].childNodes.length!=0) {
  	  	// should this be where I reset the value of elem ?
  	  }
  	  // or here ? .. probably not
  	  elem = elem.childNodes[i];
  	  console.log(elem);
  	  //elem.getElementsByClassName(className);
    } 
  }
  else {
  	// return array that is converted to html doc
  } */
};


// need to append each child node to elem to continue going deeper
// the childNodes.length will = 0 if there are no child nodes.
// this is probably what should be used to stop the recursion.

// this actually needs to be called later - once I get all of the decendants
  	// if (elem.childNodes[i].classList.contains(className)) {
  		//console.log(body.childNodes);
  		//elemsArray.push(elem.childNodes[i]);