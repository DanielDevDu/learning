import "dart:io";

double add (double a, double b) {
    return a + b;
}

double substract (double a, double b) {
    return a - b;
}

double multiply (double a, double b) {
    return a * b;
}

double divide (double a, double b) {
    if (b == 0) return -1;
    return a / b;
}

void main() {
    print("Ingresa un numero: ");
    String? n1 = stdin.readLineSync();
    print("Ingresa otro numero: ");
    String? n2 = stdin.readLineSync();
    print("Ingresa la operacion a realizar: ");
    String? operation = stdin.readLineSync();
    if (n1 != null && n2 != null && operation != null) {
        try {
            double number1 = double.parse(n1);
            double number2 = double.parse(n2);
            double result = 0;
            switch (operation) {
                case "+":
                    result = add(number1, number2);
                    break;
                case "-":
                    result = substract(number1, number2);
                    break;
                case "*":
                    result = multiply(number1, number2);
                    break;
                case "/":
                    if (number2 == 0) {
                        print("No se puede dividir entre 0");
                        break;
                    }
                    result = divide(number1, number2);
                    break;
                default:
                    print("Operacion no valida");
                    break;
            }
            print("El resultado es: $result");
        } catch (e) {
            print("El valor ingresado no es un numero");
        }
    }
}