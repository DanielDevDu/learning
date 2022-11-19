List<String> myList = ["Duart", "Daniel", "Carlosart", "Juliart"];

// list that contains art word

List<String> listArt = [];


void main() {
    myList.forEach((element) {
    if (element.contains("art")) {
        listArt.add(element);
    }
    });
  print(listArt);
  throw Exception("Efelongoloooo");
  myList.forEach(print);
}

