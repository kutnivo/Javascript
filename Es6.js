class Computer {
  constructor (manufacturer, model) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.isPoweredOn = false;
  }
  PowerOn() {
    if (!this.isPoweredOn) {
      this.isPoweredOn = true;
      console.log(`${this.manufacturer} and ${this.model} is now powered on.`);
    } else {
      console.log(
        `${this.manufacturer} and ${this.model} is already powered on.`
      );
    }
  }
  PowerOff() {
    if (this.isPoweredOn) {
      this.isPoweredOn = false;
      console.log(`${this.manufacturer} and ${this.model} is now powered 
off.`);
    } else {
      console.log(
        `${this.manufacturer} and ${this.model} is already powered off.`
      );
    }
  }


}
const computer1 = new Computer("Apple,", "MacBookPro")
const computer2 = new Computer("HP", "HPProBoook")
