const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbol = '!@#$%^&*()_+';

interface CouponGenerationParams {
    prefix: string;
    size: number;
    includeCharacters: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
  }

  export const generateCoupon = ({ prefix, size, includeCharacters, includeNumbers, includeSymbols }: CouponGenerationParams): string => {
    if (!includeNumbers && !includeCharacters && !includeSymbols) {
      return ''; 
    }
    
    let result: string = prefix || "";
  
    const entireString: string = ((includeCharacters ? allLetters : "") +
                                  (includeNumbers ? allNumbers : "") +
                                  (includeSymbols ? allSymbol : ""));
  
    const loopLength: number = size - result.length;
  
    for (let i = 0; i < loopLength; i++) {
      const randomNum: number = Math.floor(Math.random() * entireString.length);
      result += entireString[randomNum];
    }
  
    return result;
  }
  
