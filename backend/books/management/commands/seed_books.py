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
        "description": "A nurse from the 1940s is transported to 18th-century Scotland where love and danger await."
    },
    {
        "title": "Big Little Lies",
        "author": "Liane Moriarty",
        "genre": "Thriller",
        "year": "2014-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0425274861.01.L.jpg",
        "description": "Secrets, lies, and friendships collide in a wealthy coastal town."
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "genre": "Science Fiction",
        "year": "1932-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0060850523.01.L.jpg",
        "description": "A futuristic world built on control, comfort, and conformity."
    },
    {
        "title": "The Diary of a Young Girl",
        "author": "Anne Frank",
        "genre": "History",
        "year": "1947-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0553296981.01.L.jpg",
        "description": "The moving diary of Anne Frank during World War II."
    },
    {
        "title": "Sapiens",
        "author": "Yuval Noah Harari",
        "genre": "History",
        "year": "2011-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0062316095.01.L.jpg",
        "description": "A brief history of humankind from ancient times to today."
    },
    {
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "genre": "Classic",
        "year": "1866-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0143058142.01.L.jpg",
        "description": "A psychological novel about guilt, morality, and redemption."
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic",
        "year": "1925-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0743273567.01.L.jpg",
        "description": "A story of wealth, dreams, and tragedy in the Jazz Age."
    },
    {
        "title": "The Silent Patient",
        "author": "Alex Michaelides",
        "genre": "Thriller",
        "year": "2019-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/1250301696.01.L.jpg",
        "description": "A woman shoots her husband and never speaks again."
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "genre": "Science Fiction",
        "year": "1949-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0451524934.01.L.jpg",
        "description": "A dystopian future ruled by surveillance and fear."
    },
    {
        "title": "Dune",
        "author": "Frank Herbert",
        "genre": "Science Fiction",
        "year": "1965-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0441172717.01.L.jpg",
        "description": "Politics, prophecy, and survival on the desert planet Arrakis."
    },
    {
        "title": "A Game of Thrones",
        "author": "George R.R. Martin",
        "genre": "Fantasy",
        "year": "1996-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0553593714.01.L.jpg",
        "description": "Noble families battle for the Iron Throne."
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "year": "1937-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/054792822X.01.L.jpg",
        "description": "Bilbo Baggins goes on an unforgettable adventure."
    },
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "year": "1997-01-01",
        "cover": "https://images-na.ssl-images-amazon.com/images/P/0439708184.01.L.jpg",
        "description": "Harry learns he is a wizard and begins Hogwarts."
    },
       {
            "title": "The Alchemist",
            "author": "Paulo Coelho",
            "genre": "Classic",
            "year": "1988-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0061122416.01.L.jpg",
            "description": "A shepherd travels the world in search of treasure and destiny."
        },
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "genre": "Classic",
            "year": "1960-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0061120081.01.L.jpg",
            "description": "A story of justice and prejudice in the American South."
        },
        {
            "title": "The Catcher in the Rye",
            "author": "J.D. Salinger",
            "genre": "Classic",
            "year": "1951-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0316769487.01.L.jpg",
            "description": "A teenager wanders New York searching for meaning."
        },
        {
            "title": "The Book Thief",
            "author": "Markus Zusak",
            "genre": "History",
            "year": "2005-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0375842209.01.L.jpg",
            "description": "A girl discovers the power of books during World War II."
        },
        {
            "title": "The Hunger Games",
            "author": "Suzanne Collins",
            "genre": "Science Fiction",
            "year": "2008-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0439023483.01.L.jpg",
            "description": "Katniss enters a deadly televised competition."
        },
        {
            "title": "Catching Fire",
            "author": "Suzanne Collins",
            "genre": "Science Fiction",
            "year": "2009-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0439023491.01.L.jpg",
            "description": "Katniss returns to the arena as rebellion grows."
        },
        {
            "title": "Mockingjay",
            "author": "Suzanne Collins",
            "genre": "Science Fiction",
            "year": "2010-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0439023513.01.L.jpg",
            "description": "The final battle against the Capitol begins."
        },
        {
            "title": "The Maze Runner",
            "author": "James Dashner",
            "genre": "Science Fiction",
            "year": "2009-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0385737955.01.L.jpg",
            "description": "A boy wakes in a maze with no memory of his past."
        },
        {
            "title": "The Lightning Thief",
            "author": "Rick Riordan",
            "genre": "Fantasy",
            "year": "2005-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0786838655.01.L.jpg",
            "description": "Greek mythology comes alive in a modern adventure."
        },
        {
            "title": "Twilight",
            "author": "Stephenie Meyer",
            "genre": "Romance",
            "year": "2005-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0316015849.01.L.jpg",
            "description": "Bella falls in love with a mysterious vampire."
        },
        {
            "title": "New Moon",
            "author": "Stephenie Meyer",
            "genre": "Romance",
            "year": "2006-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0316160199.01.L.jpg",
            "description": "Bella struggles after Edward leaves."
        },
        {
            "title": "Eclipse",
            "author": "Stephenie Meyer",
            "genre": "Romance",
            "year": "2007-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0316160202.01.L.jpg",
            "description": "Love and danger grow as enemies return."
        },
        {
            "title": "Breaking Dawn",
            "author": "Stephenie Meyer",
            "genre": "Romance",
            "year": "2008-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/031606792X.01.L.jpg",
            "description": "The final chapter of Bella and Edward's story."
        },
        {
            "title": "The Girl on the Train",
            "author": "Paula Hawkins",
            "genre": "Thriller",
            "year": "2015-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/1594634025.01.L.jpg",
            "description": "A woman becomes involved in a missing person case."
        },
        {
            "title": "Shutter Island",
            "author": "Dennis Lehane",
            "genre": "Thriller",
            "year": "2003-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0061703230.01.L.jpg",
            "description": "Two marshals investigate a disappearance on a remote island."
        },
        {
            "title": "The Road",
            "author": "Cormac McCarthy",
            "genre": "Horror",
            "year": "2006-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0307387895.01.L.jpg",
            "description": "A father and son travel through a ruined world."
        },
        {
            "title": "Coraline",
            "author": "Neil Gaiman",
            "genre": "Horror",
            "year": "2002-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0061139378.01.L.jpg",
            "description": "A girl enters a strange and dangerous parallel world."
        },
        {
            "title": "The Help",
            "author": "Kathryn Stockett",
            "genre": "History",
            "year": "2009-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0425232204.01.L.jpg",
            "description": "Three women challenge racism in the American South."
        },
        {
            "title": "Educated",
            "author": "Tara Westover",
            "genre": "History",
            "year": "2018-01-01",
            "cover": "https://images-na.ssl-images-amazon.com/images/P/0399590501.01.L.jpg",
            "description": "A memoir about education, family, and self-discovery."
        },
          {
                "title": "The Lord of the Rings: The Two Towers",
                "author": "J.R.R. Tolkien",
                "genre": "Fantasy",
                "year": "1954-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0547928203.01.L.jpg",
                "description": "The Fellowship is broken and the war for Middle-earth grows."
            },
            {
                "title": "Harry Potter and the Prisoner of Azkaban",
                "author": "J.K. Rowling",
                "genre": "Fantasy",
                "year": "1999-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0439136369.01.L.jpg",
                "description": "Harry returns to Hogwarts and learns the truth about Sirius Black."
            },
            {
                "title": "Harry Potter and the Goblet of Fire",
                "author": "J.K. Rowling",
                "genre": "Fantasy",
                "year": "2000-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0439139600.01.L.jpg",
                "description": "Harry is forced into the dangerous Triwizard Tournament."
            },
            {
                "title": "Harry Potter and the Order of the Phoenix",
                "author": "J.K. Rowling",
                "genre": "Fantasy",
                "year": "2003-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0439358078.01.L.jpg",
                "description": "Dark forces rise and Harry forms Dumbledore's Army."
            },
            {
                "title": "Harry Potter and the Half-Blood Prince",
                "author": "J.K. Rowling",
                "genre": "Fantasy",
                "year": "2005-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0439785960.01.L.jpg",
                "description": "Harry learns Voldemort's past and prepares for the final battle."
            },
            {
                "title": "Harry Potter and the Deathly Hallows",
                "author": "J.K. Rowling",
                "genre": "Fantasy",
                "year": "2007-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0545010225.01.L.jpg",
                "description": "Harry, Ron, and Hermione search for Horcruxes."
            },
            {
                "title": "The Chronicles of Narnia",
                "author": "C.S. Lewis",
                "genre": "Fantasy",
                "year": "1956-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0066238501.01.L.jpg",
                "description": "Children enter the magical world of Narnia."
            },
            {
                "title": "The Fault in Our Stars",
                "author": "John Green",
                "genre": "Romance",
                "year": "2012-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/014242417X.01.L.jpg",
                "description": "Two teenagers fall in love while facing illness."
            },
            {
                "title": "Me Before You",
                "author": "Jojo Moyes",
                "genre": "Romance",
                "year": "2012-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0143124544.01.L.jpg",
                "description": "Two different lives are changed forever."
            },
            {
                "title": "Pride and Prejudice",
                "author": "Jane Austen",
                "genre": "Romance",
                "year": "1813-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0141439513.01.L.jpg",
                "description": "Elizabeth Bennet and Mr. Darcy find love."
            },
            {
                "title": "The Shining",
                "author": "Stephen King",
                "genre": "Horror",
                "year": "1977-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0307743659.01.L.jpg",
                "description": "A haunted hotel drives a family into terror."
            },
            {
                "title": "It",
                "author": "Stephen King",
                "genre": "Horror",
                "year": "1986-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/1501142976.01.L.jpg",
                "description": "An ancient evil returns to haunt a town."
            },
            {
                "title": "Dracula",
                "author": "Bram Stoker",
                "genre": "Horror",
                "year": "1897-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0486411095.01.L.jpg",
                "description": "The classic vampire novel."
            },
            {
                "title": "Frankenstein",
                "author": "Mary Shelley",
                "genre": "Horror",
                "year": "1818-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0486282112.01.L.jpg",
                "description": "A scientist creates life with tragic results."
            },
            {
                "title": "The Da Vinci Code",
                "author": "Dan Brown",
                "genre": "Thriller",
                "year": "2003-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0307474275.01.L.jpg",
                "description": "A mystery hidden in art and religion."
            },
            {
                "title": "Gone Girl",
                "author": "Gillian Flynn",
                "genre": "Thriller",
                "year": "2012-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0307588378.01.L.jpg",
                "description": "A missing wife reveals shocking secrets."
            },
            {
                "title": "The Silent Patient",
                "author": "Alex Michaelides",
                "genre": "Thriller",
                "year": "2019-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/1250301696.01.L.jpg",
                "description": "A silent woman hides a terrible truth."
            },
            {
                "title": "The Martian",
                "author": "Andy Weir",
                "genre": "Science Fiction",
                "year": "2011-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0553418025.01.L.jpg",
                "description": "An astronaut fights to survive on Mars."
            },
            {
                "title": "Ready Player One",
                "author": "Ernest Cline",
                "genre": "Science Fiction",
                "year": "2011-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0307887448.01.L.jpg",
                "description": "A virtual reality treasure hunt begins."
            },
            {
                "title": "Neuromancer",
                "author": "William Gibson",
                "genre": "Science Fiction",
                "year": "1984-01-01",
                "cover": "https://images-na.ssl-images-amazon.com/images/P/0441569595.01.L.jpg",
                "description": "The cyberpunk novel that defined a genre."
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