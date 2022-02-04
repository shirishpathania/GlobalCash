function() {

  var env = 'qa';//karate.env;
  var project = 'users';//karate.project;
  var config = {
  javaLib: {}
  }

  config = karate.callSingle('classpath:examples/' + project + '/config/' + env + '.js', config);

  karate.configure('logPrettyRequest', true);
  karate.configure('logPrettyResponse', true);

  return config;

}