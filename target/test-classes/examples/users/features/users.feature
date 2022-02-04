Feature: sample karate test script
  for help, see: https://github.com/intuit/karate/wiki/IDE-Support

  Background:
    * url baseURL
    * def createUserRequest = request

  Scenario: get all users and then get the first user by id
    Given path 'users'
    When method get
    Then status 200

    * def first = response[0]

    Given path 'users', first.id
    When method get
    Then status 200

  Scenario: create a user and then get it by id

    Given path 'users'
    And request createUserRequest
    When method post
    Then status 201

    * def id = response.id
    * print 'created id is: ', id

#    Given path 'users', id
#     When method get
#     Then status 200
#     And match response contains user
  