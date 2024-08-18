let productos = [];
  

  function agregarProducto(nombre, precio){ //función para agregar un producto
    //creamos un objeto con los datos del producto
    const producto = {
      nombre: nombre,
      precio: precio
    }
    //lo agregamos al arreglo con el método push ... push agrega un elemento al final del arreglo
    productos.push(producto);
  }   

  // 2. Función de expresión para eliminar un producto
  
const eliminarProducto = function(nombre) {  
  const index = productos.map(producto => producto.nombre).indexOf(nombre)
  if (index !== -1) {
        productos.splice(index, 1)
        return 1 //significa eliminacion exitosa
  } else {
      return 0  //no se pudo encontrar para eliminar
  }
} 
  const buscarProducto = (nombre) => {
    //ocupar find para buscar un producto, find retorna el primer elemento que cumpla con la condición
    const productoEncontrado = productos.find((productos) => { 
      return String(productos.nombre).toUpperCase() === String(nombre).toUpperCase()
    });
  
    return productoEncontrado;
  }
  
  const mostrarProductos = () => { // Función de flecha para mostrar todas los productos
    console.log("Productos:")
    productos.forEach(producto => console.log(`- ${producto.nombre} $$${producto.precio}`)) // Iterar e imprimir su nombre.
  }
  
function mostrarMenu() {
  let opcion
  let nomp
  let preciop
  
  while (opcion !== '5') {
    opcion = prompt(
      'Menú de Opciones:\n' +
      '1=> Agregar Producto\n' +
      '2=> Eliminar Producto\n' +
      '3=> Buscar Producto\n' +
      '4=> Mostrar Productos en Consola\n' +
      '5=> Salir del Menu')

      switch (opcion) {
          case '1':
              nomp = prompt('Ingrese Nombre Producto Nuevo')             
              if (nomp.trim() === '') {
                alert('Nombre Producto No Es valido')
                break
              }
              preciop = prompt('Ingrese Precio Nuevo Producto')
              if (isNaN(preciop)){
                alert('Precio del Producto No Es valido')
                break
              }
              
              agregarProducto(nomp.toUpperCase(), preciop)
              break
          case '2':
              nomp = prompt('Ingrese Nombre Producto que desea Eliminar')             
              if (nomp.trim() === '') {
                  alert('Nombre Producto No Es valido')
                  break
              }
              let okk=eliminarProducto(nomp.toUpperCase())
              if (okk===1){
                alert('Producto Fue Eliminado Exitosamente')
              }
              else{
                alert('Producto No Fue Eliminado')
              }
              break
          case '3':
              nomp = prompt('Ingrese Nombre Producto que desea Buscar')             
              if (nomp.trim() === '') {
                  alert('Nombre Producto No Es valido')
                  break
              }
              const productoBuscado = buscarProducto(nomp.toUpperCase())
              if (productoBuscado==undefined){
                alert('Producto No Existe')
                break
              }
              else{
                alert('Producto Si Existe')
                break
              }                        
          case '4':
              mostrarProductos()
              break
          case '5':
              alert('Gracias Por Usar Nuestros Servicios')
              break
          default:
              alert('Opción No Válida')
      }
  }
}

mostrarMenu()

