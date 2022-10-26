#include "book.h"

int main() {
    Book book1("Harry Potter", "JK Rowling", 500);
    cout << book1.getTitle() << endl;
    cout << book1.getAuthor() << endl;
    cout << book1.getPages() << endl;
    return 0;
}