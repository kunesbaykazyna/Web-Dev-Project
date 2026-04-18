from django.core.management.base import BaseCommand
from books.models import Book, Author

AUTHORS_DATA = {
    "Diana Gabaldon": {
        "birth_date": "1952-01-11",
        "bio": "Diana Gabaldon is an American author best known for the Outlander series, a bestselling blend of historical fiction, romance, fantasy, and adventure. Her novels are praised for rich historical detail, memorable characters, and emotional storytelling. Before becoming a full-time writer, she worked as a university professor and researcher."
    },
    "Liane Moriarty": {
        "birth_date": "1966-11-15",
        "bio": "Liane Moriarty is an Australian novelist known for compelling contemporary fiction that explores relationships, secrets, and family life. Her international bestseller Big Little Lies became a successful television adaptation. She is admired for combining suspense, humor, and emotional depth."
    },
    "Aldous Huxley": {
        "birth_date": "1894-07-26",
        "bio": "Aldous Huxley was an English writer and philosopher best known for Brave New World, one of the most influential dystopian novels ever written. His works examined science, technology, politics, and human freedom. He remains an important literary voice of the twentieth century."
    },
    "Anne Frank": {
        "birth_date": "1929-06-12",
        "bio": "Anne Frank was a Jewish diarist whose writing became one of the most powerful personal accounts of World War II. Her diary, written while hiding from Nazi persecution, has inspired millions of readers around the world. Her words continue to symbolize hope, courage, and humanity."
    },
    "Yuval Noah Harari": {
        "birth_date": "1976-02-24",
        "bio": "Yuval Noah Harari is an Israeli historian and professor known worldwide for Sapiens, Homo Deus, and 21 Lessons for the 21st Century. His books explore history, technology, society, and the future of humanity in an accessible and thought-provoking style."
    },
    "Fyodor Dostoevsky": {
        "birth_date": "1821-11-11",
        "bio": "Fyodor Dostoevsky was a Russian novelist famous for deep psychological and philosophical literature. His major works include Crime and Punishment, The Brothers Karamazov, and The Idiot. He explored morality, guilt, faith, suffering, and the complexity of the human mind."
    },
    "F. Scott Fitzgerald": {
        "birth_date": "1896-09-24",
        "bio": "F. Scott Fitzgerald was an American novelist and short story writer of the Jazz Age. He is best known for The Great Gatsby, a classic novel about ambition, wealth, and the American Dream. His elegant prose and social insight made him one of America’s greatest writers."
    },
    "Alex Michaelides": {
        "birth_date": "1977-09-04",
        "bio": "Alex Michaelides is a British-Cypriot author and screenwriter known for psychological thrillers. His debut novel The Silent Patient became a global bestseller. He is recognized for twist endings, suspenseful plots, and strong emotional tension."
    },
    "George Orwell": {
        "birth_date": "1903-06-25",
        "bio": "George Orwell was an English novelist, essayist, and journalist best known for 1984 and Animal Farm. His writing focused on totalitarianism, propaganda, censorship, and political truth. His ideas remain highly relevant in modern society."
    },
    "Frank Herbert": {
        "birth_date": "1920-10-08",
        "bio": "Frank Herbert was an American science fiction writer best known for Dune, one of the most celebrated novels in the genre. His work combined politics, ecology, religion, and survival into an epic story that influenced generations of readers and creators."
    },
    "George R.R. Martin": {
        "birth_date": "1948-09-20",
        "bio": "George R.R. Martin is an American fantasy author and screenwriter famous for A Song of Ice and Fire, adapted as Game of Thrones. He is known for complex characters, political intrigue, and unpredictable storytelling."
    },
    "J.R.R. Tolkien": {
        "birth_date": "1892-01-03",
        "bio": "J.R.R. Tolkien was an English writer, scholar, and professor best known for The Hobbit and The Lord of the Rings. He created one of the richest fantasy worlds in literature and shaped the modern fantasy genre."
    },
    "J.K. Rowling": {
        "birth_date": "1965-07-31",
        "bio": "J.K. Rowling is a British author best known for the Harry Potter series, one of the most successful literary franchises in history. Her books inspired millions of readers through themes of friendship, courage, and imagination."
    },
    "Paulo Coelho": {
        "birth_date": "1947-08-24",
        "bio": "Paulo Coelho is a Brazilian novelist known worldwide for The Alchemist. His books focus on dreams, destiny, spirituality, and personal growth. He is one of the most translated living authors."
    },
    "Harper Lee": {
        "birth_date": "1926-04-28",
        "bio": "Harper Lee was an American novelist best known for To Kill a Mockingbird, a landmark novel about justice and racial inequality. Her work became one of the most respected books in modern literature."
    },
    "J.D. Salinger": {
        "birth_date": "1919-01-01",
        "bio": "J.D. Salinger was an American writer best known for The Catcher in the Rye. His work captured teenage alienation, identity, and the search for meaning. He remains an iconic literary figure."
    },
    "Markus Zusak": {
        "birth_date": "1975-06-23",
        "bio": "Markus Zusak is an Australian author known for The Book Thief, a bestselling novel set during World War II. His writing is praised for emotional storytelling and unique narrative style."
    },
    "Suzanne Collins": {
        "birth_date": "1962-08-10",
        "bio": "Suzanne Collins is an American writer best known for The Hunger Games trilogy. Her novels combine action, dystopian politics, and strong character development, gaining global popularity."
    },
    "James Dashner": {
        "birth_date": "1972-11-26",
        "bio": "James Dashner is an American author famous for The Maze Runner series. His books are known for mystery, survival themes, and fast-paced dystopian adventures."
    },
    "Rick Riordan": {
        "birth_date": "1964-06-05",
        "bio": "Rick Riordan is an American author best known for Percy Jackson and other mythology-based adventures. He made ancient myths exciting and accessible for young readers worldwide."
    },
    "Stephenie Meyer": {
        "birth_date": "1973-12-24",
        "bio": "Stephenie Meyer is an American novelist known for the Twilight saga. Her books became a worldwide cultural phenomenon and popularized paranormal romance for a new generation."
    },
    "Paula Hawkins": {
        "birth_date": "1972-08-26",
        "bio": "Paula Hawkins is a British author known for The Girl on the Train, an international psychological thriller bestseller. Her novels often explore memory, deception, and hidden lives."
    },
    "Dennis Lehane": {
        "birth_date": "1965-08-04",
        "bio": "Dennis Lehane is an American novelist and screenwriter known for crime fiction and thrillers such as Shutter Island and Mystic River. His stories are dark, emotional, and suspenseful."
    },
    "Cormac McCarthy": {
        "birth_date": "1933-07-20",
        "bio": "Cormac McCarthy was an American writer known for powerful and often bleak novels such as The Road, No Country for Old Men, and Blood Meridian. His style is distinctive, poetic, and intense."
    },
    "Neil Gaiman": {
        "birth_date": "1960-11-10",
        "bio": "Neil Gaiman is an English author known for fantasy, horror, and myth-inspired fiction including Coraline, American Gods, and The Sandman. His imagination and storytelling made him globally admired."
    },
    "Kathryn Stockett": {
        "birth_date": "1969-01-01",
        "bio": "Kathryn Stockett is an American novelist best known for The Help, a bestselling historical novel about race, courage, and social change in the American South."
    },
    "Tara Westover": {
        "birth_date": "1986-09-27",
        "bio": "Tara Westover is an American memoirist known for Educated, a bestselling autobiography about family, education, and self-discovery. Her story inspired readers around the world."
    },
    "C.S. Lewis": {
        "birth_date": "1898-11-29",
        "bio": "C.S. Lewis was a British writer, scholar, and Christian thinker known for The Chronicles of Narnia. His works combined imagination, philosophy, and moral themes."
    },
    "John Green": {
        "birth_date": "1977-08-24",
        "bio": "John Green is an American author known for young adult novels such as The Fault in Our Stars. His books explore love, loss, and growing up with humor and sincerity."
    },
    "Jojo Moyes": {
        "birth_date": "1969-08-04",
        "bio": "Jojo Moyes is a British novelist known for emotional contemporary romance including Me Before You. Her stories often focus on personal transformation and relationships."
    },
    "Jane Austen": {
        "birth_date": "1775-12-16",
        "bio": "Jane Austen was an English novelist famous for Pride and Prejudice, Emma, and Sense and Sensibility. Her works explored marriage, class, and character through wit, irony, and unforgettable storytelling."
    },
    "Stephen King": {
        "birth_date": "1947-09-21",
        "bio": "Stephen King is an American author widely known as the master of horror. He has written bestselling novels such as It, The Shining, Carrie, and many others across horror, fantasy, and suspense."
    },
    "Bram Stoker": {
        "birth_date": "1847-11-08",
        "bio": "Bram Stoker was an Irish author best known for Dracula, one of the most influential horror novels ever written. His work shaped the modern vampire myth."
    },
    "Mary Shelley": {
        "birth_date": "1797-08-30",
        "bio": "Mary Shelley was an English novelist best known for Frankenstein, a pioneering science fiction and gothic novel. Her work explored creation, responsibility, and ambition."
    },
    "Dan Brown": {
        "birth_date": "1964-06-22",
        "bio": "Dan Brown is an American thriller writer famous for The Da Vinci Code and other fast-paced mystery novels involving symbols, history, and secret societies."
    },
    "Gillian Flynn": {
        "birth_date": "1971-02-24",
        "bio": "Gillian Flynn is an American author known for dark psychological thrillers such as Gone Girl. Her stories are famous for complex characters and shocking twists."
    },
    "Andy Weir": {
        "birth_date": "1972-06-16",
        "bio": "Andy Weir is an American novelist known for science-driven fiction including The Martian. His books combine realism, humor, and survival under extreme conditions."
    },
    "Ernest Cline": {
        "birth_date": "1972-03-29",
        "bio": "Ernest Cline is an American writer known for Ready Player One, a pop-culture-filled science fiction adventure centered on virtual reality and gaming."
    },
    "William Gibson": {
        "birth_date": "1948-03-17",
        "bio": "William Gibson is a Canadian-American speculative fiction author best known for Neuromancer. He helped define the cyberpunk genre and imagined many future technologies."
    }
}

BOOKS = [
    {
        "title": "Outlander",
        "author": "Diana Gabaldon",
        "genre": "Romance",
        "year": "1991-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0440212561.01.L.jpg",
        "description": "Claire Randall, a former combat nurse from the 1940s, is mysteriously transported to 18th-century Scotland, where she is forced to navigate a violent and unfamiliar world. Torn between loyalty to her husband in her own time and a growing love for the brave Highland warrior Jamie Fraser, Claire becomes caught in political conflict, danger, and a passionate romance that changes her life forever."
    },
    {
        "title": "Big Little Lies",
        "author": "Liane Moriarty",
        "genre": "Thriller",
        "year": "2014-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0425274861.01.L.jpg",
        "description": "Set in a wealthy seaside town, this novel follows three women whose seemingly perfect lives hide painful secrets, broken relationships, and growing tension. As lies, gossip, and private struggles build, a shocking tragedy at a school event reveals how dangerous hidden truths can become."
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "genre": "Science Fiction",
        "year": "1932-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0060850523.01.L.jpg",
        "description": "In a futuristic society built on technology, pleasure, and absolute control, human beings are genetically designed and conditioned to fit their social roles. As characters begin to question this carefully managed world, the novel explores freedom, individuality, and the cost of sacrificing truth for comfort."
    },
    {
        "title": "The Diary of a Young Girl",
        "author": "Anne Frank",
        "genre": "History",
        "year": "1947-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0553296981.01.L.jpg",
        "description": "This powerful diary records Anne Frank’s thoughts, fears, hopes, and daily life while hiding from Nazi persecution during World War II. Written with honesty, intelligence, and courage, her words became one of the most important personal testimonies of the Holocaust."
    },
    {
        "title": "Sapiens",
        "author": "Yuval Noah Harari",
        "genre": "History",
        "year": "2011-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0062316095.01.L.jpg",
        "description": "Yuval Noah Harari traces the history of humankind from early hunter-gatherers to modern global society, exploring how biology, culture, religion, economics, and technology shaped human civilization. The book asks deep questions about what made Homo sapiens so powerful and where humanity may be heading next."
    },
    {
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "genre": "Classic",
        "year": "1866-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0143058142.01.L.jpg",
        "description": "This psychological classic follows Rodion Raskolnikov, a poor student who commits a terrible crime and then struggles with guilt, fear, and moral conflict. As his mind begins to collapse under the weight of his actions, the novel explores justice, suffering, redemption, and the human conscience."
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic",
        "year": "1925-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0743273567.01.L.jpg",
        "description": "Set in the glittering world of the Jazz Age, this novel tells the story of Jay Gatsby, a mysterious millionaire obsessed with reclaiming a lost love. Beneath the beauty, wealth, and lavish parties lies a tragic reflection on ambition, illusion, and the emptiness of the American Dream."
    },
    {
        "title": "The Silent Patient",
        "author": "Alex Michaelides",
        "genre": "Thriller",
        "year": "2019-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/1250301696.01.L.jpg",
        "description": "After shooting her husband, Alicia Berenson never speaks another word, turning her silence into a mystery that fascinates the public. A determined psychotherapist becomes obsessed with uncovering the truth behind her silence, only to discover secrets far darker and more personal than he expected."
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "genre": "Science Fiction",
        "year": "1949-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0451524934.01.L.jpg",
        "description": "In a totalitarian state ruled by surveillance, propaganda, and fear, Winston Smith secretly begins to question the system controlling every part of life. As he searches for truth and freedom, he is forced to confront the terrifying power of a government that can control memory, language, and thought itself."
    },
    {
        "title": "Dune",
        "author": "Frank Herbert",
        "genre": "Science Fiction",
        "year": "1965-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0441172717.01.L.jpg",
        "description": "On the desert planet Arrakis, young Paul Atreides becomes entangled in politics, prophecy, religion, and war as powerful forces battle over the universe’s most valuable resource. Dune is an epic story of destiny, survival, leadership, and the dangerous relationship between power and belief."
    },
    {
        "title": "A Game of Thrones",
        "author": "George R.R. Martin",
        "genre": "Fantasy",
        "year": "1996-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0553593714.01.L.jpg",
        "description": "In a brutal world of noble families, betrayals, and shifting alliances, the struggle for the Iron Throne begins. As war spreads across the kingdoms and ancient dangers awaken beyond the Wall, the novel weaves together politics, ambition, loyalty, and survival in an unforgettable fantasy epic."
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "year": "1937-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/054792822X.01.L.jpg",
        "description": "Bilbo Baggins, a quiet hobbit who prefers comfort and routine, is unexpectedly swept into an adventure with a group of dwarves and the wizard Gandalf. Their dangerous journey leads through forests, mountains, riddles, and battles as Bilbo discovers bravery and resourcefulness he never knew he had."
    },
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "year": "1997-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0439708184.01.L.jpg",
        "description": "Harry Potter learns on his eleventh birthday that he is a wizard and begins a new life at Hogwarts School of Witchcraft and Wizardry. As he makes friends, discovers his past, and uncovers a dark mystery hidden within the school, Harry takes his first step into a magical world full of wonder and danger."
    },
    {
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "genre": "Classic",
        "year": "1988-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0061122416.01.L.jpg",
        "description": "Santiago, a young shepherd from Spain, leaves behind his familiar life to follow a recurring dream about hidden treasure. Along the way he meets strangers, faces challenges, and learns spiritual lessons about destiny, courage, love, and listening to the language of the world."
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "genre": "Classic",
        "year": "1960-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0061120081.01.L.jpg",
        "description": "Told through the eyes of young Scout Finch, this novel portrays childhood, injustice, and moral courage in the American South. When Scout’s father, Atticus Finch, defends a Black man falsely accused of a crime, the story reveals prejudice, empathy, and the importance of standing up for what is right."
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "genre": "Classic",
        "year": "1951-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0316769487.01.L.jpg",
        "description": "After being expelled from school, teenager Holden Caulfield wanders through New York City, feeling lost, angry, and deeply disconnected from the world around him. Through his sharp voice and emotional honesty, the novel explores loneliness, innocence, identity, and the confusion of growing up."
    },
    {
        "title": "The Book Thief",
        "author": "Markus Zusak",
        "genre": "History",
        "year": "2005-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0375842209.01.L.jpg",
        "description": "Set in Nazi Germany, this novel follows Liesel Meminger, a young girl who finds comfort and strength in stolen books while the world around her is falling apart. Narrated by Death, the story is both heartbreaking and beautiful, exploring friendship, loss, language, and the power of words."
    },
    {
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "genre": "Science Fiction",
        "year": "2008-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0439023483.01.L.jpg",
        "description": "In a dystopian future, sixteen-year-old Katniss Everdeen volunteers to take her sister’s place in a deadly televised competition where only one tribute can survive. As she fights for her life, she becomes a symbol of resistance against a cruel and unequal system."
    },
    {
        "title": "Catching Fire",
        "author": "Suzanne Collins",
        "genre": "Science Fiction",
        "year": "2009-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0439023491.01.L.jpg",
        "description": "After surviving the Hunger Games, Katniss and Peeta return home only to discover that their actions have sparked unrest across the districts. Forced back into the arena for the Quarter Quell, Katniss realizes that the game has become part of a much larger rebellion."
    },
    {
        "title": "Mockingjay",
        "author": "Suzanne Collins",
        "genre": "Science Fiction",
        "year": "2010-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0439023513.01.L.jpg",
        "description": "As the final conflict against the Capitol begins, Katniss is pushed into the role of the Mockingjay, the face of a revolution she never intended to lead. The novel explores war, propaganda, sacrifice, trauma, and the personal cost of becoming a symbol."
    },
    {
        "title": "The Maze Runner",
        "author": "James Dashner",
        "genre": "Science Fiction",
        "year": "2009-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0385737955.01.L.jpg",
        "description": "Thomas wakes up in a strange place called the Glade with no memory of his past, surrounded by boys trapped in the center of a giant and deadly maze. As the mystery deepens and danger grows, he must uncover the truth about the maze and his role in it."
    },
    {
        "title": "The Lightning Thief",
        "author": "Rick Riordan",
        "genre": "Fantasy",
        "year": "2005-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0786838655.01.L.jpg",
        "description": "Percy Jackson discovers that he is the son of a Greek god and is suddenly drawn into a world of monsters, prophecies, and ancient rivalries. Accused of stealing Zeus’s lightning bolt, Percy embarks on a fast-paced quest that mixes humor, mythology, and adventure."
    },
    {
        "title": "Twilight",
        "author": "Stephenie Meyer",
        "genre": "Romance",
        "year": "2005-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0316015849.01.L.jpg",
        "description": "When Bella Swan moves to the rainy town of Forks, she becomes fascinated by Edward Cullen, a mysterious and beautiful classmate hiding a dangerous secret. Their growing relationship blends romance, tension, and the supernatural as Bella is drawn deeper into Edward’s world."
    },
    {
        "title": "New Moon",
        "author": "Stephenie Meyer",
        "genre": "Romance",
        "year": "2006-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0316160199.01.L.jpg",
        "description": "After Edward leaves to protect her, Bella struggles with heartbreak, loneliness, and a growing bond with her friend Jacob Black. As hidden truths about Jacob emerge and danger returns, Bella is forced to confront loss, loyalty, and the risks of love."
    },
    {
        "title": "Eclipse",
        "author": "Stephenie Meyer",
        "genre": "Romance",
        "year": "2007-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0316160202.01.L.jpg",
        "description": "Bella finds herself torn between her love for Edward and her deep connection to Jacob while a new threat rises around them. As old enemies return and a battle approaches, the story explores love, choice, jealousy, and the price of commitment."
    },
    {
        "title": "Breaking Dawn",
        "author": "Stephenie Meyer",
        "genre": "Romance",
        "year": "2008-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/031606792X.01.L.jpg",
        "description": "The final part of Bella and Edward’s story brings marriage, transformation, and a dangerous conflict that threatens their future. With new alliances forming and powerful enemies gathering, the novel combines romance, family, and supernatural tension in a dramatic conclusion."
    },
    {
        "title": "The Girl on the Train",
        "author": "Paula Hawkins",
        "genre": "Thriller",
        "year": "2015-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/1594634025.01.L.jpg",
        "description": "Rachel watches the lives of strangers from her train every day, imagining happiness where she sees only fragments. When a woman she has been observing suddenly goes missing, Rachel becomes entangled in a disturbing mystery shaped by memory, obsession, and deception."
    },
    {
        "title": "Shutter Island",
        "author": "Dennis Lehane",
        "genre": "Thriller",
        "year": "2003-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0061703230.01.L.jpg",
        "description": "Two U.S. marshals arrive at Ashecliffe Hospital on a remote island to investigate the disappearance of a patient, but the case quickly becomes more disturbing than they imagined. As storms close in and secrets unravel, reality itself begins to feel uncertain."
    },
    {
        "title": "The Road",
        "author": "Cormac McCarthy",
        "genre": "Horror",
        "year": "2006-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0307387895.01.L.jpg",
        "description": "In a burned and dying world after an unspecified catastrophe, a father and his young son travel through ash, hunger, and fear in search of safety. Their journey is bleak and painful, but at its heart lies a powerful story about love, hope, and survival."
    },
    {
        "title": "Coraline",
        "author": "Neil Gaiman",
        "genre": "Horror",
        "year": "2002-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0061139378.01.L.jpg",
        "description": "Coraline discovers a hidden door in her new home that leads to a strange parallel world where everything seems better at first. But behind the charm lies something deeply unsettling, and Coraline must rely on courage and intelligence to save herself and her family."
    },
    {
        "title": "The Help",
        "author": "Kathryn Stockett",
        "genre": "History",
        "year": "2009-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0425232204.01.L.jpg",
        "description": "In 1960s Mississippi, the lives of Black maids and the white families they work for are shaped by racism, silence, and inequality. When a young woman decides to collect their stories, the result is a brave and emotional novel about dignity, injustice, courage, and social change."
    },
    {
        "title": "Educated",
        "author": "Tara Westover",
        "genre": "History",
        "year": "2018-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0399590501.01.L.jpg",
        "description": "This memoir tells the true story of Tara Westover, who grew up in a strict and isolated family with little formal education. Her journey from a survivalist childhood to earning a PhD becomes a remarkable exploration of self-discovery, family loyalty, trauma, and the transformative power of learning."
    },
    {
        "title": "The Lord of the Rings: The Two Towers",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "year": "1954-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0547928203.01.L.jpg",
        "description": "With the Fellowship broken, the quest to destroy the One Ring becomes even more dangerous as the members are scattered across Middle-earth. Battles intensify, alliances are tested, and hope survives only through courage, friendship, and perseverance against overwhelming darkness."
    },
    {
        "title": "Harry Potter and the Prisoner of Azkaban",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "year": "1999-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0439136369.01.L.jpg",
        "description": "In his third year at Hogwarts, Harry learns that the dangerous Sirius Black has escaped from Azkaban and may be searching for him. As secrets from the past come to light, Harry discovers unexpected truths about friendship, betrayal, and the people who shaped his life."
    },
    {
        "title": "Harry Potter and the Goblet of Fire",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "year": "2000-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0439139600.01.L.jpg",
        "description": "When Harry is unexpectedly chosen to compete in the dangerous Triwizard Tournament, he faces magical challenges far beyond his age and experience. Beneath the excitement of the tournament, darker forces are gathering, and the wizarding world begins to change forever."
    },
    {
        "title": "Harry Potter and the Order of the Phoenix",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "year": "2003-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0439358078.01.L.jpg",
        "description": "As the Ministry of Magic refuses to admit Voldemort’s return, Harry finds himself isolated, angry, and under pressure at Hogwarts. With his friends, he forms Dumbledore’s Army to prepare for the coming darkness, while learning difficult lessons about fear, leadership, and loss."
    },
    {
        "title": "Harry Potter and the Half-Blood Prince",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "year": "2005-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0439785960.01.L.jpg",
        "description": "Harry’s sixth year at Hogwarts reveals crucial secrets about Voldemort’s past and the weakness hidden in his power. As war draws closer and danger enters the school itself, the story balances mystery, love, and the growing responsibility of preparing for final battle."
    },
    {
        "title": "Harry Potter and the Deathly Hallows",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "year": "2007-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0545010225.01.L.jpg",
        "description": "Harry, Ron, and Hermione leave Hogwarts behind to search for Voldemort’s Horcruxes and finish the mission Dumbledore left them. Their final journey is filled with sacrifice, danger, loyalty, and revelations, leading to the decisive battle between love and darkness."
    },
    {
        "title": "The Chronicles of Narnia",
        "author": "C.S. Lewis",
        "genre": "Fantasy",
        "year": "1956-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0066238501.01.L.jpg",
        "description": "This beloved fantasy follows children who enter the magical land of Narnia, a world of talking animals, mythical creatures, epic battles, and moral choices. Through adventure and imagination, the story explores courage, faith, sacrifice, and the struggle between good and evil."
    },
    {
        "title": "The Fault in Our Stars",
        "author": "John Green",
        "genre": "Romance",
        "year": "2012-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/014242417X.01.L.jpg",
        "description": "Hazel Grace Lancaster meets Augustus Waters at a cancer support group, and together they form a relationship marked by intelligence, humor, tenderness, and pain. Their love story is both beautiful and heartbreaking, exploring mortality, meaning, and the desire to leave a mark on the world."
    },
    {
        "title": "Me Before You",
        "author": "Jojo Moyes",
        "genre": "Romance",
        "year": "2012-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0143124544.01.L.jpg",
        "description": "Louisa Clark takes a job caring for Will Traynor, a wealthy and intelligent man left paralyzed after an accident. As their relationship deepens, both lives are changed by difficult choices, emotional growth, and questions about happiness, dignity, and love."
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Romance",
        "year": "1813-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0141439513.01.L.jpg",
        "description": "Elizabeth Bennet and Mr. Darcy begin with misunderstanding, pride, and sharp judgments, but their relationship gradually changes as each learns to see the other more clearly. With wit and elegance, Austen explores love, class, reputation, and personal growth."
    },
    {
        "title": "The Shining",
        "author": "Stephen King",
        "genre": "Horror",
        "year": "1977-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0307743659.01.L.jpg",
        "description": "Jack Torrance takes a winter job as caretaker of the isolated Overlook Hotel, hoping for a fresh start with his family. But the hotel’s dark history and supernatural forces begin to influence him, turning the story into a terrifying exploration of madness, violence, and fear."
    },
    {
        "title": "It",
        "author": "Stephen King",
        "genre": "Horror",
        "year": "1986-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/1501142976.01.L.jpg",
        "description": "In the town of Derry, a group of children known as the Losers’ Club confronts a shape-shifting evil that preys on fear and returns every generation. Years later, as adults, they must reunite to face the horror once again and confront both the monster and their past."
    },
    {
        "title": "Dracula",
        "author": "Bram Stoker",
        "genre": "Horror",
        "year": "1897-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0486411095.01.L.jpg",
        "description": "This gothic classic tells the story of Count Dracula’s attempt to spread evil from Transylvania to England and the efforts of a small group determined to stop him. Through journals, letters, and testimonies, the novel builds suspense, dread, and one of literature’s most enduring villains."
    },
    {
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "genre": "Horror",
        "year": "1818-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0486282112.01.L.jpg",
        "description": "Victor Frankenstein, driven by scientific ambition, creates life in an unnatural way and then recoils from what he has made. The novel becomes a haunting reflection on responsibility, isolation, creation, revenge, and the consequences of human pride."
    },
    {
        "title": "The Da Vinci Code",
        "author": "Dan Brown",
        "genre": "Thriller",
        "year": "2003-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0307474275.01.L.jpg",
        "description": "After a murder in the Louvre, symbologist Robert Langdon and cryptologist Sophie Neveu are drawn into a fast-paced hunt through clues hidden in art, history, and religion. Their search uncovers secrets, conspiracies, and a mystery with the power to change accepted history."
    },
    {
        "title": "Gone Girl",
        "author": "Gillian Flynn",
        "genre": "Thriller",
        "year": "2012-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0307588378.01.L.jpg",
        "description": "When Amy Dunne disappears on her wedding anniversary, suspicion quickly falls on her husband Nick. As the investigation unfolds, their marriage is revealed through lies, manipulation, media pressure, and shocking twists that challenge everything the reader assumes."
    },
    {
        "title": "The Silent Patient",
        "author": "Alex Michaelides",
        "genre": "Thriller",
        "year": "2019-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/1250301696.01.L.jpg",
        "description": "Alicia Berenson’s refusal to speak after murdering her husband transforms her into a famous and disturbing mystery. Theo Faber becomes determined to treat her and reveal the truth, but his obsession leads him toward disturbing discoveries and a devastating ending."
    },
    {
        "title": "The Martian",
        "author": "Andy Weir",
        "genre": "Science Fiction",
        "year": "2011-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0553418025.01.L.jpg",
        "description": "After being left behind on Mars by his crew, astronaut Mark Watney must use science, humor, and determination to survive alone on a hostile planet. With limited supplies and no easy rescue, he turns survival into a battle of intelligence, endurance, and hope."
    },
    {
        "title": "Ready Player One",
        "author": "Ernest Cline",
        "genre": "Science Fiction",
        "year": "2011-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0307887448.01.L.jpg",
        "description": "In a future where much of humanity escapes into a massive virtual reality universe called the OASIS, teenager Wade Watts joins a high-stakes contest to find a hidden Easter egg. Packed with puzzles, pop-culture references, and competition, the novel blends adventure, technology, and imagination."
    },
    {
        "title": "Neuromancer",
        "author": "William Gibson",
        "genre": "Science Fiction",
        "year": "1984-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0441569595.01.L.jpg",
        "description": "Case, a washed-up computer hacker, is hired for a final dangerous job that draws him into a world of artificial intelligence, cybercrime, and corporate power. As he moves through a dark futuristic landscape, the novel defines cyberpunk with its visionary style and technological intensity."
    }
]


class Command(BaseCommand):
    help = "Seed books"

    def handle(self, *args, **kwargs):
        created_count = 0
        updated_count = 0

        for item in BOOKS:
            cover = item.get("cover", "").strip()
            if not cover:
                continue

            parts = item["author"].split()
            first_name = parts[0]
            last_name = " ".join(parts[1:]) if len(parts) > 1 else ""

            author_info = AUTHORS_DATA.get(item["author"], {})

            author, _ = Author.objects.update_or_create(
                first_name=first_name,
                last_name=last_name,
                defaults={
                    "birth_date": author_info.get("birth_date"),
                    "bio": author_info.get("bio", "")
                }
            )

            book, created = Book.objects.update_or_create(
                title=item["title"],
                defaults={
                    "author": author,
                    "cover_image": cover,
                    "genre": item.get("genre", "Unknown"),
                    "description": item.get("description", ""),
                    "published_date": item.get("year"),
                }
            )

            if created:
                created_count += 1
            else:
                updated_count += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"Done: {created_count} created, {updated_count} updated."
            )
        )