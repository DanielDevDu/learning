using System;

namespace Properties {
    class Note {
        private String title;
        //Auto Implemented Properties
        public String content {get; set;}
        private String author;

        public Note (String title, String content, String author) {
            this.title = title;
            this.content = content;
            this.author = author;
        }

        public String Author {
            // Read Only
            get {return author;}
        }
        public String Title {
            get {return title.ToUpper();}
            set {title = value;}
        }

        public void GetNote() {
            Console.WriteLine("Title: {0}, Content: {1}, Author: {2}", this.title, this.content, this.author);
        }
    }
}