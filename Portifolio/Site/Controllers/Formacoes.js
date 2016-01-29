app.controller('Formacoes', function ($scope, $http) {
    $scope.Formacoes = [
        {
            Formacao: "Ensino superior incompleto em Sistemas de Informação",
            Entidade: "FIAP",
            Periodo: "2013 ~ 2014"
        },
        {
            Formacao: "Ensino médio técnico em informática",
            Entidade: "Colégio Oswaldo Cruz",
            Periodo: "Completo em 2010"
        }
    ]
});