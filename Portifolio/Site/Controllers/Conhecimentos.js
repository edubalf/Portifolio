app.controller('Conhecimentos', function ($scope, $http) {
    $scope.Conhecimentos = [{
        Descricao: "Front-End",
        Itens: [
            "HTML",
            "CSS",
            "JavaScript",
            "BootStrap",
            "Angular",
            "Bower",
            "Gulp",
            "Slush"]
    },
    {
        Descricao: "Back-End",
        Itens: [
            "C#"
            ,"Windows Forms"
            ,"WCF"
            ,"WPF"
            ,"Console Aplications"
            ,"Windows Services"
            ,".NET WebForms"
            ,".NET MVC"
            ,".NET WEB API"
            ,"ADO.NET"
            ,"Entity Framework"
            ,"SQL Server"
            ,"Node.js (básico)"
            ,"Mongoose (básico)"
            ,"MongoDB (básico)"]
    },
    {
        Descricao: "Outros",
        Itens: [
            "DDD",
            "Xamarin Forms",
            "REST",
            "Google Maps API",
            "Azure"]
    }]
});