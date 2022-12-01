using System;

namespace Books {
    namespace Fiction {
        class Book {
            public string title { get; set; }

            public void showTitle(Book b)
            {
                Console.WriteLine("Title: {0} in Fiction", b.title);
            }
        }
    }
}