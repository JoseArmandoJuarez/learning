
number_list = []


number = 0

for i in range(100):
    number = i
    number_list.append(number)



#Switching the position of the numbers
tempA = 0
tempB = 0


for k in range(0, len(number_list),2):

    tempA = number_list[k]
    tempB = number_list[k+1]

    number_list[k] = tempB
    number_list[k+1] = tempA

print (number_list)