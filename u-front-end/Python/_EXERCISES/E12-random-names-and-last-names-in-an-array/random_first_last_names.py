import random

names_list = ['Jose', 'Peter', 'Jonah', 'Willy', 'Emma', 'Bruce', 'John', 'David', 'Dmitri', 'Casey']

lastNames_list = ['Juarez', 'Mckinnon', 'Hill', 'Wanka', 'Watson', 'Willis', 'Stamos', 'Dobrick', 'Shostakovich', 'Neistat']

fullNames_list = []

def names_generator():

    random_names = 0
    random_last_names = 0

    for i in range(50):
        random_names = random.randint(1, 9)
        random_last_names = random.randint(1, 9)

        guessed_name = names_list[random_names]
        guessed_last_name = lastNames_list[random_last_names]
        #print(guessed_name)
        #print(guessed_last_name)

        full_name = guessed_name + " " + guessed_last_name
        #print(full_name)
        fullNames_list.append(full_name)

    print("\n\nNAMES BEFORE REMOVING DUPLICATES!")
    print(sorted(fullNames_list))



    # k = 0
    # while k < len(fullNames_list):
    #     if fullNames_list[k] == fullNames_list[k+1]:
    #         fullNames_list[k:1]
    #     else:
    #         k += 1



    print("\n\nNAMES AFTER REMOVING DUPLICATES!")        
    #set(fullNames_list)
    print(sorted(fullNames_list))

names_generator()