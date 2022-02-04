function() {

  var env = karate.env;
  var project = karate.project;
  var config = {
  javaLib: {}
  }

  config = karate.callSingle('classpath:examples/' + project + '/config/' + env + '.js', config);

  karate.configure('logPrettyRequest', true);
  karate.configure('logPrettyResponse', true);

  return config;

}