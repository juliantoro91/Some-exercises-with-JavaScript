class CuponDescuento {
    constructor (couponKey, discount) {
        if (couponKey && discount) {
            this.couponKey = couponKey
            this.discount = discount;
        }
    }
}

class CuponesDeDescuento {
    constructor() {
        this.length = 0;
        this.data = [];
    }
    addCoupon(couponKey, discount) {
        const cuponDescuento = new CuponDescuento(couponKey, discount);

        if (cuponDescuento) {
            this.data.push(cuponDescuento);
            this.length++;
            return true;
        } else {
            return false;
        }
    }
    applyCoupon(couponKey) {
        const discount = this.#validCoupon(couponKey);
        if (discount) {
            return discount;
        }
        
        return null;
    }
    #validCoupon(key) {
        if (key) {
            for (let i = 0; i < this.length; i++) {
                if (key === this.data[i].couponKey) {
                    return this.data[i].discount;
                }
            }
        }

        return null;
    }
}

let cuponesDeDescuento = new CuponesDeDescuento();

cuponesDeDescuento.addCoupon("CuponUno", 15);
cuponesDeDescuento.addCoupon("CuponDos", 20);
cuponesDeDescuento.addCoupon("CuponTres", 5);
cuponesDeDescuento.addCoupon("CuponCuatro", 30);
cuponesDeDescuento.addCoupon("CuponCinco", 27);


// Cálculo precio con descuento

function precioConDescuento (precioOriginal, descuento) {
    const precioConDescuento = precioOriginal * (100 - descuento) / 100;
    return precioConDescuento;
}

function calcularPrecioConDescuento() {
    const price = document.getElementById("InputPrice").value;
    const discountCoupon = document.getElementById("InputDiscount").value;

    const discount = cuponesDeDescuento.applyCoupon(discountCoupon);
    let message = "";

    if (discount) {
        const discountedPrice = precioConDescuento(price, discount);
        message = "El precio con descuento es $" + discountedPrice;
    } else {
        message = "El cupón ingresado no es válido"
    }

    console.log(message)

    document.getElementById("ResultPrice").innerText = message;
}