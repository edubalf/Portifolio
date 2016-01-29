var app = angular
    .module("website", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "Views/Conhecimentos.html", controller: "Conhecimentos" })
        .when("/conhecimentos", { templateUrl: "Views/Conhecimentos.html", controller: "Conhecimentos" })
        .when("/eventos", { templateUrl: "Views/Eventos.html", controller: "Eventos" })
        .when("/experiencias", { templateUrl: "Views/Experiencias.html", controller: "Experiencias" })
        .when("/formacoes", { templateUrl: "Views/Formacoes.html", controller: "Formacoes" })
        .otherwise("/404", { templateUrl: "templates/404.html" });
}]);