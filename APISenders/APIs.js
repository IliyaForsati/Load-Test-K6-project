/**
 * all apisenders export here and in main files like loadtest.js use this file to 
 * access api senders.
 * like  APIs.Order.getAllSummary_post_req()
 */

// Account
export * as Account from './AccountAPIs.js';

// Order
export * as Order from './OrderAPIs.js';

// OrderRevision
export * as OrderRevision from './OrderRevisionAPIs.js';

// UserSecuritySetupTemp
export * as UserSecuritySetupTemp from './UserSecuritySetupTempAPIs.js';

// MainMenuDevelopment
export * as MainMenuDevelopment from './MainMenuDevelopmentAPIs.js';

// UserWorkstationSetting
export * as UserWorkstationSetting from './UserWorkstationSettingAPIs.js';