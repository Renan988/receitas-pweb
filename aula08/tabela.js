
 
 /**
 * @param {Array<Object>} dados
 * @param {string} containerId
 * @param {Array<{chave: string, titulo: string, formatar?: function}>} colunas
 */

export function carregarTabela(dados, containerId, colunas) {
    const container = document.getElementById(containerId);

    if (!dados || dados.length === 0) {
        container.innerHTML = "<p>Nenhum dado encontrado.</p>";
        return;
    }

    
    const chaves = colunas || Object.keys(dados[0]).map(chave => ({ chave, titulo: chave }));

    const cabecalhoHtml = chaves.map(col => `<th>${col.titulo}</th>`).join('');

    const linhasHtml = dados.map(item => {
        const celulas = chaves.map(col => {
            let valor = item[col.chave];
            if (col.formatar && typeof col.formatar === 'function') {
                valor = col.formatar(valor, item);
            }
            return `<td>${valor !== undefined && valor !== null ? valor : ''}</td>`;
        }).join('');

        return `<tr>${celulas}</tr>`;
    }).join('');

    container.innerHTML = `
        <table class="tabela-generica">
            <thead>
                <tr>${cabecalhoHtml}</tr>
            </thead>
            <tbody>
                ${linhasHtml}
            </tbody>
        </table>
    `;
}