walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  // Deal with the devops or DevOps or Devops (I think?)
  v = v.replace(/\b(D|d)ev(O|o)ps/g, function(match, p1, offset, string) {
    // t - 7 = m
    // c - 1 = b
    s = String.fromCharCode(p1.charCodeAt(0) - 7);
    return s + "ysadmin";
  });

	textNode.nodeValue = v;
}


