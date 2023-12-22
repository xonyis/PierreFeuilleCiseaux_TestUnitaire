// game.test.js

const { playGame } = require('./main.js');

test('Egalité', () => {
    // Arrange
    const userChoice = 'rock';
    jest.spyOn(Math, 'random').mockReturnValue(0); 

    // Act
    const result = playGame(userChoice);

    // Assert
    expect(result).toContain("Egalité");
});

test('User Gagne', () => {
    // Arrange
    const userChoice = 'paper';
    jest.spyOn(Math, 'random').mockReturnValue(0.1); 

    // Act
    const result = playGame(userChoice);

    // Assert
    expect(result).toContain('You win');
});

test('Computer Gagne', () => {
    // Arrange
    const userChoice = 'scissors';
    jest.spyOn(Math, 'random').mockReturnValue(0.8); 

    // Act
    const result = playGame(userChoice);

    // Assert
    expect(result).toContain('Computer win');
});

test('choix invalide', () => {
    // Arrange
    const userChoice = 'invalid_choice';

    // Act & Assert
    expect(() => playGame(userChoice)).toThrowError('Invalid choice');
});
