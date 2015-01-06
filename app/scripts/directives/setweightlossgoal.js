'use strict';

/**
 * @ngdoc directive
 * @name meanApp.directive:setWeightLossGoal
 * @description
 * # setWeightLossGoal
 */
angular.module('meanApp')
    .directive('setWeightLossGoal', function ($http, configuration) {
        return {
            restrict: 'E',
            templateUrl: '../views/partials/setWeightLossGoal.html',
            controllerAs: 'goal',
            controller: function () {
                this.currentDate = new Date();
                this.endDate = new Date();
                this.goalWeight = 0;
                this.currentWeight = 0;

                this.create = function () {

                    var request = {
                        'startDate': this.currentDate,
                        'endDate': this.endDate,
                        'startWeight': this.currentWeight,
                        'endWeight': this.goalWeight
                    };
                    console.log(request);
                    $http.post(configuration.apiUrl + 'weightLossGoal', request)
                };
            }
        }
    });