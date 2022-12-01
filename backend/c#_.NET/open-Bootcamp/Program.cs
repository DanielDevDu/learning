using System;
using People;
using Books.Fiction;
using Leccion.Leccion2;

class Program
{
    static void square(Person x)
    {
        x.age = x.age * x.age;
        Console.WriteLine("x = {0}", x.age);
    }
   static void Main(string[] args)
    {
        Person p1 = new Person();
        // p1.age = 10;
        // Console.WriteLine("p1.Age = {0}", p1.age);
        // square(p1);
        // Console.WriteLine("p1.Age = {0}", p1.age);

        // Book b1 = new Book();
        // b1.title = "The Hobbit";
        // b1.showTitle(b1);

        Leccion2Solution l2 = new Leccion2Solution();
        // l2.exercise1();
        // l2.exercise2();
        l2.exercise3();


    }
}