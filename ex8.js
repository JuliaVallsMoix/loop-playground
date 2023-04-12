/**
 * Bucles while
 *
 * Modifica el bucle while para que escriba por el terminal 
 * escriba 5 veces exactamente "Ejecuto!". Actualmente lo escribe 6 veces. Porque?
 * 
 * Reestricción: NO puedes cambiar el valor de las variables 'veces' ni 'i' !!
 */

let veces = 5
let i = 0

while (i<veces) {
    console.log("Ejecuto!")
    i++
}

// Porque estaba escrito que i era más pequeña o igual a veces, y dado que i es 0 y veces es 5, estaba contanto hasta 5 y, por lo tanto, se ejecutaba 6 veces. Al cambiar el signo a solo menor que, cuenta hasta 4.