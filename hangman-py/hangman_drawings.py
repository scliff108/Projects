hangman_drawings = [
    '',
    '=========',
    '''
      |
      |
      |
      |
      |
=========''',
    '''
  +---+
      |
      |
      |
      |
      |
=========''',
    '''
  +---+
  |   |
      |
      |
      |
      |
=========''',
    '''
  +---+
  |   |
  O   |
      |
      |
      |
=========''',
    '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========''',
    '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''',
    '''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========''',
    '''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========''',
    '''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
========='''
]

def draw_board(guess_tolerance, incorrect_guesses):
    if guess_tolerance == 10:
        return hangman_drawings[incorrect_guesses]
    elif guess_tolerance == 8:
        if incorrect_guesses >= 2:
            return hangman_drawings[incorrect_guesses + 2]
        elif incorrect_guesses == 1:
            return hangman_drawings[2]
        else:
            return hangman_drawings[0]
    elif guess_tolerance == 6:
        return hangman_drawings[incorrect_guesses + 4]