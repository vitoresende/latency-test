export default {
    async fetch(request) {
        const response = await fetch(request);

        // Create a new headers object to set CORS headers
        const corsHeaders = new Headers(response.headers);
        corsHeaders.set(
            'Access-Control-Allow-Origin',
            '*');  // Replace with your frontend domain
        corsHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        corsHeaders.set('Access-Control-Allow-Headers', 'Content-Type');

        console.log("response " + JSON.stringify(response.body))

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: corsHeaders,
        });
    },
};