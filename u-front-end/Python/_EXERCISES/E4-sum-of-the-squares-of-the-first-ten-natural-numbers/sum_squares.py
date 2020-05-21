def sum_of_squares():

    total_sum = 0
    squares_sum = []

    total_natural_sum = 0
    total_numbers = []

    for i in range(1, 11):
        total_numbers.append(i)
        total_natural_sum += i
        
        number_squred = i**2
        squares_sum.append(number_squred)
        total_sum += number_squred
    

    print("\nThe sum of the squares of the first ten natural numbers:")
    print(squares_sum)
    print("\nThe total sum is:")
    print(total_sum)

    print("\nThe square of the sum of the first ten natural numbers is:")
    print(total_numbers)
    print("TOTAL: ", total_natural_sum)

sum_of_squares()


