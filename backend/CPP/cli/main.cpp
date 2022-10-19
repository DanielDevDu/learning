#include "main.h"
#include <string>

int main(int argc, char *argv[])
{
    // constructor
    StreamEnCpp st("cadena pasada");
    cout << "La cadena es: " << st.getCadena() << endl;
    cin.get();
    system("clear");

    // Argumentos de la línea de comandos
    string cadenaComando;
    cout << "\nPasaste " << argc-1 << " argumentos" << endl;
    for (int i = 1; i < argc; i++)
    {
        cadenaComando.append(argv[i]);
        cadenaComando += " ";
    }
    st.setCadena(cadenaComando);
    cout << "La cadena comando es: " << st.getCadena() << endl;
    cin.get();


    // Redefine la cadena con el setter
    cout << "\nDefiniendo nueva cadena: " << endl;
    string nuevaCadena;
    cin >> nuevaCadena;
    st.setCadena(nuevaCadena);
    cout << "\nLa nueva cadena es: " << st.getCadena() << endl;
    cin.get();

    // cadena con varios caracteres, usando un buffer
    cout << "\nDefiniendo otra cadena (buffer): " << endl;
    char cadenaBuffer[100];
    cin.get(cadenaBuffer, 100);
    st.setCadena(cadenaBuffer);
    cout << "\nLa cadena (buffer) es: " << st.getCadena() << endl;
    cin.get();

    // usando setter y getline
    cout << "\nDefiniendo otra cadena (getline): " << endl;
    string cadenaGetline;
    getline(cin, cadenaGetline);
    st.setCadena(cadenaGetline);
    cout << "\nLa cadena (getline) es: " << st.getCadena() << endl;
    cin.get();

    cout << "Presiona una tecla para salir" << endl;
    cin.get();

    return 0;
}