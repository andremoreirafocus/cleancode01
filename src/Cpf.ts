interface CPFParts {
  extractedNumber: string,
  extractedControl: string
}

export default class Cpf {
  value: string;
  constructor (value: string) {
    if (!this.validate(value))
      throw new Error("Invalid CPF");
    this.value = value;
  }

  validate(CPF: string): boolean {
    if (!this.isValid(CPF)) return false;
    let formattedCPFStr = this.filterCPFDigits(CPF);
    let extractedCPF = this.extractParts(formattedCPFStr);

    let calculatedControl = this.calculateControl(extractedCPF);
    return (calculatedControl === extractedCPF.extractedControl);
  }
  
  isSizeValid(CPF: string): boolean{
    if (!CPF) return false;
    let strSize = CPF.length;
    return (strSize === 11)
  }
  
   filterCPFDigits(CPF: string): string {
      let filteredCPF=CPF
        .replace('.','')
        .replace('.','')
        .replace('-','')
        .replace(" ","");  
      return filteredCPF;
  }
  
   isNumeric(CPF: string): boolean {
      let isNumerical: boolean = /^\d+$/.test(CPF);
      return isNumerical;
  }
  
   extractParts(CPF: string): CPFParts {
      let extractedNumber = CPF.substring(0,9);
      let extractedControl = CPF.substring(9,11);
      return {
          extractedNumber,
          extractedControl,
      }
  }
  
   isValid(CPF: string): boolean {
      let filteredCPF = this.filterCPFDigits(CPF);  
      if (!this.isSizeValid(filteredCPF)) return false;
      if (!this.isNumeric(filteredCPF)) return false;
      return true;
  }
  
   calculateControlDigit(digitsSequence: string): number {
      const CPFdigits = Array.from(digitsSequence);       
      let numDigits = digitsSequence.length;
      let multiplier = numDigits + 1;
      let sum = 0;
      for (let pos = 0; pos <= (numDigits - 1); pos++, multiplier--) {  
          let digit = parseInt(CPFdigits[pos]);  							
          sum += multiplier * digit;  
      };  
      let rest = (sum % 11);  
      let calculatedDigit = (rest < 2) ? 0 : 11 - rest;  
      return calculatedDigit;  
  }
  
   calculateControl(CPF: CPFParts): string {
      let { extractedNumber } = CPF;
      let calculatedFirstDigit = this.calculateControlDigit(extractedNumber);
      let calculatedSecondDigit = this.calculateControlDigit(extractedNumber + calculatedFirstDigit);
      let calculatedControl = calculatedFirstDigit + "" + calculatedSecondDigit;
      return calculatedControl;
  }  
}

