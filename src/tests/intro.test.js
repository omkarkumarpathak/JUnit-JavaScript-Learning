import { describe, test, it, expect } from "vitest";
import {max,fizzBuzz} from "../intro.js"; 

describe("max", () => {
  it("should return the first arg if it is greater", () => {
    //AAA: Arrange, Act and Assert

    //Arrange
    const a = 2;
    const b = 1;
    //Act
    const result = max(a, b);
    //Assert
    expect(result).toBe(2);

    //Combine all AAA into single line code
    // expect(Math.max(2,1)).toBe(2);
  });

  it("should be the second arg if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
});

describe('fizzBuzz', () => {
  
    it("it should return Fizz",()=>{
        expect(fizzBuzz(5)).toBe("Buzz");
    })

    
    it("it should return Buzz",()=>{
        expect(fizzBuzz(3)).toBe("Fizz");
    })

    
    it("it should return FizzBuzz",()=>{
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })

    
    // it("it should return number string",()=>{
    //     expect(fizzBuzz(11)).toBe("11");
    // })
})


