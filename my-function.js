export const handler = async (event) => {
    const name = "Ujwal Suresh Vanjare"; 
    const keyword = event.queryStringParameters?.keyword; 

    if (!keyword) {
        return {
            statusCode: 400,
            body: JSON.stringify('Keyword parameter is required.'),
        };
    }

    const responseMessage = `${name} says ${keyword}`;
    return {
        statusCode: 200,
        body: JSON.stringify(responseMessage),
    };
};
