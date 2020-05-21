class Contact {
	constructor(name, email) {
        //In a constructor function "this" does not have a value. 
        //It is a substitute for the new object. 
        //The value of this will become the new object when a new object is created.
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
    
    //adding a new contact
	add(contact) {
        //pushing new contacts to the empty array listOfContacts
        console.log("Here adding a contact");
        console.log(contact);

        console.log(JSON.stringify(this.listOfContacts));

        this.listOfContacts.push(contact);
        console.log(JSON.stringify(this.listOfContacts));
	}
    
    
    //remving a contact
	remove(contact) {
		for(var i = 0; i < this.listOfContacts.length; i++) { 
			var currentContact = this.listOfContacts[i];

			if(currentContact.email === contact.email) {
                // remove the contact at index i using the splice method
                //remove from index 0 end at index 1
				this.listOfContacts.splice(i, i);
				// stop/exit the loop
				break;
			}
		}
	}
	
	sort() {
		// As our array contains objects, we need to pass as argument
		// a method that can compare two contacts.
		// we use for that a class method, similar to the distance(p1, p2)
		// method we saw in the ES6 Point class in module 4
		// We always call such methods using the name of the class followed
		// by the dot operator
		this.listOfContacts.sort(ContactManager.compareByName); 
	}
    
    //sorting out the prperties
	// class method for comparing two contacts by name
	static compareByName(c1, c2) {
		// JavaScript has builtin capabilities for comparing strings
		// in alphabetical order
		if (c1.name < c2.name){
     		return -1;
        }
    	if (c1.name > c2.name){
     		return 1;
        }
    	return 0;
    }
	
	//scope 
	sayHello(person){ //person has the value "Jose" 
		var contactName = "Jose Manuel"; 
		console.log("contactName: "+contactName);
		console.log("Hello " + person); //displays: "Hello Jose"
	}

	
	displayContactName(contactObject){ 
		console.log("name:" + contactObject.name); // contactObject if gonna do the foorloop from myForEach
		console.log(contactObject); //display listOfContacts
	}

    myForEach(forEachCallBack) {
        console.log(this.listOfContacts.length); //displays how many objects are in listOfContacts
		console.log(forEachCallBack); //output: its gonna display the function - displayContactName
		
        for(var i=0; i<this.listOfContacts.length; i++){ //loops through listOfContacts
             console.log(this.listOfContacts[i]);  
			 forEachCallBack(this.listOfContacts[i]);
		}
    }
	
	printContactsToConsole() {
		console.log(this.listOfContacts.toString());

		var contactName = "Jose";
		console.log("contactName: "+contactName);
		this.sayHello(contactName); //contactName holds the value "Jose" passes it to person in sayHello 


        // forEach() this is a function that loops thru arrays, ONLY ARRAYS OR COLLECTIONS
		this.myForEach( this.displayContactName ); //passes the parameter to forEachCallBack
		

        //The forEach() method calls a provided function once for each element in an array, in order        
		this.listOfContacts.forEach(function(c) {
			console.log(c.name); //display the names
		});
		
	}
}

// ALWAYS TEST YOUR CODE WITH SIMPLE EXAMPLES, or by typing in the devtool console
// Create obects with properties
var cm = new ContactManager();
var c1 = new Contact("Jimi Hendrix", "jimi@rip.com");
var c2 = new Contact("Robert Fripp", "robert.fripp@kingcrimson.com");
var c3 = new Contact("Angus Young", "angus@acdc.com");
var c4 = new Contact("Arnold Schwarzenneger", "T2@terminator.com");

var contactName = "Jose Messi";
console.log("contactName: "+contactName);

console.log("--- Adding 4 contacts ---")
cm.add(c1);
cm.add(c2);
cm.add(c3);
cm.add(c4);
cm.add("tomato");

cm.printContactsToConsole();
console.log("contactName: "+contactName);

// // trying to remove c2
// console.log("--- Removing the second one! ---");
// cm.remove(c2);
// cm.printContactsToConsole();

// console.log("--- sorting contacts ---");
// cm.sort();
// cm.printContactsToConsole();
