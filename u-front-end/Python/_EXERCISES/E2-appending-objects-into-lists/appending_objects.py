persons_list = {1: {"firstName": "Emma", 
                         "lastName": "Watson", 
                         "age": 28, 
                         "height": "1.65m", 
                         "weight": "110lbs", 
                         "born": "Paris France", 
                         "phoneNumber": "235-324-3463", 
                         "email": "Watson@gmail.com", 
                         "language": "French"},
                2: {"firstName": "George",
                           "lastName": "Clooney",
                           "age": 57,
                           "height": "1.8m",
                           "weight": "176lbs",
                           "born": "Kentuky USA",
                           "phone Number": "185-4356-2483",
                           "email": "mrclooney@gamil.com",
                           "language": "French"}
               }

#NEW PERSONS ADDED TO THE LIST OF PERSONS
person3 = {"firstName": "Adam", "lastName": "Sandler", "age": 52, "height": "1.77m", "weight": "200lbs", "born": "United states", "phoneNumber": "987-475-2543", "email": "adamSandler@gmail.com", "language":"English"}
persons_list[3] = person3 

person4 = {"firstName": "Kevin", "lastName": "Hart", "age": 39, "height": "1.63m", "weight":"230lbs", "born": "United States",  "phoneNumber": "345-313-6543", "email": "evinHart@gmail.com", "language": "English"}
persons_list[4] = person4

person5 = {"firstName": "Dwayne", "lastName": "Johnson", "age": 46, "height": "1.96m", "weight": "260lbs", "born":"United States", "phoneNumber": "123-543-7423", "email": "theRock@gmail.com", "language": "English"}
persons_list[5] = person5

person6 = {"firstName": "Bradley", "lastName": "Cooper", "age": 43, "height": "1.85m", "weight": "185lbs", "born": "United states", "phoneNumber": "345-647-2134", "email": "bradleyCooper@gmail.com", "language": "French"}
persons_list[6] = person6

person7 = {"firstName": "Eugenio", "lastName": "Derbez", "age": 57, "height": "1.79m", "weight": "210lbs", "born": "Mexico", "phoneNumber": "654-124-1276", "email": "eugenioDerbez@gmail.com", "language":"Spanish"}
persons_list[7] = person7

person8 = {"firstName": "Salma", "lastName": "Hayek", "age": 52, "height": "1.57m", "weight": "119lbs", "born": "Mexico", "phoneNumber": "234-165-7245", "email": "hayek@gmail.com", "language":"Spanish"}
persons_list[8] = person8

person9 = {"firstName": "Johny", "lastName": "Deep", "age": 55, "height": "1.78m", "weight": "172lbs", "born": "Kentucky USA", "phoneNumber": "623-626-7524", "email":"deep@gmail.com", "language": "French"}
persons_list[9] = person9

person10 = {"firstName": "Tom", "lastName": "Cruise", "age": 56, "height": "1.7m", "weight": "170lns", "born": "New York USA", "phoneNumber": "233-673-7134", "email": "tomcruise@gmail.com", "language":"German"}
persons_list[10] = person10


#DISPLAY ALL THE PEOPLE FROM THE LIST
print("\n")
print("LIST OF PERSONS!")
print(".............")

# for person_id, person_info in persons_list.items():
#     print("\n")
#     for key in person_info:
#         print(key + ':', person_info[key])




for i in persons_list:
    print(persons_list[i])



# #ANIMAL LIST
# animals_list = {1: {"name": "Tiger",
#                     "gender": "Male",
#                     "age": 8,
#                     "color": "orange, black and white",
#                     "species": "Malayan Tiger",
#                     "weight": "310kg",
#                     "height": "1.2m",
#                     "speed": "65km"},
#                 2: {"name": "Lion",
#                     "gender": "Male",
#                     "age": 5,
#                     "color": "black, brown",
#                     "species": "Panthera leo",
#                     "weight": "190kg",
#                     "height": "1.2m",
#                     "speed": "80km"}
#                 }



# animal3 = {"name": "Leopard", "gender":"Female", "age": 7, "color": "yellow wiht black spots", "species": "African", "weight": "23kg", "height": "64m", "speed": "58km"}
# animals_list[3] = animal3

# animal4 = {"name": "Cheetah", "gender":"Female", "age": 12, "color": "yellow wiht black spots", "species": "African", "weight": "55kg", "height": "668m", "speed": "120km"}
# animals_list[4] = animal4

# animal5 = {"name": "Eagle", "gender": "Male", "age": 10, "color": "White and black", "species": "Bald Eagle", "weight": "6.3kg", "height": "1m", "speed": "160km"}
# animals_list[5] = animal5

# animal6 = {"name": "Falcon", "gender": "Female", "age": 6, "color": "grey and white", "species": "Falco", "weight": "1.5kg", "height": "0.6m", "speed":"390km"}
# animals_list[6] = animal6

# animal7 = {"name": "Capuchin", "gender": "Male", "age": 12, "color": "white and black", "species": "White head", "weight": "3.9kg", "height": "0.55m", "speed": "56km"}
# animals_list[7] = animal7

# animal8 = {"nme": "Black howler", "gender": "Female", "age": 15, "color": "Black", "species": "Atelidae", "weight": "10kg", "height": "0.91m", "speed": "30km"}
# animals_list[8] = animal8

# animal9 = {"name": "Shark", "gender": "Male", "age": 20, "color": "grey and white", "species": "Great white", "weight": "1100kg", "height": "6m", "speed": "50km"}
# animals_list[9] = animal9

# animal10 = {"name": "killer Whale", "gender": "Female", "age": 14, "color": "Black and White", "species": "Orcinus Orca", "weight": "5400kg", "height": "8m", "speed": "65km"}
# animals_list[10] = animal10

# #DISPLAY ALL THE ANIMALS FROM THE LIST
# print("\n")
# print("LIST OF ANIMALS")
# print("...............")

# for animal_id, animal_info in animals_list.items():
#     print("\n")
#     for key in animal_info:
#         print(key + ":", animal_info[key])






# #ELECTRONICS LIST
# electronics_list = {1: {"type": "IphoneX",
#                     "number": 10,
#                     "brand": "Apple inc",
#                     "yearMade": "2017-2018",
#                     "color": "grey",
#                     "size": "5.85 inch",
#                     "price": 200.00,
#                     "createdBy": "Hone Hai Precision Industry Co Ltd and Pegatron"},
#                 2: {"type": "ipad",
#                     "number": 3,
#                     "brand": "Apple inc",
#                     "yearMade": 2012,
#                     "color": "red",
#                     "size": "9.50 inch",
#                     "price": 180.00,
#                     "createdBy": "Steve Jobs"}
#                 }


# electronic3 = {"type": "samsung note 9", "number": 9, "brand": "Samsung", "yearMade": 2018, "color": "purple", "size":"6.4in", "price": 13000, "createdBy":"Samnsung galaxy"}
# electronics_list[3] = electronic3

# electronic4 = {"type": "apples watch", "number": 4, "brand": "Apple inc", "yearMade": 2015, "color": "black", "size": "1.6in", "price": 550.00, "createdBy": "Jony Ive"}
# electronics_list[4] = electronic4

# electronic5 = {"type": "Mac Book", "number": 10, "brand": "Apple inc", "yearMade": 2018, "color": "grey", "size": "15in", "price": 4000.00, "createdBy": "Steve Jobs"}
# electronics_list[5] = electronic5

# electronic6 = {"type": "Plays station", "number": 4, "brand": "Sony", "yearMade": 2013, "color": "black", "size": "53 mm × 305 mm", "price": 400.00, "createdBy": "Shuhei Yoshida"}
# electronics_list[6] = electronic6

# electronic7 = {"type": "XBox", "number": 1, "brand": "Flex", "yearMade": "2013", "color": "white and green", "size": "305mm x 275mm", "price": 500, "createdBy": "Carl Ledbetter"}
# electronics_list[7] = electronic7

# electronic8 = {"type": "WiiU", "number": 6, "brand": "Nintendo", "yearMade": "2006", "color": "red", "size": "17.2cm X 4.6cm", "price": 1000.00, "createdBy": "Shigeru Miyamoto"}
# electronics_list[8] = electronic8

# electronic9 = {"type": "sony a6300", "number": 3, "brand": "Sony", "yearMade": 2016, "color": "black", "size": "120 x 67 x 49 mm", "price": 1050.00, "createdBy": "Sony team"}
# electronics_list[9] = electronic9

# electronic10 = {"type": "nintendo switch", "number": 7, "brand":"Nintendo", "yearMade": 2017, "color":"red and blue", "size": "203.1 mm × 102 mm × 13.9 mm", "price": 500.00, "createdBy": "Miyamoto"}
# electronics_list[10] = electronic10


# #DISPLAY ALL THE ELECTRONICS FROM THE LIST
# print("\n")
# print("LIST OF ELECTRONICS")
# print("...............")

# for electronic_id, electronic_info in electronics_list.items():
#     print("\n")
#     for key in electronic_info:
#         print(key + ":", electronic_info[key])




