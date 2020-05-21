import random

def  random_numbers():

    my_list = []

    random_num = 0

    for i in range(11):
        random_num = random.randint(1, 101)
        my_list.append(random_num)

    print(my_list)

random_numbers()

