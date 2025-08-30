/**
 * in this file, read all json file that are APIs.
 * APISenders use this file to access json files
 */

// Account
export const Account_login_post = JSON.parse(open('./Account/login_post.json'));

// order
export const Order_getAllSummary_post = JSON.parse(open('./Order/getAllSummary_post.json'));
export const Order_recNo_post = JSON.parse(open('./Order/recNo_get.json'));

// OrderRevision
export const OrderRevision__post = JSON.parse(open('./OrderRevision/_post.json'));

// UserSecuritySetupTemp
export const UserSecuritySetupTemp_AssignRights_put = JSON.parse(open('./UserSecuritySetupTemp/AssignRights_put.json'));

// MainMenuDevelopment
export const MainMenuDevelopment__post = JSON.parse(open('./MainMenuDevelopment/_post.json'));

// UserWorkstationSetting
export const UserWorkstationSettingsUpsert_post = JSON.parse(open('./UserWorkstationSetting/UserWorkstationSettingsUpsert_post.json'));