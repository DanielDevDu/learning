void main() {
    String number_text_int = "34";
    String number_text_double = "34.9";

    int age = int.parse(number_text_int);
    double float = double.parse(number_text_double);
    print(age);
    print(float);

    double pi = 3.14;
    String pi_text = pi.toString();
    print(pi_text);

    int d1 = 12;
    int d2 = d1++;
    int d3 = d1--;
    print("$d1 $d2 $d3");
}