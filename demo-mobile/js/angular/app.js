
'use strict'

angular.module('app', ['ngAnimate']);
  
function AppCtrl($scope) {
    $scope.global = {
        screen : 'login'
    };
}
 
function ListCtrl($scope) {
    
    $scope.selectEntity = function(entity){
        if(entity == $scope.model.selectedEntity){
            //$scope.model.selectedEntity = undefined;
        }else{
            $scope.model.selectedEntity = entity;
        }
    }
    
    $scope.unselectEntity = function(){
        $scope.model.selectedEntity = undefined;
        $scope.model.showDetail = false;
    }

    $scope.model = {
        selectedEntity : undefined,
        showDetail: false,
        entities : [{
            code: '200',
            name: 'Tyrmotakuty Zakgolsf, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: 'V516',
            name: 'Gogatyrasi',
            roles: [{
                name: 'CEO',
                user: {
                    name: 'Osjdasjo Borsssssi'
                }
            },{
                name: 'CFO',
                user: {
                    name: 'Johndoo Warsjds'
                }
            },{
                name: 'CFO Backup',
                user: undefined
            }]
        },{
            code: '544',
            name: 'Tyrmotakuty Ksdhqjbsd, SA',
            roles: [{
                name: 'CEO',
                user: {
                    name: 'Oliver Jean'
                }
            },{
                name: 'CFO',
                user: {
                    name: undefined
                }
            },{
                name: 'CFO Backup',
                user: 'John Yunky'
            }]
        },{
            code: 'V653',
            name: 'Dho Brow SA',
            roles: [{
                name: 'CEO',
                user: {
                    name: 'Remy Calytamu'
                }
            },{
                name: 'CFO',
                user: {
                    name: 'Daniel Joyhute'
                }
            },{
                name: 'CFO Backup',
                user: 'Houyets Jsuhwb Khsgaye'
            }]
        },{
            code: '8236',
            name: 'USdgakjbas Zakgolsf, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: 'S923',
            name: 'Ssdasds Asdsad, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: '2974',
            name: 'IUsdgkasjgd Ksdh, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: '846',
            name: 'Usajhg SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: '1337',
            name: 'Ishdkas NSadkjh, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: 'U376',
            name: 'Usakdjb Ksdjkah, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: '8723',
            name: 'Ksasdh, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: '1297',
            name: 'Isadlkj KSda, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: '2332',
            name: 'Isadkh Ksdkajh, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: '734H',
            name: 'Ksalkdjlaks, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: '2364',
            name: 'Lsadlk, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: '23S3',
            name: 'Lasdjh, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: '774Y',
            name: 'KSadjh, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: '2384',
            name: 'Lsladkj, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        },{
            code: 'HD73',
            name: 'ISakdjhasdjh, SA',
            roles: [{
                name: 'Validator',
                user: {
                    name: 'Durtas Arytiatdg Martskhdas'
                }
            }]
        }
        ]
    };

    //Preselect first element in table
    //$scope.model.selectedEntity = $scope.model.entities[0];

}


