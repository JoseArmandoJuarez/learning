import random

def  random_colors():

    colors_list = ['yellow', 'red', 'blue', 'green', 'orange', 'pink', 'brown', 'white', 'grey', 'black', 'violet']
    my_list = []


    random_num = 0

    for i in range(15):
        random_num = random.randint(1, 10)
        guessed_color = colors_list[random_num]
        my_list.append(guessed_color)


    print("\nRANDOM COLORS!")
    print(my_list)

    yellow_color = 0
    red_color = 0
    blue_color = 0
    green_color = 0
    orange_color = 0
    pink_color = 0
    brown_color = 0
    white_color = 0
    grey_color = 0
    black_color = 0
    violet_color = 0

    for k in range(len(my_list)):
        if my_list[k] == colors_list[0]:
            yellow_color += 1
        elif my_list[k] == colors_list[1]:
            red_color += 1
        elif my_list[k] == colors_list[2]:
            blue_color += 1
        elif my_list[k] == colors_list[3]:
            green_color += 1
        elif my_list[k] == colors_list[4]:
            orange_color += 1
        elif my_list[k] == colors_list[5]:
            pink_color += 1
        elif my_list[k] == colors_list[6]:
            brown_color += 1
        elif my_list[k] == colors_list[7]:
            white_color += 1
        elif my_list[k] == colors_list[8]:
            grey_color += 1
        elif my_list[k] == colors_list[9]:
            black_color += 1
        elif my_list[k] == colors_list[10]:
            violet_color += 1

    print("\nThe YELLOW color is repeated {} times!".format(yellow_color))
    print("The RED color is repeated {} times!".format(red_color))
    print("The BLUE color is repeated {} times!".format(blue_color))
    print("The GREEN color is repeated {} times!".format(green_color))
    print("The ORANGE color is repeated {} times!".format(orange_color))
    print("The PINK color is repeated {} times!".format(pink_color))
    print("The BROWN color is repeated {} times!".format(brown_color))
    print("The WHITE color is repeated {} times!".format(white_color))
    print("The GREY color is repeated {} times!".format(grey_color))
    print("The BLACK color is repeated {} times!".format(black_color))
    print("The VIOLET color is repeated {} times!".format(violet_color)) 

    print("\n\n")

    if yellow_color >= red_color and yellow_color >= blue_color and yellow_color >= green_color and yellow_color >= orange_color and yellow_color >= pink_color and yellow_color >= brown_color and yellow_color >= white_color and yellow_color >= grey_color and yellow_color >= black_color and yellow_color >= violet_color:
        print("The YELLOW color is the MOST repeated!")
    elif red_color >= blue_color and red_color >= green_color and red_color >= orange_color and red_color >= pink_color and red_color >= brown_color and red_color >= white_color and red_color >= grey_color and red_color >= black_color and red_color >= violet_color:
        print("The RED color is the MOST repeated!")
    elif blue_color >= green_color and blue_color >= orange_color and blue_color >= pink_color and blue_color >= brown_color and blue_color >= white_color and blue_color >= grey_color and blue_color >= black_color and blue_color >= violet_color:
        print("The BLUE color is the MOST repeated!")
    elif green_color >= orange_color and green_color >= pink_color and green_color >= brown_color and green_color >= white_color and green_color >= grey_color and green_color >= black_color and green_color >= violet_color:
        print("The GREEN color is the MOST repeated !")
    elif orange_color >= pink_color and orange_color >= brown_color and orange_color >= white_color and orange_color >= grey_color and orange_color >= black_color and orange_color >= violet_color:
        print("The ORANGE color is the MOST repeated!")
    elif pink_color >= brown_color and pink_color >= white_color and pink_color >= grey_color and pink_color >= black_color and pink_color >= violet_color:
        print("The PINK color is the MOST repeated!")
    elif brown_color >= white_color and brown_color >= grey_color and brown_color >= black_color and brown_color >= violet_color:
        print("The BROWN color is the MOST repeated!")
    elif white_color >= grey_color and white_color >= black_color and white_color >= violet_color:
        print("The WHITE color is the MOST repeated!")
    elif grey_color >= black_color and grey_color >= violet_color:
        print("The GREY color is the MOST repeated!")
    elif black_color >= violet_color:
        print("The BLACK color is the MOST repeated!")
    else:
        print("The VIOLET color is the MOST repeated!") 

random_colors()
