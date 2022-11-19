
import "dart:io";
import "dart:math";

class Rectangle {
    int? x;
    int? y;

    // Rectangle(int x, int y) {
           // Contrusctor genérico de la clase 
    //     this.x = x;
    //     this.y = y;
    // }
    // Realiza lo mismo que el constructor anterior
    Rectangle(this.x, this.y);

    Rectangle.origin() {
        // COnstruye instancia con valores fijos
        this.x = 1;
        this.y = 2;
    }

    Rectangle.fromJson(Map<String, dynamic> json) {
        // Constructor de instancia apartir de un json
        this.x = json["x"];
        this.y = json["y"];
    }

    Rectangle.xEqual2(int y): this(2, y);

    int area() {
        // retorna el área del rectángulo
        return this.x! * this.y!;
    }

    // hace lo mismo que la declaración anterior
    int get area2 => x! * y!;

}

class Square extends Rectangle {
    Square(int x) : super(x, x);

    Square.fromJson(Map<String, dynamic> data): super.fromJson(
        {"x": data["x"], "y": data["x"]}
    );
}

abstract class Shape {
    // Clase abstracta, can't be instantiated
    int get area;
}


void main() {
    Rectangle r1 = Rectangle(10, 20);
    Rectangle r2 = Rectangle.origin();
    Rectangle r3 = Rectangle.fromJson({"x": 2, "y": 5});
    Rectangle r4 = Rectangle.xEqual2(10);
    
    // print(r1.area());
    // print(r2.area());
    // print(r3.area());
    // print(r4.area());
    print(r1.area2);

    Square s1 = Square(10);
    Square s2 = Square.fromJson({"x": 2});
    // print(s1.area());
    // print(s2.area());
    
    var Shape x1 = Shape();
}