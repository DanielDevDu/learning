#include <iostream>
using namespace std;

class StreamEnCpp {
private:
    string cadena;

public:
    /**
     * Constructor
     * 
     * @param cadena
    */
    StreamEnCpp(string str = "cadena") {
        cadena = str;
    }

    /**
     * Getter de la cadena
     * 
     * @return string
    */
   string getCadena() {
       return cadena;
   }

   /**
    * Setter de la cadena
    * 
    * @param str
   */
    void setCadena(string str) {
         cadena = str;
    }
    
};
