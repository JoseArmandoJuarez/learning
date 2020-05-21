person1 = [{
    "firstName": "Johny",
    "lastName": "Stine",
    "age": 22,
    "height": "5.8 feet",
    "weight": "173lbs",
    "country": "USA california",
    "phoneNumber": "123-456-7890",
    "email": "JohnyStine@gamil.com",
    "language": "English"
}]

person = {
    "firstName": "Johny",
    "lastName": "Stine",
    "age": 22,
    "height": "5.8 feet",
    "weight": "173lbs",
    "country": "USA california",
    "phoneNumber": "123-456-7890",
    "email": "JohnyStine@gamil.com",
    "language": "English"
}

animal = {
    "name": "Tiger",
    "gender": "Male",
    "age": 8,
    "color": "orange, black and white",
    "species": "Malayan Tiger",
    "weight": "310kg",
    "height": "120cm",
    "health": "Excellent"
}


electronic = {
    "type": "IphoneX",
    "number": 10,
    "brand": "Apple inc",
    "yearMade": "2017-2018",
    "color": "grey",
    "size": "5.85 inch",
    "price": "$60.00",
    "createdBy": "Hone Hai Precision Industry Co Ltd and Pegatron"
}


car = {
    "name": "Tesla model X",
    "yearMade": 2015,
    "assembly": "Tesla factory",
    "designer": "Franz von Holzhausen",
    "doors": 5,
    "color": "white",
    "motor": "electric",
    "length": "193.3 in",
    "height": "66..3 in",
    "width": "78.7 in"
}


plant = {
    "name": "Tulip",
    "family": "Liliacase",
    "habitat": "Turkey",
    "color": "red",
    "height": "6 in",
    "growth": "sun, water and light"
}


vegetable = {
    "name": "carrot",
    "energy": "41.35 calories",
    "protein": "930 mg",
    "vitaminC": "5.9 mg",
    "potassium": "320 mg",
    "family": "Apiacease",
    "color": "green and orange",
    "grow": "undeGround"
}

customer = {
    "name": "Helena",
    "age": 26,
    "gender": "female",
    "career": "actress",
    "requests": "website for her portfolio",
    "offering": "$6000.00",
    "dueDate": "2 moths"
}

student = {
    "Fisrt Name": "Jason",
    "Last Name": "Nash",
    "age": 16,
    "grade": 11,
    "grade Average": 88,
    "strongest Class": "Math",
    "weakest Class": "English",
    "country": "united states"
}


teacher= {
    "name": "Mrs.Alsion",
    "gender": "female",
    "email": "alisonteaches@gmail.com",
    "phoneNumber": "987-456-1234",
    "yearsTeaching": 10,
    "subject": "Scinence",
    "salary": "$60000.00",
    "schoolLocation": "ajax high school",
}

computer = {
    "brand": "Alienware",
    "color": "black",
    "year": 2018,
    "type": "Gaming laptop",
    "ram": "16GB",
    "performance": "Excellent",
    "touchScreen": "No",
    "voiceActivator": "yes",
    "faceLogin": "yes"
}

person1.append(computer)

for i in range(len(person1)):
    print(person1[i])

# print(person1)


# print("PERSON")
# for key, value in person.items():
#     print("{}: {}".format(key, value))
    
# print("\n\nANIMAL")
# for key, value in animal.items():
#     print("{}: {}".format(key, value))

# print("\n\nELECTRONIC")
# for key, value in electronic.items():
#     print("{}: {}".format(key, value))
    
# print("\n\nCAR")
# for key, value in car.items():
#     print("{}: {}".format(key, value))
    
# print("\n\nPLANT")
# for key, value in plant.items():
#     print("{}: {}".format(key, value))
    
# print("\n\nVEGETABLE")
# for key, value in vegetable.items():
#     print("{}: {}".format(key, value))
    
# print("\n\nCUSTOMER")
# for key, value in customer.items():
#     print("{}: {}".format(key, value))
    
# print("\n\nSTUDENT")
# for key, value in student.items():
#     print("{}: {}".format(key, value))
    
# print("\n\nTEACHER")
# for key, value in teacher.items():
#     print("{}: {}".format(key, value))
    
# print("\n\nCOMPUTER")
# for key, value in computer.items():
#     print("{}: {}".format(key, value))