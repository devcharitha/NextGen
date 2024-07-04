import Controller from '@ember/controller';
import { action } from '@ember/object';

export default Controller.extend({
  accountValue: '',
  premiseValue: '',
  isPremiseDisabled: true,

  actions: {
    updatePremiseEnabled() {
      this.set('isPremiseDisabled', this.accountValue === '');
    },
  },
});
