function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName + " " + this.phoneNumber;
}

$(document).ready(function(){
  $("form#contacts").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var phoneNumber = $("input#phoneNumber").val();

    var newContact = new Contact(firstName, lastName, phoneNumber);

    $("#result").text(newContact.fullName());
    $("#result").show();
    console.log("HELLO", newContact.fullName());
    });
});
