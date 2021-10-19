const CENTIMETER_TO_METER_CONVERSION = 100;
const FIXED_DISTANCE = 1000;
const MINIMUM_FREIGHT = 9.99;

export default class Item {

  constructor (readonly idItem: number, readonly category: string, readonly description: string, readonly price: number, readonly length: number = 0, readonly width: number = 0, readonly depth: number = 0, readonly weigth: number = 0) {
  }

  getVolume() {
    if (!this.length) return 0;
    if (!this.width) return 0;
    if (!this.depth) return 0;
    return this.length/CENTIMETER_TO_METER_CONVERSION * 
      this.width/CENTIMETER_TO_METER_CONVERSION * 
      this.depth/CENTIMETER_TO_METER_CONVERSION;
  }

  getDensity() {
    const volume = this.getVolume();
    if (!volume) return 0;
    return this.weigth/volume;    
  }

  getFreight() {
    const freight = FIXED_DISTANCE * this.getVolume() * this.getDensity()/100;
    return (freight <  MINIMUM_FREIGHT) ? MINIMUM_FREIGHT: freight;
  }
}