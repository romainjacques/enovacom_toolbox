'use strict';

angular.module('b2', ['ngRoute','ngMaterial','myApp'])

    .controller('b2Ctrl',['b2Service','$scope','$http',function(b2Service,$scope,$http) {
      $scope.change= function(){
        var b2UserInput =$scope.b2Input
        $scope.fileInfo = b2Service.getFileInfo(b2UserInput);
      }

  }])
    .service('b2Service', ['$http',function($http){
        //Récupération du JSON organismes destinataire
        var orgaDestTable=[];
        $http.get('assets/orgaDest.json').then(function(response){
          orgaDestTable.push(response.data);
          return orgaDestTable;
          });
        //Déclenché quand on copie/colle quelque chose dans la text area
        this.getFileInfo = function(b2UserInput){
          var fileInfo={};
          b2UserInput=b2UserInput.replace(/[\n\r]/g, ''); //supression des retours chariot
          //Récupération des infos dans objet "fileInfo"
          //Organisme destinataire
          fileInfo.orgaDest=b2UserInput.charAt(304)+b2UserInput.charAt(305)
            +';'+b2UserInput.charAt(306)+b2UserInput.charAt(307)+b2UserInput.charAt(308)
            +';'+b2UserInput.charAt(309)+b2UserInput.charAt(310)+b2UserInput.charAt(311)+b2UserInput.charAt(312);
          //Numéro de lot
          fileInfo.numLot=b2UserInput.charAt(146)+b2UserInput.charAt(147)+b2UserInput.charAt(148);
          //libellé
          fileInfo.libelle='';
          angular.forEach(orgaDestTable, function(value,key){
            angular.forEach(value,function(value){
              if(value.codeGrandRegime==fileInfo.orgaDest.charAt(0)+fileInfo.orgaDest.charAt(1)
              && value.caisseGestionnaire==fileInfo.orgaDest.charAt(3)+fileInfo.orgaDest.charAt(4)+fileInfo.orgaDest.charAt(5)
              && value.centreGestionnaire==fileInfo.orgaDest.charAt(7)+fileInfo.orgaDest.charAt(8)+fileInfo.orgaDest.charAt(9)+fileInfo.orgaDest.charAt(10)
                ){
                fileInfo.libelle=value.libelle;
                fileInfo.checked=true;
                }
              })
            })
          //Vérification de la présence d'un libellé dans la table des organismes destinataire
          if (fileInfo.libelle==''){
            fileInfo.checked=false;
          }
          console.log(fileInfo.checked);
          return fileInfo;
        }
    }])
