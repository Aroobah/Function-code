class Contact {
   constructor (firstName, lastName, phoneNumber, emailAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
   }

  fullName() {
    return this.firstName + '' + this.lastName;
  };
  
};

function createContactList () {
  const contactList = [];
  contactList.push(firstContact, secondContact, thirdContact);

  return contactList;
};

const firstContact = new Contact(
  'Asmaa', 
  'Abdulganiy',
  '08082442177',
  'asabdolags2004@gmail.com'
);
const secondContact = new Contact(
  'Aroobah', 
  'Sulaym',
  '09073679902',
  'aroobahsulaym@gmail.com'
);
const thirdContact = new Contact(
  'Adeelah', 
  'Zakariyya',
  '07056778972',
  'adeelahsulaym@gmail.com'
);

const myContactList = createContactList();
console.log(myContactList);
