
story_string = """Once upon a time there lived a crow. She had built her nest on a tree. At the root of the same tree, a snake had built its home. 
Whenever the crow laid eggs, the snake would eat them up. The crow felt helpless. That evil snake. I must do something. Let me go and talk to him, thought the crow. 
The next morning, the crow went to the snake and said politely: Please spare my eggs, dear friend. Let us live like good neighbors and not disturb each other. 
Huh! You cannot expect me to go hungry. Eggs are what I eat, replied the snake, in a nasty tone. 
The crow felt angry and she thought, I must teach that snake a lesson. 
The very next day, the crow was flying over the Kings palace. She saw the Princess wearing an expensive necklace. Suddenly a thought flashed in her mind and she swooped down, picked up the necklace in her beak and flew off to her nest. "+ 
When the Princess saw the crow flying off with her necklace, she screamed, Somebody help, the crow has taken my necklace. 
Soon the palace guards were running around in search of the necklace. Within a short time the guards found the crow. She still sat with the necklace hanging from her beak.  
The clever crow thought, Now is the time to act. And she dropped the necklace, which fell right into the snake’s pit of house.
When the snake heard the noise, it came out of its pit of house. The palace guards saw the snake. A snake! Kill it! they shouted. With big sticks, they beat the snake and killed it. 
Then the guards took the necklace and went back to the princess. The crow was happy, Now my eggs will be safe, she thought and led a happy and peaceful life."""

list_story = []


word = ""

last_index = range(len(story_string)-1,-1,-1)

for i in range(len(story_string)):
    if story_string[i] != "." and story_string[i] != "," and story_string[i] != ":" and story_string[i] != ";" and story_string[i] != "!":
        word = word + story_string[i]
    
    if story_string[i] == " ":
        word = word.strip()
        list_story.append(word)
        word = " "
    elif i == last_index:
        list_story.append(word)

print(list_story)




