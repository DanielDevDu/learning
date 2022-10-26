// See https://aka.ms/new-console-template for more information
// using System;

// arrays

int[] numbers = {0, 1, 2};
var query = from item in numbers
            where item > 0
            select item;

Console.WriteLine($"The number of elements: {query.Count()}");
Console.WriteLine($"The first element: {query.First()}");

// lists

List<int> numbers2 = new List<int> {0, 1, 2};
Console.WriteLine(numbers2.Count());
Console.WriteLine(numbers2[0]);

// classes


Person person1 = new Person();
person1.name = "John";
person1.age = 20;

Person person2 = new Person();
person2.name = "Jane";
person2.age = 21;

List<Person> people = new List<Person>
{
    person1,
    person2
};

foreach (var person in people)
{
    Console.WriteLine($"{person.name} is {person.age} years old.");
}

Student student1 = new Student();
student1.name = "John";
student1.age = 20;
student1.school = "La calle";

Console.WriteLine($"The student {student1.name} is {student1.age} years old and goes to {student1.school}.");
public class Person
{
    public string name = "";
    public int age;
}


public class Student : Person
{
    public string school = "";
}
