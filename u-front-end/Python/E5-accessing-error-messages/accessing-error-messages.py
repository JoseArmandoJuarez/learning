def party_planner(cookies, people):
    leftovers = None #null
    num_each = None #null

    try:
        num_each = cookies // people
        leftovers = cookies % people
    except ZeroDivisionError as e:
        print("You have entered 0 people!")
        print("Please, enter how many people are attending the party! ")
        print("ZeroDivisionError occurred: {}".format(e))#Check the error message

    return(num_each, leftovers)


lets_party = 'y'
while lets_party == 'y':

    cookies = int(input("How many cookies are you baking? "))
    people = int(input("How many people are attending? "))

    cookies_each, leftovers = party_planner(cookies, people)

    if cookies_each:  # if cookies_each is not None
        message = "\nLet's party! We'll have {} people attending, they'll each get to eat {} cookies, and we'll have {} left over."
        print(message.format(people, cookies_each, leftovers))

    lets_party = input("\nWould you like to party more? (y or n) ")