    angular
        .module('app')
        .controller('survivorController', survivorController);

    survivorController.$inject = ['$scope', '$location', '$state', '$rootScope'];

    function survivorController($scope, $location, $state, $rootScope) {

        $scope.score = 0;

        if ($state.includes('stage1')) {
            $rootScope.output = [];
            $scope.problem = "You just had your 18th birthday and your mom gave you a reloadable pre-paid card with a few hundred dollars. Her intention is to get you used to using a card to pay for goods and services instead of cash. She also said she would add $100 to the card every month as an allowance to help with going out to movies and dinners with your friends. You thank your mom from the bottom of your heart for her gift. What do you do with the gift?";
            $scope.solutions = [["", ""], ["", ""], ["", ""]];
            $scope.solutions[0][0] = "Ask your mother if you could apply for a credit card instead and have her pay off $100 a month";
            $scope.solutions[0][1] = "Best option, although may be a little awkward to ask your mother to change her gift idea. This allows you to start building your credit at a younger age and gives your mom the chance to look after you and your credit line.";
            $scope.solutions[1][0] = "Use the gift as your mother intended and get the $100 added to it every month";
            $scope.solutions[1][1] = "This option is pretty useless, you do not build any credit so you might as well be using cash.";
            $scope.solutions[2][0] = "Stash the card away for emergency use later in case you have no cash on hand";
            $scope.solutions[2][1] = "This is the worst option because the FDIC does not neccesarily cover the costs of these cards if the bank/buisness that supplies them goes under. Secondly, if they are stolen, the money is simply gone. You would be better off just using cash again.";
            $scope.correctSolution = 0;
            document.getElementById("stage1").style.background = 'url(../img/college.jpg) no-repeat center center fixed';
        }
        if ($state.includes('stage2')) {
            if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "You are a full time student in college living off campus on your own and working part time. You are currently living paycheck to paycheck. One wintry day though you lose control of your vehicle on an icy hill and crash into a concrete barrier. You determine through an auto mechanic that to repair the vehicle it will cost $1000. You must have the vehicle to transit to school and work. Without a strong credit history though, you are unable to get a bank loan. You see an advertisement for a quick pay day loan which would cover the cost of the repair. Of the following options, which should you choose?";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Take the pay day loan and temporarily not attend classes to be able to work full time to pay off the loan?";
            $scope.solutions[0][1] = "Full time work would pay off the loan quickly to minimize interest but will probably cause you to miss a semester";
            $scope.solutions[1][0] = "Don't take the loan and ride the bus to work which will not leave time to also use the bus to get to class?";
            $scope.solutions[1][1] = "This avoids the pitfall of a radically high interest payday loan but will cause you to miss a semester of school";
            $scope.solutions[2][0] = "Take a pay day loan to pay off the vehicle repair and then go to another pay day loan business to get a pay day loan to be able to work part time and still go to class?";
            $scope.solutions[2][1] = "Two payday loans is like digging a hole in a hole. The cycle of debt will be very hard to break for a person in this situation.";
            $scope.correctSolution = 1;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
        if ($state.includes('stage3')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "Your are in your junior year of college and struggling hardcore financially. Your student loans have started running out and you are holding more and more money on the credit card. You have very limited options but the ones you do have are pretty bleak. You need to choose the best option from a overall bad situation. What is your best bad option?";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Keep paying the minimum balance on your credit card every month";
            $scope.solutions[0][1] = "Not the worst option but still pretty bad. Credit cards can have an upward interest of 30% or greater. If you go this route be prepared to be taking some seriously bad flak from interest.";
            $scope.solutions[1][0] = "Get a bank loan to pay off the credit line for now";
            $scope.solutions[1][1] = "This is the best option. It has a much lower interest rate than your credit card and would allow you to have more time to try to come back from the debt before it become overwhelming.";
            $scope.solutions[2][0] = "Drop out of school and focus all your time on a minimum wage job to pay off the credit line";
            $scope.solutions[2][1] = "Worst option, if you have 3k in a credit line at 20%, it will cost you $600 a month in interest. This is awful considering that you are only making $1600 a month if you are working full time at $10 an hour. After living costs, you will have a hard time paying back this debt.";
            $scope.correctSolution = 1;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
        if ($state.includes('stage4')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "You just graduated college and have found a good paying full time job. You really like your job and you can not see yourself leaving the job anytime in the foreseeable future. You are super excited that you no longer have to worry about just scraping by on college funds. Yet you remember how awful it was to have to do so and you vow to plan your future so that you are never that low on cash again. In order to pull this off you need to choose the best plan you can. Out of these options, what will you do?";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Start adding $5,000 a year into retirement savings";
            $scope.solutions[0][1] = "Good option because if you start saving at this rate when you graduate and turn 65, you will have $675,861 saved up. That is assuming a 7% pre-tax annual return and a 35% marginal tax bracket.";
            $scope.solutions[1][0] = "Keep the $5,000 a year to make sure you do not have to live cheap";
            $scope.solutions[1][1] = "This is the worst option because even though you might not have to live cheap right off the bat, you will significantly hinder your retirement savings by saving later in life.";
            $scope.solutions[2][0] = "Invest as much as you can afford into your employer's 401K program";
            $scope.solutions[2][1] = "Best option because if you are planning on staying with the same job then the 401K plan actually works out really well. Since it is almost always one-to-one, it is one of the best investments you can ever make.";
            $scope.correctSolution = 2;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
        if ($state.includes('stage5')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "You have just graduated college and started a career working for the FBI. As part of your employment process a credit background check was completed over your history. You are told that to continue working in this career field you must maintain an excellent credit record. You have a close friend who is also starting their own career. The job requires a long commute though and he or she does not have a vehicle. He or she begs you to cosign with them for an auto loan since they are unable to get a loan on his or her own. You truly want to help your friend but you also know in the back of your mind that this person has been financially irresponsible a few times in the past. Which of the following options should you choose?";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Cosign for the auto loan knowing that you will be ultimately responsible for the loan which could negatively affect your credit record and cause you to lose your new job.";
            $scope.solutions[0][1] = "This puts your job at risk but also minimizes the possible loss of a friend";
            $scope.solutions[1][0] = "Don't cosign for the auto loan which will not allow your friend to get a vehicle.";
            $scope.solutions[1][1] = "This is a safe choice for job security but comes at the cost of possible losing a friend.";
            $scope.solutions[2][0] = "Drive your friend to work as your schedule allows.";
            $scope.solutions[2][1] = "No threat to own job and friend still gets to work as possible. As time goes on it is possible your friends situation may change.";
            $scope.correctSolution = 2;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
        if ($state.includes('stage6')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "You are in your early 30's and have had a successful career. You are getting ready to purchase your first home. You always pay off your credit cards on time and as such are under the impression that you have good credit. Every now and then you notice a strange charge in your online bank statements or a letter stating you have been approved for a new credit line. When you go to the bank to apply for a home loan you are startled to discover that you are rejected for a low interest loan due to poor credit. Of the following choices which should you choose?";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Acquire a free credit report from each of the three credit bureaus and place a fraud alert on your record.";
            $scope.solutions[0][1] = "It is important to be aware of credit report activities and when suspicious to send alerts to the three credit reporting agencies.";
            $scope.solutions[1][0] = "Accept a higher interest rate loan and assume the poor credit is your own fault.";
            $scope.solutions[1][1] = "If possible, waiting until your credit situation is better understood and trying again for a lower rate will save money in future.";
            $scope.solutions[2][0] = "Request your bank to investigate why you have poor credit.";
            $scope.solutions[2][1] = "Asking for resources or information is always a positive step and may lead to a better grasp of your financial situation.";
            $scope.correctSolution = 0;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
         if ($state.includes('stage7')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "You are in your mid forties and your kid just graduated college. He needed a place to stay while he finds a job. You have not seen him much for the past four years and are extremely excited to have your kid in the house again. The problem is their job search is slowing down and they are settling in with living with you. Recently they started needing money to stay afloat with their car and student loans. You feel very secure with your income and can easily support yourself and him. What do you do?";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Force him out of the house";
            $scope.solutions[0][1] = "This is not a very good option, you could end up ruining your relationship with your kid. It seems rather pointless to bring him in just to kick him out later when you are sick of him and it does not help him move on with his life.";
            $scope.solutions[1][0] = "Front his expenses";
            $scope.solutions[1][1] = "This is the worst option because it does not only hurt you and your expenses, it gives him positive feedback that not looking for a job and living off your parents is alright. You need to concentrate on making the next 10-15 years count toward your retirement and blowing it on your son that could be independent is not smart.";
            $scope.solutions[2][0] = "Pay only for the expense of him living in your house";
            $scope.solutions[2][1] = "This is the best option because it requires him to realize that he is slowing down his own life by living off you. You should still support him with shelter and food but he should be responsible for everything else that he would need if he was living alone.";
            $scope.correctSolution = 2;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
         if ($state.includes('stage8')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "You are in your late forties and your wife just got diagnosed with breast cancer. You are desperate to cure her, as any husband would most undoubtedly be. You have insurance but they will not cover the entire cost. The rest is up to you and you do not have nearly enough money to pay off the health care bills. What is your best option?";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Get massive bank loans";
            $scope.solutions[0][1] = "This is the best option. It does stink to have the interest on the bank loans but this option is better than the alternatives because this option loses you the least amount of money in the long run.";
            $scope.solutions[1][0] = "Cash out part of your retirement account early";
            $scope.solutions[1][1] = "This not a good option at all... If you withdraw your retirement before you reach 59.5 are considered premature distrobutions. They may be subject to an additional 10% tax alonth with the fact that this may bump you into the next tax bracket, taxing you even further.";
            $scope.solutions[2][0] = "Leave your wife untreated and hope she gets better";
            $scope.solutions[2][1] = "Obviously a bad option, if your wife dies you will never forgive yourself for not at least trying.";
            $scope.correctSolution = 0;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }
         if ($state.includes('stage9')) {
             if ($rootScope.output === undefined || $rootScope.output === null) {
                $rootScope.output = []
            }
            $scope.problem = "You just turned 55 and now it is time for your to retire! Congratulations! Only one problem, they are asking what you would like to do with your pension. Your not entirely sure and the decision is irrevocable so there is not going back. What should you do?";
            $scope.solutions = [['', ''], ['', ''], ['', '']];
            $scope.solutions[0][0] = "Take it out as a single-life pension under yourself";
            $scope.solutions[0][1] = "The problem with this one is that if you die, your spouse is left living without your pension.";
            $scope.solutions[1][0] = "Spend some money and consult a good financial advisor";
            $scope.solutions[1][1] = "This is the best option. The reasoning is that it is completely dependent on how your or your spouses health and finances are. It is best to talk to a financial advisor before making a decision on this.";
            $scope.solutions[2][0] = "Take it out as a joint-life pension for you and your spouse";
            $scope.solutions[2][1] = "The problem with this option is that you will not bring in as much money with the pension split between you two.";
            $scope.correctSolution = 1;
            document.getElementById("stage1").style.background = 'url(../img/college2.jpg) no-repeat center center fixed';
        }



        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
        $scope.$watch('gameOver', function () {

        });
        $scope.answer = function (num) {
            //alert(num);
            if (num == $scope.correctSolution) {
                var nextOut = [$scope.problem, $scope.solutions[num][0], $scope.solutions[num][1]];
                //console.log('adding');
                //console.log(nextOut);
                $rootScope.output.push(nextOut);
            } else {
                //alert($scope.solutions[0][0]);
                var nextOut = [$scope.problem, $scope.solutions[num][0], $scope.solutions[num][1], $scope.solutions[$scope.correctSolution][0], $scope.solutions[$scope.correctSolution][1]];
                 //console.log('adding');
                //console.log(nextOut);
                $rootScope.output.push(nextOut);
            }
            if ($state.includes('stage1')) {
                $state.go('stage2', {}, {
                    reload: false
                });
            }
             if ($state.includes('stage2')) {
                $state.go('stage3', {}, {
                    reload: false
                });
            }
             if ($state.includes('stage3')) {
                $state.go('stage4', {}, {
                    reload: false
                });
            }
             if ($state.includes('stage4')) {
                $state.go('stage5', {}, {
                    reload: true
                });
            }
             if ($state.includes('stage5')) {
                $state.go('stage6', {}, {
                    reload: true
                });
            }
            if ($state.includes('stage6')) {
                $state.go('stage7', {}, {
                    reload: true
                });
            }
            if ($state.includes('stage7')) {
                $state.go('stage8', {}, {
                    reload: true
                });
            }
            if ($state.includes('stage8')) {
                $state.go('stage9', {}, {
                    reload: true
                });
            }
             if ($state.includes('stage9')) {
                $state.go('end', {}, {
                    reload: true
                });
            }
            console.log('here');
            console.log($rootScope.output);
            
        };
    }