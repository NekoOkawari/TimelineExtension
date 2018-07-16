# Frequently Asked Question

## What do the permissions do?

*For the one person who wanted to know on reddit*

### Microsoft Account Permissions

|Scope|Reason|
|--|--|
|`UserActivity.ReadWrite.CreatedByApp`|Create, Update and view Windows Timeline activities generated by **this** extension.|
|`Device.Read`|Display a list of your devices.|
|`Device.Command`|Send commands to a device, used to open a URLs on devices you own.|
|`offline_access`|Allows the extension to generate and consume refresh tokens. Keeps you logged in.|

### Extension Permissions

|Permission|Reason|
|--|--|
|`identity`|Used for login and redirect urls.|
|`storage`|Store the access and refresh tokens. Also keeps track of any saved settings.|
|`tabs`|Get the current open tab so the extension knows what url to send to a device.|
|`notifications`|Show a notification when an error occurs.|

### Allowed Urls

- `https://graph.microsoft.com/v1.0/me/activities/*`: Publish, update and get activities.
- `https://graph.microsoft.com/beta/me/devices/*`: Get a list of your devices and send commands to a device.
- `https://ge-functions.azurewebsites.net/api/get-token`: Get access and refresh tokens from a auth code.
- `https://ge-functions.azurewebsites.net/api/refresh-token`: Refresh access tokens.