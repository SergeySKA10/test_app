import { useState, useEffect } from "react";
import { getResource } from "../../services/getResource";

import './CurrencyConvector.css';



const CurrencyConvector = () => {
    const [sum, setSum] = useState(0),
          [quotes, setQuotes] = useState({}),
          [dataTime, setDataTime] = useState(''),
          [currency, setCurrency] = useState(''),
          [btnPress, setBtnPress] = useState('false'),
         // [button, setButton] = useState([]),
          [btnClass, setBtnClass] = useState(['btn-outline-primary','btn-outline-primary', 'btn-outline-primary', 'btn-outline-primary']);

    useEffect(() => {
        getResource('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(data => {
            setDataTime(dataTime => data.time);

            setQuotes(quotes => {
                const newData = {};

                for (let key in data) {
                    if (key !== 'time') {
                        newData[key] = data[key];
                    }
                }

                return newData;
            });
        });
    }, []);

    const onChangeValue = (value) => {
        setSum(sum => +value );
    };

    const onGetCurrensy = (value) => {
        let cur;
        
        switch(value) {
            case 'EUR':
                cur = quotes.eur;
                break;
            case 'USD':
                cur = quotes.usd;
                break;
            case 'GBP':
                cur = quotes.gbp;
                break;
            case 'CNY':
                cur = quotes.cny;
                break;
            default:
                cur = 1;
                break;
        }

        setCurrency(currency => `${(sum * cur).toFixed(1)} RUB`);
    };

    const onPressBtn = (target) => {
        setBtnPress(btnPress => true);
        setBtnClass((btnClass) => {
            return btnClass.map((el, i) => {
                if (i !== +target.getAttribute('data-press')) {
                    return 'btn-outline-primary';
                } else {
                    return 'btn-primary';
                }
            })
        });
    }

    // useEffect(() => {
    //     setButton(() => {
    //         const newButton = [];
    //         let count = 0;

    //         for (let key in quotes) {
    //             newButton.push(
    //                 <button key={count}
    //                         data-press={count} 
    //                         type="button" 
    //                         className={'btn ' + btnClass[0]} 
    //                         onClick={(e) => {onGetCurrensy(e.target.innerText); onPressBtn(e.target)}}>
    //                             {key.toUpperCase()}
    //                 </button>
    //             );
    //             count++;
    //         }

    //         console.log(newButton);

    //         return newButton;
    //     });
    // }, [quotes])

    return (
        <>
            <div className="convector m-5 border border-primary">
                <div className="m-3">
                    <div className="inputText">Введите сумму в валюте</div>
                    <input className="m-auto input" type="text" onChange={(e) => onChangeValue(e.target.value)}></input>
                </div>

                <div className="value">
                    <div className="inputText">Выберете валюту</div>
                    <div className="currency border">
                        <button data-press={0} type="button" className={'btn ' + btnClass[0]} onClick={(e) => {onGetCurrensy(e.target.innerText); onPressBtn(e.target)}}>EUR</button>
                        <button data-press={1} type="button" className={'btn ' + btnClass[1]} onClick={(e) => {onGetCurrensy(e.target.innerText); onPressBtn(e.target)}}>USD</button>
                        <button data-press={2} type="button" className={'btn ' + btnClass[2]} onClick={(e) => {onGetCurrensy(e.target.innerText); onPressBtn(e.target)}}>GBP</button>
                        <button data-press={3} type="button" className={'btn ' + btnClass[3]} onClick={(e) => {onGetCurrensy(e.target.innerText); onPressBtn(e.target)}}>CNY</button>
                        {/* {button} */}
                    </div>
                    <div className="inputText mt-3">Котировка на {dataTime}:</div>
                    <div className="result border border-primary">{!btnPress ? "Выберете валюту" : sum ? currency : ''}</div>

                </div>
                
            </div>   
        </>
    )
}

export default CurrencyConvector;