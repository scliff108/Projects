import random
from hangman_drawings import draw_board

def choose_word():
    with open('words.txt') as f:
        words = [word for word in f]
    return random.choice(words).strip()

def difficulty_level():
    print('Easy: 10 incorrect guesses')
    print('Medium: 8 incorrect guesses')
    print('Hard: 6 incorrect guesses')

    level = input('Would you like to play Easy, Medium, or Hard? (e/m/h): ').strip().lower()
    while level not in ['e', 'm', 'h']:
        level = input('Input the level you would like to play (e/m/h): ').strip().lower()
    
    if level == 'h':
        return 6
    elif level == 'm':
        return 8
    else:
        return 10

def display_preguess_information(display_word, GUESS_TOLERANCE, incorrect_guesses, previous_guesses):
    print('-'*20, '\n')
    print('Word:', ''.join(display_word))
    print('Guesses left:', GUESS_TOLERANCE - incorrect_guesses)
    if len(previous_guesses) > 0: print('Previous Guesses:', ', '.join(previous_guesses))
    print(draw_board(GUESS_TOLERANCE, incorrect_guesses))

def check_valid_guess(guess, previous_guesses):
    if len(guess) == 0:
        print('I did not detect a guess. Try again.')
        return False
    
    if len(guess) > 1:
        print('Make sure you are only entering one letter. Try again.')
        return False
    
    if not guess.isalpha():
        print('There are only letters in this game. No numbers or symbols. Try again.')
        return False
    
    if guess in previous_guesses:
        print(f'You have already guessed {guess}. Try again.')
        return False
    
    return True

def check_user_guess(test_word, display_word, guess, correct_letters):
    if guess in correct_letters:
        for i in range(len(test_word)):
            if test_word[i] == guess:
                display_word[i] = guess
        return display_word, True
    else:
        return display_word, False

def play_game():
    print('Welcome to Hangman!')

    test_word = choose_word()
    display_word = ['*' for _ in range(len(test_word))]
    letters_in_word = set(test_word)
    previous_guesses = []
    GUESS_TOLERANCE = difficulty_level()
    incorrect_guesses = 0

    while incorrect_guesses < GUESS_TOLERANCE:

        display_preguess_information(display_word, GUESS_TOLERANCE, incorrect_guesses, previous_guesses)

        user_guess = input('Guess a letter: ').strip().lower()

        if check_valid_guess(user_guess, previous_guesses):

            previous_guesses.append(user_guess)
            display_word, guessed_correct = check_user_guess(test_word, display_word, user_guess, letters_in_word)

            if guessed_correct:
                print(user_guess, 'is Correct!')
            else:
                print(user_guess, 'is Incorrect :(')
                incorrect_guesses += 1
        else:
            incorrect_guesses += 1
        
        user_wins = ''.join(display_word) == test_word
        if user_wins:
            break

    if incorrect_guesses == GUESS_TOLERANCE:
        print('GAME OVER')
    else:
        print('CONGRATULATIONS! YOU WON!')

    print('The word was:', test_word)

play_game()
if input('Would you like to play again (y/n): ').strip().lower() == 'y':
    test_word = ''
    display_word = []
    play_game()
else:
    print('Thanks, it\'s been fun. Play again soon.')