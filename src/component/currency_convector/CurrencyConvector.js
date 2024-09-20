import { useState, useEffect } from "react";
import { getResource } from "../../services/getResource";

import './CurrencyConvector.css';



const CurrencyConvector = () => {
    const [sum, setSum] = useState(0),
          [quotes, setQuotes] = useState({}),
          [dataTime, setDataTime] = useState(''),
          [currency, setCurrency] = useState('');

    useEffect(() => {
        getResource('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(data => {
            setQuotes(quotes => ({...data}));
            setDataTime(dataTime => data.time);
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

        setCurrency(currency => `${(sum * cur).toFixed(1)} ${value}`);
    };

    return (
        <>
            <div className="convector m-5 border border-primary">
                <div className="m-3">
                    <div className="inputText">Введите сумму в рублях</div>
                    <input className="m-auto input" type="text" onChange={(e) => onChangeValue(e.target.value)}></input>
                </div>

                <div className="value">
                    <div className="inputText">Выберете валюту</div>
                    <div className="currency border">
                        <button type="button" className="btn btn-outline-primary" onClick={(e) => onGetCurrensy(e.target.innerText)}>EUR</button>
                        <button type="button" className="btn btn-outline-primary" onClick={(e) => onGetCurrensy(e.target.innerText)}>USD</button>
                        <button type="button" className="btn btn-outline-primary" onClick={(e) => onGetCurrensy(e.target.innerText)}>GBP</button>
                        <button type="button" className="btn btn-outline-primary" onClick={(e) => onGetCurrensy(e.target.innerText)}>CNY</button>
                    </div>
                    <div className="inputText mt-3">Котировка на {dataTime}:</div>
                    <div className="result border border-primary">{currency}</div>

                </div>
                
            </div>   
        </>
    )
}

export default CurrencyConvector;