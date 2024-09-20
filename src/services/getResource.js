const getResource = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    const res = await response.json();

    return _transformData(res);
}

const _transformData = (data) => {
    return {
        time: data.Date.slice(0, 10),
        eur: +data.Valute.EUR.Value.toFixed(2),
        usd: +data.Valute.USD.Value.toFixed(2),
        gbp: +data.Valute.GBP.Value.toFixed(2),
        cny: +data.Valute.CNY.Value.toFixed(2)
    }
}

export { getResource };

