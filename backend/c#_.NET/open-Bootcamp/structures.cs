using System;

namespace Structures {
    public struct Note {
        public string title {get; set;}
        public string content {get; set;}
        public Note(string title, string content) {
            this.title = title;
            this.content = content;
        }

        public void GetNote() {
            Console.WriteLine("Title: {0}, Content: {1}", title, content);
        }
    }
}