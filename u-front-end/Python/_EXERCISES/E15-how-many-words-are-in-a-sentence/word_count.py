
def word_counter(source_string):
    
    word = source_string.strip()


    count_words = 0



    for i in range(len(source_string)):
        
        if " " == word[i]:
            count_words += 1
    return count_words + 1


#FINDING THE LAST LETTER 'a'
my_string = "This is another example of how to create string variables "
my_result = word_counter(my_string)
print("There are ", my_result, " words")