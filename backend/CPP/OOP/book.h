#include "main.h"

class Book {
private:
    string title;
    string author;
    int pages;
public:
    Book(string title, string author, int pages) {
        setTitle(title);
        setAuthor(author);
        setPages(pages);
    }
    string getTitle() {
        return title;
    }
    string getAuthor() {
        return author;
    }
    int getPages() {
        return pages;
    }
    void setTitle(string aTitle) {
        title = aTitle;
    }
    void setAuthor(string aAuthor) {
        author = aAuthor;
    }
    void setPages(int aPages) {
        pages = aPages;
    }
};