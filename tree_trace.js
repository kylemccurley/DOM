/*
Given an id: id
  - Find the element in the document with an id of the given id
    - Set as current_node
  - Initialize a local variable: outcome
    - Set to an empty array
  - Calculate all siblings of current_node: siblings
    - Returns a sub_array
  - Push siblings to outcome
  - If parent_node is BODY:
    - Return outcome array
  - Otherwise:
    - Recurse: Calling the function again with the id of the parentNode


  FindSiblingsOf Function: 
    - 
*/

function domTreeTracer(id, outcome = [])  {
	if (Array.isArray(outcome) === false) {
		outcome = [];
	}

	let current_node = document.getElementById(id);
	let siblings = findSiblingsOf(current_node);
	console.log(siblings);
	outcome.push(siblings);
	let parent = current_node.parentNode;
	if (parent.tagName !== 'BODY') {
		domTreeTracer(parent.id, outcome);
	} else {
		console.log(outcome);
		return outcome;
	}

	function findSiblingsOf(node) {
		let outcome = [];
		let next = node.previousElementSibling;
		while (next !== null) {
			outcome.push(next.tagName);
			next = next.previousElementSibling;
		}

		outcome.push(node.tagName);
		next = node.nextElementSibling;

		while (next !== null) {
			outcome.push(next.tagName);
			next = next.nextElementSibling;
		}

		return outcome;
	}
}