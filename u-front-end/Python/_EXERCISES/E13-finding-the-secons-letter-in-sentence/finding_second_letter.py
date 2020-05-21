

def second_letter(source_string, letter):
    
    letter_counter = 0

    for i in range(len(source_string)):
        if letter == source_string[i]:
            letter_counter += 1

            if letter_counter == 4:
                return i
    return -1

#FINDING THE SECOND LETTER E IN A SENCTENCE
# my_string = "This is another example of how to create string variables"
# my_result = second_letter(my_string, "e")
# print('The second letter is at index =', my_result)

#FINDING THE 4 E
my_string = "This is another example of how to create string variables"
my_result = second_letter(my_string, "e")
print('The second letter is at index =', my_result)