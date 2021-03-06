/**
 * A message type that can be sent in this extension
 */
export enum MessageType {
    /**
     * Push a timeline activity to the Microsoft Graph.
     */
    PublishActivity,

    /**
     * Start the 'push flow' which will send a url to another device and
     * open it on that device.
     */
    OpenOnRemoteDevice,

    /**
     * Tells the background thread to get a list of devices that the
     * users Microsoft account is logged into.
     */
    GetRemoteDevices,

    /**
     * Start the logout flow, disconnect the users Microsoft Account
     * and delete any cached tokens.
     */
    Logout,

    /**
     * Start the login flow allowing the user to connect their
     * Microsoft Account.
     */
    Login,

    /**
     * Something has gone wrong and we need to tell the user something.
     */
    Error,

    /**
     * Get a list of recent activities that this extension has created.
     */
    GetActivities,

    /**
     * When the foreground script passes through the auth callback string
     */
    AuthSubmit
}
