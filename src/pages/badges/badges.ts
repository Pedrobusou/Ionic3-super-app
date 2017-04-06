import { Component } from '@angular/core';
import { Badge } from '@ionic-native/badge';

@Component({
  selector: 'page-badges',
  templateUrl: 'badges.html'
})

export class BadgesPage {
  badgeNumber: number;

  constructor(private badge: Badge) { }

  async requestPermission() {
    try {
      let hasPermission = await this.badge.hasPermission();
      console.log(hasPermission);
      if (!hasPermission) {
        let permission = await this.badge.registerPermission();
        console.log(permission);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async setBadges(badgeNumber: number) {
    try {
      let badges = await this.badge.set(badgeNumber);
      console.log(badges);
    } catch (e) {
      console.error(e);
    }
  }

  async getBadges() {
    try {
      let badgeAmount = await this.badge.get();
      console.log(badgeAmount);
    } catch (e) {
      console.error(e);
    }
  }

  async increaseBadges(badgeNumber: number) {
    try {
      let badge = await this.badge.increase(Number(badgeNumber));
      console.log(badge);
    } catch (e) {
      console.error(e);
    }
  }

  async decreaseBadges(badgeNumber: number) {
    try {
      let badge = await this.badge.decrease(Number(badgeNumber));
      console.log(badge);
    } catch (e) {
      console.error(e);
    }
  }

  async clearBadges() {
    try {
      let badge = await this.badge.clear();
      console.log(badge);
    } catch (e) {
      console.error(e);
    }
  }
}