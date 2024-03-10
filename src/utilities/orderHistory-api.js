import sendRequest from './send-request';

const BASE_URL = '/api/orders-history';

export async function getOrderHistory() {
    try {
        const response = await sendRequest(`${BASE_URL}`);
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error fetching: ', error);
        throw error;
    }
}
