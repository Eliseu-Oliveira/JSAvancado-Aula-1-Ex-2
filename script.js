const itens = [
    {
        nome: 'Menu 1',
        itens: [
            { nome: 'Menu 1.1', itens: [] },
            { nome: 'Menu 1.2', itens: [] },
            { nome: 'Menu 1.3', itens: [{ nome: 'Menu 1.3.1', itens: [] }] },
        ]
    },
    {
        nome: 'Menu 2',
        itens: [
            {
                nome: 'Menu 2.1',
                itens: [
                    {
                        nome: 'Menu 2.1.1',
                        itens: [
                            {
                                nome: 'Menu 2.1.1.1',
                                itens: [
                                    { nome: 'Menu 2.1.1.1.1', itens: [] },
                                    { nome: 'Menu 2.1.1.1.2', itens: [] },
                                ]
                            }
                        ]
                    },
                    { nome: 'Menu 2.1.2', itens: [] },
                ]
            },
            {
                nome: 'Menu 2.2',
                itens: [
                    { nome: 'Menu 2.2.1', itens: [] }]
            },
        ]
    }
];

function funcaoRecursiva(nomeMenu, arr, caminho = []) {
    for (const menu of arr) {
        caminho.push(menu.nome);
        if (menu.nome === nomeMenu) {
            return caminho.join(' > ');
        }
        if (menu.itens.length > 0) {
            const encontrado = funcaoRecursiva(nomeMenu, menu.itens, caminho);
            if (encontrado !== null) {
                return encontrado;
            }
        }
        caminho.pop();
    }
    return null;
}


console.log(funcaoRecursiva('Menu 1', itens)); // Menu 1
console.log(funcaoRecursiva('Menu 1.3.1', itens)); // Menu 1 > Menu 1.3 > Menu 1.3.1
console.log(funcaoRecursiva('Menu 2.1.1.1.2', itens)); // Menu 2 > Menu 2.1 > Menu 2.1.1 > Menu 2.1.1.1 > Menu 2.1.1.1.2
console.log(funcaoRecursiva('Menu 3.1', itens)); // null