import random

def  random_numbers():

    my_list = []

    

    random_num = 0

    for i in range(31):
        random_num = random.randint(1, 100)
        my_list.append(random_num)


    min_number = my_list[0]
    max_number = my_list[0]
    
    for small_number in my_list:
        if small_number < min_number:
            min_number = small_number
        
        if small_number > max_number:
            max_number = small_number


    print("\nRANDOM NUMBERS!")
    print(my_list)
    print("\nTHE MIN VALUE IS: " , min_number)
    print("\nTHE MAX VALUE IS: " , max_number)

random_numbers()
