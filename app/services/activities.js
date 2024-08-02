import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ActivitiesService extends Service {
  @tracked activities = [];

  setActivities(details) {
    this.activities = details.activities;
  }

  getActivities() {
    return this.activities;
  }
}