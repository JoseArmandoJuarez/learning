import random

def  most_repeated_number():

    my_list = []


    random_num = 0

    for i in range(30):
        random_num = random.randint(1, 10)
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



    repeated_num1 = 0
    repeated_num2 = 0
    repeated_num3 = 0
    repeated_num4 = 0
    repeated_num5 = 0
    repeated_num6 = 0
    repeated_num7 = 0
    repeated_num8 = 0
    repeated_num9 = 0
    repeated_num10 = 0
    

    for k in range(len(my_list)):
        if my_list[k] == 1:
            repeated_num1 += 1
        elif my_list[k] == 2:
            repeated_num2 += 1
        elif my_list[k] == 3:
            repeated_num3 += 1
        elif my_list[k] == 4:
            repeated_num4 += 1
        elif my_list[k] == 5:
            repeated_num5 += 1
        elif my_list[k] == 6:
            repeated_num6 += 1
        elif my_list[k] == 7:
            repeated_num7 += 1
        elif my_list[k] == 8:
            repeated_num8 += 1
        elif my_list[k] == 9:
            repeated_num9 += 1
        elif my_list[k] == 10:
            repeated_num10 += 1
        
    print("\nNumber 1 is repeated {} times".format(repeated_num1))
    print("\nNumber 2 is repeated {} times".format(repeated_num2))
    print("\nNumber 3 is repeated {} times".format(repeated_num3))
    print("\nNumber 4 is repeated {} times".format(repeated_num4))
    print("\nNumber 5 is repeated {} times".format(repeated_num5))
    print("\nNumber 6 is repeated {} times".format(repeated_num6))
    print("\nNumber 7 is repeated {} times".format(repeated_num7))
    print("\nNumber 8 is repeated {} times".format(repeated_num8))
    print("\nNumber 9 is repeated {} times".format(repeated_num9))
    print("\nNumber 10 is repeated {} times".format(repeated_num10))


    if repeated_num1 >= repeated_num2 and repeated_num1 >= repeated_num3 and repeated_num1 >= repeated_num4 and repeated_num1 >= repeated_num5 and repeated_num1 >= repeated_num6 and repeated_num1 >= repeated_num7 and repeated_num1 >= repeated_num8 and repeated_num1 >= repeated_num9 and repeated_num1 >= repeated_num10:
        print("\nNumber 1 is the most repeated!")
    elif repeated_num2 >= repeated_num3 and repeated_num2 >= repeated_num4 and repeated_num2 >= repeated_num5 and repeated_num2 >= repeated_num6 and repeated_num2 >= repeated_num7 and repeated_num2 >= repeated_num8 and repeated_num2 >= repeated_num9 and repeated_num2 >= repeated_num10:
        print("\nNumber 2 is the most repeated!")
    elif repeated_num3 >= repeated_num4 and repeated_num3 >= repeated_num5 and repeated_num3 >= repeated_num6 and repeated_num3 >= repeated_num7 and repeated_num3 >= repeated_num8 and repeated_num3 >= repeated_num9 and repeated_num3 >= repeated_num10:
        print("\nNumber 3 is the most repeated!")
    elif repeated_num4 >= repeated_num5 and repeated_num4 >= repeated_num6 and repeated_num4 >= repeated_num7 and repeated_num4 >= repeated_num8 and repeated_num4 >= repeated_num9 and repeated_num4 >= repeated_num10:
        print("\nNumber 4 is the most repeated!")
    elif repeated_num5 >= repeated_num6 and repeated_num5 >= repeated_num7 and repeated_num5 >= repeated_num8 and repeated_num5 >= repeated_num9 and repeated_num5 >= repeated_num10:
        print("\nNumber 5 is the most repeated!")
    elif repeated_num6 >= repeated_num7 and repeated_num6 >= repeated_num8 and repeated_num6 >= repeated_num9 and repeated_num6 >= repeated_num10:
        print("\nNumber 6 is the most repeated!")
    elif repeated_num7 >= repeated_num8 and repeated_num7 >= repeated_num9 and repeated_num7 >= repeated_num10:
        print("\nNumber 7 is the most repeated!")
    elif repeated_num8 >= repeated_num9 and repeated_num8 >= repeated_num10:
        print("\nNumber 8 is the most repeated!")
    elif repeated_num9 >= repeated_num10:
        print("\nNumber 9 is the most repeated!")
    else:
        print("\nNumber 10 is the most repeated!")

most_repeated_number()
