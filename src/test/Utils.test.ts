import { getStringInfo, toUpperCase } from "../app/Utils"

describe('Utils test suit', () => {

  test('should return uppercase', () => {
    //arrange
    const sut = toUpperCase
    const expected = 'TEST'

    //act
    const actual = sut('test')

    //assert
    expect(actual).toBe(expected);

  })

  test("should not return lowercase", () => {
    //arrange
    const sut = toUpperCase;
    const expected = 'test';

    //act
    const actual = sut('TEST');

    //assert
    expect(actual).not.toBe(expected);

  })

  it("should return info for a valid string", () => {
    //arrange


    //act
    const actual = getStringInfo('My-String');

    //assert

    expect(actual.lowerCase).toBe('my-string');
    //expect(actual.extraInfo).toBe({});  Utilizado para tipos primitivos
    expect(actual.extraInfo).toEqual({}) // Utilizado para objetos

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);//O mesmo do de cima, mas melhor para ler


    expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g'])

    expect(actual.characters).toContain<String>('M');// Usando generics

    expect(actual.characters).toEqual(
      expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-']) //Algo contendo algo igual em um vetor
    )

    expect(actual.extraInfo).not.toBe(undefined); //|
    expect(actual.extraInfo).not.toBeUndefined(); //| UNDEFINED ou DEFINED
    expect(actual.extraInfo).toBeDefined();       //|
    expect(actual.extraInfo).toBeTruthy();        //|
  })

})

/* ARRANGE
 * ACT
 * ASSERT
  */