
var name = "Du";
final age = 18;
double height = 6.2;
bool verified = false;
List listFruits = ["Apple", "Orange", 40];
var object = {
    "name": "Du",
    "age": 100,
    "listFruits": listFruits
};
dynamic dynamicValue = 199;

List<String> names = ["Du", "Daniel", "Carlos"];

void myfunction() {
    for (final i in names) print(i);

}

int multiply(int a, int b) => a * b;
double divide (int a, int b) {
    if (b == 0) return -1;
    var result = a/b;
    return result;
}

void main() {
    String result = "Soy ${names[0]} and my age is $age";
    print(result);
}