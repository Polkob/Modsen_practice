import('node-fetch').then(module => {
    const fetch = module.default;
});

async function fetchDataWithTimeout(url, timeout) {

    const controller = new AbortController();
    const { signal } = controller;

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeout);

    try {
        const response = await fetch(url, { signal });
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error(`Запрос к ${url} отменен из-за превышения таймаута.`);
        } else {
            console.error(`Ошибка при выполнении запроса к ${url}:`, error);
        }
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
}

const url = 'https://catfact.ninja/fact';
const timeoutInMilliseconds = 5000;

fetchDataWithTimeout(url, timeoutInMilliseconds)
    .then((data) => {
        console.log('Данные:', data);
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });