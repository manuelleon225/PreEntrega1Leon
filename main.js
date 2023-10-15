total = 0;
ivaCompra=0;
tbody="";
tbody2="";

elegirProducto();

function formatterPeso(value) {
    const result = new Intl.NumberFormat('es-CO',{     
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }
    ).format(value)
    return result;
}

function elegirProducto() {
    let sProducto = parseInt(prompt("Seleccione un Proucto \n 1.Leche \n 2.Pan \n 3.Jamon \n 4.Galletas \n 5.Yogurt \n 6.Carton de huevos \n 7.Helado \n 8.Café \n 9.Queso \n 10.Mantequilla")); 
    if(isNaN(sProducto) || sProducto == null || sProducto == " " ){
        alert("No ingreso un número de la lista de productos");
    }
    else if(sProducto <= 0 || sProducto > 10){
        alert("El número ingresado no se enuentra dentro de la lista de productos");
    }else{
        calcularProducto(sProducto);
    }
} 

function calcularProducto(iProducto) {
    let iCantidad = 0;
    do{
        iCantidad = parseInt(prompt("Ingrese la cantidad que desea llevar del producto"));
    }while (isNaN(iCantidad) || iCantidad == null || iCantidad == " " || iCantidad <= 0);

    let precioProducto=0;
    let nombreProducto="";
    let precio=0;
    switch(iProducto) {
        case 1:
            precio=3900;
            precioProducto = precio* iCantidad;
            nombreProducto="Leche";
            break;
        case 2:
            precio=3500;
            precioProducto = precio * iCantidad;
            nombreProducto="Pan";
            break;
        case 3:
            precio=2300;
            precioProducto = precio * iCantidad;
            nombreProducto="Jamon";
            break;
        case 4:
            precio=5000;
            precioProducto = precio * iCantidad;
            nombreProducto="Galletas";
            break;
        case 5:
            precio=4000;
            precioProducto = precio * iCantidad;
            nombreProducto="Yogurt";
            break;
        case 6:
            precio=17000;
            precioProducto = precio * iCantidad;
            nombreProducto="Carton de huevos";
            break;
        case 7:
            precio=13500
            precioProducto = precio * iCantidad;
            nombreProducto="Helado";
            break;
        case 8:
            precio=8900;
            precioProducto = precio * iCantidad;
            nombreProducto="Café";
            break;
        case 9:
            precio=10000;
            precioProducto = precio * iCantidad;
            nombreProducto="Queso";
            break;
        case 10:
            precio=1300;
            precioProducto = precio * iCantidad;
            nombreProducto="Mantequilla";
            break;

    }

    let iva = precioProducto * 0.19
    let iva19 = precioProducto - iva ;
    total += precioProducto;
    ivaCompra+=iva;

    tbody+="<tr><td>"+nombreProducto+"</td><td>"+formatterPeso(precio)+"</td><td>"+iCantidad+"</td><td>"+formatterPeso(precioProducto)+"</td></tr>"
    tbody2+="<tr><td>"+nombreProducto+"</td><td>"+formatterPeso(precioProducto)+"</td><td>"+formatterPeso(iva19)+"</td><td>"+formatterPeso(iva)+"</td></tr>"
    

    if (confirm('Selecciona aeptar si deseas agregar mas productos?')) {
        elegirProducto();
    } else {
        totalCompra(tbody,tbody2);
    }
}

function totalCompra(tbody,tbody2) {
    document.write('<h2>RESUMEN COMPRA</h2>')
    document.write('<table><thead><tr><th>Producto</th><th>V/Unidad</th><th>Cantidad</th><th>Valor</th></tr></thead><tbody id="bodyFactura">'+tbody+'</tbody><tfoot><tr><th colspan="3">Total</th><td id="totalFactura">'+formatterPeso(total)+'</td></tr></tfoot></table>');
    document.write('<h2>RESUMEN IMPUESTOS</h2>')
    document.write('<table><thead><tr><th>Producto</th><th>V/Total</th><th>Base</th><th>Iva</th></tr></thead><tbody id="bodyImpuestos">'+tbody2+'</tbody><tfoot><tr><th colspan="3">Total</th><td id="totalFactura">'+formatterPeso(ivaCompra)+'</td></tr></tfoot></table>');
}





