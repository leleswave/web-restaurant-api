
import { sequelize } from '../db/connection.js';
import Appetizer from './appetizer.js';
import Entree from './entree.js';
import Sandwich from './sandwich.js';
import SandwichHot from './sandwichHot.js';


sequelize.sync()
    .then(() => {
        console.log('Tabelas criadas no banco de dados');
    })
    .catch((err) => {
        console.error('Erro ao criar tabelas:', err);
    });

export { Appetizer, Entree, Sandwich, SandwichHot };
