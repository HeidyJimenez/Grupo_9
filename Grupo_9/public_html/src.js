const calcularDepreciacionNIIF = (precioInicial,
                                  precioFinal,
                                  vidaUtil,
                                  numeroPeriodoAconsultar) => {
    precioDepreciado=0
    depAgno=precioInicial/vidaUtil
    if (vidaUtil<=0){
        return 0;
        if (numeroPeriodoAconsultar>vidaUtil){
            precioFinal=precioInicial-(depAgno*vidaUtil)
            return precioFinal;
        }else{
            precioDepreciado=precioInicial-(depAgno*numeroPeriodoAconsultar)
            return precioDepreciado;
        }
    }                                                                
}

const calcularDepreciacionNIIFEnDolares = (precioInicial,
                                           precioFinal,
                                           vidaUtil,
                                           numeroPeriodoAconsultar) => {
                                               
                                               
}

module.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
module.exports.calcularDepreciacionNIIFEnDolares = calcularDepreciacionNIIFEnDolares;