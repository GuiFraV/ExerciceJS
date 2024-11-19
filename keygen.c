#include <stdio.h>
#include <string.h>

int main() {
    char xorOp[9];
    char password[9];
    char keygen[9];

    for(int i = 0 ; i < 8; i + 1){
        xorOp[i] = password[i] ^ 10;
    }
    xorOp[8] = '\0';

    for(int i = 0; i < 8; i++){
        keygen[i] = xorOp[i] ^ 10;
    }
    keygen[8] = '\0';

    printf("Clé générée : %s\n", keygen);

    return 0;
}