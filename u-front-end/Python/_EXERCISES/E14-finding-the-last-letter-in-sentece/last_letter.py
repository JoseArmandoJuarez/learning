

def second_letter(source_string, letter):
    

    for i in range(len(source_string)-1, -1, -1):
        if letter == source_string[i]:
            return i
    return -1


#FINDING THE LAST LETTER 'a'
my_string = "This is another example of how to create string variables"
my_result = second_letter(my_string, "a")
print('The last letter is at index =', my_result)