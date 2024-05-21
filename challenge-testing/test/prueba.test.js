
const CarritoCompra = require('./index');

describe('clase CarritoCompra', () => {
    let carritoCompra;
    beforeEach(() => {
        carritoCompra = new CarritoCompra();
    });

    describe('Sobre el constructor de la clase Carrito Compra', () => {
        it('CarritoCompra deberia ser una clase', () => {
            expect(typeof CarritoCompra.prototype.constructor).toBe('function');
        });

        it('carritoCompra deberia ser una instancia de la clase CarritoCompra', () => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true);
        });

        it('Deberia guardar productos en una lista', () => {
            expect(carritoCompra.products).toEqual([]);
        });
    });

    describe('Métodos de la clase CarritoCompra', () => {
        const producto1 = {
            id: 1, 
            name: 'Lapicera Azul',
            price: 1000,
            quantity: 3
        };
        const producto2 = {
            id: 2, 
            name: 'Lapicera Negro',
            price: 900,
            quantity: 5
        };

        it('deberia tener un método llamado agregarProducto', () => {
            expect(typeof carritoCompra.agregarProducto).toBe('function')
        });

        it('Deberia tener un metodo llamado calcularTotal', () => {
            expect(typeof carritoCompra.calcularTotal).toBe('function')
        });

        it('deberia tener un metodo llamado aplicarDescuento', () => {
            expect(typeof carritoCompra.aplicarDescuento).toBe('function')
        });

        it('El metodo agregarProducto deberia poder agregar un producto a la lista', () => {
            carritoCompra.agregarProducto(producto1);
            expect(carritoCompra.products).toContain(producto1)
        });

        it('El método calcularTotal deberia poder calcular el total de la compra sumando los precios de todos los productos en el carrito', () => {
            carritoCompra.agregarProducto(producto1)
            carritoCompra.agregarProducto(producto2)

            const totalExpect = producto1.price * producto1.quantity + producto2.price * producto2.quantity;
            const total = carritoCompra.calcularTotal();
            expect(total).toBe(totalExpect);
        });

        it('el método aplicarDescuento deberia poder aplicar un descuento al total de la compra', () => {
            carritoCompra.agregarProducto(producto1);
            carritoCompra.agregarProducto(producto2);
            const subtotal = producto1.price * producto1.quantity + producto2.price * producto2.quantity;
            const porcentajeDescuento = 15;
            const totalExpect = subtotal - (subtotal * (porcentajeDescuento / 100));
            const total = carritoCompra.aplicarDescuento(porcentajeDescuento);
            expect(total).toBe(totalExpect);
        });
    });
});