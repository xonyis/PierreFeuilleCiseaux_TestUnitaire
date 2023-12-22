// game.test.js

const { playGame } = require('./main.js');

test('Should declare a tie', () => {
    // Arrange
    const userChoice = 'rock';
    jest.spyOn(Math, 'random').mockReturnValue(0); // Force computer choice to be 'rock'

    // Act
    const result = playGame(userChoice);

    // Assert
    expect(result).toContain("It's a tie");
});

test('Should declare user as the winner', () => {
    // Arrange
    const userChoice = 'paper';
    jest.spyOn(Math, 'random').mockReturnValue(0.1); // Force computer choice to be 'rock'

    // Act
    const result = playGame(userChoice);

    // Assert
    expect(result).toContain('You win');
});

test('Should declare computer as the winner', () => {
    // Arrange
    const userChoice = 'scissors';
    jest.spyOn(Math, 'random').mockReturnValue(0.8); // Force computer choice to be 'rock'

    // Act
    const result = playGame(userChoice);

    // Assert
    expect(result).toContain('Computer wins');
});

test('Should handle invalid user choice', () => {
    // Arrange
    const userChoice = 'invalid_choice';

    // Act & Assert
    expect(() => playGame(userChoice)).toThrowError('Invalid choice');
});
