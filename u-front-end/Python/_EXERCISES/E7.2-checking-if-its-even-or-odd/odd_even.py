import random

def  random_numbers():

    my_list = []

    my_even_list = []
    my_odd_list = []

    random_num = 0

    for i in range(31):
        random_num = random.randint(1, 100)
        my_list.append(random_num)

        if random_num%2 == 0:
            my_even_list.append(random_num)
        else:
            my_odd_list.append(random_num)


    print("\nRANDOM NUMBERS!")
    print(my_list)
    print("\nEVEN!")
    print(my_even_list)
    print("\nODD!")
    print(my_odd_list)

random_numbers()

