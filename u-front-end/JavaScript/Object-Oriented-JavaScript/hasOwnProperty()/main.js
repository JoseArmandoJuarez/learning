function Phone() {
    this.operatingSystem = 'Android';
}
  
Phone.prototype.screenSize = 6;
  
const myPhone = new Phone();
  
const own = myPhone.hasOwnProperty('operatingSystem');
  
console.log(own);
// true
 
const inherited = myPhone.hasOwnProperty('screenSize');
  
console.log(inherited);
// false