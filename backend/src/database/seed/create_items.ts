import * as Knex from "knex";

export async function seed(knex : Knex) { 
  await knex('items').insert([
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Pilhas de Baterias', image: 'baterias.svg' },
    { title: 'Papeis e Papelão', image: 'papeis-papelao.svg' },
    { title: 'Resíduos e Eletrônicos', image: 'eletronicos.svg' },
    { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
    { title: 'Óleo de Cozinha', image: 'oleo.svg' },
  ])
}