import { Imposto } from "./script_calculo.js";
const formVeiculo = document.querySelector('#Dados_veiculos');

const tbodyLista = document.querySelector('#corpo-tabela-veiculos');

const veiculos = [];

formVeiculo.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const dadosFomVeiculos = new FormData(formVeiculo);

    const veiculo = {
        marca: dadosFomVeiculos.get('marca'),
        modelo: dadosFomVeiculos.get('modelo'),
        placa: dadosFomVeiculos.get('placa'),
        ano: parseInt(dadosFomVeiculos.get('ano')),
        valor: parseFloat(dadosFomVeiculos.get('valor')),
        combustivel: dadosFomVeiculos.get('combustivel')
    };
    addVeiculo(veiculo);
    formVeiculo.reset();
});

const addVeiculo = (objVeiculo) => {
    veiculos.push(objVeiculo);
    listVeiculos();
};

const listVeiculos = () => {
    tbodyLista.innerHTML = '';

    veiculos.forEach((elem, i) => {
        
        const resultCalculos = Imposto(elem);

        const seguroFormatado = resultCalculos.seguro.toFixed(2).replace('.', ',');
        const totalFormatado = resultCalculos.total.toFixed(2).replace('.', ',');

        const ipvaFormatado = typeof resultCalculos.ipva === 'number'
            ? `R$ ${resultCalculos.ipva.toFixed(2).replace('.', ',')}`
            : resultCalculos.ipva;

        tbodyLista.innerHTML += `
            <tr>
                <td>${elem.placa}</td>
                <td>${elem.modelo}</td>
                <td>${elem.marca}</td>
                <td>${resultCalculos.idade} anos</td>
                <td>R$ ${seguroFormatado}</td>
                <td>${ipvaFormatado}</td>
                <td>R$ ${totalFormatado}</td>
            </tr>
        `;
    });
};