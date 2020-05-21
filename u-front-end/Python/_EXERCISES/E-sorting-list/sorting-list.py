import random

def  random_numbers():

    my_list = []


    random_num = 0

    for i in range(10):
        random_num = random.randint(1, 30)
        my_list.append(random_num)

    print("\nRANDOM NUMBERS!")
    print(my_list)

    num_1 = 0
    num_2 = 0
    for i in range(len(my_list)):
        for j in range(i + 1, len(my_list)):
            if my_list[i] > my_list[j]:
                num_1 = my_list[i]
                num_2 = my_list[j]

                my_list[i] = num_2
                my_list[j] = num_1

    print("\nSORTED LIST!")
    print(my_list)


random_numbers()
