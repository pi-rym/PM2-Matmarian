class CarritoCompra{
    constructor(){
        this.products = []
    }
    agregarProducto(product){
        this.products.push(product)
    }
    calcularTotal(){
    let total = 0;

    for(const item of this.products){
        total += item.price * item.quantity
        }
        return total 
    }  

    aplicarDescuento(porcentaje){
        const subtotal = this.calcularTotal()
        const descuento = this.calcularTotal() * (porcentaje/100)
       
        return  subtotal - descuento
    }

}

module.exports = CarritoCompra