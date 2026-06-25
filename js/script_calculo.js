const Imposto = (objVeiculo) => {
    const anoAtual = 2026;
    
    const idadeVeiculo = anoAtual - parseInt(objVeiculo.ano);

    const Seguro = objVeiculo.valor * 0.10;

    let Ipva = 0;
    let isentoIpva = false;

    if (idadeVeiculo > 20) {
        isentoIpva = true;
    } else {
        
        if (objVeiculo.combustivel === "Gasolina") {
            Ipva = objVeiculo.valor * 0.20;
        } else if (objVeiculo.combustivel === "Etanol") {
            Ipva = objVeiculo.valor * 0.15;
        } else if (objVeiculo.combustivel === "Biocombustível") {
            Ipva = objVeiculo.valor * 0.10;
        } else if (objVeiculo.combustivel === "Híbrido") {
            Ipva = objVeiculo.valor * 0.08;
        } else if (objVeiculo.combustivel === "Elétrico") {
            Ipva = objVeiculo.valor * 0.02;
        }
    }
    
    const valorFinal = objVeiculo.valor + Seguro + (isentoIpva ? 0 : Ipva);

    return {
        idade: idadeVeiculo,
        seguro: Seguro,
        ipva: isentoIpva ? "Isento" : Ipva,
        total: valorFinal
    };
}

export { Imposto }