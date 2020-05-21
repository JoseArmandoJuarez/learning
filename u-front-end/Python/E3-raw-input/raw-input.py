"""
name = input("Enter your name: ")
print("Hello there, {}!".format(name.title()))
print("\n")
num = int(input("Enter an integer: "))
print("Your number is: {}".format(num))
print("\n")
num = float(input("Enter a decimal number: "))
print("Your decimal number is: {}".format(num))

print("\n")
num = int(float(input("Enter a integer or a decimal: ")))
print(num)

print("\n")

#Instead of using int and float together use eval
x = eval(input("Enter an Expression: "))
print(x)
"""


names =  input("Enter names (separate with comas): ").split(",") #get and process input for a list of names
assignments =  input("Enter number of assignments to hand in (separate with comas): ").split(",")# get and process input for a list of the number of assignments
grades =  (input("Enter grade (separate with comas): ").split(","))# get and process input for a list of grades

# message string to be used for each student
# HINT: use .format() with this string in your for loop
message = "Hi {},\n\nThis is a reminder that you have {} assignments left to \
submit before you can graduate.\nYou're current grade is {} and can increase \
to {} if you submit all assignments before the due date.\n\n"

# write a for loop that iterates through each set of names, assignments, and grades to print each student's message
for name, assignment, grade in zip(names, assignments, grades):
    print(message.format(name, assignment, grade, int(grade) + int(assignment)*2))