var textBox = $("#input_list_item");
var listItem;
//Add a delete button to the input text and paste it in the unPurchased section
var createNewListItem = function () {
	$("#unPurchased_items").append('<li><input type="checkbox" class="checkBox">' + listItem + '<button class="delete">Delete</button></li>') ;
}

var deleteListItem = function (elem) {
	console.log('del function')
	elem.parents('li').remove();
	return false;
}
var validate = function () {
	listItem = textBox.val();
	console.log(listItem);
	if((listItem === "") || (listItem === " ") || (listItem.length > 20)){
		return false;
	}else {
		return true;
	}
}


//When add button is clicked.
$("#submit_list_item").click(function(event) {
	console.log("Add button clicked.")
	if(validate()){
	createNewListItem();
	}
	else {
		$('#alert_area').html('Your Entry must not be empty, and must have a maximum of 20 characters!');
	}
});

// When delete button is clicked.
$(document).on('click', ".delete", function(event) {
	console.log("Delete button clicked")
	deleteListItem($(this));
	
});

//When checkbox is checked or unchecked.

$(document).on('change', "input[type=checkbox]", function () {
	console.log($(this));
	if (this.checked) {
		console.log("checkbox checked");
		$("#purchased_items").append($(this).parent());
	}
	else {
		console.log("checkbox unchecked");
		$("#unPurchased_items").append($(this).parent());
	}
	
});

