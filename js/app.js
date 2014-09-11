var listItem;
var prevInputs = [];


var Actions = {
	init: function () {
		// Attach event listeners
		Actions.attachAddFormSubmitEvent();
		Actions.attachDeleteButtonClickEvent();
		Actions.attachCheckBoxChangeEvent();
	},
	
	/*	==================================
		EVENT LISTENERS
	=====================================	*/
	
	// Do this when add button is clicked.
	attachAddFormSubmitEvent: function (){
		$("#addItemForm").submit(function(event) {
			if(Actions.validate()) {
				Actions.createNewListItem();
				prevInputs.push(listItem);
<<<<<<< HEAD
				$('#alert_area').fadeOut('slow');
			} else {
				$('#alert_area').html('Your Entry must not be empty, must not be more than 20 characters, and must not already exist in the List!');
=======
			} else {
				alert('Your Entry must not be empty, must not be more than 20 characters, and must not already exist in the List!');
>>>>>>> master
			}
			return false;
		})

	},

	// Do this when delete button is clicked.
	attachDeleteButtonClickEvent: function (){
		$(document).on('click', ".delete", function(event) {
			console.log("Delete button clicked");
			Actions.deleteListItem($(this));
			
		})
	},

	// Do this when checkbox is checked or unchecked.
	attachCheckBoxChangeEvent: function (){
		$(document).on('change', "input[type=checkbox]", function () {
			var $elem = $(this);
			if ($elem.is(':checked')) {
				console.log("checkbox checked");
				$("#purchased_items").append($elem.parent());
			} else {
				console.log("checkbox unchecked");
				$("#unPurchased_items").append($elem.parent());
			}
			
		})
	},

	/*	==================================
		CALLBACK FUNCTIONS
	=====================================	*/

	//Add a delete button to the input text and paste it in the unPurchased section
	createNewListItem: function () {
		$("#unPurchased_items").append('<li><input type="checkbox" class="checkBox"><span class="item_text">' + listItem + '</span><button class="delete">Delete</button></li>') ;
	},

	deleteListItem: function (elem) {
		var thisListItem = elem.prev().text();
		prevInputs.splice(prevInputs.indexOf(thisListItem), 1);
		elem.parents('li').remove();
		return false;
	},

	validate: function () {
		listItem = $("#input_list_item").val().trim();
			if((listItem === "") || (listItem.length > 20) || prevInputs.indexOf(listItem) >= 0 ) {
				return false;
			}
			else{
				return true;
			}

	},


};

Actions.init();