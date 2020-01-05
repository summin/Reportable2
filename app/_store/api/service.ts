import * as apiURL from '../../_definitions'

export function get(attr: string): any {
    console.log("a")
    const requestOptions: object = {
        method: 'GET',
    };
    return fetch(`${apiURL}${attr}`, requestOptions).then(handleResponse);
}

function handleResponse(response: any) {
    return response.text().then((text: string): any => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}