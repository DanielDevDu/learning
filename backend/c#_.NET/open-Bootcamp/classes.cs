using System;

namespace ClasseSpace {
    public class User {
        public int age {get; set;}
        public string name {get; set;}
        public string? company {get; set;}

        public User() {
            name = "John";
            age = 18;
            Console.WriteLine("User created");
        }
        public User(string name, int age) {
            this.name = name;
            this.age = age;
        }
        // Overlading
        public User(string name, int age, string company): this(name, age) {
            this.company = company;
        }

        // Copu Constructor
        public User(User user) {
            this.name = user.name;
            this.age = user.age;
            this.company = user.company;
        }

        // Static Constructor
        static User() {
            Console.WriteLine("Static Constructor");
        }

        // Destructor
        ~User() {
            Console.WriteLine("Destructor");
        }
        public void GeUserDetails() {
            Console.WriteLine("Name: {0}, Age: {1}, Company: {2}", name, age, company?? "No company");
        }

    }

    // static class
    static class CalculatorStatic {
        public static int add(int num1, int num2) {
            return num1 + num2;
        }
        public static int sub(int num1, int num2) {
            return num1 - num2;
        }
        public static int mul(int num1, int num2) {
            return num1 * num2;
        }
        public static int div(int num1, int num2) {
            return num1 / num2;
        }
    }
}