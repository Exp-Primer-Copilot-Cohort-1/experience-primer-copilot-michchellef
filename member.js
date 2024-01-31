function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'app/components/member/skills-member.html',
        scope: {
        member: '='
        },
        controller: function ($scope) {
        $scope.skills = $scope.member.skills;
        }
    };
    }