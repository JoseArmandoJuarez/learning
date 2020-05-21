
var articleItems;

articleItems = $('.article-item'); //select the parent of ul which is article-item

var removeUl = articleItems.find('ul'); //find ul inside article-item

removeUl.remove(); //remove the ul child

//if only wanted to remove the .bold class which is James
//removeUl.children().remove('.bold');