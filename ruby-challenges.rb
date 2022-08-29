# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# PSEUDOCODE:
    # define a function named even_or_odd
    # takes in a number argument
    # use a conditional statement to determine if the number is even or odd
        # use string interpolation for the return
    # returns a statement saying that the number is even or odd
def even_or_odd num
    if num.even?
        "#{num} is even"
    else
        "#{num} is odd"
    end
end

p even_or_odd num1
p even_or_odd num2
p even_or_odd num3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided.
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# PSEUDOCODE:
    # define a function named no_vowels
    # takes in a string
        # delete the vowels from the string
    # returns a string with all the vowels removed

def no_vowels str
    str.delete "AEIOUaeiou"
end

p no_vowels beatles_album1
p no_vowels beatles_album2
p no_vowels beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# PSEUDOCODE:
    # define a function named palindrome_or_not
    # takes in a string
        # write a conditional statement for the various outcomes
        # use upcase to make all letters the same casing
        # compare the string to the reversed version of the string, checking if it's a palindrome
    # returns a statement saying if the word is palindrome or not

def palindrome_or_not word
    if word.upcase == word.upcase.reverse
        "#{word} is a palindrome"
    else
        "#{word} is not a palindrome"
    end
end

p palindrome_or_not palindrome_tester1
p palindrome_or_not palindrome_tester2
p palindrome_or_not palindrome_tester3
