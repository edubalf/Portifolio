app.controller('Experiencias', function ($scope, $http) {
    $scope.Experiencias = [{
        Empresa: "Empório do aço (TreezeBit)",
        De: "06/2015",
        Ate: "10/2015",
        Cargos: [{
            Descricao: "Programador",
            Funcoes: [
                "Desenvolvimento de sistema mobile com Xamarin",
                "Desenvolvimento de sistema desktop com WPF"]
        }]
    },
    {
        Empresa: "Fácil Assist",
        De: "10/2014",
        Ate: "05/2015",
        Cargos: [{
            Descricao: "Programador",
            Funcoes: [
                "Robos com Windows Service",
                "Modelagem de dados e criação de procedures com SQL Server",
                "Criação de WebServices com WCF",
                "Desenvolvimento de sistemas web com WebForms e MVC"]
        }]
    },
    {
        Empresa: "SBS e-BPO",
        De: "01/2013",
        Ate: "09/2014",
        Cargos: [{
            Descricao: "Programador",
            De: "07/2013",
            Ate: "09/2014",
            Funcoes: [
                "Desenvolvimento de sistemas desktop com Windows Forms",
                "Robos com Windows Service e Console Application",
                "Desenvolvimento de sistemas web com WebForms",
                "Modelagem de dados e criação de procedures com SQL Server"]
        },
        {
            Descricao: "Assistente de TI",
            De: "01/2013",
            Ate: "07/2013",
            Funcoes: [
                "Manutenção de maquina",
                "Rotina de backup",
                "Manutenção de servidores",
                "Manutenção no sistema",
                "Manutenção no banco de dados"]
        }]
    }]
});