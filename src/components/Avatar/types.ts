import {Override} from '../../shared/override';
import React from 'react';

export type User = {
  /**
   * Username to use as fallback if the avatar is not provided and the Firstname and Lastname are empty.
   */
  username: string;

  /**
   * Firstname to use as fallback with the Lastname if the avatar is not provided.
   */
  firstName: string;

  /**
   * Lastname to use as fallback with the Firstname if the avatar is not provided.
   */
  lastName: string;

  /**
   * Url of the avatar image.
   */
  avatarUrl?: string;
};

export type AvatarProps = Override<
  React.HTMLAttributes<HTMLSpanElement>,
  User & {
    /**
     * Size of the avatar.
     */
    size?: 'default' | 'big';

    /**
     * Is user disabled
     */
    disabled?: boolean;

    /**
     * Is user selected
     */
    selected?: boolean;
  }
>;

export type AvatarContainerProps = Override<
  React.HTMLAttributes<HTMLSpanElement>,
  {
    /**
     * Size of the avatar.
     */
    size?: 'default' | 'big';

    /**
     * Is user selected
     */
    selected?: boolean;
  }
>;
