window.onload= init;

// The contact manager as a global variable
let cm; 

function init() { 
	// create an instance of the contact manager
	cm = new ContactManager();
	
  	cm.addTestData();
  	cm.printContactsToConsole();

	  // Display contacts in a table
	  // Pass the id of the HTML element that will contain the table
	  cm.displayContactsAsATable("contacts");
}

function formSubmitted() {
	// Get the values from input fields
	let name = document.querySelector("#name");
  	let email = document.querySelector("#email");
	let newContact = new Contact(name.value, email.value);
	cm.add(newContact);
	
	// Empty the input fields
	name.value = "";
	email.value = "";
	
	// refresh the html table
	cm.displayContactsAsATable("contacts");
	
	// do not let your browser submit the form using HTTP
	return false;
}

function emptyList() {
	cm.empty();
  	cm.displayContactsAsATable("contacts");
}

function loadList() {
	cm.load();
  	cm.displayContactsAsATable("contacts");
}


class Contact {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
}

class ContactManager {
	constructor() {
		// when we build the contact manager, it
		// has an empty list of contacts
		this.listOfContacts = [];
	}
	
	addTestData() {
		var c1 = new Contact("Jimi Hendrix", "jimi@rip.com");
  		var c2 = new Contact("Robert Fripp", "robert.fripp@kingcrimson.com");
  		var c3 = new Contact("Angus Young", "angus@acdc.com");
  		var c4 = new Contact("Arnold Schwarzenneger", "T2@terminator.com");
		
		this.add(c1);
		this.add(c2);
		this.add(c3);
		this.add(c4);
		
		// Let's sort the list of contacts by Name
		this.sort();
	}
	
	// Will erase all contacts
	empty() {
		this.listOfContacts = [];
	}
	
	add(contact) {
		this.listOfContacts.push(contact);
	}


	printContactsToConsole() {
		this.listOfContacts.forEach(function(c) {
			console.log(c.name);
		});
	}
	
	load() {
		if(localStorage.contacts !== undefined) {
			// the array of contacts is savec in JSON, let's convert
			// it back to a reak JavaScript object.
			this.listOfContacts = JSON.parse(localStorage.contacts);
		}
	}
	
	save() {
		// We can only save strings in local Storage. So, let's convert
		// ou array of contacts to JSON
		localStorage.contacts = JSON.stringify(this.listOfContacts);
	} 
	
  	displayContactsAsATable(idOfContainer) {
		// empty the container that contains the results
    	let container = document.querySelector("#" + idOfContainer);
    	container.innerHTML = "";

		
		if(this.listOfContacts.length === 0) {
			container.innerHTML = "<p>No contacts to display!</p>";
			// stop the execution of this method
			return;
		}  
  
    	// creates and populate the table with users
    	var table = document.createElement("table");
          
    	// iterate on the array of users
    	this.listOfContacts.forEach(function(currentContact) {
        	// creates a row
        	var row = table.insertRow();
        
			row.innerHTML = "<td>" + currentContact.name + "</td>"
							+ "<td>" + currentContact.email + "</td>"
     	});
  
     	// adds the table to the div
     	container.appendChild(table);
  	}
}