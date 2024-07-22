import Component from '@glimmer/component';

export default class RewardComponent extends Component {
  activity = [
    {
      activityCompletionDate: '2024-05-31',
      activityName: 'Quiz',
      activityStartDate: '2024-05-21',
      pointsEarned: '50',
      rewardsEarned: '5',
    },
    {
      activityCompletionDate: '2024-05-31',
      activityName: 'Quiz',
      activityStartDate: '2024-05-21',
      pointsEarned: '50',
      rewardsEarned: '5',
    },
  ];

  items = [
    {
      id: 'one',
      target: '#one',
      activityCompletionDate: '2024-05-31',
      activityName: 'Quiz',
      activityStartDate: '2024-05-21',
      pointsEarned: '50',
      rewardsEarned: '5',      
    },
    {
      id: 'two',
      target: '#two',
      activityCompletionDate: '2024-05-31',
      activityName: 'Training',
      activityStartDate: '2024-05-21',
      pointsEarned: '50',
      rewardsEarned: '5',
    }
  ];

  
}
