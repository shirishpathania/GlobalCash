function(config) {

    //URL
    config['baseURL'] = 'https://jsonplaceholder.typicode.com';

    //OAUTH 2.0 TOKEN
//    config['request_token'] = karate.callSingle('classpath:Projects/token/token.feature');

    //REQUEST PAYLOAD
    config['request'] = read('classpath:examples/users/testdata/request.json')

    return config;
}