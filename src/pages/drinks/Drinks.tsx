import React from 'react';
import css from './drinks.less';
import App from '../../components/app/App';
import DrinkList from './drinklist';

const Drinks: React.FC = () => {
    return (
        <App>
            <div className={css.drinksContainer}>
                <div className={css.drinkList}>
                {
                    DrinkList.map(drink => 
                        <div id={drink.name} className={css.drink}> 
                            <div className={css.drinkHeader}>{drink.name} </div>
                            <ul className={css.ingredientList}>
                                {drink.ingredients.map(ingredient => <li className={css.ingredient} key={ingredient}>{ingredient}</li>)} 
                            </ul>
                            <div className={css.drinkDescription}>{drink.how}</div>
                            <div className={css.variants}> 
                                { drink.variants.map(v => <div className={css.variant}>{v}</div>) }
                            </div>
                        </div>
                    )   
                }
                </div>
            </div>
        </App>
    );
};

export default Drinks;
