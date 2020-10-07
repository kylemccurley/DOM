function slice(startId, endId) {
	/*
	  Algorithm: Given the id's of the start and end nodes: startId, endId
	    - Initialize a constant: END
	      - Set the node with an id of endId
	    - Initialize a constant: START
	      - Set to the node with an id of startId
	    - Inialize a local variable: tree
	      - Set to an empty array
	    - Starting at the end node: |currentNode|
	    - If currentNode is 'BODY':
	      - Return an empty array
	    - Append the tagName of currentNode to tree
	    - If the currentNode is startNode:
	      - Return reversed tree
	*/

	const END = document.getElementById(endId);
	const START = document.getElementById(startId);
	if (END === null || START === null) {
		return;
	}

	let tree = [];
	for (let currentNode = END; currentNode.tagName !== 'BODY'; currentNode = currentNode.parentNode) {
	  tree.push(currentNode.tagName);
	  if (currentNode === START)  {
	  	return tree.reverse();
	  }
	}

	return;
}