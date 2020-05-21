
def natural_numbers_of_3(name):
    
    print("\n")
    print(name)

    natural_numbers = []
    total_sums = []

    total_number = 0

    for num in range(1, 100):
        if num%3 == 0:
            natural_numbers.append(num)
            total_number += num
            total_sums.append(total_number)


    print(natural_numbers)
    print("\nADDING THE NATURAL NUMBERS TOGETHER")
    print(total_sums)
    print("\nEND TOTAL")
    print(total_number)

natural_numbers_of_3("NATURAL NUMBERS OF 3 TO 100")


def natural_numbers_of_5(name):

    print("\n")
    print(name)

    natural_numbers = []
    total_sums = []

    total_number = 0

    for num in range(1, 101):
        if num%5 == 0:
            natural_numbers.append(num)
            total_number += num
            total_sums.append(total_number)


    print(natural_numbers)
    print("\nADDING THE NATURAL NUMBERS TOGETHER")
    print(total_sums)
    print("\nEND TOTAL")
    print(total_number)

natural_numbers_of_5("NATURAL NUMBERS OF 5 TO 100")