using System;

namespace Leccion {
    namespace Leccion2 {
        class Leccion2Solution {
            public void exercise1()
            {
                Console.WriteLine("Ingrese los siguientes datos:");
                Console.Write("Nombre: ");
                String? name = Console.ReadLine();
                Console.Write("Apellido: ");
                String? lastName = Console.ReadLine();
                Console.Write("Edad: ");
                int age = Convert.ToInt32(Console.ReadLine());
                Console.Write("¿Sabes programar?: (Si/No) ");
                String? knowsProgramming = Console.ReadLine();

                Console.WriteLine("Nombre: {0}", name);
                Console.WriteLine("Apellido: {0}", lastName);
                Console.WriteLine("Edad: {0}", age);
                Console.WriteLine("¿Sabes programar?: {0}", knowsProgramming);
            }

            public void exercise2()
            {
                int numberOfDoors = 4;
                int numberOfWheels = 4;
                String brand = "Toyota";
                String model = "Corolla";
                String color = "Rojo";
                int year = 2019;

                Console.WriteLine("Carro:");
                Console.WriteLine("Número de puertas: {0}", numberOfDoors);
                Console.WriteLine("Número de ruedas: {0}", numberOfWheels);
                Console.WriteLine("Marca: {0}", brand);
                Console.WriteLine("Modelo: {0}", model);
                Console.WriteLine("Color: {0}", color);         
                Console.WriteLine("Año: {0}", year);

            }

            public void exercise3() {
                Console.WriteLine("Ingrese un número:");
                int number = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Ingrese un char:");
                String? cha = Console.ReadLine();
                char character = Convert.ToChar(cha is not null? cha: "");

                bool condition1 = number >= 18;
                bool condition2 = character == 'a';

                if (condition1) {
                    Console.WriteLine("Number is greater than or equal to 18");
                }
                if (condition2) {
                    Console.WriteLine("Character is equal to 'a'");
                }
                if (condition1 && condition2) {
                    Console.WriteLine("Both conditions are true");
                }
                if (condition1 || condition2) {
                    Console.WriteLine("At least one condition is true");
                }

            }
        }
    }

}