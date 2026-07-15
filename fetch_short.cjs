const fs = require('fs');

async function main() {
    const urls = [
        { name: 'nanshi', url: 'https://docs.google.com/spreadsheets/d/1CDckiOciPDFCK9y96vd_jX9hd_jFGuo9of9wB5uCio4/export?format=csv' },
        { name: 'xiugulu', url: 'https://docs.google.com/spreadsheets/d/1V1-uRsjwD17DG3FN82R2O_qliJQbiIzcww_DqbP7Dhc/export?format=csv' },
        { name: 'coast', url: 'https://docs.google.com/spreadsheets/d/1jPhCNddvuaqOsIe7NCrxGLpT9QmEn7GNFL5BHJj2M2I/export?format=csv' },
        { name: 'malan', url: 'https://docs.google.com/spreadsheets/d/1hpK23sNsKWvItHnJYH6dkBE_VPI9vcHTiPHdqsIfh4I/export?format=csv' },
        { name: 'hengchun', url: 'https://docs.google.com/spreadsheets/d/1WYdquBSELX0IpnNQL2vOiSsqJRBlJRemChoYLUdn-Qg/export?format=csv' }
    ];
    let results = {};
    for (let u of urls) {
        try {
            let res = await fetch(u.url);
            let text = await res.text();
            results[u.name] = text;
        } catch (e) {
            results[u.name] = e.toString();
        }
    }
    fs.writeFileSync('fetched_short.json', JSON.stringify(results, null, 2));
    console.log("Done");
}

main();
