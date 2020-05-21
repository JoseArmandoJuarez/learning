
multiplesOf2_list = []
multiplesOf3_list = []
multiplesOf4_list = []
multiplesOf5_list = []
multiplesOf6_list = []



multipleOf2 = 0
multipleOf3 = 0
multipleOf4 = 0
multipleOf5 = 0
multipleOf6 = 0

for i in range(1, 100):
    if i < 100:
        multipleOf2 = i * 2
        multiplesOf2_list.append(multipleOf2)
        multipleOf2 = 0

        multipleOf3 = i * 3
        multiplesOf3_list.append(multipleOf3)
        multipleOf3 = 0

        multipleOf4 = i * 4
        multiplesOf4_list.append(multipleOf4)
        multipleOf4 = 0

        multipleOf5 = i * 5
        multiplesOf5_list.append(multipleOf5)
        multipleOf5 = 0

        multipleOf6 = i * 6
        multiplesOf6_list.append(multipleOf6)
        multipleOf6 = 0

print("\nMULTIPLES OF 2\n")
print(multiplesOf2_list)

print("\n\nMULTIPLES OF 3\n")
print(multiplesOf3_list)

print("\n\nMULTIPLES OF 4\n")
print(multiplesOf4_list)

print("\n\nMULTIPLES OF 5\n")
print(multiplesOf5_list)

print("\n\nMULTIPLES OF 6\n")
print(multiplesOf6_list)
