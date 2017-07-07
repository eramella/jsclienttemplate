module.exports = function() {
    var server = '.\\server';
    
    var config = {
               
        /**
         * File paths
         */ 
        alljs: [
            './js/**/*.js',
            './*.js'
        ],
        
        less: './css/index/index_main.less',
        server: server,
        temp: './.temp/',
        
        /**
         *  Node settings
         */
        defaultPort: 9000,
        nodeServer: '.\\server\\app.js'  
    };
    
    return config;
};