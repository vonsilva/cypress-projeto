Feature: Login

    Scenario: Como usuário eu quero realizar login
        Given Acesso site swag labs
        When Insiro dados de login:
            |      nome     |     senha     |
            | standard_user | secret_sauce  |
        Then Validar dados de login
        And Acessar pagina