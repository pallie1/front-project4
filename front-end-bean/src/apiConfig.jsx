let apiUrl;

const apiUrls = {
    development: `http://localhost:3000`,
    production: 'https://coffee-bean-api.herokuapp.com'
};

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development;
} else {
    apiUrl = apiUrls.production;
}

export default apiUrl;