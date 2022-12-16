using System;
using People;
using Books.Fiction;
using Leccion.Leccion2;
using Iterators.ForEach;
using Calcultator;
using ArraySpace;
using ClasseSpace;
// using Structures;
using Enumerations;
using Properties;
class Program
{
    static void square(Person x)
    {
        x.age = x.age * x.age;
        Console.WriteLine("x = {0}", x.age);
    }

    public static void classesMethod(){
        User c = new User("Du", 23);
        c.GeUserDetails();

        User c1 = new User("Juan", 23, "Glassdor");
        c1.GeUserDetails();

        User userCopy = new User(c1);
        userCopy.name = "I am a copy";
        userCopy.GeUserDetails();
    }
   static void Main(string[] args)
    {
        // Person p1 = new Person();
        // // p1.age = 10;
        // // Console.WriteLine("p1.Age = {0}", p1.age);
        // // square(p1);
        // // Console.WriteLine("p1.Age = {0}", p1.age);

        // // Book b1 = new Book();
        // // b1.title = "The Hobbit";
        // // b1.showTitle(b1);

        // Leccion2Solution l2 = new Leccion2Solution();
        // // l2.exercise1();
        // // l2.exercise2();
        // // l2.exercise3();

        // ForEachExecutor f = new ForEachExecutor();
        // int [] numbers = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        // int []? notNumber = null;
        // f.withArrays(numbers);
        // f.withArrays(notNumber);

        // //  Calculator
        // Calculator c = new Calculator();
        // int num1 = 10;
        // int num2 = 5;

        // Calculator.PrintHello();
        // Console.WriteLine("Add: {0}", c.add(num1, num2));
        // Console.WriteLine("Sub: {0}", c.sub(num1, num2));
        // Console.WriteLine("Mul: {0}", c.mul(num1, num2));
        // Console.WriteLine("Div: {0}", c.div(num1, num2));

        // Console.WriteLine("Value type");
        // Console.WriteLine("Residuo: {0}", c.residuoValue(num1, num2));
        // Console.WriteLine("number: {0}", num1);

        // Console.WriteLine("Reference type");
        // Console.WriteLine("Residuo: {0}", c.residuoRef(ref num1, num2));
        // Console.WriteLine("number: {0}", num1);
        
        // Console.WriteLine("Out type");
        // int num3;
        // Console.WriteLine("Residuo: {0}", c.residuoOut(out num3, num2));
        // Console.WriteLine("number: {0}", num3);

        // Console.WriteLine("Params type (Same type)");
        // Console.WriteLine("Sum: {0}", c.multipleSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

        // Console.WriteLine("Params type (Different type)");
        // c.multipleParams(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Hello", 'a', 1.2, 1.3f, true, false);

        // Arrays
        // Arrays a = new Arrays();
        // int[] numbers = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        // int[] aRestul = a.dooubleMethod(numbers);
        // Array.Reverse(aRestul);
        // foreach (int number in aRestul) {
        //     Console.WriteLine(number);
        // }
        // int[,] bResult = a.MultiDimensional(numbers);
        // for (int i=0; i<bResult.GetLength(0); i++) {
        //     for (int j=0; j<bResult.GetLength(1); j++) {
        //         Console.WriteLine("[{0}, {1}]: {2}", i, j, bResult[i, j]);
        //     }
        // }

        // Classes

        // classesMethod();
        // GC.Collect();

        // Structures
        // Note n = new Note("First Note", "This is my first note");
        // n.GetNote();

        // Enumerations
        // Console.WriteLine("Status: {0}", Status.Active);
        // Console.WriteLine("Status(value): {0}", (int)Status.Active);

        // foreach (String item in Enum.GetNames(typeof(Status)))
        // {
        //     Console.WriteLine(item);
        // }

        // Properties
        Note note = new Note("First Note", "This is my first note", "Du");
        note.GetNote();
        // Title(With Mayúscula), content(With Minúscula)
        Console.WriteLine("Title: {0}\nContent: {1}", note.Title, note.content);
        note.Title = "Second Note";
        note.GetNote();
        // Title(With Mayúscula), content(With Minúscula)
        Console.WriteLine("Title: {0}\nContent: {1}", note.Title, note.content);





    }
}