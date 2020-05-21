
while True:
    #This is the onlu mandatory caluse in a try statement. 
    #The code in this block is the first thing that python runs in a try statement
    try: 
        x = int(input("Enter a number: "))
        break
    except: #If Python runs into an exception while running the try block, 
            #it will jump to the except block that handles that exception
        print("That's not a valid number")
    finally:
        #Python will run this code in any condition, even if its ending the program.
        print('\nAttempted Input\n')

