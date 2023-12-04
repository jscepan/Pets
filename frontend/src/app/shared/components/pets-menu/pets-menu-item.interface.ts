export interface PetsMenuItemI {
  key: string;
  displayName?: string;
  hasTopSeparator?: boolean;
  subMenuItems?: PetsMenuItemI[];
  icon?: string;
  avatarUrl?: string;
  initials?: string;
  showIconAndText?: boolean;
}
