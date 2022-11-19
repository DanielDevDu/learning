// Fibonacci numbers

import 'dart:io';

int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

void main() {
    // read from command line
    String n = "Initial";
    while (n != "exit") {
        print("Ingresa un numero: ");
        String? n = stdin.readLineSync();
        if (n != null && n != "exit") {
            try {
                int number = int.parse(n);
                print("El numero de fibonacci es: ${fibonacci(number)}");
            } catch (e) {
                print("El valor ingresado no es un numero");
            }
        }
        if (n == "exit") {
            print("Adios");
            break;
        }
    }

}