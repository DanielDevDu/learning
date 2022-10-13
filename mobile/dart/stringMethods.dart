void main() {
    String name = "Thomas";
    print(name.toUpperCase());
    print(name.toLowerCase());

    String text = "$name is form germany";
    String text2 = text.replaceAll("germany", 'Colombia');
    print(text);
    print(text2);
}