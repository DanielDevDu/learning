using System;

namespace Calcultator {
    class Calculator {
        
        public static void PrintHello() {
            Console.WriteLine("Hello");
        }
        public int add(int a, int b) {
            return a + b;
        }
        public int sub(int a, int b) {
            return a - b;
        }
        public int mul(int a, int b) {
            return a * b;
        }
        public int div(int a, int b) {
            return a / b;
        }

        public int residuoValue(int a, int b) {
            a %= b;
            return a;
        }
        public int residuoRef(ref int a, int b) {
            a %= b;
            return a;
        }
        public int residuoOut(out int a, int b) {
            a = 11;
            a %= b;
            return a;
        }

        public int multipleSum(params int[] numbers) {
            int sum = 0;
            foreach (int number in numbers) {
                sum += number;
            }
            return sum;
        }

        public void multipleParams(params object[] arr) {
            foreach (object obj in arr) {
                Console.WriteLine(obj);
            }
        }
    }
}