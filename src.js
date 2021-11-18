function calcularDepreciacionNIIF(precioInicial,
    precioFinal,
    VidaUtil,
    numeroPeriodoAconsultar)
{
    Importe_depreciable = precioInicial - precioFinal;

    Depreciacion_acumulada = (Importe_depreciable / VidaUtil) * numeroPeriodoAconsultar;

    Valor_activo  = precioInicial - Depreciacion_acumulada;

    console.log(Valor_activo);
}

function calcularDepreciacionNIIFEnDolares(precioInicial,
    precioFinal,
    VidaUtil,
    numeroPeriodoAconsultar)
{
    var dolar = 3778;
    Importe_depreciable = precioInicial - precioFinal;

    Depreciacion_acumulada = (Importe_depreciable / VidaUtil) * numeroPeriodoAconsultar;

    Valor_activo  = precioInicial - Depreciacion_acumulada;

    Valor_activo = Valor_activo / dolar;

    console.log(Valor_activo);
}

// calcularDepreciacionNIIF(10000000, 900000, 70, 8)
// calcularDepreciacionNIIFEnDolares(10000000, 900000, 70, 8)

// module.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
// module.exports.calcularDepreciacionNIIFEnDolares = calcularDepreciacionNIIFEnDolares;